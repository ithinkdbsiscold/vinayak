// ==================== CONFIGURATION ====================
const CONFIG = {
    whatsappNumber: '918849622721',
    phoneNumber: '+918849622721',
    blessings: ['ॐ श्री गणेशाय नमः', 'कुलदेवी कृपा', 'गुरुकृपा', 'वीरकृपा']
};

// ==================== TRANSLATIONS ====================
const TRANSLATIONS = {
    en: {
        'nav-home': 'Home', 'nav-services': 'Services', 'nav-about': 'About',
        'nav-enquiry': 'Enquiry', 'nav-contact': 'Contact',
        'logoName': '<span class="logo-full">Vinayak Astrologer</span><span class="logo-short">Vinayak</span>',
        'logoSubtitle': 'Tejal Acharya Soni',
        'eyebrow': 'कुलदेवी कृपा · Vedic Astrology',
        'hero-h1': 'Vinayak', 'hero-em': 'Acharya Soni',
        'hero-tagline': 'Unveiling your cosmic destiny<br>through ancient wisdom',
        'hero-desc': 'Experience authentic Vedic astrology guidance for clarity, prosperity, and spiritual growth. Rooted in sacred tradition, guided by the stars.',
        'btn-book': 'Book a Consultation', 'btn-enquiry': 'Submit Enquiry',
        'quote-text': 'The stars whisper secrets that the heart already knows. Seek guidance from the cosmos, and discover your true path.',
        'quote-source': '— Ancient Vedic Wisdom',
        'services-header': 'Our Sacred Services',
        'services-subheader': 'Comprehensive Astrology Solutions for Your Life',
        'service-1-name': 'Hast Rekha',
        'service-1-desc': 'Ancient palmistry art reveals the hidden lines of destiny on your hands. Our expert analysis provides deep insights into your personality, talents, challenges, and the pathways your life may take.',
        'service-2-name': 'Face Reading',
        'service-2-desc': 'Discover what your facial features reveal about your character, fortune, and inner nature. This ancient practice helps understand personal strengths and hidden potentials in your personality.',
        'service-3-name': 'Janmakshar Kundali',
        'service-3-desc': 'Comprehensive birth chart analysis based on your exact birth details. This detailed reading provides clarity about life phases, opportunities, challenges, and your cosmic blueprint for success.',
        'service-4-name': 'Karm Kaand',
        'service-4-desc': 'Traditional Vedic rituals and ceremonies performed with authentic spiritual practices. These sacred rites harmonize your cosmic energy and invite divine blessings into your life.',
        'service-5-name': 'Family Problems',
        'service-5-desc': 'Astrological guidance to resolve family conflicts and strengthen relationships. We identify planetary influences affecting harmony and provide spiritual remedies for lasting peace and bonding.',
        'service-6-name': 'Marriage Issues',
        'service-6-desc': 'Comprehensive kundali matching and marital compatibility analysis. Our guidance addresses relationship challenges and provides astrological remedies for a harmonious and prosperous marriage.',
        'service-7-name': 'Business Solutions',
        'service-7-desc': 'Strategic business guidance through astrological analysis of your birth chart. Identify auspicious timings, overcome obstacles, and align your ventures with cosmic energies for success.',
        'aboutEyebrow': 'About the Acharya',
        'aboutTitle': 'Rooted in <em>Sacred Tradition</em>,<br>Guided by the Stars',
        'aboutPara1': 'With decades of study in classical Vedic texts and direct lineage wisdom, Tejal brings an authenticity to astrological practice that modern consultants rarely possess.',
        'aboutPara2': 'Every consultation is a sacred dialogue — between the cosmos, the charts, and the individual soul seeking clarity.',
        'stat1-num': '2000+', 'stat1-label': 'Consultations',
        'stat2-num': '15+', 'stat2-label': 'Years of Practice',
        'stat3-num': '7', 'stat3-label': 'Sacred Services',
        'enquiry-title': 'Enquiry Form',
        'enquiry-subtitle': 'Begin Your Journey to Cosmic Clarity',
        'form-label-name': 'Full Name', 'form-label-date': 'Birth Date',
        'form-label-time': 'Birth Time', 'form-label-place': 'Birth Place',
        'form-label-query': 'Your Query',
        'form-submit': '📨 Send Enquiry via WhatsApp',
        'enquiry-next-title': 'What Happens Next?',
        'enquiry-li1': 'Your enquiry will be sent directly to TejalBen via WhatsApp',
        'enquiry-li2': 'We\'ll review your birth details and cosmic information',
        'enquiry-li3': 'Our team will contact you to schedule a personalized consultation',
        'enquiry-li4': 'You\'ll receive comprehensive guidance tailored to your needs',
        'contactPageTitle': 'Contact Us',
        'contactPageSubtitle': 'Connect With Tejal Acharya Soni',
        'contactTitle': 'Tejal Acharya Soni',
        'contact-phone-label': 'Phone / WhatsApp',
        'contact-whatsapp': '💬 WhatsApp', 'contact-call': '📞 Call Now',
        'contact-message-title': 'Get in Touch',
        'contact-message-p1': 'Have questions about our services? Want to book a consultation? Feel free to reach out through WhatsApp or call us directly. We\'re here to help guide you on your spiritual journey.',
        'contact-message-p2': 'For enquiries, we also have a dedicated form available to gather your birth details for accurate guidance.',
        'footerName': 'Tejal Acharya Soni',
        'footerTagline': 'Guiding you toward cosmic harmony and spiritual growth',
        'footerText': 'Vinayak Astrologer',
        'footerRights': 'All rights reserved'
    },
    hi: {
        'nav-home': 'होम', 'nav-services': 'सेवाएं', 'nav-about': 'परिचय',
        'nav-enquiry': 'पूछताछ', 'nav-contact': 'संपर्क',
        'logoName': '<span class="logo-full">विनायक ज्योतिषी</span><span class="logo-short">विनायक</span>',
        'logoSubtitle': 'तेजल आचार्य सोनी',
        'eyebrow': 'कुलदेवी कृपा · वैदिक ज्योतिष',
        'hero-h1': 'विनायक', 'hero-em': 'आचार्य सोनी',
        'hero-tagline': 'आपके ब्रह्मांडीय भाग्य को प्रकट करना<br>प्राचीन ज्ञान के माध्यम से',
        'hero-desc': 'आपके लिए स्पष्टता, समृद्धि और आध्यात्मिक विकास के लिए प्रामाणिक वैदिक ज्योतिष मार्गदर्शन का अनुभव करें। पवित्र परंपरा में निहित, तारों द्वारा निर्देशित।',
        'btn-book': 'परामर्श बुक करें', 'btn-enquiry': 'पूछताछ सबमिट करें',
        'quote-text': 'तारे उन रहस्यों को फुसफुसाते हैं जिन्हें दिल पहले से ही जानता है। ब्रह्मांड से मार्गदर्शन लें और अपना सच्चा पथ खोजें।',
        'quote-source': '— प्राचीन वैदिक ज्ञान',
        'services-header': 'हमारी पवित्र सेवाएं',
        'services-subheader': 'आपके जीवन के लिए व्यापक ज्योतिष समाधान',
        'service-1-name': 'हस्त रेखा',
        'service-1-desc': 'प्राचीन हस्तरेखा विज्ञान आपके हाथों पर भाग्य की छिपी हुई रेखाओं को प्रकट करता है।',
        'service-2-name': 'चेहरा पढ़ना',
        'service-2-desc': 'अपनी चेहरे की विशेषताएं आपके चरित्र, भाग्य और आंतरिक प्रकृति के बारे में क्या प्रकट करती हैं।',
        'service-3-name': 'जन्मक्षर कुंडली',
        'service-3-desc': 'आपके सटीक जन्म विवरण के आधार पर व्यापक जन्म चार्ट विश्लेषण।',
        'service-4-name': 'कर्म काण्ड',
        'service-4-desc': 'प्रामाणिक आध्यात्मिक प्रथाओं के साथ प्रदर्शित पारंपरिक वैदिक अनुष्ठान और समारोह।',
        'service-5-name': 'पारिवारिक समस्याएं',
        'service-5-desc': 'पारिवारिक संघर्षों को हल करने और रिश्तों को मजबूत करने के लिए ज्योतिषीय मार्गदर्शन।',
        'service-6-name': 'विवाह समस्याएं',
        'service-6-desc': 'व्यापक कुंडली मिलान और वैवाहिक संगतता विश्लेषण।',
        'service-7-name': 'व्यावसायिक समाधान',
        'service-7-desc': 'आपके जन्म चार्ट के ज्योतिषीय विश्लेषण के माध्यम से रणनीतिक व्यावसायिक मार्गदर्शन।',
        'aboutEyebrow': 'आचार्य के बारे में',
        'aboutTitle': 'पवित्र परंपरा में निहित,<br>तारों द्वारा निर्देशित',
        'aboutPara1': 'वैदिक शास्त्रों में दशकों के अध्ययन और सीधी वंशागत ज्ञान के साथ, तेजल ज्योतिषीय अभ्यास में प्रामाणिकता लाती हैं।',
        'aboutPara2': 'प्रत्येक परामर्श एक पवित्र संवाद है — ब्रह्मांड, चार्ट और स्पष्टता चाहने वाली व्यक्तिगत आत्मा के बीच।',
        'stat1-num': '2000+', 'stat1-label': 'परामर्श',
        'stat2-num': '15+', 'stat2-label': 'वर्षों का अनुभव',
        'stat3-num': '7', 'stat3-label': 'पवित्र सेवाएं',
        'enquiry-title': 'पूछताछ फॉर्म',
        'enquiry-subtitle': 'ब्रह्मांडीय स्पष्टता के लिए अपनी यात्रा शुरू करें',
        'form-label-name': 'पूरा नाम', 'form-label-date': 'जन्म तारीख',
        'form-label-time': 'जन्म का समय', 'form-label-place': 'जन्म स्थान',
        'form-label-query': 'आपकी पूछताछ',
        'form-submit': '📨 व्हाट्सएप के माध्यम से पूछताछ भेजें',
        'enquiry-next-title': 'आगे क्या होगा?',
        'enquiry-li1': 'आपकी पूछताछ सीधे व्हाट्सएप के माध्यम से भेजी जाएगी',
        'enquiry-li2': 'हम आपके जन्म विवरण और ब्रह्मांडीय जानकारी की समीक्षा करेंगे',
        'enquiry-li3': 'हमारी टीम व्यक्तिगत परामर्श शेड्यूल करने के लिए आपसे संपर्क करेगी',
        'enquiry-li4': 'आप आपकी आवश्यकताओं के अनुरूप व्यापक मार्गदर्शन प्राप्त करेंगे',
        'contactPageTitle': 'हमसे संपर्क करें',
        'contactPageSubtitle': 'तेजल आचार्य सोनी से जुड़ें',
        'contactTitle': 'तेजल आचार्य सोनी',
        'contact-phone-label': 'फोन / व्हाट्सएप',
        'contact-whatsapp': '💬 व्हाट्सएप', 'contact-call': '📞 अभी कॉल करें',
        'contact-message-title': 'हमसे संपर्क करें',
        'contact-message-p1': 'हमारी सेवाओं के बारे में प्रश्न हैं? परामर्श बुक करना चाहते हैं? व्हाट्सएप या कॉल से संपर्क करें।',
        'contact-message-p2': 'पूछताछ के लिए, हमारे पास जन्म विवरण इकट्ठा करने के लिए एक समर्पित फॉर्म भी उपलब्ध है।',
        'footerName': 'तेजल आचार्य सोनी',
        'footerTagline': 'आपको ब्रह्मांडीय सामंजस्य और आध्यात्मिक विकास की ओर निर्देशित करना',
        'footerText': 'विनायक ज्योतिषी',
        'footerRights': 'सभी अधिकार सुरक्षित'
    }
};

