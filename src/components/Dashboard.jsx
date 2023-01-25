import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SiteCard from "./SiteCard";
import ClientCard from "./ClientCard";
import PurchaserCard from "./PurchaserCard";
import JuniorSupervisorCard from "./JuniorSupervisorCard";
import SeniorSupervisorCard from "./SeniorSupervisorCard";
import AddSite from "./AddSite";

export default function Dashboard(props) {
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
      />
    </>
  );
}
