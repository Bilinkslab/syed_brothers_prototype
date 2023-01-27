import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SiteCard from "./SiteCard";
import ClientCard from "./ClientCard";
import PurchaserCard from "./PurchaserCard";
import JuniorSupervisorCard from "./JuniorSupervisorCard";
import SeniorSupervisorCard from "./SeniorSupervisorCard";
import AddSite from "./AddSite";
import Requests from "./Requests";

export default function Dashboard(props) {
  const getClientName = (id) => {
    for (let i = 0; i < props.clients.length; i++) {
      if (props.clients[i]._id == id) {
        return props.clients[i].name;
      }
    }
  };
  const getSupervisorName = (id) => {
    for (let i = 0; i < props.supervisors.length; i++) {
      if (props.supervisors[i]._id == id) {
        return props.supervisors[i].name;
      }
    }
  };
  const getPurchaserName = (id) => {
    for (let i = 0; i < props.purchasers.length; i++) {
      if (props.purchasers[i]._id == id) {
        return props.purchasers[i].name;
      }
    }
  };
  const getAreaUnitName = (id) => {
    for (let i = 0; i < props.areaUnits.length; i++) {
      if (props.areaUnits[i]._id == id) {
        return props.areaUnits[i].title;
      }
    }
  };
  const getCityName = (id) => {
    for (let i = 0; i < props.cities.length; i++) {
      if (props.cities[i]._id == id) {
        return props.cities[i].title;
      }
    }
  };
  const getMaterialName = (id) => {
    for (let i = 0; i < props.rawMaterials.length; i++) {
      if (props.rawMaterials[i]._id == id) {
        return props.rawMaterials[i].title;
      }
    }
  };
  return (
    <>
      <Row>
        <Col className="mb-3" lg={4} md={6} sm={12}>
          <SiteCard onClick={props.showAddSite} />
        </Col>
        <Col className="mb-3" lg={4} md={6} sm={12}>
          <ClientCard onClick={props.showAddClient} />
        </Col>
        <Col className="mb-3" lg={4} md={6} sm={12}>
          <SeniorSupervisorCard onClick={props.showAddSeniorSupervisor} />
        </Col>
        <Col className="mb-3" lg={4} md={6} sm={12}>
          <JuniorSupervisorCard onClick={props.showAddJuniorSupervisor} />
        </Col>
        <Col className="mb-3" lg={4} md={6} sm={12}>
          <PurchaserCard onClick={props.showAddPurchaser} />
        </Col>
        <Col className="mb-3" lg={4} md={6} sm={12}>
          <Requests
            sites={props.sites}
            clients={props.clients}
            areaUnits={props.areaUnits}
            purchasers={props.purchasers}
            rawMaterials={props.rawMaterials}
            supervisors={props.supervisors}
            cities={props.cities}
            getAreaUnitName={getAreaUnitName}
            getClientName={getClientName}
            getSupervisorName={getSupervisorName}
            getCityName={getCityName}
            getPurchaserName={getPurchaserName}
            getMaterialName={getMaterialName}
            setToast={props.setToast}
            setToastMsg={props.setToastMsg}
            update={props.updateSites}
          />
        </Col>
      </Row>
      <AddSite
        show={props.addSite}
        onShow={props.showAddSite}
        onHide={props.hideAddSite}
        showAddClient={props.showAddClient}
        showAddUnit={props.showAddUnit}
        showAddSeniorSupervisor={props.showAddSeniorSupervisor}
        showAddJuniorSupervisor={props.showAddJuniorSupervisor}
        showAddCity={props.showAddCity}
        showAddRawMaterial={props.showAddRawMaterial}
        showAddPurchaser={props.showAddPurchaser}
        areaUnits={props.areaUnits}
        cities={props.cities}
        clients={props.clients}
        purchasers={props.purchasers}
        rawMaterials={props.rawMaterials}
        getAreaUnitName={getAreaUnitName}
        getClientName={getClientName}
        getSupervisorName={getSupervisorName}
        getCityName={getCityName}
        getPurchaserName={getPurchaserName}
        getMaterialName={getMaterialName}
        supervisors={props.supervisors}
        updateAreaUnits={props.updateAreaUnits}
        updateCities={props.updateCities}
        updateClients={props.updateClients}
        updatePurchasers={props.updatePurchasers}
        updateRawMaterials={props.updateRawMaterials}
        updateSupervisors={props.updateSupervisors}
        setAreaUnits={props.setAreaUnits}
        setCities={props.setCities}
        setClients={props.setClients}
        setPurchasers={props.setPurchasers}
        setRawMaterials={props.setRawMaterials}
        setSupervisors={props.setSupervisors}
        getValueById={props.getValueById}
        setToast={props.setToast}
        setToastMsg={props.setToastMsg}
        update={props.updateSites}
      />
    </>
  );
}
