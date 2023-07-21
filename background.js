chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (!tab.url) {
        return;
    }
    const tabUrl = tab.url;
    if (changeInfo.status === 'complete' && tab.url.includes('youtube.com') && tabUrl.includes("/watch")) {
        chrome.tabs.sendMessage(tab.id, { type: "changePitch", url: tabUrl })
    }
});
