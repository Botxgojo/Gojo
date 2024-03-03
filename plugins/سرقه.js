import { addExif } from '../lib/sticker.js'

let handler = async (m, { conn, text }) => {
    if (!m.quoted) throw 'الرجاء الاشارة الى الملصق الذي تريد أن تغير حقوقه مثال : \n *.سرقه packname | author*'
    
    let stiker = false
    try {
        let [packname, author] = text.split('|').map(v => v.trim())
        let mime = m.quoted.mimetype || ''
        
        if (!/webp/.test(mime)) throw '*الرجاء الاشارة الى الملصق الذي تريد أن تغير حقوقه مثال : \n *.سرقه packname | author*'
        
        let img = await m.quoted.download()
        if (!img) throw '*الرجاء  الاشارة الى الملصق الذي تريد أن تغير حقوقه مثال : \n *.سرقه packname | author*'
        
        stiker = await addExif(img, packname || global.packname, author || global.author)
    } catch (e) {
        console.error(e)
        if (Buffer.isBuffer(e)) stiker = e
    } finally {
        if (stiker) conn.sendFile(m.chat, stiker, 'سرقه.webp', '', m, false, { asSticker: true })
        else throw 'بوت'
    }
}

handler.help = ['سرقه']
handler.tags = ['سرقه']
handler.command = /^take|سرقه$/i

export default handler
