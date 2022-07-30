import React from 'react';
import Footer from './components/Footer';
import Home from './components/Home/Main';
import NavigationBar from './components/NavigationBar';


function App() {
 return (
  <div className="App">
   <>
    <NavigationBar />
    <Home/>
    <Footer/>
   </>
  </div>
 );
}

export default App;
