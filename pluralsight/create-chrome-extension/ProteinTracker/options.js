$(() => {
  chrome.storage.sync.get("goal", items => {
    $("#goal").val(items.goal);
  });
  $("#save").click(() => {
    let goal = $("#goal").val();
    if (goal) {
      chrome.storage.sync.set({ goal: goal }, () => {
        close();
      });
    }
  });

  $("#reset").click(() => {
    chrome.storage.sync.set({ total: 0 }, () => {
      let opt = {
        type: "basic",
        title: "Total reset!",
        message: "Total has been reset back to 0.",
        iconUrl: "icon.png"
      };
      chrome.notifications.create("reset", opt, () => {});
    });
  });
});
