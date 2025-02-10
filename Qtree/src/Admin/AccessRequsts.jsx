import React from 'react'
import Navbar from '../Navbar'

const AccessRequsts = () => {
  return (
    <div>
      <Navbar />
    <div className='students-list'>
    <table className='student-table'>
        <thead>
        <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Mail id</th>
            <th>date of Requst</th>
            <th>grant access</th>
            <th>deny access</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>staff</td>
                <td>kishore</td>
                <td>kishore@gmail.com</td>
                <td>2-3-25</td>
                <td><button>accecpt</button></td>
                <td><button>remove</button></td>
            </tr>
        </tbody>
    </table>

    </div>
    </div>
  )
}

export default AccessRequsts