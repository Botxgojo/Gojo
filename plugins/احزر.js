// قائمة بالشخصيات الصحيحة
const correctCharacters = ['ناروتو', 'جوجو', 'غون'];

// دالة لتوليد رقم عشوائي بين 0 و n-1
function getRandomIndex(n) {
  return Math.floor(Math.random() * n);
}

// دالة لاختيار صورة عشوائية
function getRandomImage() {
  // قم بتوليد رقم عشوائي لاختيار الشخصية
  const randomIndex = getRandomIndex(correctCharacters.length);
  const character = correctCharacters[randomIndex];
  // هنا يمكنك استبدال الرابط برابط للصور الخاصة بك
  const imageUrl = `https://api.unsplash.com/photos/random?query=${character}&client_id=Screenshot_2024-03-04-12-28-18-453_com.whatsapp.w4b-edit.jpg`;
  return imageUrl;
}

// دالة لفحص ما إذا كانت الشخصية صحيحة أم لا
function checkAnswer(characterName, userAnswer) {
  return correctCharacters.includes(characterName) && userAnswer.toLowerCase() === characterName.toLowerCase();
}

// دالة لإرسال الرد
function sendResponse(isCorrect) {
  if (isCorrect) {
    return '500 نقطة';
  } else {
    return 'رسبت';
  }
}

// استقبال الأمر والرد على الصورة
function handleCommand(command, characterName) {
  const imageUrl = getRandomImage();
  const isCorrect = checkAnswer(characterName, command);
  const response = sendResponse(isCorrect);
  return { imageUrl, response };
}

// مثال على استخدام الدالة
const command = 'ناروتو'; // يمكن استبداله بالأمر الذي يتم استلامه من المستخدم
const characterName = 'ناروتو'; // اسم الشخصية المتوقعة
const { imageUrl, response } = handleCommand(احزر, characterName);
console.log('ImageUrl:', imageUrl);
console.log('Response:', response);
