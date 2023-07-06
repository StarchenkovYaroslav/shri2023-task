require("@babel/register")
const fs = require('fs')
const path = require('path')
const { renderToString } = require( 'react-dom/server' )

const { Page } = require('./components/page.jsx')

let indexHTML = fs.readFileSync(path.resolve( __dirname, './initial-files/index.html'), {
  encoding: 'utf8',
})

let appHTML = renderToString(Page());

const scriptText = fs.readFileSync(path.resolve( __dirname, './script.js'))
const resetCSSText = fs.readFileSync(path.resolve( __dirname, './reset.css'))
const styleCSSText = fs.readFileSync(path.resolve( __dirname, './styles.css'))

indexHTML = indexHTML.replace('<div id="app"></div>', `<div id="app">${appHTML}</div>`)
indexHTML = indexHTML.replace('<script></script>', `<script>${scriptText}</script>`)
indexHTML = indexHTML.replace('<style></style>', `<style>${resetCSSText}${styleCSSText}</style>`)

fs.writeFileSync(path.resolve(__dirname, './index.html'), indexHTML)
