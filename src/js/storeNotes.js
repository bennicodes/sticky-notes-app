const storeNotes = (notesArray) => {
  localStorage.setItem("notes-collection", JSON.stringify(notesArray));
};

export default storeNotes;
