import React, { useState } from "react";

const LanguageTanslator = () => {
  const languages = [
    "English",
    "Marathi",
    "Hindi",
    "Spanish",
    "French",
    "German",
    "Italian",
    "Japanese",
    "Chinese",
  ];

  const [currentLanguage, setCurrentLanguage] = useState("English");
  const [toLanguage, setToLanguage] = useState("Marathi");

  const [inputText, setInputText] = useState("");
  const [outPutText, setOutPutText] = useState("");

  console.log(inputText);

  const handleTranslate = () => {
    if (inputText === "") return;
    translateApi();
  };

  const translateApi = async () => {
    try {
      const response = await fetch(
        "https://api-devdigibook.navneet.com/api-openai/translate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: inputText }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result.translated_text);
        setOutPutText(result.translated_text);
      } else {
        console.error("Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <div className="w-[50%] mx-auto">
        <p className="text-3xl font-bold py-2">Language Tanslator</p>
        <div className="flex justify-center items-center gap-3">
          <select
            className="border-2 border-solid border-black w-full p-2"
            value={currentLanguage}
            onChange={(e) => setCurrentLanguage(e.target.value)}
          >
            {languages.map((language, index) => (
              <option key={index} value={language}>
                {language}
              </option>
            ))}
          </select>
          <select
            className="border-2 border-solid border-black w-full p-2"
            value={toLanguage}
            onChange={(e) => setToLanguage(e.target.value)}
          >
            {languages.map((language, index) => (
              <option key={index} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <p className=" text-left text-2xl text-green-400">Input</p>
          <textarea
            rows={5}
            className="border-2 border-solid border-black w-full p-2 "
            name="text"
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
            placeholder="Please enter the message to translate"
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className=" text-left text-2xl text-green-400">output</p>
          <textarea
            rows={5}
            // onChange={(e) => setOutPutText(e.target.value)}
            value={outPutText}
            className="border-2 border-solid border-black w-full p-2"
          />
        </div>
        <div className="py-4">
          <button
            className="w-full bg-green-400 text-white p-3 hover:bg-green-600"
            onClick={handleTranslate}
          >
            Translate
          </button>
        </div>
      </div>
    </>
  );
};

export default LanguageTanslator;
