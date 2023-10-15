
import React from 'react'
import { Row,Col,Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPages() {
  const navigateByUrl = useNavigate()
  return (
    <>
    <Row className='mt-5 mb-5 align-items-center justify-content-center w-100'>
      <Col></Col>
     <Col lg={4}> 
     <h3>Welcome to <span className='text-warning '>Media player</span></h3>
     <p style={{textAlign:'justify'}}>
     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
     </p>
      <button onClick={()=>navigateByUrl('/home')} className='mt-5 btn btn-info'>Get Started <i className="fa-solid fa-arrow-right fa-beat m-2"></i></button></Col>
     <Col></Col>
     <Col lg={5}>
     <img className='img-fluid' src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="landing" />
     </Col>
    </Row>
    <div className="container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column">
      <h3 className=''>Features</h3>
      <div className="cards mt-5  mb-5 d-flex align-items-center justify-content-between w-100">
      <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://media.giphy.com/media/149mbArhpEpry0/giphy.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/53/97/7e/53977ec36a46d13a45ceeb5974b3d117.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://media.giphy.com/media/1bG7bbKHn8Rtm5FOdO/giphy.gif" />
      <Card.Body>
        <Card.Title>Categories Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>

    <div className="container border rounded p-5 border-secondary mt-5 b-5 d-flex align-items-center justify-content-between w-100 " >
      <div className="content">
        <h3 className='mb-5 text-warning'>Simple Fast and Powerful</h3>
        <h6 className='mb-3'><span className='fs-5 fw-bolder'>Play Everything</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis distinctio obcaecati sit exercitationem esse nihil adipisci qui optio, et omnis quod consequatur ab ipsam animi, pariatur reprehenderit. Earum, blanditiis ducimus.</h6>

        <h6 className='mb-3'><span className='fs-5 fw-bolder'>Categorie Videos</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis distinctio obcaecati sit exercitationem esse nihil adipisci qui optio, et omnis quod consequatur ab ipsam animi, pariatur reprehenderit. Earum, blanditiis ducimus.</h6>

        <h6 className='mb-3'><span className='fs-5 fw-bolder'>Managing History</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis distinctio obcaecati sit exercitationem esse nihil adipisci qui optio, et omnis quod consequatur ab ipsam animi, pariatur reprehenderit. Earum, blanditiis ducimus.</h6>
      </div>
      <div className="video col-lg-6">
      <iframe width="100%" height="387" src="https://www.youtube.com/embed/gB2zKZxESTg" title="JAILER - Hukum Video Song | Superstar Rajinikanth | Sun Pictures | Anirudh | Nelson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
    </>
  )
}

export default LandingPages