// ==================== STATE ====================
let currentLanguage = localStorage.getItem('language') || 'en';
let currentTheme = localStorage.getItem('theme') || 'light';

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    applyLanguage(currentLanguage);
    initializeNavigation();
    setupScrollAnimations();
});

// ==================== THEME ====================
function applyTheme() {
    const icon = document.getElementById('themeIcon');
    const mobileIcon = document.getElementById('themeIconMobile');
    if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark-mode');
        if(icon) icon.textContent = '☀️';
        if(mobileIcon) mobileIcon.textContent = '☀️';
    } else {
        document.documentElement.classList.remove('dark-mode');
        if(icon) icon.textContent = '🌙';
        if(mobileIcon) mobileIcon.textContent = '🌙';
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    applyTheme();
}

// ==================== LANGUAGE ====================
function applyLanguage(lang) {
    const t = TRANSLATIONS[lang];
    if (!t) return;

    // Update all elements that have matching IDs in translations
    const htmlKeys = ['hero-tagline', 'aboutTitle', 'hero-h1', 'logoName'];
    Object.keys(t).forEach(key => {
        const el = document.getElementById(key);
        if (el) {
            if (htmlKeys.includes(key) || t[key].includes('<em>') || t[key].includes('<br>')) {
                el.innerHTML = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });

    // Update service cards by index
    for (let i = 1; i <= 7; i++) {
        const card = document.querySelector(`.service-card:nth-child(${i})`);
        if (card) {
            const nameEl = card.querySelector('.service-name');
            const descEl = card.querySelector('.service-desc');
            if (nameEl && t[`service-${i}-name`]) nameEl.textContent = t[`service-${i}-name`];
            if (descEl && t[`service-${i}-desc`]) descEl.textContent = t[`service-${i}-desc`];
        }
    }

    // Update form placeholders
    const nameInput = document.getElementById('fullName');
    const placeInput = document.getElementById('birthPlace');
    const queryInput = document.getElementById('userQuery');
    if (nameInput) nameInput.placeholder = lang === 'hi' ? 'अपना पूरा नाम दर्ज करें' : 'Enter your full name';
    if (placeInput) placeInput.placeholder = lang === 'hi' ? 'शहर/कस्बा, देश' : 'City/Town, Country';
    if (queryInput) queryInput.placeholder = lang === 'hi' ? 'आप किस बारे में पूछताछ कर रहे हैं?' : 'What are you enquiring for?';

    document.documentElement.lang = lang;
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', currentLanguage);
    applyLanguage(currentLanguage);
    // Update active state on dropdown options
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === currentLanguage);
    });
}

