// // // Mapping and spread out operator////*

// // import './App.css'
// // import React, {useState} from 'react';

// // function List() {
// //   const [myFavThings, setMyFavThings] = useState([]);

// //   const allFavThings = ['boom', 'chick', 'poo', 'cuma', 'habi'];

// //   const Things = myFavThings.map((thing, index) => <p key={index}>{thing}</p>);

// //   allFavThings.push('text');

// //   function Changes() {
// //     setMyFavThings(prevFavThings => [
// //       ...prevFavThings,
// //       allFavThings[prevFavThings.length]
// //     ]);
// //   }

// //   function Reset() {
// //     setMyFavThings([]);
// //   }



// //   return ( 
// //     <div>
// //       <h1>My List</h1>
// //       <button onClick={Changes}>Click to add</button>
// //       <button onClick={Reset}>Reset</button>
// //       {Things}
// //     </div>
// //   );

// // }

// // export default List;




// // //input list items where user gives input//*

// // import './App.css'
// // import React, { useState } from 'react';

// // function List() {
// //   const [myFavThings, setMyFavThings] = useState([]);
// //   const [inputValue, setInputValue] = useState('');

// //   const Things = myFavThings.map((thing, index) => <li key={index}>{thing}</li>);

// //   function Changes() {
// //     if (inputValue === '') return;
// //     setMyFavThings(prevFavThings => [
// //       ...prevFavThings,
// //       inputValue
// //     ]);
// //     setInputValue('');
// //   }

// //   function Reset() {
// //     setMyFavThings([]);
// //   }

// //   function handleChangeEvent(event) {
// //     setInputValue(event.target.value);
// //   }



// //   return ( 
// //     <div>
// //       <h1>My List</h1>
// //       <button onClick={Changes}>Click to add</button>
// //       <input
// //         type='text'
// //         placeholder='Enter item'
// //         value={inputValue}
// //         onChange={handleChangeEvent}
// //       />
// //       <button onClick={Reset}>Reset</button>
// //       <ul>{Things}</ul>
// //     </div>
// //   );



// // }

// // export default List;



// //event listeners pe dhyaan do form ke//*

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function App() {
  
//   function handleSubmit(event) {
//     event.preventDefault()
//     const formEl = event.currentTarget
//     const formData = new FormData(formEl)
//     const email = formData.get("email")
//     console.log(email)
//     formEl.reset()
//   }
  
//   return (
//     <section>
//       <h1>Signup form</h1>
//       <form onSubmit={handleSubmit} method="post">
//         <label htmlFor="email">Email:</label>
//         <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
//         <br />
        
//         <label htmlFor="password">Password:</label>
//         <input id="password" type="password" name="password" />
//         <br />
        
//         <button>Submit</button>
        
//       </form>
//     </section>
//   )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);


//best code for that to do list using forms//

// import React, {useState} from "react"

// export default function Main() {

//     const [ingredients, setIngredients] = useState([])

//     const ingredientsListItems = ingredients.map(ingredient => (
//         <li key={ingredient}>{ingredient}</li>
//     ))

//     function addIngredient(formData) {
//         const newIngredient = formData.get("ingredient")
//         setIngredients(prevIngredients => [...prevIngredients, newIngredient])
//     }

//     return (
//         <main>
//             <form action={addIngredient} className="add-ingredient-form">
//                 <input
//                     type="text"
//                     placeholder="e.g. oregano"
//                     name="ingredient"
//                 />
//                 <button>Add ingredient</button>
//             </form>
//             <ul>
//                 {ingredientsListItems}
//             </ul>
//         </main>
//     )
// }

// // DIGITAL TIMER

// import { useState, useEffect } from "react";

// function App() {
//   const [time, setTime] = useState(new Date());

//   const hours = time.getHours();
//   const minutes = time.getMinutes();
//   const seconds = time.getSeconds();

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Digital Clock</h1>
//       <h2>{time.toLocaleDateString()}</h2>
//       <h2>{hours}:{minutes}:{seconds}</h2>
//     </div>
//   );
// }

// export default App;

//// api fetch

// import { useState, useEffect } from "react";

// function App() {
//   const [user, setUser] = useState(null);

//   async function getDatal() {
//     const response = await fetch( "https://randomuser.me/api/");
//     const data = await response.json();
//     setUser(data.results[0])
//     console.log(data);
//   }

//   useEffect (() =>{getDatal();},[] )

//    if (!user) {

//     return <h1>Loading...</h1>;

//   }

//   return (

//   <div>

//     <img src={user.picture.large} />

//     <h2>

//       {user.name.first} {user.name.last}

//     </h2>

//     <h2>{user.phone}</h2>

//     <p>{user.email}</p>

//   </div>

// );
// }

// export default App;