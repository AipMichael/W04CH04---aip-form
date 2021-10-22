const CreateAccount = () => {
  return (
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
        <button type="submit" className="btn btn-dark d-block w-25 mt-2 mb-2">
          Next
        </button>
      </form>
    </div>
  );
};
export default CreateAccount;
