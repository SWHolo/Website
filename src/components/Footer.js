import React from 'react'
import "./Footer.css"

const Footer = () => {
    const openGmail = () => {
        window.open("mailto:Richardmail999@gmail.com")
    }
    const openUrl = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer')
    }
    return (
        <footer className="footer">
            <section className="socials">
                <button onClick={() => openGmail()} className="gmail icon">
                    <i className="fa-brands fa-google"></i>
                </button>
                <button onClick={() => openUrl("https://na.op.gg/summoners/na/Spice%20Wolf%20Holo")} className="linkedin icon">
                    <i className="fa-brands fa-linkedin"></i>
                </button>
                <button onClick={() => openUrl("https://github.com/SWHolo")} className="github icon">
                    <i className="fa-brands fa-github"></i>
                </button>
                <button onClick={() => openUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ")} className="youtube icon">
                    <i className="fa-brands fa-youtube"></i>
                </button>
            </section>
        </footer>
    )
}

export default Footer   