import React, { useState } from 'react';
import axios from 'axios';

function UpdateProduct() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    try {
      await axios.put(`https://localhost:44376/api/Product`, formData);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className='container mt-5' style={{width:'80%'}}>
      <form onSubmit={handleSubmit} action='/' className='text-center' >
      <div class="row mb-3">
        <label for="pid" className="col-sm-2 col-form-label">Id</label>
        <div class="col-sm-10">
          <input type="number" className="form-control" id="pid" name="pid" onChange={handleChange} placeholder="ID"/>
        </div>
      </div>
      <div class="row mb-3">
        <label for="productname" className="col-sm-2 col-form-label">Product Name</label>
        <div class="col-sm-10">
          <input type="text" className="form-control" id="productname" name="productname" onChange={handleChange} placeholder="Product name"/>
        </div>
      </div>
      <div class="row mb-3">
        <label for="productprice" className="col-sm-2 col-form-label">Product Price</label>
        <div class="col-sm-10">
          <input type="number" className="form-control" id="productprice" name="productprice" onChange={handleChange} placeholder="Product price"/>
        </div>
      </div>
      
      <button className="btn btn-primary" type="submit" style={{width:'100px'}}>Update</button>
    </form>
    
    </div>
  );
}

export default UpdateProduct;
