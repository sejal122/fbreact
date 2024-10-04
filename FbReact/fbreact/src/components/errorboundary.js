import React, { PureComponent } from 'react'

class Errorboundary extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            hasError:false
        }
    }
static getDerivedStateFromError(error){
return{
    hasError:true
}
}
componentDidCatch(error,info){
    console.log(error)
    console.log(info)
}
    render() {
        if(this.state.hasError){
            return (
                <div>Not a hero</div>
            )
        }
        return this.props.children
       
    }
}

export default Errorboundary