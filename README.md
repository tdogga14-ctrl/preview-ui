Use it to drop in ready-made loading, progress, skeleton, error, and upsell UI classes for preview flows.

A comprehensive Tailwind CSS plugin that provides production-grade styling and adaptive dark-mode components for **Premium AI Headshots** real-time preview interface.

[![npm version](https://img.shields.io/npm/v/@premium-ai/preview-ui.svg)](https://www.npmjs.com/package/@premium-ai/preview-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

---

## ✨ Features

- **🎨 Pre-styled Components** - Ready-to-use CSS classes for common preview UI patterns
- **🌓 Auto Dark Mode** - Automatic dark mode detection via `prefers-color-scheme`
- **⚡ Smooth Animations** - Fade-in effects, loading states, and transitions
- **📱 Responsive Design** - Mobile-first components that work on all screen sizes
- **🔧 Tailwind Native** - Uses Tailwind's `@apply` directive for easy customization
- **♿ Accessible** - Semantic HTML and proper contrast ratios

---

## 🔧 Installation

### 1. Install the package

```bash
## ⚡ Quick start

```text
Install:
npm install @premium-ai/preview-ui --save-dev

### 2. Add to your Tailwind config

In your `tailwind.config.js`, add the plugin:

```javascript
const previewUI = require('@premium-ai/preview-ui');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'class' if you prefer manual dark mode
  plugins: [previewUI],
};
```

### 3. Make sure Tailwind CSS is included in your project

```bash
npm install -D tailwindcss
npx tailwindcss init
```

---

## 📚 Available CSS Classes

### Animation Classes

| Class | Description |
|-------|-------------|
| `.fade-in` | Base fade-in animation (opacity: 0) |
| `.fade-in.loaded` | Triggers fade-in (opacity: 100) |
| `.fade-in.show` | Alternative trigger for fade-in |

### Loading States

| Class | Description |
|-------|-------------|
| `.preview-loading` | Container for loading spinner |
| `.preview-loading i` | Styled spinner icon (blue, animated) |
| `.progress` | Progress bar container |
| `.progress-bar` | Progress bar fill (animate width) |
| `.skeleton` | Skeleton loading placeholder (280px height) |

### Image Preview

| Class | Description |
|-------|-------------|
| `.preview-image-container` | Container with rounded corners and shadow |
| `.preview-image` | Image with fade-in animation |
| `.preview-image.loaded` | Triggers image fade-in |
| `.preview-overlay` | Overlay container (bottom-left positioned) |
| `.preview-overlay button` | Styled overlay buttons |

### Error States

| Class | Description |
|-------|-------------|
| `.error-state` | Error container with red styling |
| `.error-state i` | Large error icon |
| `.error-state button` | Retry button with red background |

### Upsell Components

| Class | Description |
|-------|-------------|
| `.upsell-card` | Card with hover effects |
| `.upsell-card:hover` | Scales and adds shadow on hover |
| `.quality-badge` | Small badge for quality indicators |

---

## 🌓 Dark Mode

This plugin includes **automatic dark mode support** using CSS media queries. Dark mode activates automatically when the user's system preference is set to dark mode (`prefers-color-scheme: dark`).

### Dark Mode Behavior

- **Automatic Detection** - No JavaScript required
- **Seamless Switching** - Instant response to system preference changes
- **Consistent Styling** - All components adapt to dark mode automatically

### Dark Mode Adaptations

- Background colors shift to dark grays
- Text colors adjust for proper contrast
- Borders and shadows are subdued
- Accent colors (blue, red, etc.) are slightly lighter for visibility
- All interactive elements maintain proper hover states

To use class-based dark mode instead, set `darkMode: 'class'` in your Tailwind config and add the `dark` class to your HTML root element.

---

## 🎯 Usage Examples

### Complete Preview Component

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Headshot Preview</title>
  <link href="/path/to/tailwind.css" rel="stylesheet">
</head>
<body class="p-8">
  <div class="ai-preview fade-in max-w-md mx-auto">
    <!-- Your preview content here -->
  </div>

  <script>
    // Trigger fade-in animation
    document.querySelector('.ai-preview').classList.add('loaded');
  </script>
</body>
</html>
```

### Loading State with Spinner

```html
<div class="ai-preview fade-in loaded">
  <div class="preview-loading">
    <i class="fas fa-spinner fa-spin"></i>
    <p class="text-sm text-gray-600">Generating your AI headshot...</p>
  </div>
</div>
```

**Note:** This example uses Font Awesome icons. Include Font Awesome in your project:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

### Loading with Progress Bar

```html
<div class="ai-preview fade-in loaded">
  <div class="preview-loading">
    <i class="fas fa-spinner fa-spin"></i>
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
</div>
```

### Skeleton Loader

```html
<div class="ai-preview fade-in loaded">
  <div class="skeleton"></div>
  <p class="text-sm text-gray-500 mt-2 text-center">Loading preview...</p>
</div>
```

### Image Preview with Fade-in

```html
<div class="ai-preview fade-in loaded">
  <div class="preview-image-container">
    <img 
      src="/path/to/headshot.jpg" 
      alt="AI Generated Headshot" 
      class="preview-image loaded w-full h-auto"
      onload="this.classList.add('loaded')"
    />
    
    <div class="preview-overlay">
      <button onclick="downloadImage()">
        <i class="fas fa-download mr-1"></i> Download
      </button>
      <button onclick="shareImage()">
        <i class="fas fa-share mr-1"></i> Share
      </button>
    </div>
  </div>
</div>
```

### Error State with Retry

```html
<div class="ai-preview fade-in loaded">
  <div class="error-state">
    <i class="fas fa-exclamation-triangle"></i>
    <p class="font-semibold">Generation Failed</p>
    <p class="text-sm">Unable to generate your headshot. Please try again.</p>
    <button onclick="retryGeneration()">
      <i class="fas fa-redo mr-1"></i> Retry
    </button>
  </div>
</div>
```

### Upsell Card

```html
<div class="upsell-card rounded-lg border p-6 cursor-pointer">
  <div class="flex items-start justify-between">
    <div>
      <h3 class="text-lg font-semibold">Premium Quality</h3>
      <span class="quality-badge bg-green-100 text-green-500">
        ⭐ Best Value
      </span>
      <p class="text-sm text-gray-600 mt-2">
        Get 8K resolution with advanced AI enhancement
      </p>
    </div>
    <span class="text-2xl font-bold">$29</span>
  </div>
</div>
```

### Quality Badges

```html
<span class="quality-badge bg-green-100 text-green-500">High Quality</span>
<span class="quality-badge bg-yellow-100 text-yellow-500">Standard</span>
<span class="quality-badge bg-orange-100 text-orange-500">Draft</span>
```

---

## 🔨 Customization

All components use Tailwind's `@apply` directive, making them easy to customize. You can:

1. **Override in your CSS** - Add custom styles after importing Tailwind
2. **Extend the plugin** - Modify the plugin source for project-specific needs
3. **Use Tailwind classes** - Combine plugin classes with standard Tailwind utilities

Example customization:

```css
/* In your custom CSS file */
.preview-image-container {
  @apply border-4 border-blue-500;
}

.preview-loading i {
  @apply text-purple-500;
}
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Getting Started

1. **Fork the repository**
   ```bash
   git clone https://github.com/tdogga14-ctrl/preview-ui.git
   cd preview-ui
   npm install
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Edit `tailwind-ai-preview-plugin.js` for new components
   - Update `README.md` if adding new features
   - Follow the existing code style

4. **Test your changes**
   - Create a test HTML file to verify components work
   - Test in both light and dark modes
   - Check responsive behavior

5. **Commit and push**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**
   - Provide a clear description of your changes
   - Include screenshots for visual changes
   - Reference any related issues

### Contribution Guidelines

- **Follow Tailwind CSS best practices**
- **Maintain dark mode compatibility** for all components
- **Keep the plugin lightweight** - avoid unnecessary dependencies
- **Document new classes** in the README
- **Use semantic HTML** in examples
- **Test across browsers** (Chrome, Firefox, Safari)

### Reporting Issues

Found a bug or have a feature request? [Open an issue](https://github.com/tdogga14-ctrl/preview-ui/issues) with:

- Clear description of the problem or feature
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots (if applicable)
- Environment details (browser, Tailwind version, etc.)

---

## 📝 License

MIT © [Premium AI Headshots]

---

## 🔗 Links

- [npm Package](https://www.npmjs.com/package/@premium-ai/preview-ui)
- [GitHub Repository](https://github.com/tdogga14-ctrl/preview-ui)
- [Report Issues](https://github.com/tdogga14-ctrl/preview-ui/issues)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## 📊 Version History

See [CHANGELOG.md](./CHANGELOG.md) for detailed version history.

---

**Made with ❤️ for Premium AI Headshots**
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
```
