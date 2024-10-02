
function closeEmptyTabs() {
    chrome.tabs.query({}, function(tabs) {
      tabs.forEach((tab) => {
        if (tab.url === "chrome://newtab/" || tab.url === "edge://newtab/") {
          chrome.tabs.remove(tab.id);
        }
      });
    });
  }
  setInterval(closeEmptyTabs, 10000);

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
  chrome.runtime.onStartup.addListener(() => {
    console.log("Tarayıcı açıldı ve uzantı çalışıyor!");
    setInterval(closeEmptyTabs, 10000);

});