import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './Components/App';
import StarRating from './StarRating';

function Test(){
  const [movieRating, setMovieRating] = useState(0);

  return <div>
    <StarRating maxRating={10} color="blue" onSetRating ={setMovieRating}/>
    <p>The movie was rated {movieRating} stars</p>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} messages={["Aweful", "Bad", "Okay", "Good", "Awesome"]}/>
    <StarRating maxRating={10}/>
    <StarRating size={24} color='red' className="test" defaultRating={3}/>
    <Test />
  </React.StrictMode>
);

