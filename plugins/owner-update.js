const { execSync } = require('child_process')
let handler = async (m, { conn, text }) => {
try {  
let stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''))
conn.reply(m.chat, stdout.toString(), m)
} catch {
var update = execSync('git remote set-url origin https://github.com/GX004/ElvenBot-MD.git && git pull')
await m.reply(update.toString())
}}
handler.help = ['update']
handler.tags = ['owner']
handler.command = /^update$/i
handler.rowner = true
module.exports = handler
