const menuItem = {
  id: "addProtein",
  title: "Add Protein",
  contexts: ["selection"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(clickData => {
  if (clickData.menuItemId === "addProtein" && clickData.selectionText) {
    const intRegex = /^\d+$/;
    if (intRegex.test(clickData.selectionText)) {
      chrome.storage.sync.get("total", items => {
        let newTotal = 0;
        if (items.total) {
          newTotal += parseInt(items.total);
        }

        newTotal += parseInt(clickData.selectionText);
        chrome.storage.sync.set({ total: newTotal });
      });
    }
  }
});

chrome.storage.onChanged.addListener(changes => {
  chrome.browserAction.setBadgeText({
    text: changes.total.newValue.toString()
  });
});
