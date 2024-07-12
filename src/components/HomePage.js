import React, { useState } from 'react';
import axios from 'axios';
import ProductCard from './components/ProductCard';

const HomePage = () => {
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('');
  const [topN, setTopN] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [products, setProducts] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(`http://20.244.56.144/test/companies/${company}/${category}/products`, {
      params: {
        top: topN,
        minPrice,
        maxPrice,
      },
    });
    setProducts(response.data);
  };

  return (
    <div>
      <h1>Top Products</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Company:</label>
          <select value={company} onChange={(e) => setCompany(e.target.value)}>
            <option value="">Select Company</option>
            <option value="AMZ">AMZ</option>
            <option value="FLP">FLP</option>
            <option value="SNP">SNP</option>
            <option value="MYN">MYN</option>
            <option value="AZO">AZO</option>
          </select>
        </div>
        <div>
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="Phone">Phone</option>
            <option value="Computer">Computer</option>
            <option value="TV">TV</option>
            <option value="Earphone">Earphone</option>
            <option value="Tablet">Tablet</option>
            <option value="Charger">Charger</option>
            <option value="Mouse">Mouse</option>
            <option value="Bluetooth">Bluetooth</option>
            <option value="Pendrive">Pendrive</option>
            <option value="Remote">Remote</option>
            <option value="Headset">Headset</option>
            <option value="Laptop">Laptop</option>
            <option value="PC">PC</option>
          </select>
        </div>
        <div>
          <label>Top N:</label>
          <input type="number" value={topN} onChange={(e) => setTopN(e.target.value)} />
        </div>
        <div>
          <label>Min Price:</label>
          <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
        </div>
        <div>
          <label>Max Price:</label>
          <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
