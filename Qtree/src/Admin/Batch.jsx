import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const Batch = () => {
    const navigate =useNavigate()
  return (
    <div>
      <Navbar />
      <div className="students-list">
        <button className="btn" onClick={() => navigate("/admin/batch/create/")}>Create Batch</button>
        <table className="student-table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Staffs</th>
              <th>Course Duration</th>
              <th>Enrolled Students</th>
              <th>more Data</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Batch;
