import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
const Dashboard = ({regdata}) => {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <Header/>
      <nav>
        <ul>
            <li>
                Welcome {regdata.email}
            </li>
            <li>
                <Link to="/logout">Logout</Link>
            </li>
        </ul>
      </nav>
      <Footer/>
    </div>
  )
}

export default Dashboard
