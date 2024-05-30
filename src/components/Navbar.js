import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo">
        <h3>ร้านอาหารที่แนะนำในขอนแก่น</h3>
      </Link>
      <Link to="/">กลับหน้าแรก</Link>
    </nav>
  );
}
