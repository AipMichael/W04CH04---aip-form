/* import { useState } from "react";
import { useContext } from "react";
import Context from "../Context/Context"; */

const LogIn = () => {
  /*  const {  } = useContext(Context); */
  return (
    <div className="container d-flex justify-content-center ">
      <form
        className="logIn rounded d-flex justify-content-center m-3 row"
        autoComplete="nope"
      >
        <h2 className="m-1">Log in</h2>
        <div className="d-block">
          <div className="form-group col-sm">
            <label htmlFor="logInUserName">Your user name:</label>
            <input
              type="email"
              className="form-control col-sm"
              id="logInUserName"
              placeholder="E.g.: Mary"
              required
            />
          </div>
          <div className="form-group col-sm">
            <label htmlFor="logInPassword">Your password</label>
            <input
              type="email"
              className="form-control col-sm"
              id="logInPassword"
              placeholder="E.g.: myPasword!24"
            />
          </div>
        </div>
        <div className="form-check d-flex justify-content-center">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Keep password
          </label>
        </div>
        <button type="submit" className="btn btn-dark d-block w-25 m-2">
          Go Back
        </button>
        <button type="submit" className="btn btn-dark d-block w-25 mt-2 mb-2">
          Next
        </button>
      </form>
    </div>
  );
};

export default LogIn;
