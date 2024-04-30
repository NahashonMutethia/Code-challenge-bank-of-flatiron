import React, { useState } from 'react';

function AddTransactionForm({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Send POST request to backend API to add new transaction
    fetch('http://localhost:8001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(newTransaction => {
        console.log('New transaction added:', newTransaction);
        onAddTransaction(newTransaction); // Update UI with new transaction
        // Clear form fields
        setFormData({
          date: '',
          description: '',
          category: '',
          amount: '',
        });
      })
      .catch(error => console.error('Error adding new transaction:', error));
  };

  return (
    <div>
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <label>Description:</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} required />
        <label>Category:</label>
        <input type="text" name="category" value={formData.category} onChange={handleChange} required />
        <label>Amount:</label>
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
