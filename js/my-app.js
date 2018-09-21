// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/index/',
    	url: 'index.html',
    	name: 'index',
  		},
		{
		path: '/rooms/',
    	url: 'rooms.html',
    	name: 'rooms',
  		},
		{
		path: '/inforoom/',
    	url: 'inforoom.html',
    	name: 'inforoom',
  		},
		{
		path: '/inforoom2/',
    	url: 'inforoom2.html',
    	name: 'inforoom2',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

