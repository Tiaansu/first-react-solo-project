import React from 'react';

export default function Info() {
    return (
        <div className="info">
            <img src="https://avatars.githubusercontent.com/u/87069680?v=4" />
            <div className="info--profile">
                <h1>Marlon Cabading</h1>
                <h3>Fullstack Developer</h3>
                <h4>tiaansu.website</h4>
                <div className="btn">
                    <a className="email" href="mailto:marlonrivera12321@gmail.com" target="_blank"><i className="fa-solid fa-envelope"></i><span> Email </span></a>
                    <a className="linkedin" href="https://www.linkedin.com/in/marlon-cabading-1aaa47256/" target="_blank"><i className="fa-brands fa-linkedin"></i><span> LinkedIn </span></a>
                </div>
            </div>
        </div>
    )
}