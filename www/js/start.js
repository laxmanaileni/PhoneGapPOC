var runOriginalApp(){



import React, { Component } from "react";
import "./App.css";
import Upload from "./upload/Upload";
import Location from "./location/App"

class Start extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hii Naruto</h1>
        {/* <div className="Card">
          <Upload name="uploadname" />
        </div>
        <div className="Locationn">
          <Location/>
        </div> */}
      </div>
    );
  }
}

export default App;
}