import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import BookDataService from "./DashboardService";

// Function to map labelClass to a numeric value
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

const Result = ({ getBookId }) => {
  const [lastUpdatedBook, setLastUpdatedBook] = useState(null);

  useEffect(() => {
    getLatestUpdatedBook();
  }, []);

  const getLatestUpdatedBook = async () => {
    try {
      const data = await BookDataService.getAllBooks();

      // Assuming 'timestamp' is the field to sort by
      const sortedData = data.docs.slice().sort((a, b) => {
        const timestampA = a.data().timestamp;
        const timestampB = b.data().timestamp;
        return timestampB - timestampA; // Sort in descending order
      });

      if (sortedData.length > 0) {
        const latestDoc = sortedData[0];
        const labelClass = latestDoc.data().labelClass;
        const listDataValue = parseFloat(latestDoc.data().list_data_value * 100).toFixed(2);
        const numericLabel = mapLabelClassToNumeric(labelClass);
        const guide = getGuide(labelClass);
        const updatedBook = {
          numericLabel, // Use the numeric label value
          list_data_value: listDataValue,
          guide,
          id: latestDoc.id,
          imageUrl: latestDoc.data().imageUrl,
        };
        setLastUpdatedBook(updatedBook);
      }
    } catch (error) {
      console.error("Error fetching latest updated book:", error);
    }
  };

  const getColor = (value) => {
    if (value < 40) {
      return "#ff0000"; // Red color
    } else if (value < 70) {
      return "#ffA500"; // Orange color
    } else {
      return "#00ff00"; // Green color
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

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>List Data Value</th>
            <th>Guide</th>
            <th>Book Cover</th>
          </tr>
        </thead>
        <tbody>
          {lastUpdatedBook && (
            <tr key={lastUpdatedBook.id}>
              <td>1</td>
              <td>{lastUpdatedBook.labelClass}</td>
              <td>
                <div style={{ width: "50px", height: "50px" }}>
                  <CircularProgressbar
                    value={parseFloat(lastUpdatedBook.list_data_value)}
                    text={`${lastUpdatedBook.list_data_value}%`}
                    styles={buildStyles({
                      textColor: getColor(parseFloat(lastUpdatedBook.list_data_value)),
                      pathColor: getColor(parseFloat(lastUpdatedBook.list_data_value)),
                      trailColor: "#d6d6d6",
                    })}
                  />
                </div>
              </td>
              <td>{lastUpdatedBook.guide}</td>
              <td>
                <img
                  src={lastUpdatedBook.imageUrl} // Use the imageUrl field
                  alt="Book Cover"
                  width="100"
                />
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default Result;
