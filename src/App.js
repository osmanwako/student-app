import Login from "./component/login";
import Home from "./component/home";
import Register from "./component/register";
import Header from "./component/header"
import "./App.css";
import { useState } from "react";
function App() {
  const [Dashboard, setDashboard] = useState(<Home />);
  const handlemenu = (page, e) => {
    e.preventDefault();
    if (page === 'login') {
      setDashboard(() => <Login />);
    }
    else if (page === 'register') {
      setDashboard(() => <Register />);
    }
    else {
      setDashboard(() => <Home />);
    }
  }
  return (
    <div className="App">
      <Header handlemenu={handlemenu} current="12-09-1997" name="Osman" />
      {Dashboard}
    </div>

  );
}

export default App;
