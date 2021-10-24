import { useContext } from "react";
import Context from "../Context/Context";

const CreateAccount = () => {
  const { personalInfo, changeInfo, onNext } = useContext(Context);

  return (
    <div className="container d-flex justify-content-center ">
      <form
        className="createAccount rounded d-flex justify-content-center m-3 row"
        autoComplete="off"
        onSubmit={onNext}
      >
        <h2 className="m-1">Become one of us</h2>
        <div className="d-block">
          <div className="form-group col-sm">
            <label htmlFor="userName">Pick a user name</label>
            <input
              type="email"
              className="form-control col-sm"
              id="userName"
              value={personalInfo.userName}
              onChange={changeInfo}
              placeholder="E.g.: Mary"
              required
            />
          </div>
          <div className="form-group col-sm">
            <label htmlFor="password">Set your password:</label>
            <input
              type="email"
              className="form-control col-sm"
              id="password"
              value={personalInfo.password}
              onChange={changeInfo}
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
        <button
          type="submit"
          className="btn btn-dark d-block w-25 m-2"
          onClick={onNext}
        >
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
