import gtts from 'node-gtts'
import { readFileSync, unlinkSync } from 'fs'
import { join } from 'path'

const defaultLang = 'ar'
let handler = async (m, { conn, args, usedPrefix, command }) => {
  let lang = args[0]
  let text = args.slice(1).join(' ')
  if ((args[0] || '').length !== 2) {
    lang = defaultLang
    text = args.join(' ')
  }
  if (!text && m.quoted?.text) text = m.quoted.text

  let res
  try {
    res = await tts(text, lang)
  } catch (e) {
    m.reply("حدث خطأ أثناء تحويل النص إلى صوت.")
    console.error(e)
    text = args.join(' ')
    if (!text) throw `يُرجى تحديد النص الذي ترغب في تحويله إلى صوت. مثال:\n\n ${usedPrefix}${command} ar مرحبا يا نور`
    res = await tts(text, defaultLang)
  } finally {
    if (res) await conn.sendFile(m.chat, res, '', '', m, true)
  }
}
handler.help = ['tts']
handler.tags = ['tools']
handler.command = /^tts|audio$/i

export default handler

function tts(text, lang = 'ar') {
  console.log(lang, text)
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = join(__dirname.toString(), '../tmp', (1 * new Date) + '.wav')
      tts.save(filePath, text, () => {
        resolve(readFileSync(filePath))
        unlinkSync(filePath)
      })
    } catch (e) {
      reject(e)
    }
  })
                     }
