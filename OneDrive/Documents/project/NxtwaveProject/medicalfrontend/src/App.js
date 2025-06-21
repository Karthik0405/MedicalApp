import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/medicalHome";
import Login from "./components/medicareLogin";
import Caretaker from "./components/careTaker";
import Patient from "./components/patient";
import SignupForm from "./components/signUpForm";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignupForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/caretaker" component={Caretaker} />
      <ProtectedRoute exact path="/patient" component={Patient} />
    </Switch>
  </BrowserRouter>
);

export default App;
