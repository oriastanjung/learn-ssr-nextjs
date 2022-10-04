/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Layout from "../../components/Layout"
import {useRouter} from "next/router" 
function users(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [users, setUsers] = useState([]);

  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/users/${id}`)
  }
  // fetching using useEffect
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    async function fetchData(){
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(res.data);
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  },[])
  return (
    <Layout title={'Users'}>
        {
          users.map((item, idx) => {
            return (
              <div onClick={() => handleClick(item.id)} key={item.id} style={{cursor : "pointer", display : "flex", gap : "1rem"}}>
                <p>{idx+1}</p>
                <p>{item.name}</p>
                <p>{item.email}</p>
              </div>
            )
          })
        }
    </Layout>
  )
}

export default users