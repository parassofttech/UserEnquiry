import { Button, Label, Textarea, TextInput } from 'flowbite-react'

import React, { useEffect, useState } from 'react'
import EnquiryList from './enquiry/EnquiryList';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2/dist/sweetalert2.js'

const Enquiry = () => {

  const [enquiryList,setEenquiryList] = useState([])
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    phone:'',
    message:'',
    _id:''
  })

  const saveEnquiry =(e)=>{

    e.preventDefault()

    // let formData ={
    //   name:e.target.name.value,
    //   email:e.target.email.value,
    //   phone:e.target.phone.value,
    //   message:e.target.message.value,
    // }
    
     if(formData._id){
          
         axios.put(`http://localhost:8020/api/enquiry/update/${formData._id}`,formData).then((res)=>{
       
        toast.success("enquiry update successfully")
        setFormData({
          name:'',
          email:'',
          phone:'',
          message:'',
          _id:''
        })
        getEnquiry()
    })

     }else{
       axios.post(`http://localhost:8020/api/enquiry/insert`,formData).then((res)=>{
        console.log(res.data)
        toast.success("enquiry saved successfully")
        setFormData({
          name:'',
          email:'',
          phone:'',
          message:''
        })
        getEnquiry()
    })
     }

    
  }

  let getEnquiry =()=>{  
    axios.get(`http://localhost:8020/api/enquiry/view`).then((res)=>{
      return res.data
    }).then((finalData)=>{
        setEenquiryList(finalData.enquiryList)
    })
  }

  let getValue=(e)=>{

    let inputName =  e.target.name //name,email,phone,message
    let inputValue = e.target.value

    let oldData = {...formData}
   
    oldData[inputName] =inputValue;
    setFormData(oldData)

  }

  useEffect( ()=>{
    getEnquiry()
  },[])
  return (
     <div className='flex flex-col bg-neon/56 text-white '>
      <ToastContainer/>
      <h1 className='font-extrabold italic text-[40px] text-center py-6 text-darkbg'>User Enquiry</h1>
      <div className='flex flex-col items-center  '>
        <div className='bg-darkbg/90 p-4 flex flex-col md:w-[50%] rounded-2xl '>
        <h2 className='text-3xl italic font-bold text-neon text-center'>Enquiry Form</h2>
        <form action="" onSubmit={saveEnquiry}>
          <div className='py-3 font-bold border-hidden'>
            <Label className='text-start font-bold' htmlFor='name' value='Your Name'/>Your Name
            
            <input type='text'onChange={getValue} value={formData.name} name='name' className=' bg-gray-700 border-hidden mt-2  font-normal w-full p-2 rounded' placeholder='enter your name' required />
          </div>

           <div className='py-3 font-bold'>
            <Label className='text-start font-extrabold' htmlFor='email' value='Your Email'/>Your Email
            
            <input type='text' value={formData.email} onChange={getValue} name='email' className=' bg-gray-700 mt-2 font-normal w-full p-2 rounded ' placeholder='enter your email' required />
          </div>

           <div className='py-3 font-bold' >
            <Label className='text-start' htmlFor='phone' value='Your Phone'/>Your Phone
            
            <input type='text' value={formData.phone} onChange={getValue} name='phone' className='bg-gray-700 mt-2 font-normal w-full p-2 rounded ' placeholder='enter your phone no.' required />
          </div>

          <div className='py-3 font-bold' >
            <Label className='text-start' htmlFor='message' value='Your Message'/>Your Message
            
            <textarea placeholder="message" value={formData.message} onChange={getValue} name='message'required rows={4}
            className='bg-gray-700 mt-2 font-normal w-full p-2 rounded '></textarea>
           </div>
           <div>
            <Button type='submit' className='bg-blue-600 p-2 w-full font-bold flex justify-center items-center rounded-2xl my-6'>
              {
                formData._id ?"Update": "Save"
              }
            </Button>
           </div>
           
        </form>
      </div>

       <EnquiryList data={enquiryList} getEnquiry={getEnquiry} Swal={Swal} setFormData={setFormData} />
          
      </div>
     </div>
  )
}

export default Enquiry
