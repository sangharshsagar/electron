//few Core Modules we require

const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;
let addWindow;
//Listen For App to be Ready

app.on('ready',function(){
	//create a New Window
	mainWindow = new BrowserWindow({});
	
	//Loading html file into window
	mainWindow.loadURL(url.format({
			pathname: path.join(__dirname, 'mainWindow.html'),
			protocol: 'file:',
			slashes: true
	}));
	
	//quit app when main window closed
	mainWindow.on('closed',function(){
		app.quit();
	});
	
	//Build Menu From template
	const mainMenu = Menu.buildFromTemplate(mainMenuTemplete);
	
	//Inserting Menu
	Menu.setApplicationMenu(mainMenu)
	
});


//Add new window by createAddWindow
function createAddWindow(){
	addWindow = new BrowserWindow({});
	width:200
	height:400
	
	//Loading html file into window
	mainWindow.loadURL(url.format({
			pathname: path.join(__dirname, 'addWindow.html'),
			protocol: 'file:',
			slashes: true
	}));
	
};


//creating  menu Template
// templte is array of objects
const mainMenuTemplete = [
	{
		label: 'Files',
		
		//lets create submenu
		//submenu is also array of objects
		submenu: [
         {
            label: 'List Files'
         },
		 {
            label: 'Add Files',
			click(){
				createAddWindow();
			}
         },
		 {
            label: 'Clear Items'
         },
		 {
            label: 'Quit',
			click(){
				app.quit();
			}
         },
      ]
		
	},
	{
		label: 'Drawings',
		submenu: [
		 {
            label: 'List Drawings'
         },
         {
            label: 'Add Drawings',
			click(){
				createAddWindow();
			}
         },
		 {
            label: 'Clear Items'
         },
		 {
            label: 'Quit',
			click(){
				app.quit();
			}
         },
      ]
	}
];



















