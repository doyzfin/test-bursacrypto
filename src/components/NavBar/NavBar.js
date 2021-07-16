import { Container, Navbar } from "react-bootstrap";

import styles from "./NavBar.module.scss";

import imageProfile from "../../assets/img/bitmap.png";

function NavBar() {
  return (
    <Container fluid>
      <Container>
        <Navbar>
          <img alt="astronout" src={imageProfile} />
          <Navbar.Brand>
            <p className={styles.morning}>
              Good Morning
              <br />
              <span className={styles.fellas}>Fellas</span>
            </p>
          </Navbar.Brand>
        </Navbar>
      </Container>
    </Container>
  );
}
export default NavBar;
