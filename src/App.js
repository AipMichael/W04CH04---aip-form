import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header"></header>
      </div>
      <main>
        <h1 className="text-center">Hello and welcome</h1>
        <div className="container d-flex justify-content-center ">
          <form className="personalData rounded d-flex justify-content-center m-3 row">
            <h2 className="m-1">Become one of us.</h2>
            <div className="d-block">
              <div className="form-group col-sm">
                <label htmlFor="inputName">Name</label>
                <input
                  type="email"
                  className="form-control col-sm"
                  id="inputName"
                  placeholder="E.g.: Mary"
                />
              </div>
              <div className="form-group col-sm">
                <label htmlFor="inputLastname">Lastname</label>
                <input
                  type="email"
                  className="form-control col-sm"
                  id="inputLastname"
                  placeholder="E.g.: Font"
                />
              </div>
              <div className="form-group col-sm">
                <label htmlFor="birthday">Birthday</label>
                <input
                  type="password"
                  className="form-control col-sm"
                  id="birthday"
                  placeholder="dd / mm / yy"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-dark d-block w-25 m-2">
              Go Back
            </button>
            <button
              type="submit"
              className="btn btn-dark d-block w-25 mt-2 mb-2"
            >
              Next
            </button>
          </form>
        </div>
        <div className="container d-flex justify-content-center ">
          <form className="createAccount rounded d-flex justify-content-center m-3 row">
            <h2 className="m-1">Become one of us</h2>
            <div className="d-block">
              <div className="form-group col-sm">
                <label htmlFor="inputUserName">Pick a user name</label>
                <input
                  type="email"
                  className="form-control col-sm"
                  id="inputUserName"
                  placeholder="E.g.: Mary"
                />
              </div>
              <div className="form-group col-sm">
                <label htmlFor="inputSetPassword1">Set your password:</label>
                <input
                  type="email"
                  className="form-control col-sm"
                  id="inputSetPassword1"
                  placeholder="E.g.: myPasword!24"
                />
              </div>
              <div className="form-group col-sm">
                <label htmlFor="inputSetPassword2">
                  Reppeat your password here:
                </label>
                <input
                  type="password"
                  className="form-control col-sm"
                  id="inputSetPassword2"
                  placeholder="E.g.: myPasword!24"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-dark d-block w-25 m-2">
              Go Back
            </button>
            <button
              type="submit"
              className="btn btn-dark d-block w-25 mt-2 mb-2"
            >
              Next
            </button>
          </form>
        </div>
        <div className="container d-flex justify-content-center ">
          <form className="logIn rounded d-flex justify-content-center m-3 row">
            <h2 className="m-1">Log in</h2>
            <div className="d-block">
              <div className="form-group col-sm">
                <label htmlFor="logInUserName">Your user name:</label>
                <input
                  type="email"
                  className="form-control col-sm"
                  id="logInUserName"
                  placeholder="E.g.: Mary"
                />
              </div>
              <div className="form-group col-sm">
                <label htmlFor="logInPassword">Lastname</label>
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
            <button
              type="submit"
              className="btn btn-dark d-block w-25 mt-2 mb-2"
            >
              Next
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
