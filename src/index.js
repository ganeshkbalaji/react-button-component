import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
    }
    handleClick = ()  => {
        this.setState({
            counter: this.state.counter +=1
        })
    };
    render() {
    return (
        <button onClick={this.handleClick}>{this.state.counter}</button>
    )
    }
}
ReactDOM.render(<Button />, document.getElementById('root'));
