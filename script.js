function addToList() {
  const nameInput = document.getElementById("name");
  const list = document.querySelector(".list");

  const li = document.createElement("li");
  li.textContent = nameInput.value;
  list.appendChild(li);
}
