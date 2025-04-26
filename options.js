const dropdown = document.getElementById('modeSelect');

dropdown.addEventListener('change', () => {
    chrome.runtime.sendMessage({
        action: "setMode",
        mode: dropdown.value
    }, response => {
        console.log(response.status);
    });
});
