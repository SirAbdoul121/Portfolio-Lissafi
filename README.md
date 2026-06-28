```markdown
# LISSAFI BUSINESS SOLUTIONS - Portfolio Website

![LISSAFI](https://img.shields.io/badge/LISSAFI-Business%20Solutions-c8963e)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![EmailJS](https://img.shields.io/badge/EmailJS-FF6B35?logo=maildotru&logoColor=white)

A comprehensive, responsive business portfolio website for LISSAFI BUSINESS SOLUTIONS - a multi-paced business, technical, and creative industry company.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Pages](#pages)
- [Services](#services)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Email Configuration](#email-configuration)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [Credits](#credits)

---

## 🎯 Overview

LISSAFI BUSINESS SOLUTIONS is a multi-paced business, technical, and creative industry with specialization in:

- Business Consultancy
- Graphics Design
- Web Development
- Mining (Survey, Exploration & Mineral Processing)
- General Printing
- AI Development
- Cyber Security
- Online School
- Cutting-Edge Solutions

**CEO:** COMRADE MUHAMMAD ABDURRAHMAN  
**Email:** m.amusa2023@gmail.com  
**Phone:** +234 904 938 7070

---

## ✨ Features

### Design Features
- ✅ Fully Responsive (Desktop, Tablet, Mobile)
- ✅ Modern UI with smooth animations
- ✅ Interactive navigation with scroll effects
- ✅ Fade-in animations on scroll
- ✅ Animated statistics counter
- ✅ Floating social media sidebar
- ✅ Back to top button
- ✅ Preloader animation
- ✅ Mobile hamburger menu
- ✅ Visual cues and decorative elements

### Functionality
- ✅ Contact form with validation
- ✅ Email notifications to CEO
- ✅ Auto-reply emails to clients
- ✅ Service selection dropdown
- ✅ Smooth scrolling between sections
- ✅ Active navigation highlighting
- ✅ Notification system

---

## 📄 Pages

| Page | Section ID | Description |
|------|------------|-------------|
| **Home** | `#home` | Hero section with CTA buttons and company tagline |
| **About** | `#about` | Company overview, CEO bio, statistics |
| **Services** | `#services` | 9 service cards with images, descriptions, and CTAs |
| **Contact** | `#contact` | Contact form, company info, social media links |

---

## 🛠️ Services

| # | Service | Category | Icon |
|---|---------|----------|------|
| 1 | AI Development | Artificial Intelligence | 🤖 |
| 2 | Cyber Security | Security | 🔒 |
| 3 | Online School | Education | 🎓 |
| 4 | Business Consultancy | Consulting | 💼 |
| 5 | Graphics Design | Creative | 🎨 |
| 6 | Web Development | Technology | 💻 |
| 7 | Mining Services | Mining | ⛏️ |
| 8 | General Printing | Printing | 🖨️ |
| 9 | Cutting-Edge Solutions | Innovation | 🚀 |

---

## 💻 Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, Animations
- **JavaScript (ES6+)** - Vanilla JS, no frameworks

### Libraries & Services
- **Font Awesome 6** - Icons
- **EmailJS** - Client-side email sending
- **Intersection Observer API** - Scroll animations
- **Google Fonts** - Segoe UI font family

### Email System
- **EmailJS SDK** - Email delivery
- **Gmail Service** - Email provider
- **2 Email Templates** - CEO notification & Client auto-reply

---

## 📁 Project Structure

```
lbs-portfolio/
│
├── index.html              # Main HTML file
├── email.js                # Email system JavaScript
├── README.md               # Documentation
│
├── assets/                 # (Optional) Assets folder
│   ├── images/
│   │   ├── ceo-photo.jpg   # CEO photo placeholder
│   │   └── logo.png        # Company logo placeholder
│   └── css/
│       └── style.css       # (Optional) External CSS
│
└── .gitignore
```

---

## 🚀 Setup & Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- A text editor (VS Code recommended)
- **Live Server** extension (for local development)

### Installation Steps

1. **Clone or download the project**
   ```bash
   git clone https://github.com/yourusername/lbs-portfolio.git
   cd lbs-portfolio
   ```

2. **Open with Live Server**
   - Install "Live Server" extension in VS Code
   - Right-click `index.html` → "Open with Live Server"
   - Site opens at `http://127.0.0.1:5500`

3. **Or use Python server**
   ```bash
   python -m http.server 8080
   # Open http://localhost:8080
   ```

---

## 📧 Email Configuration

### EmailJS Setup

