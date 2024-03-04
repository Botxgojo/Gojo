import { addExif } from '../lib/sticker.js'

let handler = async (m, { conn, text }) => {
    if (!m.quoted) throw 'الرجاء الاشارة الى الملصق الذي تريد أن تغير حقوقه مثال : \n *.سرقه gojo bot*'
    let stiker = false
    try {
        let [packname, ...author] = text.split('|')
        author = (author || []).join('|')
        let mime = m.quoted.mimetype || ''
        if (!/webp/.test(mime)) throw '*الرجاء الاشارة الى الملصق الذي تريد أن تغير حقوقه مثال : \n *.سرقه gojo bot*'
        let img = await m.quoted.download()
        if (!img) throw '*الرجاء  الاشارة الى الملصق الذي تريد أن تغير حقوقه مثال : \n *.سرقه gojo bot*'
        stiker = await addExif(img, packname || global.packname, author || global.author.replace("bobiza", ""))
    } catch (e) {
        console.error(e)
        if (Buffer.isBuffer(e)) stiker = e
    } finally {
        if (stiker) conn.sendFile(m.chat, stiker, 'سرقه.webp', '', m, false, { asSticker: true })
        else throw '*راسل صاحب البوت هناك مشكلة\n instagram.com/noureddine_ouafy*'
    }
}

handler.help = ['سرقه']
handler.tags = ['سرقه']
handler.command = /^take|سرقه$/i

export default handler
