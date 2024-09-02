import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { NavLink, Navigate } from 'react-router-dom';



function AttendanceForm() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    totalSalary: '',
    totalPresents: '',
    totalAbsents: '',
    leaves: '',
    deduction: '',
    netSalary: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(1);
    try {
      const response = await axios.post("http://localhost:8003/api/attendance", formData);
      toast.success("Attendance Posted Successfully");
      console.log('Data posted successfully:', response.data);
      // Clear form fields after successful submission
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div className="attendance-form">
      <h2>Attendance Form</h2>
      <form className='mt-4' onSubmit={handleSubmit}>
        <div className='container'>
          <NavLink to={"/home"}>
            <button>
              <span className="transition"></span>
              <span className="gradient"></span>
              <span className="label">Home</span>
            </button>
          </NavLink>
          <div className='container'>
            <div className='row'>
              <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label htmlFor="exampleInputId">User ID</label>
                <input type="text" value={formData.id} onChange={handleChange} name='id' className="form-control" id="exampleInputId" aria-describedby="idHelp" placeholder="ID" />
              </div>
              <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label htmlFor="exampleInputName">User Name</label>
                <input type="text" value={formData.name} onChange={handleChange} name='name' className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Name" />
              </div>
              <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label htmlFor="exampleInputSalary">Total Salary</label>
                <input type="text" value={formData.totalSalary} onChange={handleChange} name='totalSalary' className="form-control" id="exampleInputSalary" aria-describedby="salaryHelp" placeholder="Salary" />
              </div>
              <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label htmlFor="exampleInputPresents">No of Presents</label>
                <input type="text" value={formData.totalPresents} onChange={handleChange} name='totalPresents' className="form-control" id="exampleInputPresents" aria-describedby="presentsHelp" placeholder="Presents" />
              </div>
              <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label htmlFor="exampleInputAbsents">No of Absents</label>
                <input type="text" value={formData.totalAbsents} onChange={handleChange} name='totalAbsents' className="form-control" id="exampleInputAbsents" aria-describedby="absentsHelp" placeholder="Absents" />
              </div>
              <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label htmlFor="exampleInputLeaves">No Of Leaves</label>
                <input type="text" value={formData.leaves} onChange={handleChange} name='leaves' className="form-control" id="exampleInputLeaves" aria-describedby="leavesHelp" placeholder="Leaves" />
              </div>
              <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label htmlFor="exampleInputDeduction">Deduction</label>
                <input type="text" value={formData.deduction} onChange={handleChange} name='deduction' className="form-control" id="exampleInputDeduction" aria-describedby="deductionHelp" placeholder="Deduction" />
              </div>
              <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label htmlFor="exampleInputNetSalary">Net Salary</label>
                <input type="text" value={formData.netSalary} onChange={handleChange} name='netSalary' className="form-control" id="exampleInputNetSalary" aria-describedby="netSalaryHelp" placeholder="Net Salary" />
              </div>
              <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label htmlFor="exampleInputSalaryDate">Salary Handover Date</label>
                <input type="date" value={formData.date} onChange={handleChange} name='date' className="form-control" id="exampleInputSalaryDate" placeholder="Salary Handover Date" />
              </div>
              <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label htmlFor="exampleInputSalaryDate">feedback</label>
                <input type="text" value={formData.feedback} onChange={handleChange} name='feedback' className="form-control" id="exampleInputSalaryDate" placeholder="feedback" />
              </div>
              <div className="mb-3 col-lg-12 col-md-12 col-12">
                <button type="submit" className="btn btn-primary">
                  <span className="transition"></span>
                  <span className="gradient"></span>
                  <span className="label">Submit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AttendanceForm;