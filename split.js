const fs = require('fs')
const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname,'/timeDemo/index.html'),'utf-8',function(err,dataStr){
    if(err) {
        return console.log('出错了' + err.message);
    }
    resolveCss(dataStr)
    resolveJs(dataStr)
    resolveHtml(dataStr)
})
function resolveCss(styleStr){
    const style = regStyle.exec(styleStr)[0].replace('<style>','').replace('</style>','')
    fs.writeFile(path.join(__dirname,'/clock/index.css') , style, function(err){
        console.log(err);
    })
}
function resolveJs(jsStr){
    const js = regScript.exec(jsStr)[0].replace('<script>','').replace('</script>','')
    fs.writeFile(path.join(__dirname,'/clock/index.js') , js, function(err){
        console.log(err);
    })
}
function resolveHtml(htmlStr){
    const html = htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css">')
                        .replace(regScript,'<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname,'/clock/index.html'),html,function(err){
        console.log(err);
    })
}