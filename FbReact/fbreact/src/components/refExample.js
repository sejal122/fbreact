import React, { useRef } from 'react'

function RefExample() {
    const myInput=useRef()
    function handleChange(){
        console.log(myInput.current.value)
        myInput.current.style.backgroundColor='red'
        myInput.current.style.padding='10px'
        myInput.current.style.fontSize='30px'
    }

    return (
        <input ref={myInput} onChange={handleChange} type='text'></input>
    )
}

export default RefExample
