import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav>
      <FontAwesomeIcon icon={faEarthEurope} className="nav--logo" />
      {/* <a className="nav--link-home" href="#" rel="noopener noreferrer"> */}
      <h1 className="nav--title">My Travel Journal.</h1>
      {/* </a> */}
    </nav>
  );
}