import React, { PureComponent, createRef } from 'react'

class RefClassCompExample extends PureComponent {
    constructor(props) {
        super(props)
        this.myInput=React.createRef()
        this.state = {
            
        }
    }
     handleChange=()=>{
        console.log(this.myInput.current.value)
        this.myInput.current.style.backgroundColor='red'
        this.myInput.current.style.padding='10px'
        this.myInput.current.style.fontSize='30px'
    }
    render() {
        return (
            <input placeholder='class component input' type='text' onChange={this.handleChange} ref={this.myInput}/>
        )
    }
}
export default RefClassCompExample