// ============================================================
// Premium AI Headshots - Tailwind Plugin v1.0
// Module: aiPreviewUI (auto Dark Mode support)
// ============================================================
const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents }) {
  addComponents({
    '.fade-in': { '@apply opacity-0 transition-opacity duration-700 ease-out': {} },
    '.fade-in.loaded, .fade-in.show': { '@apply opacity-100': {} },

    '.preview-loading': { '@apply flex flex-col items-center justify-center text-center space-y-2': {} },
    '.preview-loading i': { '@apply text-blue-500 text-3xl animate-spin': {} },

    '.progress': { '@apply w-full bg-gray-200 rounded-full overflow-hidden h-2 mt-2': {} },
    '.progress-bar': { '@apply h-2 bg-blue-500 transition-all duration-500 ease-out': {} },

    '.skeleton': { '@apply animate-pulse bg-gray-200 rounded-xl': {}, height: '280px', width: '100%' },

    '.preview-image-container': { '@apply relative rounded-xl overflow-hidden shadow-md': {} },
    '.preview-image': { '@apply opacity-0 transition-opacity duration-700 ease-in': {} },
    '.preview-image.loaded': { '@apply opacity-100': {} },

    '.preview-overlay': { '@apply absolute bottom-3 left-3 flex gap-2': {} },
    '.preview-overlay button': {
      '@apply bg-gray-800 bg-opacity-70 text-white px-3 py-1 rounded-md text-xs font-medium hover:bg-opacity-100 hover:shadow-md transition-all duration-200': {}
    },

    '.error-state': {
      '@apply flex flex-col items-center justify-center bg-red-50 border border-red-200 rounded-lg p-5 text-red-600 space-y-2': {}
    },
    '.error-state i': { '@apply text-3xl': {} },
    '.error-state button': {
      '@apply bg-red-500 text-white px-4 py-1 rounded shadow hover:bg-red-600 transition': {}
    },

    '.upsell-card': { '@apply transition-all duration-300 ease-out bg-white': {} },
    '.upsell-card:hover': { '@apply transform scale-[1.02] shadow-md bg-gray-50': {} },

    '.quality-badge': { '@apply inline-block px-2 py-1 text-xs font-semibold rounded-md mt-1': {} },

    '@media (prefers-color-scheme: dark)': {
      body: { '@apply bg-gray-900 text-gray-100': {} },
      '.ai-preview': { '@apply bg-gray-800 border border-gray-700 rounded-xl shadow-xl': {} },
      '.preview-loading i': { '@apply text-blue-400': {} },
      '.progress': { '@apply bg-gray-700': {} },
      '.progress-bar': { '@apply bg-blue-400': {} },
      '.skeleton': { '@apply bg-gray-700': {} },
      '.preview-image-container': { '@apply border border-gray-700': {} },
      '.preview-overlay button': { '@apply bg-gray-700 bg-opacity-80 hover:bg-gray-600 hover:shadow-lg': {} },
      '.upsell-card': { '@apply bg-gray-800 border border-gray-700 text-gray-200': {} },
      '.upsell-card:hover': { '@apply bg-gray-700 shadow-lg': {} },
      '.error-state': { '@apply bg-red-900 border border-red-700 text-red-300': {} },
      '.error-state button': { '@apply bg-red-600 hover:bg-red-500': {} },
      '.quality-badge.text-green-500': { '@apply text-green-400': {} },
      '.quality-badge.text-yellow-500': { '@apply text-yellow-400': {} },
      '.quality-badge.text-orange-500': { '@apply text-orange-400': {} },
      '#satisfactionText': { '@apply text-gray-300': {} }
    }
  });
});

// Example usage in a consumer tailwind.config.js (do not export from here):
// const previewUI = require('@premium-ai/preview-ui');
// module.exports = {
//   content: ['./src/**/*.{html,js}'],
//   darkMode: 'media',
//   plugins: [previewUI]
// };