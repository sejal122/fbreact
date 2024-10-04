import React, { PureComponent } from 'react'

class Rendername extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <h1>Hello , {this.props.name(false)}</h1>
        )
    }
}

export default Rendername