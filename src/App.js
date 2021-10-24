import "./App.css";
import { useState } from "react";
import CreateAccount from "./components/CreateAccount/CreateAccount.js";
import LogIn from "./components/LogIn/LogIn.js";
import PersonalData from "./components/PersonalData/PersonalData.js";
import Context from "./components/Context/Context";

function App() {
  const addPersonalInfo = () => {
    console.log("adding info now");
  };

  const initialInfo = {
    name: "",
    lastname: "",
    email: "",
    birthday: "",
    userName: "",
    password: "",
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
    addPersonalInfo(personalInfo);
    resetInfo();
  };

  return (
    <Context.Provider
      value={{
        initialInfo,
        changeInfo,
        personalInfo,
        setPersonalInfo,
        resetInfo,
        onNext,
      }}
    >
      <>
        <header className="App-header">
          <h1 className="text-center m-4">Hello and welcome</h1>
        </header>
        <main>
          <PersonalData />
          <CreateAccount />
          <LogIn />
        </main>
      </>
    </Context.Provider>
  );
}

export default App;
