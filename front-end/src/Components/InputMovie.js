import React, { Fragment, useState } from 'react';

const InputMovie = () => {
   const [ description, setDescription ] = useState("hello");

   const onSubmitForm = async e => {
    e.preventDefault();
    try {
     const body = { description };
     const response = await fetch("http://localhost:3000/watchlist", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
     });
     console.log(response)
    } catch (error) {
      console.error(error.message)
    }

   }

  return (
  <Fragment>
    <h1 className="text-center mt-5"> Movie List</h1>
    <form className="d-flex mt-5" onSubmit={onSubmitForm}>
      <input type="text" className="form-control" value={ description } onChange={e => setDescription(e.target.value)}/>
      <button className="btn btn-success"> ADD </button>
    </form>
  </Fragment>
    
  )
};

export default InputMovie;