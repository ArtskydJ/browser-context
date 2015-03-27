var WebTorrent = require('webtorrent/webtorrent.min.js')
var fs = require('fs')

module.exports = function (consoleLog) {
	var torrenter = new WebTorrent()
	var file = __dirname + '/client-seed.js'

	var buffer = (true ? fs.readFileSync(file) : file)

	consoleLog('w8 4 it')

	torrenter.seed(buffer, function (torr) {
		consoleLog(torr.files)
		consoleLog('info hash:' + torr.infoHash)
	})

	consoleLog('seeding ' + (Buffer.isBuffer(buffer) ? 'buffer' : 'string'))
}
