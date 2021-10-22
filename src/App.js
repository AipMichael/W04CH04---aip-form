import "./App.css";
import CreateAccount from "./components/CreateAccount/CreateAccount.js";
import LogIn from "./components/LogIn/LogIn.js";
import PersonalData from "./components/PersonalData/PersonalData.js";

function App() {
  return (
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
  );
}

export default App;
