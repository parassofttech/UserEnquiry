import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react"
import axios from 'axios'
import { toast } from 'react-toastify'

const EnquiryList = ({data,getEnquiry,Swal,setFormData}) => {

  const deleteRow=(delId)=>{

      Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
  

    axios.delete(`https://user-enquiry-apii.vercel.app/api/enquiry/delete/${delId}`).then((res)=>{
        toast.success("Enquiry deleted Successfully")
        getEnquiry()
       })

    
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});


       
  }

  let editRow=(editId)=>{
    axios.get(`https://user-enquiry-apii.vercel.app/api/enquiry/single/${editId}`).then((res)=>{
      let data =res.data
      setFormData(data.enquiry)
    })

  }
  return (
    <div className='sm:w-[90%] w-[98%] mt-10 bg-blue-900 '>
      <h2 className='text-3xl italic m-4 font-bold  text-center'>Enquiry List</h2>

       <table className='text-[10px] sm:text-[18px] md:text-[20px] w-full sm:w-[97%] lg:text-[24px] md:ml-[2vh]' >
        <tr className=' bg-gray-600  ml-10'>
          <th className='text-start'>Sr. No.</th>
          <th className='text-start'>Name</th>
          <th className='text-start'>Email</th>
          <th className='text-start'>Phone</th>
          <th className='text-start'>Message</th>
          <th className='text-start'>Delete</th>
          <th className='text-start'>Edit</th>

        </tr>
        
         
         <tbody>
          {
            data.length >=1  ?
            data.map((item,index)=>{
              return (
                <tr className='bg-darkbg/70'>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.message}</td>
                  <td>
                     <button onClick={()=>deleteRow(item._id)}className='text-red-500 hover:underline'>Delete</button>
                  </td>
                  <td>
                    <button  onClick={()=>editRow(item._id)} className='text-blue-500 hover:underline'>Edit</button>
                  </td>
                </tr>
              )
          }):
         
          <div className='mt-5 flex justify-center items-center '>
            <h1 className='text-white '>Data Not Found</h1>
          </div>
        
         }
         </tbody>
        
      </table>
     

       

        <div className='h-50'>

        </div>
       </div>
  )
}

export default EnquiryList
