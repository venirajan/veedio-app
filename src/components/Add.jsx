import React,{useState} from "react";
import { Modal,Button,Form } from "react-bootstrap";
import { uploadVideo } from "../services/allAPI";
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add({setServerResponse}) {
  const [video,setVideo]=useState({
    id:"",caption:"",url:"",embedLink:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getEmbedLink = (e)=>{
    const {value} = e.target
    if(value){
    const link = `https://www.youtube.com/embed/${value.slice(-11)}`
    setVideo({...video,embedLink:link})
    }else {
      setVideo({...video,embedLink:""})
    }
  }

  const handleUpload = async()=>{
    const {id,caption,url,embedLink}=video
    console.log(video);
    if(!id || !caption || !url || !embedLink){
      toast.warning("please fill the form completely")
    }else{
      // make api call upload video
  const response = await uploadVideo(video)
  if(response.status >=200 && response.status<300){
    // set msg
    toast.success(`'${response.data.caption}' video upload successfully`)
    // server response 
    setServerResponse(response.data)
    // reset video
    setVideo({
      id:"",caption:"",url:"",embedLink:""
    })
    // hide modal
    handleClose()
  }else{
   console.log(response);
    toast.error("cannot perform the operation now . please try after sometime...")
  }
    }
  }
   console.log(video);
 
  

  return (
    <>
      <div className="d-flex">
        <h5>Upload  new video</h5>
        <button onClick={handleShow} className='btn'><i class="fa-solid fa-circle-plus fs-5"></i></button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload a video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>please fill the following details</p>
          <Form className="border border-secondary rounded p-3">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter video id" onChange={(e)=>setVideo({...video,id:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter video caption" onChange={(e)=>setVideo({...video,caption:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter video image URL" onChange={(e)=>setVideo({...video,url:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter a youtube video link" onChange={getEmbedLink} />
      </Form.Group>
      
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="btn btn-info">Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer 
       position='top-center'
       theme='colored'
       autoClose={2000}
       />
      
    </>
  )
}

export default Add