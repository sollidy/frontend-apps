import React from 'react';

const About = () => {
    return (
        <div className='mobileMarginApp App item__margin__top'>
            <h1 className='item__margin__bottom'>
                A training Front End project.
            </h1>
            <p>
                <ul><h4>Technologies used</h4></ul>
                <li><b>React</b> single page application </li>
                <li>Routing done using <b>React Router</b></li>
                <li><b>Hooks</b></li>
                <li>Rest API via <b>Axios</b></li>
                <li>Animation done using <b>React Transition Group</b> and <b>Intersection Observer API</b></li>
            </p>
        </div>
    );
}

export default About;
