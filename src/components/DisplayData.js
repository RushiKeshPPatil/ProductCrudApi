import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DisplayData() {
  const [products, setProducts] = useState([]);
 
  const fetchData = async () => {
    try {
      const response = await axios.get('https://localhost:44376/api/Product');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => { 
    fetchData();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`https://localhost:44376/api/Product/${productId}`);
      // Refresh the product list after deletion
      fetchData();
      
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <h2>All Products</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th> {/* New column for delete button */}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.pid}>
              <td>{product.pid}</td>
              <td>{product.productname}</td>
              <td>{product.productprice}</td>
              <td>{product.categoryname}</td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() => handleDelete(product.pid)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayData;
