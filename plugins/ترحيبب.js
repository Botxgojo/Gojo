// استيراد وحدة node-fetch لجلب الصورة الشخصية
const fetch = require('node-fetch');

// دالة لإرسال رسالة ترحيبية وصورة الملف الشخصي
function welcomeNewMember(member) {
    const groupWelcomeMessage = `
*•❅──────────✧𝙎𝙐𝙉☀✧──────────❅•*

*≪━━━━━━━━━━━━━༻﷽༺━━━━━━━━━━━━━≫*

*🜲باجمل الكلام و القلوب البيضاء و الروح الصافية،نرحب بك في مجموعة الانمي اللتي يمكنك اعتبارها كعائلتك،نتمنى لك الاستمتاع و الرفهية و متحمسون لرئيتك تتفاعلᰔᩚ*

*⬤الــــــمـــنــــــشن📧: ${member.mention()}*
*•❅──────────✧𝙎𝙐𝙉☀✧──────────❅•*

*🔴نرجو منك دخول الاعلانات: [https://chat.whatsapp.com/J4aqGdizp16AzAsrfuKAoD] 』*

*نرجو منك قراءة القوانين و عدم مخالفتها [123OakpGjLKwNgR21SgiEShjQ9hEEtksaf4VIb0dcOv8/edit?usp=drivesdk] 』*

*•❅──────────✧𝙎𝙐𝙉☀✧──────────❅•*
    `;

    // إرسال رسالة الترحيب
    member.reply(*🜲باجمل الكلام و القلوب البيضاء و الروح الصافية،نرحب بك في مجموعة الانمي اللتي يمكنك اعتبارها كعائلتك،نتمنى لك الاستمتاع و الرفهية و متحمسون لرئيتك تتفاعلᰔᩚ*);

    // جلب صورة الملف الشخصي للعضو الجديد
    fetch(member.imgUrl)
        .then(res => res.buffer())
        .then(buffer => {
            // إرسال صورة الملف الشخصي
            member.sendImage(buffer, 'profile.jpg', '🌟صورة الملف الشخصي');
        })
        .catch(console.error);
}

// استدعاء الدالة عند انضمام عضو جديد إلى المجموعة
// يجب تعديل الاستمارة والروابط والنصوص حسب الحاجة الفعلية
// وكذلك ضبط الطريقة المناسبة لجلب صورة الملف الشخصي للعضو
conn.on('group-participants-update', async (event) => {
    const members = event.participants.filter(user => user.isUser);
    for (const member of members) {
        // التأكد من أن العضو جديد وليس عضوا موجودا
        if (event.action === 'add') {
            welcomeNewMember(member);
        }
    }
});
