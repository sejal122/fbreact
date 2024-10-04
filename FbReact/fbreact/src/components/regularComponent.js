import React, { Component } from 'react'
class RegularComponent extends Component {
    render() {
        console.log('regular component')
        return (
            <h1>regular component {this.props.name}</h1>
        )
    }
}
export default RegularComponent