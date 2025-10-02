// import React from "react";
// import Card from './components/Card.js';
// import Data from './data.json';

// const App = () => {
//     return (
//         <div>
//             <h1 className="headingStyle">Todo App</h1>
//             <Card titleText={Data[0].title} descText={Data[0].desc} />
//             <Card titleText={Data[1].title} descText={Data[1].desc} />
//             <Card titleText={Data[2].title} descText={Data[2].desc} />
//             <Card titleText={Data[3].title} descText={Data[3].desc} />
//         </div>
//     );
// };

// export default App;


// import React from "react";
// import Card from './components/Card.js';
// import Data from './data.json';

// const App = () => {

//     let items = [];
//     for (let i = 0; i < Data.length; i++) {
//         items.push(<Card titleText={Data[i].title} descText={Data[i].desc} />);
//     }

//     return (
//         <div>
//             <h1 className="headingStyle">Todo App</h1>
//             {items}
//         </div>
//     );
// };

// export default App;


// import React from "react";
// import Card from './components/Card.js';
// import Data from './data.json';

// const App = () => {

//     let items = [];
//     items = Data.map((item) => <Card titleText={item.title} descText={item.desc} />);

//     return (
//         <div>
//             <h1 className="headingStyle">Todo App</h1>
//             {items}
//         </div>
//     );
// };

// export default App;


import Card from './components/Card.js';
import Data from './data.json';

const App = () => {
    return (
        <div>
            <h1 className="headingStyle">Todo App</h1>
            {Data.map((item, index) => <Card key={index} titleText={item.title} descText={item.desc} />)}
        </div>
    );
};

export default App;
