import React, { useReducer } from "react";

const UseReducer = () => {
  function reducer(state, action) {
    if (action.type === "Increase_Age") {
      return {
        age: state.age + 1,
      };
    }

    if (action.type === "Decrease_Age") {
      return {
        age: state.age - 1,
      };
    }

    if (action.type === "Zero_Age") {
      return {
        age: 0,
      };
    }
  }

  const [state, dispatch] = useReducer(reducer, { name: "Chandra", age: 22 });

  return (
    <>
      <p>My name is:{state.name}</p>
      <p>My age is : {state.age}</p>
      <button
        onClick={() => dispatch({ type: "Increase_Age" })}
        style={{
          border: "1px solid black",
          backgroundColor: "red",
          color: "white",
          padding: "4px",
        }}
      >
        Click On Me to increase age
      </button>{" "}
      <br /> <br />
      <button
        onClick={() => dispatch({ type: "Decrease_Age" })}
        style={{
          border: "1px solid black",
          backgroundColor: "red",
          color: "white",
          padding: "4px",
        }}
      >
        Click On Me to decrease age
      </button>{" "}
      <br /> <br />
      <button
        onClick={() => dispatch({ type: "Zero_Age" })}
        style={{
          border: "1px solid black",
          backgroundColor: "red",
          color: "white",
          padding: "4px",
        }}
      >
        Click On Me to to 0 your age
      </button>
    </>
  );
};

export default UseReducer;
