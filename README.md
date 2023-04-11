# **simple-webpack-ts-react-sass-project**

## **worked for**
```
System:
  OS: Windows 10 10.0.19042
Binaries:
  Node: 18.14.0
  npm: 9.3.1
```
## **do it yourself**
1. Install **webpack** modules:
    ```
    npm install webpack webpack-cli @webpack-cli/generators --save-dev
    ```
2. 
    - Initialization **webpack** project:
        ```
        npx webpack-cli init
        ```
    - **Cheat sheet** with answers:
        ```
        ? Which of the following JS solutions do you want to use? Typescript
        ? Do you want to use webpack-dev-server? Yes
        ? Do you want to simplify the creation of HTML files for your bundle? Yes
        ? Do you want to add PWA support? Yes
        ? Which of the following CSS solutions do you want to use? SASS       
        ? Will you be using CSS styles along with SASS in your project? Yes
        ? Will you be using PostCSS in your project? No
        ? Do you want to extract CSS for every file? Only for Production
        ? Do you like to install prettier to format generated configuration? Yes
        ? Pick a package manager: npm

        ? Overwrite package.json? overwrite
        ```
3. Install **react** and **@types** modules:
    ```
    npm install react react-dom @types/react @types/react-dom --save-dev
    ```
4. 
    - Rename from **"./src/index.ts"** to **"./src/index.tsx"**
    - In **webpack.config.js** change **config.entry** from **"./src/index.ts"** to **"./src/index.tsx"**
    - In **tsconfig.js** change **files** from **["src/index.ts"]** to **["src/index.tsx"]**
    - In **tsconfig.js** add option to **compilerOptions**:
        ```javascript
        "jsx": "react"
        ```
5.  
    - Code in **"./index.html"**:
        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>React App</title>
        </head>
        <body>
          <div id="reactApp"></div>
          <script>'serviceWorker' in navigator && window.addEventListener('load', () => navigator.serviceWorker.register('service-worker.js'));</script>
        </body>
        </html>
        ```
    - Code in **"./src/index.tsx"**:
        ```javascript
        import React from 'react';
        import { createRoot } from 'react-dom/client';

        import './index.scss';

        const ReactApp = () => <>React App</>;

        createRoot(document.getElementById('reactApp'))
        .render(<React.StrictMode><ReactApp /></React.StrictMode>);
        ```
    - Create **"./src/index.scss"**:
        ```css
        * {
          padding: 0;
          margin: 0;
        }

        html {
          height: 100%;
        }

        body {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        ```
## **ready**
To start **local** server:
```
npm run serve
```
To build project in **"./dist"**:
```
npm run build
```