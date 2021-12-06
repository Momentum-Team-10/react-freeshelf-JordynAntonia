// creating custom components for each section 
<body>
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
    
</body>
















{/* following example from class  */}
// // import React from 'react'
// import ReactDOM from 'react-dom'
// import { useState } from 'react'


// const App = () => {
//     const [authors] = useState(['Kyle Simpson','Addy Osmani','Caleb Doxsy','Chris Pine'])
//     return (
//         <>
//             <h1> You Don't Know JS: Up and Going</h1>
//             {authors.map((author,index) => (
//                 <Author authorName={author} key={index} />
//             ))}
//             <div>If you're just getting into programming and/or JavaScript, this book will breifly explore what you need to get up and going</div>
//             <button>More information</button>
//         </>
//     )
// }

// const Author = (props) => {
//     console.log(props)
//     return (
//         <div className='author'>
//             <p>{props.authorName}</p>
//             <p>More Information</p>
//         </div>

//     )

// }

// ReactDOM.render(<App />, document.querySelector('#root'))
