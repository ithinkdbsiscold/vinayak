# TejalBen Acharya Soni Website - Maintenance & Customization Guide

## 📋 Quick Reference

This guide helps you maintain and customize the website without deep technical knowledge.

---

## 🎨 DESIGN CUSTOMIZATION

### 1. Change Color Scheme

**File**: `styles.css` (Lines 1-20)

```css
:root {
    --primary-gold: #C9A227;      /* Main color - Used for buttons, accents */
    --dark-brown: #2B1D14;        /* Dark color - Used for text, backgrounds */
    --white: #FFFFFF;             /* Base white color */
    --light-gold: #E8D7B8;        /* Light accent color */
    --soft-gold: #F5EDE2;         /* Very light accent */
}
```

**Example**: To make the primary color more orange-gold:
```css
--primary-gold: #D4A574;  /* Change from #C9A227 to this value */
```

### 2. Change Font Family

**File**: `styles.css` (Line 29)

```css
body {
    font-family: 'Georgia', 'Garamond', serif;  /* Current font */
}
```

**Common Alternatives**:
```css
/* Elegant serif fonts */
font-family: 'Garamond', serif;
font-family: 'Palatino', serif;

/* Clean sans-serif fonts */
font-family: 'Arial', sans-serif;
font-family: 'Helvetica Neue', sans-serif;
font-family: 'Segoe UI', sans-serif;
```

### 3. Adjust Spacing & Padding

**File**: `styles.css`

```css
/* Example: Make sections more spacious */
.services-preview {
    padding: 5rem 2rem;  /* Change 5rem to 7rem for more space */
}
```

### 4. Change Animation Speed

**File**: `styles.css` (Line 14)

```css
--transition-smooth: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                              ↑ Change this number (in seconds)
                              
/* 0.2s = Very fast
   0.4s = Current (Recommended)
   0.8s = Slow
   1.2s = Very slow
*/
```

---

## 📝 CONTENT CUSTOMIZATION

### 1. Update Astrologer Information

**File**: `config.js` (Lines 10-18)

```javascript
astrologer: {
    name: "TejalBen Acharya Soni",              // Update name
    title: "Premium Vedic Astrology Specialist", // Update title
    tagline: "Unveiling Your Cosmic Destiny Through Ancient Wisdom", // Update tagline
    phone: "8849622721",                        // Update phone
    whatsappNumber: "918849622721"              // Update WhatsApp number
}
```

### 2. Update Contact Information

**File**: `script.js` (Lines 3-8)

```javascript
const CONFIG = {
    whatsappNumber: '918849622721',  // Change to new WhatsApp number
    phoneNumber: '+91 8849622721',   // Change to new phone number
    blessings: [
        'ॐ श्री गणेशाय नमः',    // Add/remove blessings
        'कुलदेवी कृपा',
        'गुरुकृपा',
        'वीरकृपा'
    ]
};
```

### 3. Modify Services List

**File**: `config.js` (Lines 35-81) or directly in `index.html` (Services Page)

To edit in config.js:
```javascript
{
    name: "Hast Rekha",           // Service name
    icon: "✋",                    // Emoji icon
    description: "Ancient palmistry art reveals..." // Description
}
```

To add a new service:
```javascript
{
    name: "New Service Name",
    icon: "🔮",  // Choose from emoji list or paste any emoji
    description: "Your service description here (2-3 sentences recommended)."
}
```

**Emoji Suggestions**:
```
Spiritual:  🔮 ✨ 💫 🌟 ⭐ 🎆 🌌
Elements:   🔥 💧 🌊 🌊 💨
Symbols:    ✦ ✧ ◆ ◇ ◈ ✝ ☬ ☯ ☬ 🕉 ॐ
People:     👨 👩 👶 👴 👵 🧘
Objects:    🕯️ 📿 🪬 📖 📚 💎 💍
```

### 4. Update Blessings/Mantras

**File**: `config.js` (Lines 23-29) or `script.js` (Lines 3-8)

Current blessings:
```javascript
blessings: [
    'ॐ श्री गणेशाय नमः',   // Change to new mantra
    'कुलदेवी कृपा',
    'गुरुकृपा',
    'वीरकृपा'
]
```

### 5. Edit Page Content

**File**: `index.html`

Each section follows this pattern:
```html
<section id="[page-name]" class="page">
    <div class="page-header">
        <h1>Page Title</h1>           <!-- Edit this title -->
        <p>Page Subtitle</p>           <!-- Edit this subtitle -->
    </div>
    <!-- Edit content here -->
</section>
```

---

## 🖼️ IMAGE MANAGEMENT

### 1. Add Background Image

**File**: `styles.css` (Lines 195-205)

The background image should be in the same folder as `index.html`.

To change the background style:
```css
.hero-background {
    background: linear-gradient(135deg, var(--soft-gold) 0%, var(--white) 100%);
    /* Change this gradient or add a background image */
}
```

### 2. Add Ganpati Image

1. **Obtain Image**: Have a PNG image of Ganpati Ji
2. **Save as**: `ganpati.png` in the same folder as `index.html`
3. **Recommended Size**: 300x400 pixels (PNG format)
4. **The website will automatically detect and display it**

If not appearing:
- Check file name is exactly `ganpati.png`
- Check file is in same folder as `index.html`
- Clear browser cache and refresh

### 3. Adjust Image Size

**File**: `styles.css` (Lines 1410-1420)

