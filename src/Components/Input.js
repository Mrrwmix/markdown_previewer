import React from "react";

const Input = () => {
  return (
    <div className='col-md-6'>
      <h1 className='text-center bg-secondary text-white'>
        Enter markdown here
      </h1>
      <textarea
        className='bg-dark text-white'
        style={{ width: "100%", height: "100vh" }}
        placeholder='Enter markdown here'
        name='markdown'
      />
    </div>
  );
};

export default Input;
