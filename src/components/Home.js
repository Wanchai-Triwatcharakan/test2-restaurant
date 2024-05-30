import restaurant from "../data/restaurant";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="blogs-container">
      <article>
        {restaurant.map((item) => (
          <Link to={`/restaurant/${item.id}`} key={item.id}>
            <div className="card">
              <h2>{item.title}</h2>
              <img src={item.image_url} alt="รูปภาพร้านอาหาร"/>
            </div>
          </Link>
        ))}
      </article>
    </div>
  );
}
