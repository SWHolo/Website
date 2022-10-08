import React from 'react';
import "./About.css"

function About() {
    const openUrl = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer')
    }
    return (
        <div className='about-container'>
            <div className='section'>
                <div className='question'>
                    What was life like before college?
                </div>
                <div className='answer'>
                    I was born in Toronto, but spent most of my life in Acton, MA, USA
                    until I graduated from <a href='https://abrhs.abschools.org'>ABRHS</a>.
                    There, I participated in the math team, co-founded <a href='https://abmathcompetitions.org/'>ABMC</a>,
                    and found some of my best friends for life.
                </div>
            </div>
            <div className='section'>
                <div className='question'>
                    What are you up to now?
                </div>
                <div className='answer'>
                    I'm still a full time student focusing on my studies.
                    I'm looking to gain more work experience before I graduate, so hit me up with any cool opportunities!
                </div>
            </div>
            <div className='section'>
                <div className='question'>
                    What are your hobbies?
                </div>
                <div className='answer'>
                    I play a variety of card and board games like Magic: the Gathering, Poker, Chess, and Go.
                    I also watch seasonal anime and tech videos, and I'm somewhat of a futurist, hoping for some sort of youth serum before I get too old.
                    I enjoy Beat Saber, going rock climbing with friends, and trying out all the new Michelin Star and Bib restaurants in Toronto!
                </div>
            </div>
            <div className='section'>
                <div className='question'>
                    What is your favorite...?
                </div>
                <ul className='answer'>
                    <li>
                        <span>Anime: </span>
                        <a href='https://myanimelist.net/anime/34599/Made_in_Abyss'>Made in Abyss</a>
                    </li>
                    <li>
                        <span>Character: </span>
                        <a href='https://spiceandwolf.fandom.com/wiki/Holo'>Holo</a>
                    </li>
                    <li>
                        <span>Movie: </span>
                        <a href='https://myanimelist.net/anime/36862/Made_in_Abyss_Movie_3__Fukaki_Tamashii_no_Reimei'>Made in Abyss: Dawn of the Deep Soul</a>
                    </li>
                    <li>
                        <span>Artist: </span>
                        <a href='https://www.youtube.com/channel/UC5CwaMl1eIgY8h02uZw7u8A'>Hoshimachi Suisei</a>
                    </li>
                    <li>
                        <span>Song: </span>
                        <a href='https://www.youtube.com/watch?v=tuZty35Fk7M'>Ghost City Tokyo</a>
                    </li>
                    <li>
                        <span>Game: </span>
                        <a href='https://magic.wizards.com/en'>Magic: the Gathering </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default About;