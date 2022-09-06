import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm(props) {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup title</label>
          <input type="text" required id="title"></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup image</label>
          <input type="url" required id="image"></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup address</label>
          <input type="text" required id="address"></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup description</label>
          <textarea required rows="5" id="description"></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
