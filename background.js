let selectedMode = 'explanation';  // default mode

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "explainWithAI",
        title: "📝Explain with AI — SelectAI",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "explainWithAI") {
        const queryText = encodeURIComponent(info.selectionText);
        const result = selectedMode.concat(' ').concat(queryText);
        const finalRes = result.concat(': ');
        chrome.tabs.create({ url: `https://chat.openai.com/?q=${finalRes}` });
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "setMode") {
        selectedMode = request.mode;
        sendResponse({ status: "Mode updated to " + selectedMode });
    }
});
