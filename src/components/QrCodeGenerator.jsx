// // src/components/QrCodeGenerator.jsx
// import React, { useState } from 'react';
// import QRCode from 'qrcode.react'; // Use default import

// const QrCodeGenerator = () => {
//   const [input, setInput] = useState('');
//   const [url, setUrl] = useState('');

//   const generateQRCode = () => {
//     setUrl(input);
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
//       <h2 className="text-xl font-bold mb-4">QR Code Generator</h2>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Enter text or URL"
//         className="w-full p-2 border border-gray-300 rounded mb-4"
//       />
//       <button onClick={generateQRCode} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
//         Generate QR Code
//       </button>
//       {url && (
//         <div className="mt-4">
//           <QRCode value={url} />
//           <p className="text-center mt-2">Scan the code above</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default QrCodeGenerator;


import React from 'react'

const QrCodeGenerator = () => {
  return (
    <div>QrCodeGenerator</div>
  )
}

export default QrCodeGenerator