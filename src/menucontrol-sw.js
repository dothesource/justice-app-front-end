/* eslint-disable no-undef */
// See https://developers.google.com/web/tools/workbox/guides/configure-workbox
// workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

// window.addEventListener('install', event => event.waitUntil(window.skipWaiting()));
// window.addEventListener('activate', event => event.waitUntil(window.clients.claim()));

console.log('mds')

const bgSyncPlugin = new workbox.backgroundSync.Plugin('myQueueName', {
  maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
})

workbox.routing.registerRoute(
  /\/api\/.*\/*.json/,
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  'POST'
)

workbox.routing.registerRoute(
  new RegExp('/'),
  new workbox.strategies.StaleWhileRevalidate()
)
// workbox.routing.registerRoute('/', workbox.strategies.networkFirst());
// We need this in Webpack plugin (refer to swSrc option): https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_injectmanifest_config
// workbox.precaching.precacheAndRoute(window.__precacheManifest);
