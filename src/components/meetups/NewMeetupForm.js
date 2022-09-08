import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm(props) {
  const nameInputRef = useRef();
  const lastNameInputRef = useRef();
  const addressInputRef = useRef();
  const genderInputRef = useRef();
  const citizenIdInputRef = useRef();
  const birthDateInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredGender = genderInputRef.current.value;
    const enteredCitizenNumber = citizenIdInputRef.current.value;
    const enteredBirthDate = birthDateInputRef.current.value;

    const meetupData = {
      name: enteredName,
      lastName: enteredLastName,
      addressID: enteredAddress,
      gender: enteredGender,
      citizenNumber: enteredCitizenNumber,
      status: true,
      birthDate: enteredBirthDate,
    };

    console.log(meetupData);
    props.onAddMeetup(meetupData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" ref={nameInputRef}></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            required
            id="lastName"
            ref={lastNameInputRef}
          ></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="birthDate">Date of birth</label>
          <input
            type="date"
            required
            id="birthDate"
            ref={birthDateInputRef}
          ></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            ref={addressInputRef}
          ></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="gender">Gender</label>
          <input required id="gender" ref={genderInputRef}></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="citizenNumber">Citizen ID</label>
          <input
            type="text"
            required
            id="citizenNumber"
            ref={citizenIdInputRef}
          ></input>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
