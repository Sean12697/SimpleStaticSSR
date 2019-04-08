let fs = require('fs');
let data = require('./data.js');
let index = require('./templates/index.js');
let items = require('./templates/items.js');

let itemsList = Object.keys(data).reduce((total, current) => total += `<p><a href="${current}.html">${current}</a></p>`, "");
let indexPage = index("Home Page", itemsList);

fs.writeFileSync('./_site/index.html', indexPage, () => {});
Object.keys(data).forEach(key => fs.writeFileSync(`./_site/${key}.html`, items(data[key].title, data[key].content), () => {}));