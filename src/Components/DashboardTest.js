import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row, Table, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BookDataService from "./DashboardService";
import Circle from '../Assets/circle-pro.png';
import Percent from '../Assets/percent.png';
import His1 from '../Assets/history1.png';
import His2 from '../Assets/history2.png';
import His3 from '../Assets/history3.png';
import './DashboardTest.css';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function mapLabelClassToNumeric(labelClass) {
  switch (labelClass) {
    case 'Normal':
      return 0;
    case 'Cataract':
      return 1;
    case 'Glaucoma':
      return 2;
    case 'moderateNPDR':
      return 3;
    case 'severeNPDR':
    case 'PDR':
      return 4;
    case 'verysevereNPDR':
      return 5;
    default:
      return -1; // Return -1 for unknown or unsupported labelClass
  }
}

const Dashboard = ({ getBookId }) => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const latestBook = books.length > 0 ? books[0] : null;
  useEffect(() => {
    getAllBooks();
  }, []);

  const findHospital = () => {
    navigate("/Place");
  };

  const getAllBooks = async () => {
    try {
      const data = await BookDataService.getAllBooks();
      const bookList = data.docs.map((doc) => ({
        labelClass: doc.data().labelClass,
        list_data_value: parseFloat(doc.data().list_data_value * 100).toFixed(2),
        id: doc.id,
        imageUrl: doc.data().imageUrl,
        timestamp: new Date(doc.data().timestamp.toDate()).toLocaleString(),
      }));

      // Sort the bookList by the timestamp in descending order (latest first)
      bookList.sort((a, b) => (new Date(b.timestamp) - new Date(a.timestamp)));

      setBooks(bookList);
    } catch (error) {
      console.error("Error fetching books:", error);
    } 
  };
  

  
  const getGuide = (labelClass) => {
    switch (labelClass) {
      case 'Normal':
        return "คุณมีความเสี่ยงต่ำ";
      case 'Cataract':
        return "คุณมีความเสี่ยงในการเป็นโรคไตเรื้อรังระยะที่ 1";
      case 'Glaucoma':
        return "คุณมีความเสี่ยงในการเป็นโรคไตเรื้อรังระยะที่ 2";
      case 'moderateNPDR':
        return "คุณมีความเสี่ยงในการเป็นโรคไตเรื้อรังระยะที่ 3";
      case 'severeNPDR':
      case 'PDR':
        return "คุณมีความเสี่ยงในการเป็นโรคไตเรื้อรังระยะที่ 4";
      case 'verysevereNPDR':
        return "คุณมีความเสี่ยงในการเป็นโรคไตเรื้อรังระยะที่ 5";
      default:
        return "";
    }
  };

  const description = (labelClass) => {
    switch (labelClass) {
      case 'Normal':
        return "คุณมีความเสี่ยงต่ำ";
      case 'Cataract':
        return "ไตของคุณอยู่ในภาวะปกติแต่เริ่มมีความเสื่อมเกิดขึ้น รักษาด้วยการควบคุมอาหาร ออกกำลงกาย และรักษาโรคประจำตัว";
      case 'Glaucoma':
        return "ไตของคุณมีอาการเสื่อม รักษาด้วยการควบคุมอาหาร ออกกำลงกายตามคำแนะนำของแพทย์ และติดตามอาการอย่างต่อเนื่อง";
      case 'moderateNPDR':
        return "ไตของคุณมีอาการเสื่อมมากขึ้น การทำหน้าที่กรองของเสียลดลง รักษาด้วยการควบคุมอาหาร ออกกำลงกายตามคำแนะนำของแพทย์ ตรวจโปรตีนในปัสสาวะ และติดตามอาการอย่างต่อเนื่อง";
      case 'severeNPDR':
      case 'PDR':
        return "ไตของคุณเสื่อมมาก ควรรีบพบแพทย์เพื่อทำการรักษา แพทย์จะรักษาด้วยการควบคุมอาหาร ให้ออกกำลงกายตามคำแนะนำของแพทย์ ตรวจเลือดและปัสสาวะติดตามอาการทุก 3 หรือ 6 เดือน";
      case 'verysevereNPDR':
        return "ไตของคุณเกิดภาวะไตวาย ไตไม่สามารถทำงานได้ ต้องรักษาด้วยการฟอกเลือดเมื่อค่า GFR ต่ำกว่า 9, หรือทำการผ่าตัดเปลี่ยนถ่ายไต";
      default:
        return "";
    }
  };

  console.log(books.list_data_value)
  console.log(books);

  const highestClass = () => {
    if (books.length === 0) {
      return null;
    }

    let highest = -1; // Initialize with an invalid value
    let highestIndex = -1;

    books.forEach((book, index) => {
      const classNumericValue = mapLabelClassToNumeric(book.labelClass);
      if (classNumericValue > highest) {
        highest = classNumericValue;
        highestIndex = index;
      }
    });

    if (highestIndex !== -1) {
      return books[highestIndex];
    } else {
      return null;
    }
  };

  const highestClassBook = highestClass();

  const getColor = (value) => {
    if (value < 40) {
      return "#ff0000"; // Red color
    } else if (value < 70) {
      return "#ffA500"; // Orange color
    } else {
      return "#00ff00"; // Green color
    }
  };

  return (
    <Container className='dasboard-test' fluid>
      <h1 className='dash-topic'>DASHBOARD</h1>
      <center>
        <Col>
          <Row>
            <Col>
            <Col className='risk-container'>
                {highestClassBook && (
                  <div>
                    <h2>Highest Class:</h2>
                    <p>{getGuide(highestClassBook.labelClass)}</p>
                    <p>{description(highestClassBook.labelClass)}</p>
                    <img src={highestClassBook.imageUrl} alt="Highest Class Book Cover" width="100" />
                  </div>
                )}
          </Col>
          </Col>
          <Col>
              <Col className='suggest-container'>
                {highestClassBook && (
                  <div>
                    <p>{getGuide(highestClassBook.labelClass)}</p>
                    <p>{description(highestClassBook.labelClass)}</p>
                    <img src={highestClassBook.imageUrl} alt="Highest Class Book Cover" width="100" />
                  </div>
                )}
              </Col>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className='card-history'>
                <Card.Header>ประวัติการใช้งาน</Card.Header>
                <ListGroup>
                  <ListGroup.Item className='list-1'>
                    {books.length > 0 ? (
                      <div className="table">
                      <Table>
                        <thead>
                          <tr>
                            <th>No.</th>
                            <th>Value</th>
                            <th>Image</th>
                            <th>Time</th>
                          </tr>
                        </thead>
                        <tbody>
                          {books.map((book, index) => (
                            <tr key={book.id}>
                              <td>{index + 1}</td>
                              <td><CircularProgressbar value={book.list_data_value} text={`${book.list_data_value}%`} /></td>
                              <td>
                                <img src={book.imageUrl} alt="Book Cover" width="100" />
                              </td>
                              <td>{book.timestamp}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                      </div>
                    ) : (
                      <p>ยังไม่มีประวัติการใช้งาน</p>
                    )}
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
            <Col className='help-button'>
              <Col>
                <button onClick={findHospital} className='find-hos'>ค้นหาโรงพยาบาลใกล้เคียง</button>
              </Col>
              <Col>
                <button className='find-doc'>ดูตารางแพทย์</button>
              </Col>
            </Col>
          </Row>
        </Col>
      </center>
    </Container>
  );
};

export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { Table } from "react-bootstrap";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import BookDataService from "./DashboardService";

// function mapLabelClassToNumeric(labelClass) {
//   switch (labelClass) {
//     case 'Normal':
//       return 0;
//     case 'Cataract':
//       return 1;
//     case 'Glaucoma':
//       return 2;
//     case 'moderateNPDR':
//       return 3;
//     case 'severeNPDR':
//     case 'PDR':
//       return 4;
//     case 'verysevereNPDR':
//       return 5;
//     default:
//       return -1; // Return -1 for unknown or unsupported labelClass
//   }
// }

// const findHospital = () => {
//   navigate("/Place");
// };

// const Dashboard = ({ getBookId }) => {
//   const [books, setBooks] = useState([]);
//   const latestBook = books.length > 0 ? books[0] : null;
//   useEffect(() => {
//     getAllBooks();
//   }, []);

//   const getAllBooks = async () => {
//     try {
//       const data = await BookDataService.getAllBooks();
//       const bookList = data.docs.map((doc) => ({
//         labelClass: doc.data().labelClass,
//         list_data_value: parseFloat(doc.data().list_data_value * 100).toFixed(2),
//         id: doc.id,
//         imageUrl: doc.data().imageUrl,
//         timestamp: new Date(doc.data().timestamp.toDate()).toLocaleString(),
//       }));

//       // Sort the bookList by the timestamp in descending order (latest first)
//       bookList.sort((a, b) => (new Date(b.timestamp) - new Date(a.timestamp)));

//       setBooks(bookList);
//     } catch (error) {
//       console.error("Error fetching books:", error);
//     }
//   };
  
  
//   const getGuide = (labelClass) => {
//     switch (labelClass) {
//       case 'Normal':
//         return "คุณมีความเสี่ยงต่ำ";
//       case 'Cataract':
//         return "คุณมีความเสี่ยงในการเป็นโรคไตเรื้อรังระยะที่ 1";
//       case 'Glaucoma':
//         return "คุณมีความเสี่ยงในการเป็นโรคไตเรื้อรังระยะที่ 2";
//       case 'moderateNPDR':
//         return "คุณมีความเสี่ยงในการเป็นโรคไตเรื้อรังระยะที่ 3";
//       case 'severeNPDR':
//       case 'PDR':
//         return "คุณมีความเสี่ยงในการเป็นโรคไตเรื้อรังระยะที่ 4";
//       case 'verysevereNPDR':
//         return "คุณมีความเสี่ยงในการเป็นโรคไตเรื้อรังระยะที่ 5";
//       default:
//         return "";
//     }
//   };

//   const description = (labelClass) => {
//     switch (labelClass) {
//       case 'Normal':
//         return "คุณมีความเสี่ยงต่ำ";
//       case 'Cataract':
//         return "ไตของคุณอยู่ในภาวะปกติแต่เริ่มมีความเสื่อมเกิดขึ้น รักษาด้วยการควบคุมอาหาร ออกกำลงกาย และรักษาโรคประจำตัว";
//       case 'Glaucoma':
//         return "ไตของคุณมีอาการเสื่อม รักษาด้วยการควบคุมอาหาร ออกกำลงกายตามคำแนะนำของแพทย์ และติดตามอาการอย่างต่อเนื่อง";
//       case 'moderateNPDR':
//         return "ไตของคุณมีอาการเสื่อมมากขึ้น การทำหน้าที่กรองของเสียลดลง รักษาด้วยการควบคุมอาหาร ออกกำลงกายตามคำแนะนำของแพทย์ ตรวจโปรตีนในปัสสาวะ และติดตามอาการอย่างต่อเนื่อง";
//       case 'severeNPDR':
//       case 'PDR':
//         return "ไตของคุณเสื่อมมาก ควรรีบพบแพทย์เพื่อทำการรักษา แพทย์จะรักษาด้วยการควบคุมอาหาร ให้ออกกำลงกายตามคำแนะนำของแพทย์ ตรวจเลือดและปัสสาวะติดตามอาการทุก 3 หรือ 6 เดือน";
//       case 'verysevereNPDR':
//         return "ไตของคุณเกิดภาวะไตวาย ไตไม่สามารถทำงานได้ ต้องรักษาด้วยการฟอกเลือดเมื่อค่า GFR ต่ำกว่า 9, หรือทำการผ่าตัดเปลี่ยนถ่ายไต";
//       default:
//         return "";
//     }
//   };

//   const highestClass = () => {
//     if (books.length === 0) {
//       return null;
//     }

//     let highest = -1; // Initialize with an invalid value
//     let highestIndex = -1;

//     books.forEach((book, index) => {
//       const classNumericValue = mapLabelClassToNumeric(book.labelClass);
//       if (classNumericValue > highest) {
//         highest = classNumericValue;
//         highestIndex = index;
//       }
//     });

//     if (highestIndex !== -1) {
//       return books[highestIndex];
//     } else {
//       return null;
//     }
//   };

//   const highestClassBook = highestClass();

//   const getColor = (value) => {
//     if (value < 40) {
//       return "#ff0000"; // Red color
//     } else if (value < 70) {
//       return "#ffA500"; // Orange color
//     } else {
//       return "#00ff00"; // Green color
//     }
//   };

//   return (
//     <>
      // <Table striped bordered hover size="sm">
      //   <thead>
      //     <tr>
      //       <th>#</th>
      //       <th>Guide</th>
      //       <th>Guide</th>
      //       <th>Book Cover</th>
      //       <th>Timestamp</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {books.map((book, index) => (
      //       <tr key={book.id}>
      //         <td>{index + 1}</td>
      //         <td>{getGuide(book.labelClass)}</td>
      //         <td>{description(book.labelClass)}</td>
      //         <td>
      //           <img src={book.imageUrl} alt="Book Cover" width="100" />
      //         </td>
      //         <td>{book.timestamp}</td>
      //       </tr>
      //     ))}
      //   </tbody>
      // </Table>

//       {latestBook && (
//         <div style={{ width: "100px", margin: "0 auto" }}>
//           <CircularProgressbar
//             value={parseFloat(latestBook.list_data_value)}
//             text={`${highestClassBook.list_data_value}%`}
//             styles={buildStyles({
//               textColor: getColor(parseFloat(latestBook.list_data_value)),
//               pathColor: getColor(parseFloat(latestBook.list_data_value)),
//               trailColor: "#d6d6d6",
//             })}
//           />
//         </div>
//       )}

      // {highestClassBook && (
      //   <div>
      //     <h2>Highest Class:</h2>
      //     <p>{getGuide(highestClassBook.labelClass)}</p>
      //     <p>{description(highestClassBook.labelClass)}</p>
      //     <img src={highestClassBook.imageUrl} alt="Highest Class Book Cover" width="100" />
      //   </div>
      // )}
//     </>
//   );
// };

// export default Dashboard;
