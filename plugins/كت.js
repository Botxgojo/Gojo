let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat];
    let responses;
    if (/^كت$/i.test(m.text)) {
        let time = 60; // 60 seconds
        let word = ['لوفي', 'ناروتو', 'سابو', 'ايس', 'رايلي', 'جيرايا', 'ايتاتشي', 'ساسكي', 'شيسوي', 'يوهان', 'غوهان', 'آيزن', 'فايوليت', 'نامي', 'هانكوك', 'ايتاتشي', 'روبين', 'كاكاشي', 'ريومو', 'ريمورو', 'غوكو', 'غوغو', 'كيلوا', 'غون', 'كورابيكا', 'يوسكي', 'ايشيدا', 'ايتيشغو', 'ميناتو', 'رينجي', 'جيمبي', 'انوس', 'سايتاما', 'نيزيكو', 'اوراهارا', 'تانجيرو', 'نويل', 'استا', 'يونو', 'لايت']; // List of words
        let chosenWord = word[Math.floor(Math.random() * word.length)]; // Choose a random word
        responses = [
            `*تم بدء الكت، يرجى كتابة الكلمة: ${chosenWord}*
            *『𝙂𝙊𝙅𝙊-𝘽𝙊𝙏』🤞*
            `
        ];

        let timer = setTimeout(async () => {
            if (chat.katTimer && chat.katTimer.id === timer) {
                delete chat.katTimer;
                conn.reply(m.chat, '*لقد خسرت، لم يتم كتابة الكلمة في الوقت المحدد.*', m);
            }
        }, time * 1000);

        chat.katTimer = {
            id: timer,
            word: chosenWord
        };
    }
    if (responses) {
        let randomIndex = Math.floor(Math.random() * responses.length);
        conn.reply(m.chat, responses[randomIndex], m);
    }
    return !0;
};

export default handler;
