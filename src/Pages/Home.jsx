import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Add from '../components/Add';
import View from '../components/View';
import Category from '../components/Category';
function Home() {
  const [serverResponse,setServerResponse] = useState("")
  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">

        <Add  setServerResponse={setServerResponse} />
      
      <Link to={'/watchhistory'} className='fs-5' style={{textDecoration:"none",color:"white"}}>Watch History</Link>

    </div>

    <div className="container-fluid w-100 mt-5 mb-5 d-flex justify-content-between ">
      <div className="all-videos col-lg-9">
        <h3>All Videos</h3>
       <View serverResponse = {serverResponse}/>
      </div>
     <div className="category col-lg-2">
      <Category/>
     </div>
    </div>
    </>
  )
}

export default Home