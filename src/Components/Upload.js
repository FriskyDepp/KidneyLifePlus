import React, { useState, useRef } from 'react';
import './Upload.css';
import Cloud from '../Assets/cloud-computing (1).png';
import FilesPic from '../Assets/document.png';
import Cancel from '../Assets/cross-button 1.png';
import Back from '../Assets/left-arrow (1).png';
import retina from '../Assets/retina.png';
import { useNavigate } from 'react-router-dom';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { storage } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../config/firebase';

function Upload() {
  const [imageUpload, setImageUpload] = useState();
  const [fileName, setFileName] = useState('No selected file');
  const [previewURL, setPreviewURL] = useState(null);

  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const backService = () => {
    navigate('/Service');
  };

  const uploadFile = () => {
    if (!imageUpload) return;

    const imageRef = ref(storage, `upload${imageUpload.name}`);

    uploadBytes(imageRef, imageUpload)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            setImageUpload(url);
            const data = {
              imageUrl: url,
              timestamp: serverTimestamp(),
              status: true,
            };

            addDoc(collection(db, 'users'), data)
              .then((docRef) => {
                console.log('Document written with ID: ', docRef.id);
              })
              .catch((error) => {
                console.error('Error adding document: ', error);
              });
          });
      });
  };

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImageUpload(file);
    setFileName(file.name);

    // Create a URL for preview and set it in the state
    const previewURL = URL.createObjectURL(file);
    setPreviewURL(previewURL);
  };

  return (
    <main>
      <span className='topic-up'>UPLOAD</span>
      <button onClick={backService} className='back-button'>
        <img className='back' src={Back} alt='Back' />
      </button>
      <form action='' onClick={handleFileClick}>
        <input
          type='file'
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        {previewURL ? (
          <img src={previewURL} width={200} height={200} alt='Preview' />
        ) : (
          <center>
            <label className='click-area'>
              <img className='cloud-pic' src={Cloud} alt='Cloud' />
              คลิก เพื่ออัปโหลดไฟล์
            </label>
          </center>
        )}
      </form>

      <div className='right-container'>
        <div className='suggestion'>
          <span>ภาพที่ใช้ในการคัดกรองต้องเป็น</span>
          <span>ภาพจากเรตินาในดวงตา</span>
          <span>เท่านั้น</span>
          <img className='retina-pic' src={retina} alt='Retina' />
        </div>
        <div className='file-uploaded'>
          <span>File uploaded</span>
        </div>
        <section className='uploaded-file'>
          <img className='file-upload' src={FilesPic} alt='File' />
          <span>
            {fileName}
            <img
              className='cancel-upload'
              onClick={() => {
                setFileName('No selected file');
                setImageUpload(null);
                setPreviewURL(null);
              }}
              src={Cancel}
              alt='Cancel'
            />
          </span>
        </section>
        <button className='confirm-button' onClick={uploadFile}>
          ยืนยัน
        </button>
      </div>
    </main>
  );
}

export default Upload;
