import Login from "./component/login";
import Home from "./component/home";
import { Register } from "./component/home";


import './App.css';

function App() {
  return (
    <div className="App">
      <Login />
      <Register />
      <Home />
    </div>
  );
}

export default App;
