import React, { useState } from "react";

function App() {
  const [text, setText] = useState("Assalomu alaykum!");
  const [color, setColor] = useState("blue");
  const [job, setJob] = useState("Frontend dasturchi");
  const [showPass, setShowPass] = useState;
  const [lang, setLang] = useState("Salom");
  const [caseText, setCaseText] = useState("frontend");
  const [size, setSize] = useState(100);
  const [btnText, setBtnText] = useState("Yoqish");

  return (
    <div style={{ padding: "20px" }}>
      <h3>{text}</h3>
      <button onClick={() => setText(text === "Assalomu alaykum!" ? "Xush kelibsiz!" : "Assalomu alaykum!")}>Matnni almashtirish
      </button>
      <div style={{ backgroundColor: color, padding: "10px", marginTop: "10px" }}></div>
      <button onClick={() => setColor(color === "blue" ? "red" : "blue")}>Rangni almashtirish</button>
    
      <h3>{job}</h3>
      <button onClick={() => setJob("React developer")}>React developer</button>
      <button onClick={() => setJob("JavaScript developer")}>JS developer</button>

      <h3>{showPass ? "123456" : "******"}</h3>
      <button onClick={() => setShowPass(!showPass)}>Parolni ko'rish</button>

      <h3>{lang}</h3>
      <button onClick={() => setLang(lang === "Salom" ? "Hello" : "Salom")}>Tilni almashtirish</button>

      <h3>{caseText}</h3>
      <button onClick={() => setCaseText(caseText === "frontend" ? "FRONTEND" : "frontend")}>Katta / kichik harf</button>

      <div style={{ width: size, height: size, backgroundColor: "red", marginTop: "10px" }}></div>
      <button onClick={() => setSize(size === 100 ? 200 : 100)}>hajmini almashtirish</button>

      <button onClick={() => setBtnText(btnText === "Yoqish" ? "O'chirish" : "Yoqish")}>{btnText}</button>
    </div>
  );
}

export default App;
