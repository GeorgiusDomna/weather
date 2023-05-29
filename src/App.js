import React, { useState } from 'react';
import Footer from './components/footer/Footer';
import Search from './components/search/Search';
import WeatherBody from './components/weatherBody/WeatherBody';
import './styles/main.css'


function App() {
  const [inputSearch, setInputSearch] = useState(null);

  return (
    <div className='app'>
      <Search setInputSearch={setInputSearch} />
      {inputSearch && <WeatherBody inputSearch={inputSearch} />}
      <Footer />
    </div>
  );
}

export default App;