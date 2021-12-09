import "./App.css";
import Routes from "./routes";
import LoginForm from './components/LoginForm';
  
function App() {
  return (
    <div className="App">
      <div className="App-Container">
        <Routes></Routes>
        <LoginForm/>
      </div>
    </div>
  );
}

export default App;
