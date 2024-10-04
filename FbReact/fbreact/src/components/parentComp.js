import React, { Component } from 'react'
import PureComp from './pureComp'
import RegularComponent from './regularComponent'

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:''
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({name:'Rajat'})
        },2000)
    }
    render() {
        console.log('-----parent component------')
        return (
            <div>
                <h1>Parent component</h1>
                <PureComp name={this.state.name} />
                <RegularComponent  name={this.state.name} />
            </div>
        )
    }
}
export default ParentComp