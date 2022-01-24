import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

let API = axios.create({
  baseURL: "https://api.jsonbin.io/b/5f1b0596c58dc34bf5d9e9a9",
  responseType: "json"
});

const App = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    API.get("/").then((response) => {
      setProperties(response.data.properties);

      // The API response
      console.log(response.data);
    });
  }, []);

  console.log(properties);

  return (
    <div className="App">
      <header className="App-header">Homes Display Task</header>
      <div className="instructions">
        <p>
          <strong>Step 1:</strong> Display list of homes
        </p>
        <p>
          <strong>Step 2:</strong> When the list of homes is displayed, be able
          to click on each home and see specific information
        </p>
        <p className="tips">
          *You may import any additional libraries (ant design, rebass, etc.)
        </p>
      </div>
    </div>
  );
};

export default App;
