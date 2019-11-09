import Router from 'electron-cross'
import {createProtocol} from 'vue-cli-plugin-electron-builder/lib'

const isDevelopment = process.env.NODE_ENV !== 'production'

const router = new Router({
  // eslint-disable-next-line no-undef
  // icon: `${__static}/web-client/ico/app.ico`,
  base: process.env.WEBPACK_DEV_SERVER_URL || 'app://./',
  routes: [
    {
      name: 'index',
      url: 'index.html',
      config: {
        width: 800,
        height: 600
      }
    },
    {
      name: 'home',
      url: 'home.html',
      config: {
        width: 1200,
        height: 400
      }
    }
  ]
})
if (router.process === 'main') {
  router.afterEach((app, route) => {
    if (isDevelopment && !process.env.IS_TEST) {
      app.webContents.openDevTools()
    }
    if (!process.env.WEBPACK_DEV_SERVER_URL) {
      createProtocol('app')
    }
  })
}

export default router
