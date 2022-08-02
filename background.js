try {
  // This is the background script for the extension

  // A listener for when the user clicks on the extension button
  //   chrome.action.onClicked.addListener(buttonClicked);

  chrome.action.onClicked.addListener(buttonClicked);

  // Handle that click
  function buttonClicked(tab) {
    // Send a message to the active tab
    console.log("button clicked!");

    // Send a message to the tab that is open when button was clicked
    console.log("sending message");
    chrome.tabs.sendMessage(tab.id, { message: "browser action" }, (repsonse) => {
      console.log(repsonse)
    });
  }
} catch (err) {
  console.log(err);
}