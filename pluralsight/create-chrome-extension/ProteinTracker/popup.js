$(() => {
  chrome.storage.sync.get(["total", "goal"], items => {
    $("#total").text(items.total);
    $("#goal").text(items.goal);
  });

  $("#addAmount").click(() => {
    chrome.storage.sync.get(["total", "goal"], items => {
      let newTotal = 0;
      if (items.total) {
        newTotal += parseInt(items.total);
      }
      let amount = $("#amount").val();
      if (amount) {
        newTotal += parseInt(amount);
      }
      chrome.storage.sync.set({ total: newTotal });
      $("#total").text(newTotal);
      $("#amount").val("");

      if (newTotal >= items.goal) {
        let opt = {
          type: "basic",
          title: "Goal reached!",
          message: "You reached your goal of " + items.goal + "!",
          iconUrl: "icon.png"
        };
        chrome.notifications.create("goalReached", opt, () => {});
      }
    });
  });
});
