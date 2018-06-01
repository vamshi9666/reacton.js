const {app, BrowserWindow} = require('electron')
  
  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600,
        webPreferences: {
          webSecurity: false
        }
      })
  
    // and load the index.html of the app.
    win.loadURL(`file://${__dirname}/build/index.html`)
  }
  
  app.on('ready', createWindow)