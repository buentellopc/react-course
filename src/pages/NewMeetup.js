import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetupPage(props) {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch("http://localhost:9092/v1/publish/user", {
      method: "POST",
      body: JSON.stringify(meetupData),
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Add Newmeetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
