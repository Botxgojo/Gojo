import fs from 'fs'

let handler = m => m;

handler.all = async function(m, { conn }) {
    let chat = global.db.data.chats[m.chat];
    let responses;
    let isPlaying = false;

    if (/^كت$/i.test(m.text) && !isPlaying) {
        isPlaying = true;
        responses = [
            // قائمة الأسماء هنا
        ];

        let randomIndex = Math.floor(Math.random() * responses.length);
        let correctAnswer = responses[randomIndex];

        let timeout = 60000; // 60 ثانية

        conn.reply(m.chat, correctAnswer, m);
        
        let points = 0;

        setTimeout(() => {
            if (chat.players && chat.players[m.sender]) {
                if (chat.players[m.sender].answer) {
                    if (chat.players[m.sender].answer.toLowerCase() === correctAnswer.toLowerCase()) {
                        points += 60;
                        conn.reply(m.chat, `أحسنت! لقد فزت بمكافأة 60 نقطة`, m);
                    } else {
                        conn.reply(m.chat, `للأسف، لم تكن سريعاً بما فيه الكفاية!`, m);
                    }
                } else {
                    conn.reply(m.chat, `لم ترد بكلمة في الوقت المحدد!`, m);
                }
                delete chat.players[m.sender];
            } else {
                conn.reply(m.chat, `للأسف، لم ترد بكلمة في الوقت المحدد!`, m);
            }
            isPlaying = false;
        }, timeout);

        chat.players = chat.players ? chat.players : {};
        chat.players[m.sender] = {
            answer: null
        };

        fs.writeFileSync('./config.json', JSON.stringify(global.db));
    } else if (chat.players && chat.players[m.sender]) {
        chat.players[m.sender].answer = m.text;
    }

    return !0;
};

export default handler;
