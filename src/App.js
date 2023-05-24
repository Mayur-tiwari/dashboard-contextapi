import './App.css';
import Dashboard from "./Components/Dashboard";
import ThemeContextProvider from "./Context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Dashboard/>
      </ThemeContextProvider>
    </div>  
  );
}

export default App;
