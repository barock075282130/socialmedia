import React from "react"

class TimeCal extends React.Component {
    constructor(time){
        super(time);
        this.state = {
            time: time
        }
        this.calculateTime();
    }
    calculateTime(){
        const sec = [this.time].splice(':')
        // const date = new Date();
        // const min = date.getMinutes();
        // const hour = date.getHours();
        // const year = date.getFullYear();
        // const mm = min < 10 ? "0" + min : min;
        // const hh = hour < 10 ? "0" + hour : hour;
        this.setState({
            time: `${sec}`
        })
    }
    render(){
        return <p>{this.state.time}</p>
    }
}

export default TimeCal