import React, { PureComponent } from 'react'
import Hoc from './hoc'
class Clickme extends PureComponent {
 
    render() {
        const {counter,handleCounter}=this.props

        return (
            <button onClick={handleCounter}>   Clicked {counter} times</button>
        )
    }
}

export default Clickme