```css
.ganpati-image {
    max-width: 250px;  /* Change this value to adjust size */
    height: auto;
}
```

---

## 🔧 FUNCTIONAL CUSTOMIZATION

### 1. Change WhatsApp Message Format

**File**: `script.js` (Lines 111-130)

Current format:
```javascript
const message = `Name: ${fullName}\nBirth Date: ${birthDate}\nBirth Time: ${birthTime}\nBirth Place: ${birthPlace}\n\nI want astrology enquiry.`;
```

Customize the message:
```javascript
const message = `
Hello TejalBen,

Please find my birth details below:

Name: ${fullName}
Birth Date: ${birthDate}
Birth Time: ${birthTime}
Birth Place: ${birthPlace}

I would like to book a consultation for astrology guidance.

Thank you!
`;
```

### 2. Change WhatsApp Default Message

**File**: `script.js` (Lines 90-95)

When user clicks WhatsApp button:
```javascript
function openWhatsApp() {
    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=Namaste%20TejalBen%2C%20I%20would%20like%20to%20know%20more%20about%20your%20astrology%20services.`;
    // ^ You can customize this text
}
```

### 3. Add More Pages

**Step 1**: Add page HTML in `index.html`
```html
<section id="new-page" class="page">
    <div class="page-header">
        <h1>New Page Title</h1>
    </div>
    <!-- Your content here -->
</section>
```

**Step 2**: Add navigation link in navbar
```html
<li><a href="#new-page" class="nav-link" onclick="navigateTo('new-page')">New Page</a></li>
```

**Step 3**: Add page styling in `styles.css`
```css
/* Add custom styles if needed */
```

---

## 📱 RESPONSIVE DESIGN ADJUSTMENTS

### Change Mobile Breakpoints

**File**: `styles.css` (Starting from line 1300)

Current breakpoints:
```css
@media (max-width: 1024px) { ... }  /* Tablets */
@media (max-width: 768px) { ... }   /* Small tablets & large phones */
@media (max-width: 480px) { ... }   /* Small phones */
```

To adjust for different devices:
```css
/* Add new breakpoint */
@media (max-width: 320px) {
    /* Extra small phones */
}

@media (min-width: 1440px) {
    /* Large desktop screens */
}
```

---

## 🔗 LINK MANAGEMENT

### Internal Navigation Links

**File**: `index.html` or `script.js`

All internal links use the navigation system:
```html
<a href="#[page-id]" onclick="navigateTo('[page-id]')">Link Text</a>
```

### External Links

```html
<!-- WhatsApp links -->
<a href="https://wa.me/918849622721">WhatsApp Us</a>

<!-- Phone links -->
<a href="tel:+918849622721">Call Us</a>

<!-- Email links -->
<a href="mailto:email@example.com">Email Us</a>

<!-- External websites -->
<a href="https://example.com" target="_blank">External Site</a>
```

---

## 🔐 SECURITY BEST PRACTICES

1. **Never store sensitive data** in JavaScript or HTML
2. **Use HTTPS** when deploying online
3. **Don't expose personal information** directly
4. **Validate all form inputs** (already done)
5. **Keep backups** of all files

---

## 📊 ANALYTICS & SEO

### Update SEO Metadata

**File**: `index.html` (Lines 5-8)

```html
<meta name="description" content="Update your website description">
<meta name="keywords" content="astrology, vedic, kundali, guidance">
<title>Your Website Title</title>
```

### Add Google Analytics (Optional)

Add this before closing `</body>` tag in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## 🚀 DEPLOYMENT

### Deploy to Free Hosting

1. **Netlify** (Recommended)
   - Drag & drop folder
   - Automatic HTTPS
   - Free domain option

2. **GitHub Pages**
   - Upload to GitHub
   - Enable GitHub Pages in settings
   - Free domain

3. **Vercel**
   - Simple deployment
   - Automatic SSL
   - Fast CDN

---

## 🛠️ TROUBLESHOOTING COMMON ISSUES

### Issue: WhatsApp not opening
**Solution**: 
- Check WhatsApp number format (include country code +91)
- Test with different browser
- Ensure WhatsApp is installed

### Issue: Animations not smooth
**Solution**:
- Check `--transition-smooth` value
- Reduce complexity of animations
- Test on different devices

### Issue: Mobile menu not working
**Solution**:
- Clear browser cache
- Check JavaScript is enabled
- Test in incognito mode

### Issue: Images not showing
**Solution**:
- Verify file names and extensions
- Check file is in same folder as `index.html`
- Use absolute file paths if needed

---

## 📚 USEFUL RESOURCES

- **Emojis**: https://www.emojidict.com/
- **Colors**: https://www.color-hex.com/
- **Fonts**: https://www.google.com/fonts
- **Icons**: https://www.flaticon.com/
- **CSS Help**: https://developer.mozilla.org/en-US/docs/Web/CSS/

---

## 💾 BACKUP & VERSION CONTROL

### Create Backups

1. **Manual Backup**:
   - Copy entire folder to safe location
   - Date folder names: `website_2026-01-15`

2. **Version Control (Git)**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

---

## 📞 SUPPORT

For additional help:
1. Review `README.md` file
2. Check HTML comments in code
3. Look at similar code sections as reference
4. Test changes on local copy first

---

**Last Updated**: 2026
**Website Version**: 1.0
**Status**: Production Ready ✓