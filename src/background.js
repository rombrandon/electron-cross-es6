'use strict'

import {app, protocol, globalShortcut, BrowserWindow} from 'electron'
import router from './router'

if (!app.requestSingleInstanceLock()) app.quit()

protocol.registerSchemesAsPrivileged([{scheme: 'app', privileges: { secure: true, standard: true }}])

let win

app.on('activate', () => {
  if (win === null) {
    win = router.init().app
  }
})

app.on('ready', async () => {
  win = router.init().app
  globalShortcut.register('CommandOrControl+F12', () => {
    try {
      BrowserWindow.getFocusedWindow().webContents.openDevTools()
    } catch (e) {}
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('second-instance', () => {
  if (win) {
    if (win.isMinimized()) win.restore()
    win.focus()
  }
})

// Exit cleanly on request from parent process in development mode.
if (process.env.NODE_ENV !== 'production') {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
