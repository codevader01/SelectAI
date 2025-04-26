(function() {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('q');
    if (query) {
        const interval = setInterval(() => {
            const textarea = document.querySelector('textarea');
            const sendButton = document.querySelector('button[class*="absolute"]');

            if (textarea && sendButton) {
                textarea.value = decodeURIComponent(query);
                textarea.dispatchEvent(new Event('input', { bubbles: true }));
                sendButton.click();
                clearInterval(interval);
            }
        }, 500);
    }
})();
