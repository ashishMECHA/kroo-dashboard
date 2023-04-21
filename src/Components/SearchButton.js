import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchButton = () => {
  const [query, setQuery] = useState('');


  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '40%' }}>
      <input type="text" placeholder="Search for..." style={{ 
        border: 'none', 
        padding: '0.5rem', 
        paddingRight:'10rem',
        background:"#f2f3f5",
        
      }} value={query} onChange={(e)=>setQuery(e.target.value)} />

      <button style={{ 
        backgroundColor: '#4e73df', 
        color: '#fff', 
        border: 'none', 
        padding: '0.5rem 1rem',
        borderStartRadius:'none',
        borderEndEndRadius:'0.25rem',
        borderTopRightRadius:'0.25rem',
        cursor: 'pointer'
      }}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
};

export default SearchButton;
