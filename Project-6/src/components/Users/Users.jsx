import React from 'react'
import { useParams } from 'react-router-dom'

const Users = () => {
    const {userid} = useParams()
  return (
    <div className=' text-center bg-gray-700 text-white p-4'>
      Users: {userid}
    </div>
  )
}

export default Users
