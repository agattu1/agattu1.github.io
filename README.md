# agattu1.github.io


# Workflow for Modifying and Deploying React Project



1. **Navigate to  Project Directory** (if you haven't already):
   ```bash
   cd path/to/project

You need `Node.js` downloaded and `Git Bash` for GH Terminal access

You need a `gh-pages` branch

Set GH to make the deployment build from gh-pages branch in Settings > Pages
 ```bash
>> "built from the gh-pages branch"

Open package.json and make the following updates to homepage and scripts:

A "homepage": "http://agattu1.github.io"

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

Make Code Changes: GH Website edits does Nothing until npm builds & deploys
>> COMMIT CODE TO MAIN NOW

If the gh-pages package is not listed in the package.json, install it as a dev dependency:
>> npm install gh-pages --save-dev

Build the Project: Create a production build of project:
>> npm run build

Deploy to gh-pages: Deploy the built files to the gh-pages branch:
>> npm run deploy

ProTip: semicolon after each instrcuton will run everything:
>> `npm install; npm install gh-pages --save-dev; npm run build; npm run deploy`

Verify Deployment: Once the deployment is complete, check site:
                    http://agattu1.github.io
