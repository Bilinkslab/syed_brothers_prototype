import "./App.css";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/Navbar";
import AddClient from "./components/AddClient";
import AddUnit from "./components/AddUnit";
import AddCity from "./components/AddCity";
import AddRawMaterial from "./components/AddRawMaterial";
import AddSeniorSupervisor from "./components/AddSeniorSupervisor";
import AddJuniorSupervisor from "./components/AddJuniorSupervisor";
import AddPurchaser from "./components/AddPurchaser";
import { useReducer } from "react";

function App() {
  const states = [
    { id: "add_site", status: false },
    { id: "add_client", status: false },
    { id: "add_unit", status: false },
    { id: "add_senior_supervisor", status: false },
    { id: "add_junior_supervisor", status: false },
    { id: "add_city", status: false },
    { id: "add_purchaser", status: false },
    { id: "add_raw_material", status: false },
  ];

  const reducer = (state, action) => {
    switch (action.type) {
      case "on":
        return state.map((i) => {
          if (i.id === action.id) {
            i.status = true;
          }
          return i;
        });
        break;
      case "off":
        return state.map((i) => {
          if (i.id === action.id) {
            i.status = false;
          }
          return i;
        });
        break;
      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, states);

  return (
    <>
      <NavBar />
      <main className="p-3">
        <Dashboard
          addSite={state[0].status}
          showAddSite={() => dispatch({ type: "on", id: "add_site" })}
          hideAddSite={() => dispatch({ type: "off", id: "add_site" })}
          addClient={state[1].status}
          showAddClient={() => dispatch({ type: "on", id: "add_client" })}
          hideAddClient={() => dispatch({ type: "off", id: "add_client" })}
          addUnit={state[2].status}
          showAddUnit={() => dispatch({ type: "on", id: "add_unit" })}
          hideAddUnit={() => dispatch({ type: "off", id: "add_unit" })}
          addSeniorSupervisor={state[3].status}
          showAddSeniorSupervisor={() => dispatch({ type: "on", id: "add_senior_supervisor" })}
          hideAddSeniorSupervisor={() => dispatch({ type: "off", id: "add_senior_supervisor" })}
          addJuniorSupervisor={state[4].status}
          showAddJuniorSupervisor={() => dispatch({ type: "on", id: "add_junior_supervisor" })}
          hideAddJuniorSupervisor={() => dispatch({ type: "off", id: "add_junior_supervisor" })}
          addCity={state[5].status}
          showAddCity={() => dispatch({ type: "on", id: "add_city" })}
          hideAddCity={() => dispatch({ type: "off", id: "add_city" })}
          addPurchaser={state[6].status}
          showAddPurchaser={() => dispatch({ type: "on", id: "add_purchaser" })}
          hideAddPurchaser={() => dispatch({ type: "off", id: "add_purchaser" })}
          addRawMaterial={state[7].status}
          showAddRawMaterial={() => dispatch({ type: "on", id: "add_raw_material" })}
          hideAddRawMaterial={() => dispatch({ type: "off", id: "add_raw_material" })}
        />
        <AddClient
          show={state[1].status}
          onShow={() => dispatch({ type: "on", id: "add_client" })}
          onHide={() => dispatch({ type: "off", id: "add_client" })}
        />
        <AddUnit
          show={state[2].status}
          onShow={() => dispatch({ type: "on", id: "add_unit" })}
          onHide={() => dispatch({ type: "off", id: "add_unit" })}
        />
        <AddSeniorSupervisor
          show={state[3].status}
          onShow={() => dispatch({ type: "on", id: "add_senior_supervisor" })}
          onHide={() => dispatch({ type: "off", id: "add_senior_supervisor" })}
        />
        <AddJuniorSupervisor
          show={state[4].status}
          onShow={() => dispatch({ type: "on", id: "add_junior_supervisor" })}
          onHide={() => dispatch({ type: "off", id: "add_junior_supervisor" })}
        />
        <AddCity
          show={state[5].status}
          onShow={() => dispatch({ type: "on", id: "add_city" })}
          onHide={() => dispatch({ type: "off", id: "add_city" })}
        />
        <AddPurchaser
          show={state[6].status}
          onShow={() => dispatch({ type: "on", id: "add_purchaser" })}
          onHide={() => dispatch({ type: "off", id: "add_purchaser" })}
        />
        <AddRawMaterial
          show={state[7].status}
          onShow={() => dispatch({ type: "on", id: "add_raw_material" })}
          onHide={() => dispatch({ type: "off", id: "add_raw_material" })}
        />
      </main>
    </>
  );
}

export default App;
