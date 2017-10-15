const path = require('path');
const fs = require('fs');
const os = require('os');
const pkg = require('../../package');
const configFile = path.resolve(os.homedir(), '.' + pkg.name, 'config.json');

const loadConfig = () => {
    if (fs.existsSync(configFile)) {
        try {
            return JSON.parse(fs.readFileSync(configFile, 'utf8'));
        } catch (e) {
            console.error(e);
            return false;
        }
    }
    return false;
};

const saveConfig = (opt) => {
    const dir = path.dirname(configFile);
    try {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        fs.writeFileSync(configFile, JSON.stringify(opt), { flag: 'w' });
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
};

module.exports = {
    loadConfig,
    saveConfig
};
