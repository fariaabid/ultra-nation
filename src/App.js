import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {
  const [countries,setCountries]=useState([]);
  const [cart,setCart] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(data =>{
      setCountries(data);
      // console.log(data);
      const names = data.map(country=> country.name);
      // console.log(names);
      }) 
  },[])

  const handleAddCountry = (country) => {
   const newCart = [...cart,country];
   setCart(newCart);
  } 

  return (
    <div className="App">
      <h1>Country loaded: {countries.length}</h1>
      <h1>Country added:{cart.length}</h1>
      <Cart cart={cart}></Cart>
     
        {
          countries.map(country => <Country country={country} key={country.alpha3Code} handleAddCountry={handleAddCountry}></Country>)
        }

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
