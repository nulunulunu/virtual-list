import React from 'react';
import logo from './logo.svg';
import './App.css';
import VirtualList from './components/virtualList'
import LazyLoad from './components/lazyLoad';
function App() {
  return (
    <div className="App">
      <div className='outside'>
        <VirtualList />
      </div>
    </div>
  );
}

export default App;
