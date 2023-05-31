import React, { useState } from 'react';
import Footer from './components/footer/Footer';
import Search from './components/search/Search';
import Body from './components/body/Body';
import './styles/main.css'


function App() {
  const [inputSearch, setInputSearch] = useState(null);

  return (
    <div className='app'>
      <Search setInputSearch={setInputSearch} />
      {inputSearch && <Body inputSearch={inputSearch} />}
      <Footer />
    </div>
  );
}

export default App;