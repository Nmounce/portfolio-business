import React from 'react';
function preLoad(props) {
    return (
        <div id={props.loading ? 'preloader' : 'preloader-none'}></div>
    );
}

export default preLoad;