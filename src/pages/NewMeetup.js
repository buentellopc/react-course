import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetupPage(props) {
  function addMeetupHandler(meetupData) {}
  return (
    <section>
      <h1>Add Newmeetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
