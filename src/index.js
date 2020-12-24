const { app, BrowserWindow, Menu } = require("electron");

// const url = require("url");
const path = require("path");

if (process.env.NODE_ENV !== "production") {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "../node_modules", "bin", "electron"),
  });
}

let mainWindow;
let newWindow;
let homeWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    minWidth: 683,
    minHeight: 480,
    width: 1024,
    height: 768,
    // frame: false,
    title: "Electró-TECH",

    // width: "1024px",
    // minWidth: "1024px",
    show: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadFile(path.join(__dirname, "views/index.html"));
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
  const mainMenu = Menu.buildFromTemplate(templateMenu);
  Menu.setApplicationMenu(mainMenu);
});
// Inicio
function backHome() {
  homeWindow = new BrowserWindow({
    title: "Electró-TECH",
    minWidth: 683,
    minHeight: 480,
    width: 1024,
    height: 768,
    // frame: false,

    webPreferences: {
      nodeIntegration: true,
    },
  });
  homeWindow.loadFile(path.join(__dirname, "views/index.html"));
  homeWindow.once("ready-to-show", () => {
    homeWindow.show();
    // newWindow.webContents.openDevTools();
  });
  homeWindow.on("closed", () => {
    homeWindow = null;
  });
}
// Comuniaciones satelitales
function ComSatelital() {
  homeWindow = new BrowserWindow({
    title: "Electró-TECH",
    minWidth: 683,
    minHeight: 480,
    width: 1024,
    height: 768,
    frame: false,

    webPreferences: {
      nodeIntegration: true,
    },
  });
  homeWindow.loadFile(
    path.join(
      __dirname,
      "views/Cursos_Academicos/Comunicaciones_Satelitales.html"
    )
  );
  homeWindow.once("ready-to-show", () => {
    homeWindow.show();
    // newWindow.webContents.openDevTools();
  });
  homeWindow.on("closed", () => {
    homeWindow = null;
  });
}
// Electrónica II
function Electronica() {
  homeWindow = new BrowserWindow({
    title: "Electró-TECH",
    minWidth: 683,
    minHeight: 480,
    width: 1024,
    height: 768,
    frame: false,

    webPreferences: {
      nodeIntegration: true,
    },
  });
  homeWindow.loadFile(
    path.join(__dirname, "views/Cursos_Academicos/Electronica_II.html")
  );
  homeWindow.once("ready-to-show", () => {
    homeWindow.show();
    // newWindow.webContents.openDevTools();
  });
  homeWindow.on("closed", () => {
    homeWindow = null;
  });
}
// Instrumentación virtual
function InstVirtual() {
  homeWindow = new BrowserWindow({
    title: "Electró-TECH",
    minWidth: 683,
    minHeight: 480,
    width: 1024,
    height: 768,
    frame: false,

    webPreferences: {
      nodeIntegration: true,
    },
  });
  homeWindow.loadFile(
    path.join(__dirname, "views/Cursos_Academicos/Instrumentacion_Virtual.html")
  );
  homeWindow.once("ready-to-show", () => {
    homeWindow.show();
    // newWindow.webContents.openDevTools();
  });
  homeWindow.on("closed", () => {
    homeWindow = null;
  });
}
// Simulación en ingeniería
function Simulacion() {
  homeWindow = new BrowserWindow({
    title: "Electró-TECH",
    minWidth: 683,
    minHeight: 480,
    width: 1024,
    height: 768,
    frame: false,

    webPreferences: {
      nodeIntegration: true,
    },
  });
  homeWindow.loadFile(
    path.join(__dirname, "views/Cursos_Academicos/Simulacion_Ingenieria.html")
  );
  homeWindow.once("ready-to-show", () => {
    homeWindow.show();
    // newWindow.webContents.openDevTools();
  });
  homeWindow.on("closed", () => {
    homeWindow = null;
  });
}

const templateMenu = [
  {
    label: "Inicio",
    accelerator: process.platform == "darwin" ? "command+M" : "Ctrl+M",
    click() {
      backHome();
    },
  },

  {
    label: "Cursos académicos",
    submenu: [
      {
        label: "Comunicaciones satelitales",
        // accelerator: process.platform == "darwin" ? "command+M" : "Ctrl+M",
        click() {
          ComSatelital();
        },
      },
      {
        label: "Electrónica II",
        // accelerator: process.platform == "darwin" ? "command+M" : "Ctrl+M",
        click() {
          Electronica();
        },
      },
      {
        label: "Instrumentación virtual",
        // accelerator: process.platform == "darwin" ? "command+M" : "Ctrl+M",
        click() {
          InstVirtual();
        },
      },
      {
        label: "Simulación en ingeniería",
        // accelerator: process.platform == "darwin" ? "command+M" : "Ctrl+M",
        click() {
          Simulacion();
        },
      },
    ],
  },

  {
    label: "Recargar",
    role: "reload",
  },
];

if (process.platform === "darwin") {
  templateMenu.unshift({
    label: app.getName(),
  });
}

// if (process.env.NODE_ENV !== "production") {
//   templateMenu.push({
//     label: "DevTools",

//     submenu: [
//       {
//         label: "Show/Hide DevTools",
//         click(item, focusedWindow) {
//           focusedWindow.toggleDevTools();
//         },
//       },
//     ],
//   });
// }
