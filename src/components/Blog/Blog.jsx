import React from 'react';

const Blog = () => {
    return (
        <div className='bg-neutral-500 text-neutral-content'>
            <div className='w-5/6 pt-16 mx-auto mb-8'>
                <h3 className='mb-3 text-2xl font-semibold'>1. Differences between uncontrolled and controlled components ?</h3>
                <p className='text-xl ps-7'><span className='font-semibold underline'>Ans: </span>Controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            </div>
            <div className='w-5/6 mx-auto mb-8'>
                <h3 className='mb-3 text-2xl font-semibold'>2. How to validate React props using PropTypes ?</h3>
                <p className='text-xl ps-7'><span className='font-semibold underline'>Ans: </span> There are many option to validate the props using PropType , some option is <br />1. PropTypes.any : The prop can be of any data type. <br /> 2.PropTypes.bool : The prop should be a Boolean. <br /> 3.PropTypes.number : The prop should be a number. <br /> 4.PropTypes.string : The prop should be a string. <br /> 5.PropTypes.func : The prop should be a function. <br /> 6. PropTypes.array : The prop should be an array.</p>
            </div>
            <div className='w-5/6 mx-auto mb-8'>
                <h3 className='mb-3 text-2xl font-semibold'>3. Difference between nodejs and express js. ?</h3>
                <p className='text-xl ps-7'><span className='font-semibold underline'>Ans: </span>  The main difference between Node.js and Express.js is that Node.js is a runtime environment for JavaScript, while Express.js is a framework that runs on top of Node.js. Node.js provides the core functionality and allows developers to write server-side code in JavaScript, while Express.js provides a set of tools and features for building web applications and APIs on top of Node.js.</p>
            </div>
            <div className='w-5/6 pb-8 mx-auto'>
                <h3 className='mb-3 text-2xl font-semibold'>4. What is a custom hook, and why will you create a custom hook ?</h3>
                <p className='text-xl ps-7'><span className='font-semibold underline'>Ans: </span>
                     A custom hook is a reusable piece of code in React that allows you to abstract away complex logic or behavior into a single, reusable function. It's a way to encapsulate stateful logic so that it can be used across multiple components, and it helps to keep your code clean, organized, and easy to maintain. Custom hooks are created using the use prefix, and they can be used just like any other hook provided by React. <br /> <br /> Use:  To reuse logic across multiple components and to keep code clean, organized, and easy to maintain..</p>
            </div>



        </div>
    );
};

export default Blog;