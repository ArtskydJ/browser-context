var WebTorrent = require('webtorrent/webtorrent.min.js')

module.exports = function (consoleLog) {
	var torrenter = new WebTorrent()
	consoleLog('initiated')

	torrenter.seed(__dirname + 'client-seed.js', function (torr) {
		consoleLog(torr.files)
		consoleLog('info hash:' + torr.infoHash)
	})
}
