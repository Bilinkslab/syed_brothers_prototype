import "./App.css";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <main className="p-3">
        <Dashboard />
      </main>
    </>
  );
}

export default App;
