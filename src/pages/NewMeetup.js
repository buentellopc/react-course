import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetupPage(props) {
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-54585-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  return (
    <section>
      <h1>Add Newmeetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
