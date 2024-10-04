import React, { PureComponent } from 'react'

class Lifecycle extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            name:'sejal',
            city:'Pune'
        }
    }
    static getDerivedStateFromProps(props,state){
        return {name:props.name}
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({name:'Vedant'})
        },2000)
    }
    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log("State before updating:" + prevstate.name)
    }
    componentDidUpdate(){
        console.log("updated data:" +this.state.name)
    }
    render() {
        return (
            <div> 
                <h1>{this.state.name}</h1>
                <h3>City: {this.state.city}</h3>
                <button onClick={()=>this.setState({city:'Mumbai'}) }> Change city</button>
            </div>
        )
    }
}
export default Lifecycle