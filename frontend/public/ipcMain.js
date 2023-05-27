const electron = require('electron');
const {ipcMain} = electron;

module.exports = (app, mainWindow) => {

    ipcMain.on('renderer-started', () => {
        console.log('Renderer started');
    });

};
