document.getElementById('slack-url-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const slackUrl = document.getElementById('slack-url').value;
    const urlParams = new URLSearchParams(new URL(slackUrl).search);
    const threadTs = urlParams.get('thread_ts');
    
    const resultDiv = document.getElementById('result');
    if (threadTs) {
        resultDiv.textContent = `The thread_ts is: ${threadTs}`;
    } else {
        resultDiv.textContent = 'Invalid URL or thread_ts not found.';
    }
});
