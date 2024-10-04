import React, { PureComponent } from 'react'

class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            education:"BE computer",
            marks:'85%'
        }
        
        
    }
   changeMMarks=()=>{
    this.setState({
        marks:'95%'
    })
   }
    render() {
        return (
            <div>
<h1>WELCOME from header {this.props.name}!</h1>
<h5>My age is  from header {this.props.age}</h5>
               <h1>Welcome {this.props.firstname} {this.props.lname}</h1> 
               <table>
                <tr>
                    <th>Education</th>
                    <th>Marks</th>
                </tr>
                <tr>
                    <td>{this.state.education}</td>
                    <td>{this.state.marks}</td>
                </tr>
               </table>
               <button onClick={this.changeMMarks}>update marks</button>

               
            </div>
        )
    }
}

export default Header