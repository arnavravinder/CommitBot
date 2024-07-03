const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// in github while creating the webhook, do your-project-blah.glitch.com/github-webhook. the below code works on that
app.post('/github-webhook', (req, res) => {
    console.log('Received GitHub webhook payload:', req.body);

    const { commits } = req.body;

    if (commits && commits.length > 0) {
        const commit = commits[0]; // first commit is being assumed
        const message = `~twitch~ New commit by ${commit.author.name}: ${commit.message}. Check it out: ${commit.url}`;

        const channelId = 'C017YL1NMU0'; // channel ID STAYS SAME IF IN #arcade
        const threadTs = '1719963360.956289'; // its the thread_ts part of the hakuun message with the buttons! copy the link and then take out the thread_ts part!!

        axios.post('https://slack.com/api/chat.postMessage', {
            channel: channelId,
            text: message,
            thread_ts: threadTs,
        }, {
            headers: { 'Authorization': `Bearer ${process.env.SLACK_BOT_TOKEN}` }
        })
        .then(response => {
            console.log('Message posted to Slack:', response.data);
            if (!response.data.ok) {
                console.error('Slack API error:', response.data.error);
            }
            res.status(200).send('Message posted to Slack successfully');
        })
        .catch(error => {
            console.error('Error posting message to Slack:', error);
            res.status(500).send('Error posting message to Slack');
        });
    } else {
        res.status(400).send('No commits found in the payload');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
