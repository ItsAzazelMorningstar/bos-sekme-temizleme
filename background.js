
function closeEmptyTabs() {
    chrome.tabs.query({}, function(tabs) {
      tabs.forEach((tab) => {
        if (tab.url === "chrome://newtab/" || tab.url === "edge://newtab/") {
          chrome.tabs.remove(tab.id);
        }
      });
    });
  }
  setInterval(closeEmptyTabs, 30000);

chrome.action.onClicked.addListener(
    function () {
    chrome.tabs.query({}, function(tabs) {
        tabs.forEach((tab) => {
          if (tab.url === "chrome://newtab/" || tab.url === "edge://newtab/") {
            chrome.tabs.remove(tab.id);
          }
        });
      });
    }
  );
