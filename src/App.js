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
import { useReducer, useState, useEffect } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

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

  const [areaUnits, setAreaUnits] = useState([]);
  const [cities, setCities] = useState([]);
  const [clients, setClients] = useState([]);
  const [purchasers, setPurchasers] = useState([]);
  const [rawMaterials, setRawMaterials] = useState([]);
  const [supervisors, setSupervisors] = useState([]);
  const [sites, setSites] = useState([]);
  const [toast, setToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const updateAreaUnits = async () => {
    const res = await fetch(
      `http://localhost:${process.env.REACT_APP_API}/area_unit`
    ).then((res) => res.json());
    setAreaUnits(res.data);
  };

  const updateSites = async () => {
    const res = await fetch(
      `http://localhost:${process.env.REACT_APP_API}/site`
    ).then((res) => res.json());
    setSites(res.data);
  };

  const updateCities = async () => {
    const res = await fetch(
      `http://localhost:${process.env.REACT_APP_API}/city`
    ).then((res) => res.json());
    setCities(res.data);
  };

  const updateClients = async () => {
    const res = await fetch(
      `http://localhost:${process.env.REACT_APP_API}/client`
    ).then((res) => res.json());
    setClients(res.data);
  };

  const updatePurchasers = async () => {
    const res = await fetch(
      `http://localhost:${process.env.REACT_APP_API}/purchaser`
    ).then((res) => res.json());
    setPurchasers(res.data);
  };

  const updateRawMaterials = async () => {
    const res = await fetch(
      `http://localhost:${process.env.REACT_APP_API}/raw_material`
    ).then((res) => res.json());
    setRawMaterials(res.data);
  };

  const updateSupervisors = async () => {
    const res = await fetch(
      `http://localhost:${process.env.REACT_APP_API}/supervisor`
    ).then((res) => res.json());
    setSupervisors(res.data);
  };

  useEffect(() => {
    updateAreaUnits();
    updateCities();
    updateClients();
    updatePurchasers();
    updateRawMaterials();
    updateSupervisors();
    updateSites();
  }, []);

  const reducer = (state, action) => {
    switch (action.type) {
      case "on":
        return state.map((i) => {
          if (i.id === action.id) {
            i.status = true;
          }
          return i;
        });
      case "off":
        return state.map((i) => {
          if (i.id === action.id) {
            i.status = false;
          }
          return i;
        });
      default:
        break;
    }
  };

  const getValueById = async (collection, id, key) => {
    const res = await fetch(
      `http://localhost:${process.env.REACT_APP_API}/${collection}/${id}`
    ).then((res) => res.json());
    if (!res.data) return "";
    return res.data[key];
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
          showAddSeniorSupervisor={() =>
            dispatch({ type: "on", id: "add_senior_supervisor" })
          }
          hideAddSeniorSupervisor={() =>
            dispatch({ type: "off", id: "add_senior_supervisor" })
          }
          addJuniorSupervisor={state[4].status}
          showAddJuniorSupervisor={() =>
            dispatch({ type: "on", id: "add_junior_supervisor" })
          }
          hideAddJuniorSupervisor={() =>
            dispatch({ type: "off", id: "add_junior_supervisor" })
          }
          addCity={state[5].status}
          showAddCity={() => dispatch({ type: "on", id: "add_city" })}
          hideAddCity={() => dispatch({ type: "off", id: "add_city" })}
          addPurchaser={state[6].status}
          showAddPurchaser={() => dispatch({ type: "on", id: "add_purchaser" })}
          hideAddPurchaser={() =>
            dispatch({ type: "off", id: "add_purchaser" })
          }
          addRawMaterial={state[7].status}
          showAddRawMaterial={() =>
            dispatch({ type: "on", id: "add_raw_material" })
          }
          hideAddRawMaterial={() =>
            dispatch({ type: "off", id: "add_raw_material" })
          }
          getValueById={getValueById}
          areaUnits={areaUnits}
          cities={cities}
          clients={clients}
          purchasers={purchasers}
          rawMaterials={rawMaterials}
          supervisors={supervisors}
          updateAreaUnits={updateAreaUnits}
          updateCities={updateCities}
          updateClients={updateClients}
          updatePurchasers={updatePurchasers}
          updateRawMaterials={updateRawMaterials}
          updateSupervisors={updateSupervisors}
          updateSites={updateSites}
          setAreaUnits={setAreaUnits}
          setCities={setCities}
          setClients={setClients}
          setPurchasers={setPurchasers}
          setRawMaterials={setRawMaterials}
          setSupervisors={setSupervisors}
          setToast={setToast}
          setToastMsg={setToastMsg}
          sites={sites}
        />
        <AddClient
          show={state[1].status}
          onShow={() => dispatch({ type: "on", id: "add_client" })}
          onHide={() => dispatch({ type: "off", id: "add_client" })}
          update={updateClients}
          setToast={setToast}
          setToastMsg={setToastMsg}
        />
        <AddUnit
          show={state[2].status}
          onShow={() => dispatch({ type: "on", id: "add_unit" })}
          onHide={() => dispatch({ type: "off", id: "add_unit" })}
          update={updateAreaUnits}
          setToast={setToast}
          setToastMsg={setToastMsg}
        />
        <AddSeniorSupervisor
          show={state[3].status}
          onShow={() => dispatch({ type: "on", id: "add_senior_supervisor" })}
          onHide={() => dispatch({ type: "off", id: "add_senior_supervisor" })}
          update={updateSupervisors}
          setToast={setToast}
          setToastMsg={setToastMsg}
        />
        <AddJuniorSupervisor
          show={state[4].status}
          onShow={() => dispatch({ type: "on", id: "add_junior_supervisor" })}
          onHide={() => dispatch({ type: "off", id: "add_junior_supervisor" })}
          update={updateSupervisors}
          setToast={setToast}
          setToastMsg={setToastMsg}
        />
        <AddCity
          show={state[5].status}
          onShow={() => dispatch({ type: "on", id: "add_city" })}
          onHide={() => dispatch({ type: "off", id: "add_city" })}
          update={updateCities}
          setToast={setToast}
          setToastMsg={setToastMsg}
        />
        <AddPurchaser
          show={state[6].status}
          onShow={() => dispatch({ type: "on", id: "add_purchaser" })}
          onHide={() => dispatch({ type: "off", id: "add_purchaser" })}
          update={updatePurchasers}
          setToast={setToast}
          setToastMsg={setToastMsg}
        />
        <AddRawMaterial
          show={state[7].status}
          onShow={() => dispatch({ type: "on", id: "add_raw_material" })}
          onHide={() => dispatch({ type: "off", id: "add_raw_material" })}
          update={updateRawMaterials}
          setToast={setToast}
          setToastMsg={setToastMsg}
        />
      </main>
      <ToastContainer className="p-3" position={"bottom-end"}>
        <Toast
          onClose={() => setToast(false)}
          show={toast}
          delay={3000}
          autohide
        >
          <Toast.Header closeButton={false}>
            <strong className="me-auto">System</strong>
            <small>Just Now</small>
          </Toast.Header>
          <Toast.Body>{toastMsg}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default App;
