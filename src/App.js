import Login from "./component/login";
import Home from "./component/home";
import Register from "./component/register";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Home />
      <main>
        <Login />
        <Register />
      </main>
    </div>
  );
}

export default App;
