import { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch(`http://localhost:3000/search?query=${value}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    fetchData(value);
  };
  return (
    <div>
      <input placeholder="enter" value={input} onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
