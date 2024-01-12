import React from 'react'
export default class ResultComponent extends React.Component {
    constructor() {
        super();

    }
    render() { 
        return ( 
            <>
            <div className="body3">
            <h1>Result</h1>
            <div className="containerResult">
                <h3>You need more practice!</h3>
                <h1 className='score'>Your score is 20%</h1>
                <div className="results">
                <p>Total number of questions: 15 </p>
                <p>Number of attempted questions: 9 </p>
                <p>Number of correct answers: 3</p>
                <p>Number of wrong answers: 6</p>
                </div>
                
            </div>
            <div className="btns">
            <button className='btn' id='play'>Play Again</button>
            <button className='btn' id='back'>Back to home</button>
            </div>
            </div>
            </>
         );
    }
}
