import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    // data can be fetched using API but below method is optimized approacha s when you hover on that component i.e Github, the data is fetched from API (it reduces the loading time)
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/anandapurva')
    //     .then(response => response.json())
    //     .then((result) => {
    //         console.log(result)
    //         setData(result)
    //     })
    // }, [])

    const data = useLoaderData()

  return (
    <div className='flex  items-center mx-auto w-full max-w-7xl bg-gray-100'>
        <img src={data.avatar_url} alt="my photo" className='w-64 m-4 p-4 ' />
      <div>
      <div>GitHub Username:-- {data.login}</div>
      <div>Fullname:-- {data.name}</div>
      <div>Profile:-- {data.company}</div>
      <div>Created On:-- {(data.created_at).slice(0,10)}</div>
      <div>No. of Public Repos:-- {data.public_repos}</div>

      </div>
    </div>
  )
}

export default Github

// Another approach for fetching data using loader, optimized approach

export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/anandapurva')
    return response.json()
}

