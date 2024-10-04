import React from 'react'

function HovermeRenderprops(props) {
   const {counter,handleCounter}=props
    return (
        <div>
            <button onMouseOver={handleCounter}>Hover me renderproprs hovered {counter} times </button>
        </div>
    )
}

export default HovermeRenderprops
