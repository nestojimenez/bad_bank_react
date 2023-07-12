import {
  BrowserRouter as Route,
  //BrowserRouter,
  HashRouter,
  Switch,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import AllData from "./components/AllData";

//Just call user provider in order to use all the functionality on UserContext.js
import {UserProvider } from "./context/UserContext";

//Need to try browserRouter usgin component={Home}
function App() {
  return (
    <div className="container" style={{ padding: "20px" }}>
      <NavBar />
      <UserProvider>
        <HashRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/CreateAccount">
              <CreateAccount />
            </Route>
            <Route path="/AllData">
              <AllData />
            </Route>
          </Switch>
        </HashRouter>
      </UserProvider>
    </div>
  );
}

export default App;
