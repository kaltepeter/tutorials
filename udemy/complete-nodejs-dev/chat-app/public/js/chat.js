const socket = io();

// server (emit) -> client (receive) --acknowledgement --> server

// client (emit) -> server (receive) --acknowledgement --> client

const $messageForm = document.querySelector("#message-form");
const $messageInput = $messageForm.querySelector('input[type="text"]');
const $messageFormButton = $messageForm.querySelector('button[type="submit"]');
const $sendLocationButton = document.querySelector("#send-location");
const $messages = document.querySelector("#messages");

// templates
const messageTemplate = document.querySelector("#message-template").innerHTML;
const locMessageTemplate = document.querySelector("#loc-message-template")
  .innerHTML;

const scrollLatest = () => {
  const listItems = document.querySelectorAll(".mdc-list-item");
  listItems[listItems.length - 1].scrollIntoView();
};

socket.on("message", message => {
  const html = Mustache.render(messageTemplate, {
    message
  });
  $messages.insertAdjacentHTML("beforeend", html);
  scrollLatest();
});

socket.on("locationMessage", url => {
  const html = Mustache.render(locMessageTemplate, {
    url
  });
  $messages.insertAdjacentHTML("beforeend", html);
});

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
      $sendLocationButton.removeAttribute("disabled");
      console.log(`Location shared!`);
    });
  });
});
