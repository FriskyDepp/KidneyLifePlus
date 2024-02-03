import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Form.css'

// Import your images
import image1 from "../Assets/resize-q1.jpg";
import image2 from "../Assets/resize-q2.png";
import image3 from "../Assets/q3.png"
import image4 from "../Assets/resize-q4.png";
import image5 from "../Assets/clipart1047898.png";
import image6 from "../Assets/resize-q6.jpg";
import image7 from "../Assets/resize-q7.jpg";
import image8 from "../Assets/q8.png"
import image9 from "../Assets/resize-q8.jpg";
import image10 from "../Assets/q10.png"

// Add more images as needed

function Forms() {
  const [points, setPoints] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [currentImage, setCurrentImage] = useState(null); // State to hold the current image source
  const navigate = useNavigate();

  const questions = [
    "คุณมีอายุตั้งแต่ 35 ปีขึ้นไปหรือไม่",
    "ป้อนส่วนสูงและน้ำหนักของคุณเพื่อหาค่าดัชนีมวลกาย (BMI)",
    "คุณมีโรคประจำตัวหรือไม่",
    "คุณมีคนในครอบครัวมีประวัติเป็นโรคไตและเบาหวานหรือไม่",
    "คุณสูบบุหรี่เป็นประจำทุกวัน",
    "ช่วงที่ผ่านมา การปัสสาวะของคุณมีความผิดปกติ เช่น ปัสสาวะบ่อยขึ้น มีฟองมาก และมีเลือดเจือปน หรือไม่",
    "คุณปวดหลังหรือบั้นเอวข้างใดข้างหนึ่งหรือไม่",
    "คุณมีอาการบวมตามจุดต่าง ๆ ของร่างกาย เช่น หน้าบวม ตาบวม หรือเท้าบวม หรือไม่",
    "คุณรับประทานยาเพื่อบรรเทาอาการเองโดยไม่ได้รับคำปรึกษาจากแพทย์ผู้เชี่ยวชาญหรือไม่",
    "คุณรับประทานอาหารรสจัดหรือไม่",
  ];

  // Define an array of image sources corresponding to each question
  const questionImages = [
    image1, // No image for the first question
    image2, // Image for the second question
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    null, // No image for the third question
    // Add more image sources as needed
  ];

  useEffect(() => {
    if (currentQuestion === questions.length + 1) {
      // All questions have been answered
    }
  }, [currentQuestion, questions.length]);

  // Function to set the current image based on the question index
  const setCurrentQuestionImage = (index) => {
    setCurrentImage(questionImages[index]);
  };

  useEffect(() => {
    setCurrentQuestionImage(currentQuestion - 1); // Set the image when the question changes
  }, [currentQuestion]);

  const handleYesClick = () => {
    setPoints(points + 1);
    moveToNextQuestion();
  };

  const handleNoClick = () => {
    moveToNextQuestion();
  };

  const handleCalculateBMI = () => {
    if (!height || !weight) {
      // Display an alert if height or weight is empty
      alert("กรุณากรอกข้อมูลด้วยค่ะ");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue);
    if (bmiValue > 23) {
      setPoints(points + 1);
    }
    moveToNextQuestion();
  };

  const moveToNextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentQuestion === questions.length) {
      // Move to the risk assessment step
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const renderCurrentQuestion = () => {
    if (currentQuestion <= questions.length) {
      return (
        <div className="forms">
          <h1 
          style={{fontFamily: "Kanit, sans-serif",
          fontSize: "52px"
          }}>Question{currentQuestion}</h1>
          {currentImage && (
            <img
              src={currentImage}
              alt={`Image for question ${currentQuestion}`}
              style={{ maxWidth: "30%", height: "auto" }} // Resize the image
            />
          )}
          <h2
            style={{
              fontSize: "40px", // Adjust the font size
              fontWeight: "bold", // Make the font bold
              fontFamily: "Kanit, sans-serif",
              color: "black", // Change the font color
              marginBottom: "20px", // Add margin to separate from the image
            }}
          >
            {questions[currentQuestion - 1]}
          </h2>
          {currentQuestion === 2 && (
           <div className="input-bmi">
              <input
                type="number"
                placeholder="  Enter height (cm)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
              <input
                type="number"
                placeholder="  Enter weight (kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
              <button
                onClick={handleCalculateBMI}
                style={{
                  backgroundColor: "green", // Change the button color
                  border: "none",
                  height: "4vh",
                  color: "white", // Change the text color
                  fontSize: "18px", // Adjust the font size
                  fontFamily: "Lato, san-serif",
                  borderRadius: "5px", // Add rounded corners
                }}
              >
                SUBMIT
              </button>
              <p>BMI: {bmi}</p>
            </div>
          )}
          {currentQuestion !== 2 && (
            <div>
              <button
                onClick={handleYesClick}
                style={{
                  backgroundColor: "green", // Change the button color
                  border: "none",
                  borderRadius: "3vh",
                  width: "15vh",
                  height: "6vh",
                  fontFamily: "Lato, sans-serif",
                  color: "white", // Change the text color
                  fontSize: "18px", // Adjust the font size
                  marginRight: "10px", // Add margin to separate buttons
                  borderRadius: "5px", // Add rounded corners
                }}
              >
                YES
              </button>
              <button
                onClick={handleNoClick}
                style={{
                  backgroundColor: "red", // Change the button color
                  border: "none",
                  borderRadius: "50px",
                  width: "15vh",
                  height: "6vh",
                  fontFamily: "Lato, sans-serif",
                  color: "white", // Change the text color
                  fontSize: "18px", // Adjust the font size
                  borderRadius: "5px", // Add rounded corners
                }}
              >
                NO
              </button>
            </div>
          )}
        </div>
      );
    } else if (currentQuestion === questions.length + 1) {
      return renderRiskAssessment();
    } else {
      return (
        <div className="forms">
          <h1>End of questions</h1>
          <button
            onClick={moveToNextQuestion}
            style={{
              backgroundColor: "blue", // Change the button color
              color: "white", // Change the text color
              fontSize: "18px", // Adjust the font size
              borderRadius: "5px", // Add rounded corners
            }}
          >
            Continue to Risk Assessment
          </button>
        </div>
      );
    }
  };

  const renderRiskAssessment = () => {
    if (points >= 7) {
      return (
        <div className="risk-assessment">
          <h2>คุณมีความเสี่ยงที่จะเป็นโรคไตวายเรื้อรังสูงมาก</h2>
          <p>ควรพบแพทย์โดยด่วน</p>
          <button
            onClick={() => navigate("/upload")}
            style={{
              backgroundColor: "green", // Change the button color
              color: "white", // Change the text color
              fontSize: "18px", // Adjust the font size
              borderRadius: "5px", // Add rounded corners
            }}
          >
            Continue to Upload
          </button>
        </div>
      );
    } else if (points >= 4) {
      return (
        <div className="risk-assessment">
          <h2>คุณมีความเสี่ยงที่จะเป็นโรคไตวายเรื้อรังปานกลาง</h2>
          <button
            onClick={() => navigate("/upload")}
            style={{
              backgroundColor: "yellow", // Change the button color
              color: "black", // Change the text color
              fontSize: "18px", // Adjust the font size
              borderRadius: "5px", // Add rounded corners
            }}
          >
            Continue to Upload
          </button>
        </div>
      );
    } else {
      return (
        <div className="risk-assessment">
          <h2>คุณมีความเสี่ยงในการเป็นโรคไตวายเรื้อรังต่ำ</h2>
          <button
            onClick={() => navigate("/upload")}
            style={{
              backgroundColor: "blue", // Change the button color
              color: "white", // Change the text color
              fontSize: "18px", // Adjust the font size
              borderRadius: "5px", // Add rounded corners
            }}
          >
            Continue to Upload
          </button>
        </div>
      );
    }
  };

  return <div>{renderCurrentQuestion()}</div>;
}

export default Forms;
