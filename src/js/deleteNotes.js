import renderNotes from "./renderNotes.js";
import storeNotes from "./storeNotes.js";

const displayDeleteModal = (subject, id) => {
  const deleteModal = document.querySelector(".delete-modal");
  const deleteMessage = document.querySelector(".delete-modal__text");

  deleteModal.classList.add("display-modal");
  deleteMessage.textContent = `Are you sure you want to delete this ${subject}`;
  const confirmDeleteButton = document.querySelector(
    ".delete-modal__confirm-button"
  );
  confirmDeleteButton.addEventListener("click", () => {
    confirmDelete(id);
  });
};

const closeModal = () => {
  const deleteModal = document.querySelector(".delete-modal");
  deleteModal.classList.remove("display-modal");
};

const initializeCloseModal = () => {
  const cancelDeleteButton = document.querySelector(
    ".delete-modal__cancel-button"
  );
  cancelDeleteButton.addEventListener("click", closeModal);

  const deleteModal = document.querySelector(".delete-modal");
  deleteModal.addEventListener("click", (e) => {
    if (e.target === deleteModal) {
      closeModal();
    }
  });
};
initializeCloseModal();

const confirmDelete = (id) => {
  const nodeList = JSON.parse(localStorage.getItem("notes-collection"));
  const filteredArray = nodeList.filter((note) => note.id !== id);
  storeNotes(filteredArray);
  renderNotes();
  closeModal();
};

export { closeModal, displayDeleteModal };
