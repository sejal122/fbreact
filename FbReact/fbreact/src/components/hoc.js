import React from 'react'
const Hoc = OriginalComponent => {
    class NewComponent extends React.Component{
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
        render(){
            return <OriginalComponent counter={this.state.counter} handleCounter={this.handleCounter}/>
            
        }
    }
   return NewComponent
}
export default Hoc
