import React, { PureComponent } from 'react'

class Counter extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            counter:0
        }
    }
handleCounter=()=>{
    this.setState(prevState=>{
        return {counter:prevState.counter+1}
    })
}

    render() {
        return (
            <div>{this.props.render(this.state.counter,this.handleCounter)}</div>
        )
    }
}

export default Counter