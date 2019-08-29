const socket = io();

// server (emit) -> client (receive) --acknowledgement --> server

// client (emit) -> server (receive) --acknowledgement --> client

socket.on("message", message => {
  console.log(message);
});

const $messageForm = document.querySelector("#message-form");
const $messageInput = $messageForm.querySelector('input[type="text"]');
const $messageFormButton = $messageForm.querySelector('input[type="submit"]');
const $sendLocationButton = document.querySelector("#send-location");

$messageForm.addEventListener("submit", e => {
  e.preventDefault();

  $messageFormButton.setAttribute("disabled", "disabled");

  const formData = new FormData(e.target);
  const message = formData.get("message");
  socket.emit("sendMessage", message, error => {
    $messageFormButton.removeAttribute("disabled");
    $messageInput.value = "";
    $messageInput.focus();

    if (error) {
      console.error(error);
    }
    console.log("The message was delivered ");
  });
});

document.querySelector("#send-location").addEventListener("click", () => {
  if (!navigator.geolocation) {
    return alert("Geolocation is not supported by your browser");
  }

  $sendLocationButton.setAttribute("disabled", "disabled");

  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    socket.emit("sendLocation", { latitude, longitude }, () => {
      console.log(`Location shared!`);
      $sendLocationButton.removeAttribute("disabled");
    });
  });
});
