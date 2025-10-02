import { useEffect, useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    onSearch(searchText);
  }, [searchText]);

  return (
    <div style={{ textAlign: 'center' }}>
      <input type="text" placeholder="Search Country" value={searchText} onChange={handleChange} />
    </div>
  );
};

export default Search;
