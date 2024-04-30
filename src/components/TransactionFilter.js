import React, { useState } from 'react';

function TransactionFilter({ onFilter }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    const term = event.target.value;
    setSearchTerm(term);
    onFilter(term);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by description..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default TransactionFilter;
