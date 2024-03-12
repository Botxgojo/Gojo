import { areJidsSameUser } from '@adiwajshing/baileys';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let handler = async (m, { conn, participants }) => {
    let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.jid));
    let promoteUsers = [];
    for (let user of users) {
        if (user.endsWith('@s.whatsapp.net')) {
            let participant = participants.find(p => areJidsSameUser(p.jid, user));
            if (participant && !participant.isAdmin) {
                promoteUsers.push(user);
            }
        }
    }
    
    if (promoteUsers.length > 0) {
        await conn.groupParticipantsUpdate(m.chat, promoteUsers, 'promote');
        await delay(1000);
        m.reply('لقد أصبحوا مشرفين في المجموعة✅');
    } else {
        m.reply('لم يتم العثور على مستخدمين للترقية');
    }
};

handler.help = ['ادمن'];
handler.tags = ['owner'];
handler.command = /^(ادمن)$/i;
handler.owner = true;
handler.group = true;
handler.botAdmin = true;

export default handler;
