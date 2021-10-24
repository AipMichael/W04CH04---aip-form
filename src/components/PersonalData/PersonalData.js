import { useContext } from "react";
import Context from "../Context/Context";

const PersonalData = () => {
  const { personalInfo, changeInfo, onNext } = useContext(Context);

  return (
    <>
      <div className="container d-flex justify-content-center ">
        <form
          className="personalData rounded d-flex justify-content-center m-3 row"
          autoComplete={"off"}
          onSubmit={onNext}
        >
          <h2 className="m-1">Become one of us.</h2>
          <div className="d-block">
            <div className="form-group col-sm">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control col-sm"
                id="name"
                value={personalInfo.name}
                onChange={changeInfo}
                placeholder="E.g.: Mary"
                autoComplete="off"
                required
              />
            </div>
            <div className="form-group col-sm">
              <label htmlFor="lastname">Lastname</label>
              <input
                type="text"
                className="form-control col-sm"
                id="lastname"
                value={personalInfo.lastname}
                onChange={changeInfo}
                placeholder="E.g.: Font"
                required
              />
            </div>
            <div className="form-group col-sm">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control col-sm"
                id="email"
                value={personalInfo.email}
                onChange={changeInfo}
                placeholder="E.g.: mary.font@email.com"
                pattern="[^ @]*@[^ @]*"
                required
              />
            </div>
            <div className="form-group col-sm">
              <label htmlFor="birthday">Birthday</label>
              <input
                type="date"
                className="form-control col-sm"
                id="birthday"
                value={personalInfo.birthday}
                onChange={changeInfo}
                placeholder="dd / mm / yy"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-dark d-block w-25 mt-2 mb-2"
            onClick={onNext}
          >
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default PersonalData;
