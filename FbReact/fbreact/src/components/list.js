import React from 'react'

function List(props) {
    let todos=[
        " Practice html",
        " Practice css",
        " Take a break",
        " Install nodejs"
    ]

    return (
        <div>
            <h1>Hello , {props.user(false)} </h1>
            {/* <button onClick={handleCounter}>   Clicked {counter} times</button> */}
            <ol>
                {todos.map((todo)=>{
                    return <li key={todo}>{todo}</li>

                })}

            </ol>
        </div>
    )
}

export default List
