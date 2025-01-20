const validateNotes = (subject, date, text) => {
  const feedbackMessage = document.querySelector(".form__error-text");
  const formattedSubject = subject.value.trim();
  const formattedDate = date.value.trim();
  const formattedText = text.value.trim();

  //   Validate subject
  if (!formattedSubject) {
    feedbackMessage.style.visibility = "visible";
    feedbackMessage.textContent = "Subject is required.";
    return false;
  }

  //   Validate date
  if (!formattedDate) {
    feedbackMessage.style.visibility = "visible";
    feedbackMessage.textContent = "Date is required.";
    return false;
  }
  //   Validate note´s text
  if (!formattedText) {
    feedbackMessage.style.visibility = "visible";
    feedbackMessage.textContent = "Note text is required.";
    return false;
  }
  // If validation passes, provide success feedback
  feedbackMessage.style.visibility = "visible";
  feedbackMessage.textContent = "Note submitted successfully!";
  //   Hide success feedback after 2 seconds
  setTimeout(() => {
    feedbackMessage.style.visibility = "hidden";
    feedbackMessage.textContent = "";
  }, 2000);
  return true;
};

export default validateNotes;
