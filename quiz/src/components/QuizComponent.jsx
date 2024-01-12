import React from 'react'
import questions from "../resources/quizQuestion.json"
export default class QuizComponent extends React.Component {
    constructor() {
        super();
        this.state={
            currentIndex:0
        }

    }
    handlePrev=()=>{
        this.setState(prev=>({
            currentIndex: Math.max(0,prev.currentIndex-1)
        }))
    }
    handleNext=()=>{
        this.setState(prev=>({
            currentIndex: Math.min(14,prev.currentIndex+1)
        }))
    }
    handleQuit=()=>{
        alert("Are you sure to exit?")
        this.setState(prev=>({
            currentIndex:0
        }))
    }
    render() { 
        let {currentIndex}=this.state
        let{question,optionA,optionB,optionC,optionD}=questions[currentIndex]

        return ( 
            <>
            <div className="body2">
            <div className="containerquiz">
                <h2>Question</h2>
                <p className='Qnum'>{currentIndex+1} of 15</p>
                <h4>{question}</h4>
                <div className="options">
                    <button>{optionA}</button>
                    <button>{optionB}</button>
                    <button>{optionC}</button>
                    <button>{optionD}</button>
                </div>
                <div className="navButtons">
                    <button id='prev' onClick={this.handlePrev}>Previous</button>
                    <button id='next' onClick={this.handleNext}>Next</button>
                    <button id='quit'onClick={this.handleQuit}>Quit</button>
                </div>
            </div>
            </div>
            </>
         );
    }
}
