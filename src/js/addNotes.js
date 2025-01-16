import { v4 as uuidv4 } from "uuid";

const generateRandomNumber = () => {
  // Random number generator
  // Math.random() * (min - max +1) + min
  return Math.floor(Math.random() * (10 - -10 + 1) + -10);
};

const addNotes = (subject, date, text) => {
  const notesArray = JSON.parse(localStorage.getItem("notes-collection")) || [];

  const note = {
    id: uuidv4(),
    subject: subject.value.trim(),
    date: date.value.trim(),
    text: text.value.trim(),
    rotation: generateRandomNumber(),
  };
  notesArray.push(note);
  console.log(notesArray);

  //   storeNotes()
};

export default addNotes;
