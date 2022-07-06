import os from 'os';
import fs from 'fs';

export default ({
    exist() {
        switch (os.platform()) {
            case 'win32':
                return fs.existsSync(`${process.env.APPDATA}/Microsoft/Windows/Start Menu/Programs/Startup/`);
            break;
            case 'darwin':
                return fs.existsSync('/Users/' + process.env.USER + '/.dmc');
            break;
            case 'linux':
                return fs.existsSync('/home/' + process.env.USER + '/.dmc')
            break;
        }
    },

    create() {
        switch (os.platform()) {
            case 'win32':
                fs.mkdirSync(`${process.env.APPDATA}/Microsoft/Windows/Start Menu/Programs/Startup/`);
            break;
            case 'darwin':
                fs.mkdirSync('/Users/' + process.env.USER + '/.dmc');
                fs.writeFileSync('/Users/' + process.env.USER + '/.dmc/dmc.json', '[]');
            break;
            case 'linux':
                fs.mkdirSync('/home/' + process.env.USER + '/.dmc')
                fs.writeFileSync('/home/' + process.env.USER + '/.dmc/dmc.json', '[]');
            break;
        }
    }
})