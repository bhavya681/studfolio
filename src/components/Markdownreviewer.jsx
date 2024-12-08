// src/components/Markdownreviewer.jsx
import { marked } from 'marked'; // Updated import statement
import { useState } from 'react';

const Markdownreviewer = () => {
  const [markdown, setMarkdown] = useState('');

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Markdown Previewer</h2>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Type your markdown here..."
        className="w-full h-40 p-2 border border-gray-300 rounded mb-4"
      />
      <div className="mt-4">
        <h3 className="text-lg font-bold">Preview</h3>
        <div
          className="p-4 border border-gray-300 rounded bg-gray-50"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
};

export default Markdownreviewer;
