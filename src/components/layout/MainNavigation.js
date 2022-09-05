import { Link } from "react-router-dom";

export default function MainNavigation(props) {
  return (
    <header>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
            <Link to="/new-meetup">Add New Meetup</Link>
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
