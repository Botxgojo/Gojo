let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*هلا بيك يعمري 😩❤‍🔥*'،,
 '*اهلييين نورت✨*',
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*♥🐥وعليكم السلام*',  
     ]; 
   }else if (/^يونا$/i.test(m.text)) { 
     responses = [ 
'*يونا تحت امرك🫡*'
'*يونا في خدمتك❤️‍🔥*'
     ]; 
 }else if (/^غوجو عمك|غوجو عمكم|يونا عمتك|يونا عمتكم$/i.test(m.text)) { 
     responses = [ 
'*اكيد😩❤‍🔥*',
'*تفهم ياعيوني🫠🩵*',
     ]; 
   }else if (/^يونا مرتبطه|يونا مرتبطة|يونا مرتبطة؟$/i.test(m.text)) { 
     responses = [ 
'*نعم بغوجو🫠🩵*',
'*ايوه بعمك غوجو🩵*',
   ]; 
   }else if (/^يونا تحبيني|تحبيني$/i.test(m.text)) { 
     responses = [ 
'*نعم مثل اخوي🙂🤍*',
'*اكرهك🙂💔*',
'*احب غوجو🫠🩵*',
]; 
   }else if (/^يونا تكرهيني|تكرهيني|تكرهيني؟$/i.test(m.text)) { 
     responses = [ 
'*لا ياخي🫤*',
'*لا بس لا تتعب نفسك لحبك🫥*',
'*ااي اكرهك🙄*',   ]; 
     
     }else if (/^هاي|هالو|هلو$/i.test(m.text)) { 
     responses = [ 
       '*هالو🌚♥*',
       '*القمر اجى🩵🌚*'

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*بحبك اكتر🌚❤*',  

     ]; 
   }else if (/^يونا من وين انتي$/i.test(m.text)) { 
     responses = [ 
'تونس🇹🇳❤'
     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
'*مـي تو 🙂🫀*'
     ]; 
     }else if (/^كيفك|شخبارك|انتي منيحه$/i.test(m.text)) { 
     responses = [ 
       'الحمدالله🤍',  

     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       '🌚♥اكيد',
       '*احب غوجو اكثر🐱*'

     ];
     }else if (/^هاي$/i.test(m.text)) { 
     responses = [ 
       'هاي نورت✨',  

     ];
     }else if (/^❤|♥$/i.test(m.text)) { 
     responses = [ 
       '*اعشقق♥*',  

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*اهلا♥*',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
     }else if (/^صباح|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد♥*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^😂|😂😂|😂😂😂$/i.test(m.text)) { 
     responses = [ 
       '*ايش الي يضحك🙂*',
       '*ضحكني معك بالله*'
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*مرحبا♥*',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler
