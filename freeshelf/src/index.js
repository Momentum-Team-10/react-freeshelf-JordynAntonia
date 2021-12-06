// creating custom components for each section 
{/* <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
    <script type="text/babel">
    function Message({children}) {
        return <div className="message">{children}</div>
    const element = (
    <div className="container">
        <Message>Hello World</Message>
        <Message>Goodbye World</Message>
    </div>
    )

    ReactDOM.render(element, document.getElementById('root'))

</script>
    
</body> */}
















// {/* following example from class  */}
import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react', 'Book',


const App = () => {
    const [authors] = useState(['Kyle Simpson','Addy Osmani','Caleb Doxsy','Chris Pine'])
    return (
        <>
            {authors.map((author,index) => (
                <Author authorName={author} key={index} />
            ))}
            {/* Add a "disclousure drop down tab for the button */}
            <button aria-expanded="false" aria-controls="desc">More information</button>
        </>
    )
}

function Book () = {
    title:
    author:
    shortDescription:
    image:

}

ReactDOM.render(<App />, document.querySelector('#root'))
