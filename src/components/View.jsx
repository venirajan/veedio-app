import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allAPI'


function View({serverResponse}) {
  const [allVideo,setAllVideo] = useState([])
  const [deleteStatus,setDeleteStatus] = useState(false)
  const getAllUploadVideos = async ()=>{
    // make api call get all video
    const {data} = await getAllVideos()
    setAllVideo(data);
  }
  useEffect(()=>{
    
    getAllUploadVideos()
    setDeleteStatus(false)
  },[serverResponse,deleteStatus])
  //  console.log(allVideo);
     
  return (
    <>
    <Row>
      {
        allVideo.length>0?
        allVideo.map(video=>(
      <Col sm={12} md={6} lg={4} xl={3}>
       <VideoCard displayData={video} setDeleteStatus={setDeleteStatus} />
       </Col>
        ))
       :
       <p className='fw-bolder fs-5 text-danger'>Nothing to display!!</p>
      }
      </Row>
    </>
  )
}

export default View