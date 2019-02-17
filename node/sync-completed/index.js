var Push = require( 'pushover-notifications' )
var PUSHOVER_USER = 'gos41mgsak3tf3ue5og3f5hd2z3ceb'
var PUSHOVER_TOKEN='abf9p41utz3v4a49wz59w2ussp9cxk'

var p = new Push( {
	user: PUSHOVER_USER,
	token: PUSHOVER_TOKEN,
	// httpOptions: {
	//   proxy: process.env['http_proxy'],
	//},
	// onerror: function(error) {},
	// update_sounds: true // update the list of sounds every day - will
	// prevent app from exiting.
 })

var msg = { 
	// These values correspond to the parameters deyailed on https://pushover.net/api
	// The message is required. All other values are optional.
	message: 'Sync Completed',
	title: 'Message from Manjaro',
	device: 'motox4',
	file: '/home/brettsalemink/lib/node/pushover-convert-completed/images/Manjaro-Icon-90x90.jpg'
}

p.send( msg, function( err, result ) {
	if ( err ) { 
		throw err
	}

	console.log( result ) 
})
