import React, { useReducer } from "react";
import "../App.css";

const Test = (props) => {
  const initialState = {
    name: '',
    email: ''
};
 

  function reducer(state, action) {
    return {
      ...state,
      [action.type]: action.payload
    };
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  function handleChange(e) {
    console.log(e)
    const { fn, value } = e.target;
    dispatch({
      type: fn,
      payload: value
    });
  }

  return (
    <div>
      {JSON.stringify(state)}
      <div>
        <label>
          <span>Name:</span>{' '}
          <input
            name="name"
            value={state.fn}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          <span>Email:</span>{' '}
          <input
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
};

export default Test;