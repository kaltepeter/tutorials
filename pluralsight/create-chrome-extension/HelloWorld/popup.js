$(() => {
  $("#name").keyup(() => {
    $("#greeting").text("Hi, " + $("#name").val() + "!");
  });
});
