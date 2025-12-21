Use it to drop in ready-made loading, progress, skeleton, error, and upsell UI classes for preview flows.
## ⚡ Quick start

Install:

npm install @premium-ai/preview-ui --save-dev

Add the plugin to Tailwind:

// tailwind.config.js
const previewUI = require('@premium-ai/preview-ui');

module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  darkMode: 'media',
  plugins: [previewUI],
};

Use the classes:

<div class="ai-preview fade-in loaded">
  <div class="preview-loading">
    <i>⏳</i>
    <p class="text-sm text-gray-600">Processing... 45%</p>
    <div class="progress">
      <div class="progress-bar" style="width: 45%;"></div>
    </div>
  </div>

  <div class="skeleton mt-4"></div>

  <div class="preview-image-container mt-4">
    <img class="preview-image loaded" src="/path/to/image.jpg" alt="AI headshot" />
    <div class="preview-overlay">
      <button>Retake</button>
      <button>Download</button>
    </div>
  </div>

  <div class="upsell-card mt-4 p-4 rounded-xl">
    <p class="font-semibold">Upgrade for HD exports</p>
    <span class="quality-badge text-green-500">HD</span>
  </div>

  <div class="error-state mt-4">
    <i>⚠️</i>
    <p>Something went wrong. Try again.</p>
    <button>Retry</button>
  </div>
</div>

Note: Icon fonts (Font Awesome, etc.) are not included. Use your own icons if you want.
