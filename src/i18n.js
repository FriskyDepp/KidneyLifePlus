import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "KLP_Platform1": "Screening for kidney disease through retinal examination is a potential platform",
      "KLP_Platform2": "To identify potential risks of rapid kidney disease progression.",
      "SignUp": "Sign up",
      "LogIn": "Log in",
      "Email" : "Enter your email",
      "Password" : "Enter your password",
      "Re-en" : "Re-enter your password",
      "ShowPass" : "Show Password",
      "HaveAcc" : "Already have an account?",
      "Screen" : "Detecting chronic kidney disease through retinal examination",
      "Test" : "Start testing",
    }
  },
  th: {
    translation: {
      "KLP_Platform1": "แพลตฟอร์มคัดกรองโรคไต ด้วยการตรวจ เรตินาในดวงตา",
      "KLP_Platform2": "เพื่อช่วยให้ทราบความเสี่ยง ในการเป็นโรคไตอย่างรวดเร็ว",
      "SignUp": "ลงชื่อเข้าใช้",
      "LogIn": "เข้าสู่ระบบ",
      "Email" : "กรุณากรอกอีเมลของคุณ",
      "Password" : "กรุณากรอกรหัสของคุณ",
      "Re-en" : "กรอกรหัสอีกครั้ง",
      "ShowPass" : "แสดงรหัสผ่าน",
      "HaveAcc" : "มีบัญชีอยู่แล้วหรือไม่?",
      "Screen" : "คัดกรองโรคไตเรื้อรัง ด้วยการตรวจเรตินาทำแบบทดสอบ",
      "Test" : "ทำแบบทดสอบ",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "th",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;