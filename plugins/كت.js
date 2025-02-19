import { MessageTypes } from '@adiwajshing/baileys';

let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat];
    let responses;
    let isPlaying = false;

    if (/^كت$/i.test(m.text)) {
        isPlaying = true;
        responses = [
            'لوفي',
            'ناروتو',
            'ساسكي',
            'سابو',
            'ايس',
            'رايلي',
            'جيرايا',
            'ايتاتشي',
            'ساسكي',
            'شيسوي',
            'يوهان',
            'غوهان',
            'آيزن',
            'فايوليت',
            'نامي',
            'هانكوك',
            'ايتاتشي',
            'روبين',
            'كاكاشي',
            'ريومو',
            'ريمورو',
            'غوكو',
            'غوغو',
            'كيلوا',
            'غون',
            'كورابيكا',
            'يوسكي',
            'ايشيدا',
            'ايتيشغو',
            'ميناتو',
            'رينجي',
            'جيمبي',
            'انوس',
            'سايتاما',
            'نيزيكو',
            'اوراهارا',
            'تانجيرو',
            'نويل',
            'استا',
            'يونو',
            'لايت'
        ];

        let randomIndex = Math.floor(Math.random() * responses.length);
        let correctAnswer = responses[randomIndex];

        let timeout = 60000; // 60 seconds

        conn.reply(m.chat, correctAnswer, m);
        
        let timeoutID = setTimeout(() => {
            conn.reply(m.chat, `للأسف، انتهى الوقت!`, m);
            isPlaying = false;
        }, timeout);

        chat.players = chat.players || {};
        chat.players[m.sender] = {
            answer: null,
            timeoutID: timeoutID
        };
        
        global.db.write();
    } else if (chat.players && chat.players[m.sender]) {
        clearTimeout(chat.players[m.sender].timeoutID);
        if (chat.players[m.sender].answer === null) {
            chat.players[m.sender].answer = m.text;
        }
        isPlaying = false;
    }

    return !0;
};

handler.command = ['كت'];
handler.help = ['كت'];
handler.tags = ['game'];

module.exports = handler;
