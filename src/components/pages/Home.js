import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className='home-container'>
            <div className='greeting'>
                Hello there! Welcome to my website!
            </div>
            <div className='introduction'>
                I'm studying Computer Science at the University of Toronto.
                <br />
                Feel free to look through my socials down below!
            </div>
        </div>
    );
}

export default Home;