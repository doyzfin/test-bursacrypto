import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <Container fluid className={styles.mainContainer}>
      <Container>
        <Row>
          <Col xs={6}>
            <h1 className={styles.mainText}>wknd@2020</h1>
          </Col>
          <Col xs={6}>
            <Card className={styles.cardAlpha}>alpha version 0.1</Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
