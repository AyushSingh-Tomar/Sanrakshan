import './CheckList.css'
import axios from "axios";
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import {checkList} from '../../assets/assets'
const CheckList = () => {
  const [file,setFile]=useState(null);
  const [progress,setProgress]=useState({started:false,pc:0});
  const [msg,setMsg]=useState({started:false,pc:0});
 function handleUpload(){
  if(!file)
  {
   setMsg("No File chosen !");
    return;
  }
  const fd=new FormData();
  fd.append('file',file)
  setMsg("Uploading...");
  axios.post('https://httpbin.org/post',fd,{
    onUploadProgress:(progressEvent)=>{
       setProgress(prevState=>{
        return {...prevState, pc: progressEvent.progress*100}
       })
      },
      headers:{
       "Custom-Header":"value",
    }
  })
  .then(res=> {
    setMsg("Upload Successful");
    setProgress(prevState=>{
      return {...prevState, started:true}
    })
    console.log(res.data);})
  .catch(err=> {
    setMsg("Upload failed");
    alert(err)});
 }
  return (
    <div className='req-docs' id='req-docs'>
      <h1>List of Required Documents</h1>
      <p className='explore-documents-text'>Kindly ensure that you upload these important documents</p>
      <div className="explore-documents">
        {checkList.map((item,index)=>{
          return(<div key={index}className="listitem">
                <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Important for Id verification</Card.Subtitle>
        <Card.Text>
          {item.Description}
        </Card.Text>
       < input onChange={(e)=>{e.target.files[0]}} type='file'/>
        <button onClick={handleUpload}>Upload</button>
        {
          progress.started && <progress max="100" value={progress.pc}> </progress>
        }
        {
          
          
        }
      </Card.Body>
    </Card>
          </div>

          )
        })}
      </div>
    </div>
  )
}

export {CheckList}