import React, { useRef, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";

const ESignPad = ({ backgroundColor, textColor, fontSize, forwardedRef }) => {
  const sigCanvas = useRef(null);

  useEffect(() => {
    if (sigCanvas.current) {
      const canvas = sigCanvas.current.getCanvas();
      canvas.style.backgroundColor = backgroundColor;
      const ctx = canvas.getContext("2d");
      ctx.font = `${fontSize}px Arial`;
    }
  }, [backgroundColor, fontSize]);

  const clearCanvas = () => {
    sigCanvas.current.clear();
  };

  useEffect(() => {
    if (forwardedRef) {
      forwardedRef.current = sigCanvas.current;
    }
  }, [forwardedRef]);

  return (
    <>
      <div className="shadow-xl shadow-gray rounded-[24%]">
        <SignatureCanvas
          ref={sigCanvas}
          penColor={textColor}
          canvasProps={{ width: 500, height: 200}}
        />
      </div>
      <br></br>
      <div className="flex justify-center items-center">
        <button
          onClick={clearCanvas}
          className="ml-4 px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Clear
        </button>
      </div>


    </>
  );
};

export default ESignPad;
