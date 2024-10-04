import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { 
        }
    }
    render() {
        console.log('pure component')
        return (
            <h1>Pure component {this.props.name}</h1>
        )
    }
}
export default PureComp