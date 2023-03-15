import React, {useEffect, useState} from 'react';
import './App.css';

function Counter() {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <button onClick={() => setCount(count - 1)}>
                -
            </button>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                +
            </button>
        </div>
    );
}

function NavBar() {
    return (
        <div className="NavBar">
            <a href="https://www.buckeyecandycompany.com">Home</a>
            <a href="https://www.buckeyecandycompany.com/about">About</a>
            <a href="https://www.buckeyecandycompany.com/contact">Contact</a>
        </div>
    );
}

function NewComponent() {
    return (
        <div>
            <h1>Hello, world!</h1>
        </div>
    );
}

function Content() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:3030/users")
            .then((res) => res.json())
            .then((data) => setMessage(data.message));
    }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

function App() {
  return (
    <div className="App">
        <NavBar/>
        <header className="App-header">
            <img src="http://www.buckeyecandycompany.com/img/BuckeyeCandyCompany.svg" className="App-logo" alt="logo"/>
            <p> Welcome to the Buckeye Candy Company! </p>
        </header>
        <Counter/>
        <NewComponent/>
        <Content/>
    </div>
  );
}

export default App;
