import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

export default function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.users.map((user) => (
        <MeetupItem
          key={user.id}
          id={user.id}
          name={user.name}
          lastName={user.lastName}
          address={user.address}
        />
      ))}
    </ul>
  );
}
