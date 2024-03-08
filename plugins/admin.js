import { areJidsSameUser } from '@adiwajshing/baileys'
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
let handler = async (m, { conn, participants }) => {
    let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
    let promoteUser = []
    for (let user of users)
        if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin) {
            const res = await conn.groupParticipantsUpdate(m.chat, [user], 'promote')
            await delay(1 * 1000)
        }
    m.reply('لقد اصبح مشرفا في المجموعة✅')

}
handler.help = ['ادمن']
handler.tags = ['owner']
handler.command = /^(ادمن)$/i

handler.owner = true
handler.group = true
handler.botAdmin = true

export default handler
