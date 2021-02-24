chrome.tabs.onActivated.addListener(tab => {
  chrome.tabs.get(tab.tabId, curTab => {
    if(curTab.url.includes('aetna.com/AccountManager')) {
      chrome.tabs.executeScript(null, {file: './frontend.js'}, ()=> console.error('On Activated: injected frontend script!'));
    }
  })
});

chrome.tabs.onUpdated.addListener((tabId, changInfo) => {
  console.error(changInfo);
  if(changInfo?.status === 'complete') {
    chrome.tabs.executeScript(null, {file: './frontend.js'}, ()=> console.error('On Update: injected frontend script!'));
  }
})

//chrome.tabs.executeScript(null, {file: 'frontend.js'})