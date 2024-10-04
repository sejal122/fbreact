import React, { PureComponent } from 'react'
import Hoc from './hoc'
class Hoverme extends PureComponent {
    
    render() {
        const {counter,handleCounter}=this.props
        return (
            <button onMouseOver={handleCounter}>Hovered {counter} times</button>
        )
    }
}

export default Hoc(Hoverme)