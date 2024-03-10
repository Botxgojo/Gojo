const handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let mention = m.mentionedJidList ? `*│⚛︎الـــســـلام عـــلـــيـــكـــم يـــا* ${m.mentionedJidList[0]} *!*\n` : `*│⚛︎الـــســـلام عـــلـــيـــكـــم يـــا 『د』*`;
    const text = `
*«───────── « ⋅ʚ𝙮𝙪𝙣𝙖ɞ⋅ ─────────»*
${mention}
*│⚛︎معك/ي يونا للخدمات السريعه😊*
*«─────── «الاوامر الترفيهيه⋅ » ───────»*
*│❄↫(.سرقه)☄︎*
*│❄↫(.لستيكر)☄︎*
*│❄↫(.لصوره)☄︎*
*│❄↫(.لستيكرر)☄︎*
*│❄↫(.رجب)☄︎*
*│❄↫(.مكس)☄︎*
*│❄↫(.رساله)☄︎*
*│❄↫(.صور1)☄︎*
*│❄↫(.صور2)☄︎*
*│❄↫(.صور3)☄︎*
*│❄↫(.شات1)☄︎*
*│❄↫(.شات2)☄︎*
*│❄↫(.شات2)☄︎*
*│❄↫(.تطبيق)☄︎*
*│❄↫(.تيك)☄︎*
*│❄↫(.فيس)☄︎*
*│❄↫(.انستا)☄︎*
*│❄↫(.تويت)☄︎*
*│❄↫(.ويكي)☄︎*
*│❄↫(.يوتيوب)☄︎*
*│❄↫(.تاغز)☄︎*
*│❄↫(.ايتشدي)☄︎*
*│❄↫(.روميني)☄︎*
*«──────── «اوامر الانمي⋅ » ────────»*
*│🀄↫(.جوجيتسو)☁︎*
*│🀄↫(.هانتر)☁︎*
*│🀄↫(.مانجا)☁︎*
*│🀄↫(.تطقيم1)☁︎*
*│🀄↫(.تطقيم2)☁︎*
*│🀄↫(.تطقيم3)☁︎*
*│🀄↫(.لقطه)☁︎*
*│🀄↫(.راندوم1)☁︎*
*│🀄↫(.راندوم2)☁︎*
*│🀄↫(.ايديت)☁︎*
*«──────── «اوامر دينية⋅ » ────────»*
*│📿↫(.اذان)⚘*
*│📿↫(.القرآن)⚘*
*│📿↫(.اسماء-الله)⚘*
*│📿↫(.آياتي)⚘*
*│📿↫(.بدر)⚘*
*│📿↫(.حزب)⚘*
*│📿↫(.حديث)⚘*
*│📿↫(.قصص-الانبياء)⚘*
*│📿↫(.قصص)⚘*
*«──────── «اوامر اخرى⋅ » ────────»*
*│💦↫(.قهوة)♫*
*│💦↫(.ترجم)♫*
*│💦↫(.كود)♫*
*│💦↫(.مناخ)♫*
*│💦↫(.تقصير)♫*
*│💦↫(.خط)♫*
*│💦↫(.انطق)♫*
*│💦↫(.الى-اغنية)♫*
*│💦↫(.قهوة)♫*
*│💦↫(.نص)♫*
*│💦↫(.بينغ)♫*
*│💦↫(.المطور)♫*
*│💦↫(.ران-تايم)♫*
*│💦↫(.اقتراح)♫*
*«─────── «اوامر المشرفين⋅ » ───────»*
*│⚜️↫(.انذار)☕︎︎*
*│⚜️↫(.الغاء-انذار)☕︎︎*
*│⚜️↫(.طرد)☕︎︎*
*│⚜️↫(.مشرف)☕︎︎*
*│⚜️↫(.عضو)☕︎︎*
*│⚜️↫(.ايقاف)☕︎︎*
*│⚜️↫(.تشغيل)☕︎︎*
*│⚜️↫(.حذف)☕︎︎*
*│⚜️↫(.بان)☕︎︎*
*│⚜️↫(.الغاء-بان)☕︎︎*
*«───────── «القوانين⋅ » ─────────»*
*│🚫↫ممنوع استعمال البوت في اعمال مخله(طرد)*
*│🚫↫ممنوت الهبد او سبام الاوامر مع البوت(بان)*
*│🚫↫ممنوع سب البوت(بان)*
*│🚫↫المطور ليس مسؤولا اذا حدث خطا غير لائق من البوت*
*«───────── «للتواصل⋅ » ─────────»*
*رقم المطور『 https://wa.me/message/RYOUR2E5SRFOL1 』*
*انستا المطور『 https://www.instagram.com/gojosaturo_876?igsh=amxrYmMydTh0NDN3 』*
`.trim();

    conn.sendMessage(m.chat, {
      text,
      contextInfo: {
        externalAdReply: {
          title: 'GOJO┇BOT',
          body: "البوت الخاص بمملكة SPACE🚀",
          sourceUrl: 'https://www.instagram.com/gojosaturo_876?igsh=amxrYmMydTh0NDN3',
          mediaType: 1,
          thumbnailUrl:
            'https://telegra.ph/file/30d4fcc05484510e163a7.jpg'
        }
      }
    }, { quoted: m });
    }
  } catch (e) {
    conn.reply(m.chat, '❎ هناك خطأ في لائحة الاوامر', m);
    throw e;
  }
};

handler.help = ['اوامر'];
handler.tags = ['test'];
handler.command = ['اوامر', 'a', 'order'];
handler.register = false;

export default handler;
