const PersonalData = () => {
  return (
    <>
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
          <button type="submit" className="btn btn-dark d-block w-25 mt-2 mb-2">
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default PersonalData;
