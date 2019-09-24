import React from 'react';


class Clock extends React.Component {
    constructor(props) {
        super(props);
        let date = new Date();
        this.state = { date: date };
        this.tick = this.tick.bind(this);
    };

    // can you see this? are we synced?


    render() {
        let td = this.state.date;
        // debugger;
        return (
            <h1>
                Current Time: {td.getHours()} : {td.getMinutes()} : {td.getSeconds()}
            </h1>
        )
    }

    componentDidMount() {
        // debugger;
        this.interval = setInterval(this.tick, 1000);
       
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        let nd = new Date();
        this.setState({ date: nd });
    }



};

export default Clock;

