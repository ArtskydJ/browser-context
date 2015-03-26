var browserContext = require('browser-context')

var WebTorrent = browserContext('webtorrent')
// or if it needs to be asynchronous
browserContext('webtorrent', function (WebTorrent) {})
