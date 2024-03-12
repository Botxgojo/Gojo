import _0x101ba2 from "node-fetch";
const handler = async (_0x5c332f, {
  conn: _0x5833d1,
  args: _0x588277,
  text: _0x5ba376,
  command: _0x4228ab,
  usedPrefix: _0x2ded1c,
  isCreator: _0x2a5170,
  isPrems: _0x39afd2
}) => {
  if (!_0x5ba376) {
    return _0x5833d1.reply(_0x5c332f.chat, "مثال : \n *" + _0x2ded1c + _0x4228ab + "*ᥡᥙᥒᥲ☕︎︎*", _0x5c332f);
  }
  _0x5833d1.sendMessage(_0x5c332f.chat, {
    react: {
      text: "🕒",
      key: _0x5c332f.key
    }
  });
  let _0x3346c2 = "https://api.lolhuman.xyz/api/ephoto1/goldplaybutton?apikey=Gatadios&text=" + _0x5ba376;
  _0x5833d1.sendFile(_0x5c332f.chat, _0x3346c2, "goldplaybutton.jpg", "اجتهد حتى تصير يوتوبر و تجيبه⚡", _0x5c332f, false);
};
handler.help = ["درع_يوتيوب"];
handler.tags = ["logo"];
handler.command = /^(درع_يوتيوب)$/i;
export default handler;
