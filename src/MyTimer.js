import React from "react";


const divStyle = {
    color: 'white',
    border: '1px solid white'
    //backgroundImage: 'url(' + + ')',
};

const wrapDiv = {
    color: 'white',
    border: '1px solid lightgreen'
    //backgroundImage: 'url(' + + ')',
};


class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.seconds,
            btn_msg: 'ready',
            status_msg: 'ready',
            is_on: false,
            callback: props.callback
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.onCount(),
            1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    onCount = () => {

        if (this.state.is_on) {
            console.log(this.state);

            if (this.state.count > 0) {
                this.setState(
                    {
                        status_msg: 'seconds left: ' + this.state.count,
                        count: this.state.count - 1
                    });

                this.state.callback({
                    status: 'seconds left: ' + this.state.count,
                    count: this.state.count,
                    btn_msg: this.state.btn_msg
                });
            }
            else {
                this.setState({
                    is_on: false,
                    status_msg: 'ready',
                    btn_msg: 'ready!'
                });

                this.state.callback({
                    status: 'ready??',
                    count: this.state.count,
                    btn_msg: this.state.btn_msg
                });
            }
        }

    }

    clickHandler = () => {
        if (this.state.is_on)
            return;
        else {
            console.log('props second:', this.props.seconds)
            this.setState({
                is_on: true,
                btn_msg: 'working...',
                count: this.props.seconds
            });
            this.state.callback({
                count: 'seconds left: ' + this.state.count,
                btn_msg: this.state.btn_msg
            });
        }
    }




    render() {
        if(this.props.visible === false)    
            return;

        return (
            <div style={divStyle}>
                <h2>My Timer</h2>
                <div>{this.state.status_msg}</div>
                <button onClick={this.clickHandler}> {this.state.btn_msg} </button>
            </div>
        )
    }

    // componentDidMount(){
    // }

}

export function MyTimer(props) {
    return (
        <div>
            <p>ololo</p>
            <Timer name='HELL' seconds={props.seconds} />

            <div></div>
            <div></div>
        </div>

    );

}


export class MyTimerExt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: props.status || 'none',
            count: props.count || -1,
            btn_label: props.btn || 'btn'
        }
    }

    myCallback = (obj) => {
        this.setState(
            {
                status: obj.status,
                count: obj.count,
                btn_label: obj.btn_msg
            }
        );
    }


    render() {
        return (
            <div style={wrapDiv}>
                <p>ololo 2</p>
                <Timer name='HELL 2.0' seconds={this.props.seconds} callback={this.myCallback} visible={true}/>

                <div style={wrapDiv}>{this.state.btn_label}</div>
                <div style={wrapDiv}>{this.state.status}</div>
            </div>
        )

    }
}



//```jsx
export class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: props.seconds,
            name: props.name,
            button_msg: 'Start timer',
            isOn: false
        };
    }

    clickHandler = () => {
        if (this.state.isOn === true)
            return;

        this.setState({
            seconds: this.props.seconds,
            isOn: true,
            button_msg: 'Wait...'
        });
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        if (this.state.isOn === false)
            return;

        console.log(this.state.seconds)

        if (this.state.seconds <= 0) {
            this.setState({
                isOn: false,
                button_msg: 'Ready!'
            });
        }
        else {
            this.setState({ seconds: this.state.seconds - 1 }
            );
        }
    }

    render() {
        return (
            <div>
                <button className="rButton" onClick={this.clickHandler}>{this.state.button_msg}</button>
                <div className="rTimer">Seconds left: {this.state.seconds}</div>
            </div>
        );
    }
}
