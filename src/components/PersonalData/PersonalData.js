import { useState } from "react";

const PersonalData = ({ onSubmit }) => {
  const initialInfo = {
    name: "",
    lastname: "",
    email: "",
    birthday: "",
  };

  const [personalInfo, setPersonalInfo] = useState(initialInfo);

  const changeInfo = (event) => {
    setPersonalInfo({
      ...personalInfo,
      [event.target.id]: event.target.value,
    });
  };

  const resetInfo = () => {
    setPersonalInfo(initialInfo);
  };

  const onNext = (event) => {
    event.preventDefault();
    onSubmit(personalInfo);
    resetInfo();
  };

  return (
    <>
      <div className="container d-flex justify-content-center ">
        <form
          className="personalData rounded d-flex justify-content-center m-3 row"
          autoComplete="off"
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
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-dark d-block w-25 mt-2 mb-2"
            onClick={onSubmit}
          >
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default PersonalData;
