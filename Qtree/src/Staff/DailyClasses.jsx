import React from "react";
import Navbar from "../Navbar";

const DailyClasses = () => {
  return (
    <div>
      <Navbar />
      <div className="students-list">
        <table className="student-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Course </th>
              <th>Timing </th>
              <th>batches No</th>
              <th>Students</th>
              <th>More Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>14-10-2024</td>
              <td>mern stack</td>
              <td>9:00</td>
              <td>50</td>
              <td>4</td>
              <td><button>view</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DailyClasses;
