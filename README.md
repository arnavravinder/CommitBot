# GitHub to Slack Commit Bot 🚀

This is a simple server application that listens for GitHub webhook events and posts commit messages to a specified Slack channel. Perfect for staying up-to-date with the latest commits in your projects! 🎉

## Features ✨

- Automatically post GitHub commit messages to a Slack channel 📡
- Easy to set up and deploy 🛠️
- Provides visibility of commit activity directly in Slack 👀

## Getting Started 🏁

1. **Deploy the Server**: Deploy the `server.js` file to your preferred hosting service.
2. **Set Up GitHub Webhook**:
   - **Payload URL**: `https://your-server-url/github-webhook`
   - **Content type**: `application/json`
   - **Events**: Choose the events you want to trigger the webhook (typically, "Just the push event").
3. **Set Environment Variables**:
   - `SLACK_BOT_TOKEN`: Your Slack bot token

## Future Plans 🛠️

This feature will likely be integrated into the Hakuun Bot soon with the help of Manitej. Stay tuned! 🕒

## Feedback and Contributions 📝

We welcome any feedback you might have! Feel free to submit issues or pull requests to help improve this project. 

For the tech-savvy folks who wish to set this up independently, please note that you should not use my bot credentials for security reasons. 🤓🔒

---

Made with ❤️ by [Arnav](https://github.com/arnavravinder)
