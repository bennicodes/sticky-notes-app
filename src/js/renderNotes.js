import { displayDeleteModal } from "./deleteNotes";

const renderNotes = () => {
  // Fetch notes from localStorage
  const notesList = JSON.parse(localStorage.getItem("notes-collection"));
  const notesContainer = document.querySelector(".notes-container");

  // Render notes
  if (notesList) {
    notesContainer.innerHTML = "";
    const reveresedNotesArray = notesList.slice().reverse();

    reveresedNotesArray.forEach((note) => {
      // Create note elements
      const noteCard = document.createElement("div");
      const noteSubject = document.createElement("span");
      const noteDate = document.createElement("span");
      const detailsToolsContainer = document.createElement("div");
      const dateSubjectContainer = document.createElement("div");
      const deleteButton = document.createElement("button");
      const editButton = document.createElement("button");
      const editDeleteContainer = document.createElement("div");
      const noteText = document.createElement("p");

      //   Append elements
      notesContainer.append(noteCard);
      noteCard.append(detailsToolsContainer);
      detailsToolsContainer.append(dateSubjectContainer, editDeleteContainer);
      noteCard.append(noteText);
      dateSubjectContainer.append(noteSubject, noteDate);
      editDeleteContainer.append(deleteButton, editButton);

      //   Insert note data
      noteSubject.textContent = note.subject;
      noteDate.textContent = note.date;
      noteText.textContent = note.text;
      deleteButton.textContent = "❌";
      editButton.textContent = "✍🏽";

      // Add classes to note elements
      noteCard.classList.add("note-card");
      detailsToolsContainer.classList.add("note-card__details-tools-container");
      dateSubjectContainer.classList.add("note-card__details-container");
      editDeleteContainer.classList.add("note-card__tools-container");
      deleteButton.classList.add("note-card__delete-button");
      editButton.classList.add("note-card__edit-button");
      noteText.classList.add("note-card__text");

      noteCard.style.transform = `rotate(${note.rotation}deg)`;
      // Adding event listeners
      deleteButton.addEventListener("click", () => {
        displayDeleteModal(note.subject, note.id);
      });

      editButton.addEventListener("click", () => {
        editNote(note);
      });
    });
  }
};

export default renderNotes;
