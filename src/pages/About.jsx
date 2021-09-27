import React from 'react';

const About = () => {
    return (
        <div className='mobileMarginApp App item__margin__top'>
            <h1 className='item__margin__bottom'>
                A training Front End project.
            </h1>
            <p>
                The main page displays a list of posts. I receive data from a remote service via a rest api. The posts are loaded automatically after reaching the end of the current list. Search and sorting by content is also implemented.

            </p>
            <p>
                This course is on the YouTube channel <b>Ulbi TV</b>.
            </p>
        </div>
    );
}

export default About;