1. **Create EmailJS Account**
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Sign up for a free account (200 emails/month)

2. **Get API Keys**
   - Dashboard → Account → API Keys
   - Copy your **Public Key**

3. **Add Gmail Service**
   - Dashboard → Email Services → Add New Service
   - Choose **Gmail**
   - Connect: `m.amusa2023@gmail.com`
   - Copy **Service ID**

4. **Create Templates**

   **CEO Notification Template:**
   - Create template → Name: "CEO Alert"
   - Set `To Email` to: `{{to_email}}`
   - Copy **Template ID**

   **Client Auto-Reply Template:**
   - Create template → Name: "Client Reply"
   - Set `To Email` to: `{{to_email}}`
   - Set `Subject` to: `Thank you - LISSAFI BUSINESS SOLUTIONS`
   - Set `Reply To` to: `{{reply_to}}`
   - Copy **Template ID**

5. **Update Configuration**
   ```javascript
   const EMAIL_CONFIG = {
       publicKey: 'YOUR_PUBLIC_KEY',
       serviceId: 'YOUR_SERVICE_ID',
       ceoTemplateId: 'YOUR_CEO_TEMPLATE_ID',
       clientTemplateId: 'YOUR_CLIENT_TEMPLATE_ID'
   };
   ```

### Email Flow

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Client     │────▶│   Website    │────▶│   EmailJS    │
│  fills form  │     │   sends      │     │   delivers   │
└──────────────┘     └──────────────┘     └──────────────┘
                                                 │
                                    ┌────────────┼────────────┐
                                    ▼                         ▼
                             ┌──────────┐            ┌──────────────┐
                             │   CEO    │            │   Client     │
                             │  Email   │            │  Auto-Reply  │
                             └──────────┘            └──────────────┘
```

---

## 🎨 Customization

### Changing Colors
Edit CSS variables in `index.html`:
```css
:root {
    --primary: #1a3a5c;        /* Navy Blue */
    --secondary: #c8963e;      /* Gold */
    --accent: #2ecc71;         /* Green */
}
```

### Replacing Placeholder Images
- **CEO Photo:** Replace `#ceoPhotoPlaceholder` content with `<img>` tag
- **Company Logo:** Replace `#logoPlaceholder` content with `<img>` tag

### Updating Company Info
Edit the `COMPANY` object in `email.js`:
```javascript
const COMPANY = {
    ceoName: 'COMRADE MUHAMMAD ABDURRAHMAN',
    ceoEmail: 'm.amusa2023@gmail.com',
    ceoPhone: '+234 904 938 7070',
};
```

---

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|:------:|
| Chrome | 90+ | ✅ |
| Firefox | 88+ | ✅ |
| Edge | 90+ | ✅ |
| Safari | 14+ | ✅ |
| Opera | 76+ | ✅ |
| IE | 11 | ❌ |

---

## 📝 Console Commands

Open browser console (F12) and use:

```javascript
// Test email system
window.testEmail()

// Check configuration
console.log(EMAIL_CONFIG)
console.log(COMPANY)
```

---

## 🔒 Security Notes

- Public Key is safe in client-side code
- Never expose Private Key
- Use HTTPS in production
- EmailJS free tier: 200 emails/month

---

## 📄 License

This project is proprietary software owned by LISSAFI BUSINESS SOLUTIONS.

---

## 👥 Credits

| Role | Name |
|------|------|
| **CEO & Founder** | COMRADE MUHAMMAD ABDURRAHMAN |
| **Company** | LISSAFI BUSINESS SOLUTIONS |
| **Email** | m.amusa2023@gmail.com |
| **Phone** | +234 904 938 7070 |

---

## 📞 Support

For support, inquiries, or project discussions:

- 📧 Email: `m.amusa2023@gmail.com`
- 📞 Phone: `+234 904 938 7070`
- 🌐 Website: `www.lissafibusiness.com`
- 📍 Address: Main Business District

---

## 🚀 Deployment

1. **Upload to hosting** (Netlify, Vercel, GitHub Pages, etc.)
2. **Ensure HTTPS** is enabled
3. **Test contact form** on live site
4. **Monitor EmailJS dashboard** for email history

---

## ✅ Checklist

- [ ] EmailJS account created
- [ ] Public Key configured
- [ ] Gmail service connected
- [ ] CEO template created
- [ ] Client template created
- [ ] Template IDs updated
- [ ] CEO photo added
- [ ] Company logo added
- [ ] Contact info updated
- [ ] Tested on mobile
- [ ] Deployed to hosting
