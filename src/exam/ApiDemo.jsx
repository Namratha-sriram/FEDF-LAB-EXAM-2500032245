import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'

export default function ApiDemo() 
{
   const [data,setData]=useState([])
   const [error,setError]=useState("")

   const displayData= async ()=>{
    try {
       const response = await axios.get("https://dummy-json.mock.beeceptor.com/posts")
       setData(response.data)
    } catch (error) {
       setError(error.message) 
    }
   }

    useEffect(() => {
        displayData()
    }, []);

  return (
    <div>

    <h2><u>Axios Data</u></h2>

    {
        error ? <b>{error}</b> : 
        data.length == 0 ?

        <b>NO DATA FOUND!</b> :

        <table border={1}>

        <tr>
             <th>ID</th>
             <th>Title</th>
             <th>Body</th>
             <th>Link</th>
             <th>Comment Count</th>
        </tr>

        { 
            data.map((post,index) => (
            <tr key={index}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>{post.link}</td>
                <td>{post.comment_count}</td>
            </tr>
            ))
        }

        </table>
    }

    </div>
  )
}