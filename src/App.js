import React from 'react';
import Stars from './components/Stars'
import './App.css';

function App() {
    return (
        <div className='ratingList'>
            <Stars count={1} />
            <Stars count={'true'} />
            <Stars count={5} />
            <Stars count={0} />
            <Stars count={9} />
        </div>
    )
}

export default App;
