const shell = require('electron').shell;
const remote = require('electron').remote;
const package = require('./package');

$('.external-link').on( "click", function(e) {
	e.preventDefault();
    shell.openExternal(e.target.href);
});

$('#menuClose').on( "click", function() {
	remote.getCurrentWindow().close();
});

$('#menuMaximize').on( "click", function() {
	var appWindow = remote.getCurrentWindow()
	appWindow.isMaximized() ? appWindow.unmaximize() : appWindow.maximize();
});

$('#menuMinimize').on( "click", function() {
	remote.getCurrentWindow().minimize();
});

$('.version').html(package.version);