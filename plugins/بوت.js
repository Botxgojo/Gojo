import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────────────────────
│👋 مرحبا يا , ${conn.getName(m.sender)}!
│🤖 أتمنى أنك بخير ♥ البوت أون لاين الآن 
يمكنك إستخدامه عبر كتابة اوامر.
╰────────────────────
*─[ BY NOUREDDINE_OUAFY ]*🌟✨
`.trim()
  m.reply(caption)
}
handler.help = ['بوت']
handler.tags = ['infobot']
handler.command = /^(بوت)$/i


export default handler