// ==================== NAVIGATION ====================
function initializeNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const themeToggle = document.getElementById('themeToggle');
    const langDropdown = document.getElementById('langDropdown');
    const langBtn = document.getElementById('langBtn');
    const langMenu = document.getElementById('langMenu');
    const drawerOverlay = document.getElementById('drawerOverlay');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            if (drawerOverlay) drawerOverlay.classList.toggle('active');
        });
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                if (drawerOverlay) drawerOverlay.classList.remove('active');
            });
        });
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-links') && !e.target.closest('.menu-toggle')) {
                navLinks.classList.remove('active');
                if (drawerOverlay) drawerOverlay.classList.remove('active');
            }
        });
    }
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    
    const themeToggleMobile = document.getElementById('themeToggleMobile');
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', (e) => {
            e.stopPropagation(); // don't close sidebar automatically on toggle
            toggleTheme();
            // Update icon on mobile too
            const mobileIcon = document.getElementById('themeIconMobile');
            if(mobileIcon) mobileIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
        });
    }

    // Custom language dropdown
    if (langBtn && langDropdown && langMenu) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('open');
        });
        langMenu.querySelectorAll('.lang-option').forEach(opt => {
            opt.addEventListener('click', (e) => {
                e.stopPropagation();
                setLanguage(opt.dataset.lang);
                langDropdown.classList.remove('open');
            });
        });
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.lang-dropdown')) {
                langDropdown.classList.remove('open');
            }
        });
        // Mark current language as active on load
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.classList.toggle('active', opt.dataset.lang === currentLanguage);
        });
    }

    // Scroll to top button
    const fabTop = document.getElementById('fabTop');
    if (fabTop) {
        fabTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // Show/hide floating buttons on scroll
    window.addEventListener('scroll', () => {
        const fb = document.getElementById('floatingButtons');
        const ft = document.getElementById('fabTop');
        if (fb) fb.style.display = window.scrollY > 300 ? 'flex' : 'none';
        if (ft) ft.style.display = window.scrollY > 300 ? 'flex' : 'none';
    });
}

