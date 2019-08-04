$(() => {
  $("#courseCounts").click(() => {
    chrome.tabs.query({ action: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "courseCounts" });
    });
  });

  $("#makeSortable").click(() => {
    chrome.tabs.query({ action: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "makeSortable" });
    });
  });
});
