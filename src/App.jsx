import React from "react";
import DashBoardPage from "./components/pages/Dashboard"

const App = () => {

  const handleFormSubmit = () => {
      console.info("");
  }

  return (
    <div>
        <form onSubmit={handleFormSubmit}>
        <fieldset>
          <label for="title">Album title</label>
          <input name="title" />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      <DashBoardPage />
    </div>
  );
};

export default App;
