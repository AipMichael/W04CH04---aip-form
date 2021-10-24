import "./App.css";
import { useState } from "react";
import CreateAccount from "./components/CreateAccount/CreateAccount.js";
import LogIn from "./components/LogIn/LogIn.js";
import PersonalData from "./components/PersonalData/PersonalData.js";
import Context from "./components/Context/Context";

function App() {
  const [usersData, setUsersData] = useState([]);

  const addPersonalInfo = (user) => {
    setUsersData([
      ...usersData,
      {
        ...user,
        id:
          usersData.length === 0
            ? (user.id = 1)
            : Math.max(...usersData.map((user) => user.id)) + 1,
      },
    ]);
    console.log("adding info");
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
    console.log(
      "This function does not work propperly. It should NOT send unless all fields are filled."
    );
    addPersonalInfo(personalInfo);
    console.log(usersData);
    /*  resetInfo(); */
  };

  return (
    <Context.Provider
      value={{
        usersData,
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
