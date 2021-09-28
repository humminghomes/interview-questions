import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">Multi Step Form Challenge</header>
      <div className="instructions">
        <p>
          1. You will need to create a multi-step form here. First step should
          take in first & last name. The second step should take in favorite
          animals. Lastly, the third step should take in today's date. After all
          information is in, the user should be able to submit the data
        </p>
        <p>2. User should be able to go back & forth in between steps</p>
        <p>3. Bonus: add in form validation</p>
        <p className="tips">
          *You may import any additional libraries (ant design, rebass, etc.)
        </p>
      </div>
    </div>
  );
};

export default App;
