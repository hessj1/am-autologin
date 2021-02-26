const tabs = chrome.tabs;
const loadedTabs = {};

const verifyIsAccountManager = (url='') => {
  return url.includes('aetna.com/AccountManager');
}

tabs.onActivated.addListener(tab => {
  console.error(loadedTabs);
  tabs.get(tab.tabId, curTab => {
    if(curTab.url.includes('aetna.com/AccountManager')) {
      console.error(curTab);
      chrome.tabs.executeScript(null, {file: './frontend.js'}, ()=> {
        console.error('On Activated: injected frontend script!');
        loadedTabs[curTab.id] = true;
      });
    }
  })
});

tabs.onUpdated.addListener(async (tabId, changInfo) => {
  console.error(loadedTabs);
  const thisTab = await tabs.get(tabId);
  const statusIsComplete = changInfo?.status === 'complete';
  const isAccountManager = verifyIsAccountManager(thisTab?.url);
  const notAlreadyLoaded = !loadedTabs[thisTab.id];
  if(isAccountManager && statusIsComplete && notAlreadyLoaded) {
    console.info(changInfo);
    tabs.executeScript(null, {file: './frontend.js'}, ()=> console.error('On Update: injected frontend script!'));
  }
})

//chrome.tabs.executeScript(null, {file: 'frontend.js'})