import React, { Component } from 'react';
import "./visualizer.css";
import "./MergeSort.js"
import { getMergeSortAnimations } from './MergeSort.js';

const ANIMATION_SPEED = 5;

export default class Visualizer extends Component {

    constructor(props) {
        super(props);

        this.state = {array: [], resetValidator: 0, sortRunning: 0};

    }

    componentDidMount() {
        this.resetArray();
        this.setState({resetValidator: 1});
        
    }

    resetArray = () => {
        const array = [];
        for(let i=0;i<100;i++) {
            array.push(randomIntFromInterval(5,500));
        }
        this.setState({array: array});
        console.log("reset-2")

        if(this.state.resetValidator) window.location.reload();

    }

    doSort = () => {
        
        console.log('sorting')
        if(this.state.sortRunning === 0) {
            
            console.log('before '+this.state.sortRunning)
            this.mergeSort();
            this.setState({sortRunning: 1})
            console.log('after '+this.state.sortRunning)
        }
        else {
            console.log('SORT RUNNING');
        }

    }

    mergeSort = () => {

        const aux = this.state.array.slice();
        const animations = getMergeSortAnimations(aux);
        for(let i = 0; i < animations.length; i++) {

            const arrayBars = document.getElementsByClassName('array-element');
            const isColorChange = i % 3 !== 2;

            if(isColorChange) {

                const [barOneId, barTwoId] = animations[i];
                const barOneStyle = arrayBars[barOneId].style;
                const barTwoStyle = arrayBars[barTwoId].style;
                const color = i % 3 === 0? 'red' : '#00d6ba'

                setTimeout(() => {

                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;

                }, i * ANIMATION_SPEED);

            }

            else {

                const [barOneId, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneId].style;

                setTimeout(() => {
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED);


            }


        }

    }

    render() {
        const array = this.state.array;
        return(
            <div className="array-container">
             {array.map((value, id) => {
                 return(
                     <div className="array-element" key={id} style={{height: `${value}px`}}></div>
                 )
             })}
            </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}

