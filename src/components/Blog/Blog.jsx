import React from 'react';
import './Blog.css';
import img from '../../assets/All Images/Vector.png';

const Blog = () => {
    return (
        <div className='blog'>
            <div className='blog-header'>
                <img src={img} alt="" />
                <h2>Blog Section</h2>
            </div>
            <div className='answer'>
                <div className='ans-container'>
                    <h3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#9873FF" d="M20 6h-1v8c0 .55-.45 1-1 1H6v1c0 1.1.9 2 2 2h10l4 4V8c0-1.1-.9-2-2-2zm-3 5V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13l4-4h9c1.1 0 2-.9 2-2z" /></svg>          <span className='Q'>Question:</span> When should you use context API?</h3>
                    <p><span className='A'><b>Answer: </b></span>In React, props and state are both used to manage data and determine what should be rendered on the screen, but they have different roles and purposes: <br />
                        <br /> <b>a.</b>	props: Short for "properties", props is an object that contains data passed from a parent component to a child component. It is read-only and cannot be changed by the child component. props are used to customize or configure a component, and can be used to pass any type of data, including functions, objects, and arrays.
                        <br /> <br /> <b>b.</b>	state: state is an object that represents the internal state of a component. It can be changed by the component itself using the setState method, and any changes trigger a re-render of the component. state is used to store dynamic data that can change over time, such as user input, or data fetched from an API.
                        <br /> <br /> In summary, props are used to pass data from a parent component to a child component, while state is used to store and update data that is internal to a component.
                    </p>
                </div>

                <div className='ans-container'>
                    <h3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#9873FF" d="M20 6h-1v8c0 .55-.45 1-1 1H6v1c0 1.1.9 2 2 2h10l4 4V8c0-1.1-.9-2-2-2zm-3 5V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13l4-4h9c1.1 0 2-.9 2-2z" /></svg>          <span className='Q'>Question:</span> What is a custom hook?</h3>
                    <p><span className='A'><b>Answer: </b></span>The useEffect hook in React is primarily used to perform side effects that are not related to data loading. Here are some of the other use cases for useEffect:
                        <br /> <br />
                        <b>a.</b>	Updating the document title: You can use useEffect to update the title of the document based on the state of the component or other data. <br /> <br />
                        <b>b.</b>	Event listeners: You can use useEffect to add or remove event listeners, such as keyboard or mouse events. <br /><br />
                        <br /> <b>c.</b>	Cleanup: You can use useEffect to perform cleanup operations when the component is unmounted. For example, you can use useEffect to cancel a timer or close a websocket connection.
                        <br /> <br />
                        <b>d.</b>	Animations: You can use useEffect to perform animations based on the state of the component or other data.
                    </p>
                </div>

                <div className='ans-container'>
                    <h3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#9873FF" d="M20 6h-1v8c0 .55-.45 1-1 1H6v1c0 1.1.9 2 2 2h10l4 4V8c0-1.1-.9-2-2-2zm-3 5V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13l4-4h9c1.1 0 2-.9 2-2z" /></svg>          <span className='Q'>Question:</span> What is useRef?</h3>
                    <p><span className='A'><b>Answer: </b></span>In React, the useState hook is used to manage state in functional components. Here's how it works: <br /> <br />
                        <b>a.</b>	Initializing state: You call the useState hook and pass in an initial state value. This hook returns an array with two values: the current state value, and a function to update the state value. <br /> <br />
                        <b>b.</b>	Updating state: You can update the state by calling the setCount function and passing in a new value. When you call this function, React will re-render the component with the new state value. <br /> <br />
                        <b>c.</b>	Using state: You can use the count variable to display the current state value in your component. <br /> <br />
                        When the component is rendered, React will call the useState hook and initialize the state with the initial value (in this case, 0). When the button is clicked, the handleClick function updates the state by calling the setCount function with a new value (in this case, count + 1). React will then re-render the component with the updated state value, and the count variable will display the new value in the paragraph element.
                    </p>
                </div>

                <div className='ans-container'>
                    <h3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#9873FF" d="M20 6h-1v8c0 .55-.45 1-1 1H6v1c0 1.1.9 2 2 2h10l4 4V8c0-1.1-.9-2-2-2zm-3 5V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13l4-4h9c1.1 0 2-.9 2-2z" /></svg>          <span className='Q'>Question:</span> What is useMemo?</h3>
                    <p><span className='A'><b>Answer: </b></span>React is a JavaScript library that allows you to build web applications with reusable UI components. Here's a high-level overview of how React works: <br /> <br />
                        <b>a.</b>	Component-based architecture: React uses a component-based architecture, which means you can break your UI down into smaller, reusable components. Components are JavaScript functions that return a chunk of HTML, which can include other components.
                        <br /> <br />
                        <b>b.</b>	Virtual DOM: React uses a virtual DOM (Document Object Model) to efficiently update the user interface. The virtual DOM is a lightweight representation of the actual DOM, and it allows React to make changes to the UI without actually modifying the DOM itself.
                        <br /> <br />
                        <b>c.</b>	State management: React provides a simple way to manage state within your components. You can use the useState hook to create state variables and the useEffect hook to perform side effects when the state changes.
                        <br /> <br />
                        <b>d.</b>	Unidirectional data flow: React uses a unidirectional data flow, which means data flows in one direction from the parent component to the child component. When the state changes, React re-renders the component and updates the child components as needed.
                        <br /> <br />
                        <b>e.</b>	Reusability and modularity: React's component-based architecture and unidirectional data flow make it easy to build reusable and modular UI components. This can help you write clean, maintainable code that is easy to test and refactor.
                        <br /> <br />
                        <b>f.</b>	JSX syntax: React uses a syntax called JSX, which allows you to write HTML-like code within your JavaScript. JSX makes it easier to work with components and provides a more declarative way to describe your UI.
                        <br /> <br />
                        In summary, React is a library that allows you to build UI components with a simple, efficient, and reusable approach. It uses a virtual DOM, state management, and a unidirectional data flow to provide a fast and responsive user interface.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;