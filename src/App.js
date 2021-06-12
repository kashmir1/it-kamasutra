import './App.css';
import React from "react";


const App = () => {
  return (
    <div className='app-wrapper'>
        <header className="header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" alt=""/>
        </header>
        <nav className="nav">
            <div>Profile</div>
            <div>Message</div>
        </nav>
        <div className="content">Main Content</div>
    </div>
  );
};


export default App;
