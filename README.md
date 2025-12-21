# @premium-ai/preview-ui

Tailwind plugin that adds production-grade styling and adaptive dark-mode components for **Premium AI Headshots** realtime preview.

---

## 🔧 Installation
```bash
npm install @premium-ai/preview-ui --save-dev
```

Add the plugin to your Tailwind config (dark mode is `media`):

```js
// tailwind.config.js
const previewUI = require('@premium-ai/preview-ui');

module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  darkMode: 'media',
  plugins: [previewUI]
};
```

Drop the classes into your preview markup:

```html
<div class="ai-preview fade-in">
  <div class="preview-loading">
    <i class="fas fa-spinner fa-spin"></i>
  </div>
  <div class="skeleton"></div>
  <div class="preview-image-container">
    <img class="preview-image loaded" src="/path/to/image.jpg" alt="AI headshot" />
    <div class="preview-overlay">
      <button>Retake</button>
      <button>Download</button>
    </div>
  </div>
  <div class="upsell-card">
    <span class="quality-badge text-green-500">HD</span>
  </div>
  <div class="error-state hidden">
    <i class="fas fa-exclamation-circle"></i>
    <p>Something went wrong. Try again.</p>
    <button>Retry</button>
  </div>
</div>
```