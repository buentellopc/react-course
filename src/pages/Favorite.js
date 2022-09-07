import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

export default function FavoritePage(props) {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <div>
      <h1>My Favorites</h1>
      <MeetupList meetups={favoritesCtx.favorites} />
    </div>
  );
}
