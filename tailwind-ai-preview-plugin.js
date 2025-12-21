// ============================================================
// Premium AI Headshots - Tailwind Plugin (v4-friendly)
// Module: preview-ui (auto Dark Mode support via nested media)
// ============================================================
const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents }) {
  addComponents({
    ".fade-in": {
      "@apply opacity-0 transition-opacity duration-700 ease-out": {},
      "&.loaded, &.show": { "@apply opacity-100": {} },
    },

    ".preview-loading": {
      "@apply flex flex-col items-center justify-center text-center space-y-2": {},
      "& i": { "@apply text-blue-500 text-3xl animate-spin": {} },
      "@media (prefers-color-scheme: dark)": {
        "& i": { "@apply text-blue-400": {} },
      },
    },

    ".progress": {
      "@apply w-full bg-gray-200 rounded-full overflow-hidden h-2 mt-2": {},
      "@media (prefers-color-scheme: dark)": { "@apply bg-gray-700": {} },
    },

    ".progress-bar": {
      "@apply h-2 bg-blue-500 transition-all duration-500 ease-out": {},
      "@media (prefers-color-scheme: dark)": { "@apply bg-blue-400": {} },
    },

    ".skeleton": {
      "@apply animate-pulse bg-gray-200 rounded-xl": {},
      height: "280px",
      width: "100%",
      "@media (prefers-color-scheme: dark)": { "@apply bg-gray-700": {} },
    },

    ".preview-image-container": {
      "@apply relative rounded-xl overflow-hidden shadow-md": {},
      "@media (prefers-color-scheme: dark)": {
        "@apply border border-gray-700": {},
      },
    },

    ".preview-image": {
      "@apply opacity-0 transition-opacity duration-700 ease-in": {},
      "&.loaded": { "@apply opacity-100": {} },
    },

    ".preview-overlay": {
      "@apply absolute bottom-3 left-3 flex gap-2": {},
      "& button": {
        // NOTE: Tailwind v4 removed bg-opacity-* so we use /opacity syntax
        "@apply bg-gray-800/70 text-white px-3 py-1 rounded-md text-xs font-medium transition-all duration-200 hover:bg-gray-800 hover:shadow-md":
          {},
      },
      "@media (prefers-color-scheme: dark)": {
        "& button": {
          "@apply bg-gray-700/80 hover:bg-gray-600 hover:shadow-lg": {},
        },
      },
    },

    ".error-state": {
      "@apply flex flex-col items-center justify-center bg-red-50 border border-red-200 rounded-lg p-5 text-red-600 space-y-2":
        {},
      "& i": { "@apply text-3xl": {} },
      "& button": {
        "@apply bg-red-500 text-white px-4 py-1 rounded shadow transition hover:bg-red-600":
          {},
      },
      "@media (prefers-color-scheme: dark)": {
        "@apply bg-red-900 border-red-700 text-red-300": {},
        "& button": { "@apply bg-red-600 hover:bg-red-500": {} },
      },
    },

    ".upsell-card": {
      "@apply transition-all duration-300 ease-out bg-white": {},
      "&:hover": { "@apply scale-[1.02] shadow-md bg-gray-50": {} },
      "@media (prefers-color-scheme: dark)": {
        "@apply bg-gray-800 border border-gray-700 text-gray-200": {},
        "&:hover": { "@apply bg-gray-700 shadow-lg": {} },
      },
    },

    ".quality-badge": {
      "@apply inline-block px-2 py-1 text-xs font-semibold rounded-md mt-1": {},
      "@media (prefers-color-scheme: dark)": {
        "&.text-green-500": { "@apply text-green-400": {} },
        "&.text-yellow-500": { "@apply text-yellow-400": {} },
        "&.text-orange-500": { "@apply text-orange-400": {} },
      },
    },

    // Optional: if your README references .ai-preview, define it here
    ".ai-preview": {
      "@apply rounded-xl shadow-xl bg-white border border-gray-200": {},
      "@media (prefers-color-scheme: dark)": {
        "@apply bg-gray-800 border-gray-700 text-gray-100": {},
      },
    },
  });
});
});
