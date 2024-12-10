import React, { useState, useEffect } from "react";
import PreviewImages from "./PreviewImages";
import base64 from "base64-encode-file";
import SelectImageSvg from "../SVG/SelectImage";
import PausedInputSvg from "../SVG/PausedInput";
import SendInputSvg from "../SVG/SendInput";

const InputContainer = ({
  input,
  setInput,
  handleSend,
  status,
  file,
  setFile,
}) => {
  const [overflow, setOverflow] = useState("hidden");
  const [scrollHeight, setScrollHeight] = useState(0);
  const [showPreview, setShowPreview] = useState(false);

  const handleInput = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
    setScrollHeight(e.target.scrollHeight);
    setInput(e.target.value);
  };

  useEffect(() => {
    if (scrollHeight > 240) {
      setOverflow("visible");
    } else {
      setOverflow("hidden");
    }
  }, [scrollHeight]);

  useEffect(() => {
    if (input == "") {
      setScrollHeight(0);
    }
  }, [input]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      if (status !== "pending") {
        onSend();
      }
    }
  };

  const onSend = () => {
    if (input.trim()) {
      handleSend();
      setInput("");
      setFile(null);
      setScrollHeight(0);
      setShowPreview(false);
    }
  };

  const AddedImages = async (files) => {
    var image = [];
    for (
      let index = 0;
      index < (files.length > 2 ? 2 : files.length);
      index++
    ) {
      const element = files[index];
      var res = await base64(element);

      var base = res.split("base64,")[1];
      image.push(base);
    }
    setFile(image);
  };

  return (
    <div className="bg-input p-2 m-2 rounded-3xl w-[95%] md:w-[75%] lg:w-[42%] ">
      <PreviewImages
        files={file}
        setFiles={setFile}
        showPreview={showPreview}
        setShowPreview={setShowPreview}
      />
      <div className="flex items-end justify-between">
        <div className="justify-start">
          <input
            type="file"
            id="file"
            multiple
            accept=".jpg, .jpeg, .png"
            style={{ display: "none" }}
            onChangeCapture={async (e) => {
              AddedImages(e.target.files);
            }}
          />
          <button
            onClick={() => {
              document.getElementById("file").click();
            }}
          >
            <div className={`rounded-full `}>
              <SelectImageSvg />
            </div>
          </button>
        </div>
        <div className="w-full items-center ps-4">
          <textarea
            className="w-full resize-none bg-transparent outline-none text-white"
            type="text"
            value={input}
            onChange={handleInput}
            onInput={handleInput}
            autoFocus={true}
            rows={1}
            onKeyDown={handleKeyDown}
            placeholder="Enter prompt..."
            style={{
              overflow: overflow,
              maxHeight: "240px",
              backgroundColor: "transparent",
            }}
          />
        </div>
        <div className="items-end ">
          <button
            disabled={status === "pending" || input.trim() === ""}
            onClick={() => {
              onSend();
            }}
          >
            <div
              className={`rounded-full ${
                input.trim() === "" || status !== "success"
                  ? "bg-slate-500"
                  : "bg-white"
              }`}
            >
              {status === "pending" ? <PausedInputSvg /> : <SendInputSvg />}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputContainer;
