var app = require('app')
var BrowserWindow = require('browser-window')
var path = require('path')

var renderers = []

function createRenderer(page, opts) {
	if (typeof page === 'object') {
		var lastOpts = opts
		opts = page
		page = lastOpts
	}
	var renderer = new BrowserWindow(opts || {})
	var filepath = path.join(__dirname, page || 'index.html')

	renderer.loadUrl('file:///' + filepath)
	var len = renderers.push(renderer)

	renderer.on('closed', function () {
		renderers[len - 1] = null
	})

	return renderer
}

app.on('ready', function() {
	createRenderer('page-seed.html', { show: true, x: 800 })
	createRenderer('page-download.html', { show: true })
})

app.on('window-all-closed', function () {
	console.log('quitting')
	app.quit()
})

/*
torrenter.destroy
torrenter.download
torrenter.seed
torrenter.remove
*/
