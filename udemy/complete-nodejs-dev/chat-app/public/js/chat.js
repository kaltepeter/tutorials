const socket = io();

socket.on("message", message => {
  console.log(message);
});

const messageForm = document.querySelector("#messageForm");

messageForm.addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const message = formData.get("message");
  socket.emit("sendMessage", message);
});

document.querySelector("#send-location").addEventListener("click", () => {
  if (!navigator.geolocation) {
    return alert("Geolocation is not supported by your browser");
  }
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    socket.emit("sendLocation", { latitude, longitude });
  });
});
