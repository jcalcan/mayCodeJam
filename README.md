# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 🔧 How to Run the Project Locally (MacOS)
Must have: Node.js (https://nodejs.org/en/download),
MongoDB (https://www.mongodb.com/try/download/community), 
MongoDB Compass (https://www.mongodb.com/try/download/atlascli). 

For app to be fully functional you must install compass with this connection name leave everything else as default: 

![mongodb-compass-config](https://github.com/user-attachments/assets/2f6f9c44-4b75-4645-bcab-98d6fecd9a00)


This project has two parts: front-end and back-end. You’ll need to clone each into its own folder and run them separately.

### ✅ Step 1: Create Folders
Create two folders anywhere on your computer:

front-end

back-end

### ✅ Step 2: Open Terminals
Open a terminal window in each folder:

One terminal in the front-end folder

One terminal in the back-end folder

### ✅ Step 3: Clone the Repositories
Back-end:

In the back-end terminal, run:

```git clone https://github.com/jcalcan/mayCodeJam.git```

```git checkout express_server```

This will clone the back-end code and switch to the correct branch.

Front-end:

In the front-end terminal, run:

```git clone -b front-end git@github.com:jcalcan/mayCodeJam.git```

```git checkout react_dashboard```

### ✅ Step 4: Install Dependencies
Still in each terminal:
Back-end:

```npm install```

React_dashboard:

```npm install```

### ✅ Step 5: Run the Projects
Now you're ready to start the servers.


React_dashboard:

```npm install mongodb@6.16```


Back-end:

```npm start```

This will start the server.


React_dashboard:
```npm run dev```

You should see this on your terminal

![terminal-npm-run-dev](https://github.com/user-attachments/assets/18c4e76a-2077-4b18-b0e4-638997576de5)


## 🔧 How to Run the Project Locally (WindowsOS)

The process is almost the same on Windows, there are just a couple key things to do before heading to the terminal. After you install Node.js, MongoDB, and MongoDB Compass you need to add Node.js to environment variables. Search Environment Variables and open it, this what you should see: 


![envi-var-ss](https://github.com/user-attachments/assets/9565a15a-4448-4d12-af95-867213ae0185)

Then double click path: 


![envi-var-ss-path](https://github.com/user-attachments/assets/02eff421-736f-428c-bc09-070be348678d)


Add Node.js path to the bottom of the list (usually found in C:\Program Files\node.js).


![envi-var-ss-node](https://github.com/user-attachments/assets/dc5e7476-2cca-4749-943a-eb295fc554d7)
