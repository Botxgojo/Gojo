const handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    const text = `
*╔══════✮╍╍╍╍╍ 𝙎𝙐𝙉☀╍╍╍╍╍✮═════╗*

             *🪐═══━━━منور/ة━━━════🪐*

           *💧════━━━اللقب𓊈𓊉━━━═══💧*

          *🌙════━━━الانمي𓊈𓊉━━━═══🌙*

         *💥════━━━الطرف𓊈𓊉━━━═══💥*

         *🔆════━━━الجنس𓊈𓊉━━━═══🔆*

                              *🔴ملاحظة:*
          *🚫ممنوع اخيار لقب من الهنتاي او الايتشي*
   *🚫ممنوع اختيار لقب شخصية بنت اذا كنت ولد و العكس*
                                *~🔴الشرح:~*
                  *اللقب:اسم شخصية انمي تحبها*
            *الانمي:الشخصية التي اخترتها من اي انمي؟*
           *الطرف:من اي حصلت على رابط الدخول؟*
                *+الحق صوره للشخصية التي اخترتها*
*╚══════✮╍╍╍╍╍𝙎𝙐𝙉☀╍╍╍╍✮══════╝*
`.trim();

    conn.sendMessage(m.chat, {
      text,
      contextInfo: {
        externalAdReply: {
          title: 'GOJO┇BOT',
          body: "أول بوت واتساب في العالم العربي 💖",
          thumbnailUrl: 'https://telegra.ph/file/2829c7653514416d207e2.jpg',
          sourceUrl: 'https://instagram.com/noureddine_ouafy',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });
  } catch (e) {
    conn.reply(m.chat, '❎ هناك خطأ في لائحة الاوامر', m);
    throw e;
  }
};

handler.help = ['اوامر'];
handler.tags = ['infobot'];
handler.command = ['اوامر', 'b', 'list'];
handler.register = false;

export default handler;
