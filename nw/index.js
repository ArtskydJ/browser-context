var cp = require('child_process')

function browserContext(moduleName) {
	global.browserContextLoad = moduleName.toString()
	var child = cp.exec('nw app')

	child.on('error', function (err) {
		console.error(err)
	})

	console.log(typeof global[moduleName])
	var i = 0
	var iv = setInterval(function () {
		console.log(typeof global[moduleName])
		if (i++ > 10) clearInterval(iv)
	}, 1000)
}

module.exports = browserContext
