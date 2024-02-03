import React, { useEffect, useRef, useState } from 'react'
import './ScanTest.css'
import Back from '../Assets/left-arrow (1).png'
import PhoIcon from '../Assets/PhotoICon.png'
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase'; 



const ScanTest = () => {
    
    const videoRef = useRef(null);
    const photoRef = useRef(null);
    const navigate = useNavigate();
    const [hasPhoto, setHasPhoto] = useState(false);

    
    
    
    const goresult = () => {
        navigate('/result')
    };

    const uploadPhotoToFirestore = async (photoDataUrl) => {
        try {
          const docRef = await addDoc(collection(db, 'photos'), {
            photoDataUrl,
            timestamp: new Date(),
            status: true,
          });
      
          console.log('Photo uploaded with ID: ', docRef.id);
        } catch (error) {
          console.error('Error uploading photo: ', error);
        }
      };

    const getVideo = () => {
        navigator.mediaDevices
        .getUserMedia({ video: { width: 1920, height: 1080 }
        })
        .then(stream => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
        })
        .catch(err => {
            console.error(err);
        })
    }
    const takePhoto = () => {
        const width = 414;
        const height = width / (16 / 9);
      
        let video = videoRef.current;
        let photo = photoRef.current;
      
        photo.width = width;
        photo.height = height;
      
        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0, width, height);
      
        // Convert the canvas content to a data URL
        const photoDataUrl = photo.toDataURL('image/jpeg');
      
        setHasPhoto(true);
      
        // Upload the photo to Firestore
        uploadPhotoToFirestore(photoDataUrl);
        goresult();
        
      };
      

    const closePhoto = () => {
        let photo = photoRef.current;
        let ctx = photo.getContext('2d');

        ctx.clearRect(0, 0, photo.width, photo.height);

        setHasPhoto(false);
    }

    

   const goService = () => {
        navigate("/Service")
   }

    useEffect(() => {
        getVideo();

    },[videoRef]);

  return (
    <div className='scan-test-retina'>
        <div className='topic-scan'>
            <span>SCAN RETINA</span>
            <span>ขยับตาให้อยู่ในพื้นที่ของวงกลม</span>
        </div>
        <button onClick={goService} className='back-butt'>
            <img className='back' src={Back}/>
        </button>
        <div className='camera-test'>
            <video ref={videoRef}></video>
            <button className='sn-button' onClick={takePhoto}>
                <img src={PhoIcon}/>
            </button>
        </div>

        <div className={'resulttest ' + (hasPhoto ? 'hasPhoto':'')}>
            <canvas ref={photoRef}></canvas>
            <button className='cl-button' onClick={closePhoto}>Close</button>
        </div>
    </div>
  )
}

export default ScanTest;