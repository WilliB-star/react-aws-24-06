import React from 'react';
import ContentAndFooter from './ContentAndFooter'; 

function App() {
  const handleHomeClick = () => {
    alert('Hallo von home');
  };

  return (
    <div className="App">
      <header>Hausaufgabe</header> 
      <button className="homeButton" onClick={handleHomeClick}>Home</button> 
      <ContentAndFooter /> 
    </div>
  );
}

export default App;



