import React from 'react'

const StudentForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }
  const [formData, setFormData] = React.useState(
    {
      name: "",
      studentId: "",
      email: ""
    }
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div>
      <h1>Student Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder='Enter your name'
            value={formData.name}
            name='name'
            id='name'
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder='Enter your student id'
            value={formData.studentId}
            name='studentId'
            id='studentId'
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder='Enter your email'
            value={formData.email}
            name='email'
            id='email'
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default StudentForm
