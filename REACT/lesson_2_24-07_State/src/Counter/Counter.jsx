import React, {Component} from 'react';

class NewCounter extends Component {

/*    constructor() {
        super();
        this.state = {
            counterStart: 0,
        };

        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
    } */

    state = {
        counterStart: 0,
    };

    plus = () => {
        console.log(this.state.counterStart);
        this.setState(prevState => ({counterStart: prevState.counterStart + 1}),
            () => console.log('Async state ', this.state.counterStart));
    };

    minus = () => {
        // console.log('minus');
/*        this.setState({
            counterStart: 5,
        }); */
        this.setState(prevState => ({counterStart: prevState.counterStart - 1}))
    };



/*    static propTypes = {
        start: PropTypes.number,
    };

    static defaultProps = {
        start: 0,
    }; */

    render () {
        const {counterStart} = this.state;
        return (
            <div>
                <p>{counterStart}</p>
                <button onClick={this.plus}>Plus</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
}

export default NewCounter;
