// postcss.config.mjs

import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer'; // Make sure to import autoprefixer

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
    // Add other PostCSS plugins here if needed
  ]
};
