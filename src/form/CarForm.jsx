import React from 'react'
import { GiHangGlider } from 'react-icons/gi';

const CarForm = () => {

  const [carForm, setCarForm] = React.useState(
    {
      brand: "",
      model: "",
      year: 0
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(carForm);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="brand">Brand</label>
          <input type="text" id="brand" name="brand" onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="model">Model</label>
          <input type="text" id="model" name="model" onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <input type="number" id="year" name="year" onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
        <div>
        </div>
      </form>
    </div>
  )
}

export default CarForm