function navigateTo(pageId) {
    document.querySelectorAll('.page-section').forEach(p => p.classList.add('hidden-page'));
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.remove('hidden-page');
        window.scrollTo(0, 0);
    }
}

// ==================== WHATSAPP & CALL ====================
function openWhatsApp() {
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=Namaste%20Tejal%20Acharya%2C%20I%20would%20like%20to%20know%20more%20about%20your%20astrology%20services.`, '_blank');
}

function openCall() {
    window.location.href = `tel:${CONFIG.phoneNumber}`;
}

// ==================== ENQUIRY FORM ====================
function submitEnquiry(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value.trim();
    const birthDate = document.getElementById('birthDate').value;
    const birthTime = document.getElementById('birthTime').value;
    const birthPlace = document.getElementById('birthPlace').value.trim();
    const userQuery = document.getElementById('userQuery').value.trim();

    if (!fullName || !birthDate || !birthTime || !birthPlace || !userQuery) {
        showNotification(currentLanguage === 'hi' ? 'कृपया सभी फ़ील्ड भरें' : 'Please fill in all fields', 'error');
        return;
    }

    const message = `Name: ${fullName}\nBirth Date: ${birthDate}\nBirth Time: ${birthTime}\nBirth Place: ${birthPlace}\nQuery: ${userQuery}\n\nI want astrology enquiry.`;
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    document.getElementById('enquiryForm').reset();
    showNotification(currentLanguage === 'hi' ? 'पूछताछ भेजी गई!' : 'Enquiry sent! Redirecting to WhatsApp...', 'success');
}

// ==================== NOTIFICATIONS ====================
function showNotification(message, type = 'info') {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    const n = document.createElement('div');
    n.className = `notification notification-${type}`;
    n.textContent = message;
    document.body.appendChild(n);
    setTimeout(() => {
        n.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => n.remove(), 300);
    }, 3000);
}

// ==================== SCROLL ANIMATIONS ====================
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}