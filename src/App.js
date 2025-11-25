import React, { useState } from "react";

function App() {
  // 1. Matnni almashtirish
  const [text, setText] = useState("Assalomu alaykum!");
  
  // 2. Rangni almashtirish
  const [color, setColor] = useState("blue");
  
  // 3. Ish turini almashtirish
  const [job, setJob] = useState("Frontend dasturchi");
  
  // 4. Parolni ko'rsat/yashirish
  const [password] = useState("123456");
  const [showPass, setShowPass] = useState(false);
  
  // 5. Tilni almashtirish
  const [lang, setLang] = useState("Salom");
  
  // 6. Katta/ kichik harf
  const [caseText, setCaseText] = useState("frontend");
  
  // 7. Div hajmi
  const [size, setSize] = useState(100);
  
  // 8. Tugma matni
  const [btnText, setBtnText] = useState("Yoqish");

  return (
    <div style={{ padding: "20px" }}>
      {/* 1 */}
      <h3>{text}</h3>
      <button onClick={() => setText(text === "Assalomu alaykum!" ? "Xush kelibsiz!" : "Assalomu alaykum!")}>almashtirish</button>

      {/* 2 */}
      <div style={{ backgroundColor: color, padding: "10px", marginTop: "10px" }}></div>
      <button onClick={() => setColor(color === "blue" ? "red" : "blue")}>bos</button>

      {/* 3 */}
      <h3>{job}</h3>
      <button onClick={() => setJob("React developer")}>React developer</button>
      <button onClick={() => setJob("JavaScript developer")}>JavaScript developer</button>

      {/* 4 */}
      <h3>{showPass ? password : "******"}</h3>
      <button onClick={() => setShowPass(!showPass)}>Parolni ko'rish</button>

      {/* 5 */}
      <h3>{lang}</h3>
      <button onClick={() => setLang(lang === "Salom" ? "Hello" : "Salom")}>Tilni almashtirish</button>

      {/* 6 */}
      <h3>{caseText}</h3>
      <button onClick={() => setCaseText(caseText === "frontend" ? "FRONTEND" : "frontend")}>Katta / kichik </button>

      {/* 7 */}
      <div style={{ width: size, height: size, backgroundColor: "red", marginTop: "10px" }}>
      </div>
      <button onClick={() => setSize(size === 100 ? 200 : 100)}>bos</button>

      {/* 8 */}
      <button onClick={() => setBtnText(btnText === "Yoqish" ? "O'chirish" : "Yoqish")}>{btnText}</button>
    </div>
  );
}

export default App;
