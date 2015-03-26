var magnet = require('magnet-uri')
var WebTorrent = require('webtorrent/webtorrent.min.js')

module.exports = function (consoleLog) {
	var torrenter = new WebTorrent()
	consoleLog('initiated')

	var link = magnet.encode({
		infoHash: 'ba32959d866661dfe82a5614bfb27790f613ea80',
		announce: ['wss://tracker.webtorent.io']
	})
	consoleLog(link)

	torrenter.add(link, function (torr) {
		consoleLog(torr.files)
		consoleLog('info hash:' + torr.infoHash)
	})
}
