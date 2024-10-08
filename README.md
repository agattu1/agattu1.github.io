# agattu1.github.io


# Workflow for Modifying and Deploying Your React Project



1. **Navigate to Your Project Directory** (if you haven't already):
   ```bash
   cd path/to/your/project

You need `Node.js` downloaded and `Git Bash` for GH Terminal access

You need a `gh-pages` branch

Set GH to make the deployment build from gh-pages branch in Settings > Pages
 ```bash
>> "built from the gh-pages branch"

Open your package.json and make the following updates to homepage and scripts:

A "homepage": "http://<your-username>.github.io/<repository-name>"

B "scripts": {
    "start": "react-scripts start",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build --repo https://github.com/agattu1/agattu1.github.io.git",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }

Install Project Dependencies:
>> npm install

Make Code Changes: Modify your JavaScript or other files in the main branch as needed.
>> COMMIT YOUR CODE TO MAIN NOW

If the gh-pages package is not listed in your package.json, install it as a dev dependency:
>> npm install gh-pages --save-dev

Build the Project: Create a production build of your project:
>> npm run build

Deploy to gh-pages: Deploy the built files to the gh-pages branch:
>> npm run deploy

Verify Deployment: Once the deployment is complete, check site:
                    http://agattu1.github.io