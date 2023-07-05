require("@babel/register")
const fs = require('fs')
const path = require('path')
const { renderToString } = require( 'react-dom/server' )

const { Page } = require('./components/page.jsx')

let indexHTML = fs.readFileSync(path.resolve( __dirname, './initial-files/index.html'), {
  encoding: 'utf8',
})

let appHTML = renderToString(Page());

indexHTML = indexHTML.replace('<div id="app"></div>', `<div id="app">${appHTML}</div>`)

fs.writeFileSync(path.resolve(__dirname, './index.html'), indexHTML)
