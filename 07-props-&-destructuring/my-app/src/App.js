import React from "react";
import Card from './components/Card.js';

const App = () => {
    return (
        <div>
            <h1 className="headingStyle">Todo App</h1>
            <Card titleText="call mother" descText="this is description1"/>     
            <Card titleText="call father" descText="this is description2"/>     
            <Card titleText="call brother" descText="this is description3"/>
            {/* here titleText,descText -> attributes
            call mother, this is description1 -> values */}
        </div>
    );
};

export default App;     