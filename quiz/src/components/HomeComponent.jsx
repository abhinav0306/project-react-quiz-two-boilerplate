import React from 'react'
export default class HomeComponent extends React.Component {
    constructor() {
        super();

    }
    render() { 
        return ( 
            <>
            <div className="containerhome">
                <h2>Quiz App</h2>
                <button className='playbtnstart'>Play</button>
            </div>
            </>
         );
    }
}
