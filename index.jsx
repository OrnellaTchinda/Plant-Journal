import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from "./components/Navbar";
import Plant from "./components/Plant";
import data from "./plantData"

function App() {
  const plants = data.map(item =>
  <Plant 
        title= {item.title}
        location= {item.location}
        googleMapsUrl= {item.googleMapsUrl}
        startDate= {item.startDate}
        endDate= {item.endDate} 
        description= {item.description}
        imageUrl= {item.imageUrl} 
        care= {item.care}
    />
  )
  
  return (
    <div className ="react-app">
      <Navbar/>
      {plants}
    </div>
    
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 