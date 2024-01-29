import { useEffect, useState } from "react";

const CourceDemo = () => {
  const [cources, setCources] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/");
      const data = await response.json();
      setCources(data.cources);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Your Component</h1>
      <ul>
        {cources.map((cource) => (
          <li key={cource._id}>
            <p>Title: {cource.courceTitle}</p>
            <p>Description: {cource.courceDescription}</p>
            <p>Price: {cource.courcePrice}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourceDemo;
