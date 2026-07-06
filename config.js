/**
 * TejalBen Acharya Soni - Website Configuration File
 * This file contains all easily customizable settings for the website
 * Update values here instead of searching through code files
 */

const WEBSITE_CONFIG = {
    // ==================== ASTROLOGER INFORMATION ====================
    astrologer: {
        name: "TejalBen Acharya Soni",
        title: "Premium Vedic Astrology Specialist",
        tagline: "Unveiling Your Cosmic Destiny Through Ancient Wisdom",
        description: "Experience authentic Vedic astrology guidance for clarity, prosperity, and spiritual growth",
        phone: "8849622721",
        phoneFormatted: "+91 8849622721",
        whatsappNumber: "918849622721"
    },

    // ==================== BLESSINGS & MANTRAS ====================
    blessings: [
        "ॐ श्री गणेशाय नमः",      // Om Sri Ganeshaya Namah
        "कुलदेवी कृपा",            // Kuldevi Kripa
        "गुरुकृपा",                // Guru Kripa
        "वीरकृपा"                 // Veer Kripa
    ],

    // ==================== SERVICES ====================
    services: [
        {
            name: "Hast Rekha",
            icon: "✋",
            description: "Ancient palmistry art reveals the hidden lines of destiny on your hands. Our expert analysis provides deep insights into your personality, talents, challenges, and the pathways your life may take."
        },
        {
            name: "Face Reading",
            icon: "👤",
            description: "Discover what your facial features reveal about your character, fortune, and inner nature. This ancient practice helps understand personal strengths and hidden potentials in your personality."
        },
        {
            name: "Janmakshar Kundali",
            icon: "📈",
            description: "Comprehensive birth chart analysis based on your exact birth details. This detailed reading provides clarity about life phases, opportunities, challenges, and your cosmic blueprint for success."
        },
        {
            name: "Memorologist",
            icon: "🧠",
            description: "Understanding the patterns in your memories and past experiences to guide your present decisions. This unique approach blends psychology with spiritual wisdom for holistic healing and growth."
        },
        {
            name: "Karm Kaand",
            icon: "🕯️",
            description: "Traditional Vedic rituals and ceremonies performed with authentic spiritual practices. These sacred rites harmonize your cosmic energy and invite divine blessings into your life."
        },
        {
            name: "Family Problems",
            icon: "👨‍👩‍👧‍👦",
            description: "Astrological guidance to resolve family conflicts and strengthen relationships. We identify planetary influences affecting harmony and provide spiritual remedies for lasting peace and bonding."
        },
        {
            name: "Marriage Issues",
            icon: "💑",
            description: "Comprehensive kundali matching and marital compatibility analysis. Our guidance addresses relationship challenges and provides astrological remedies for a harmonious and prosperous marriage."
        },
        {
            name: "Business Problems",
            icon: "💼",
            description: "Strategic business guidance through astrological analysis of your birth chart. Identify auspicious timings, overcome obstacles, and align your ventures with cosmic energies for success."
        },
        {
            name: "Health Issues",
            icon: "❤️",
            description: "Astrological perspective on health challenges through planetary analysis. We provide spiritual guidance and remedies to support your wellness journey alongside medical care."
        },
        {
            name: "Love Marriage Issues",
            icon: "💕",
            description: "Specialized guidance for love relationships and marriage with personal choice. Our astrology helps understand compatibility, timing, and cosmic support for your relationship journey."
        }
    ],

    // ==================== THEME COLORS ====================
    colors: {
        primary: "#C9A227",      // Golden
        dark: "#2B1D14",         // Dark Brown
        white: "#FFFFFF",        // White
        lightGold: "#E8D7B8",    // Light Gold
        softGold: "#F5EDE2",     // Soft Gold
        darkText: "#1A1410",     // Dark Text
        lightText: "#6B5D52"     // Light Text
    },

    // ==================== SOCIAL LINKS ====================
    social: {
        whatsapp: "https://wa.me/918849622721",
        call: "tel:+918849622721"
    },

    // ==================== WEBSITE METADATA ====================
    metadata: {
        title: "TejalBen Acharya Soni - Premium Astrology Services",
        description: "Authentic Vedic astrology services for kundali analysis, face reading, family guidance, and spiritual wisdom.",
        keywords: "astrology, kundali, vedic astrology, face reading, palmistry, horoscope, TejalBen",
        author: "TejalBen Acharya Soni",
        language: "en"
    },

    // ==================== ANIMATION SETTINGS ====================
    animations: {
        enabled: true,
        duration: 400,           // milliseconds
        blessingRotateInterval: 4000  // milliseconds
    },

    // ==================== PAGE CONTENT ====================
    content: {
        aboutAstrology: {
            title: "About Vedic Astrology",
            paragraphs: [
                "Vedic astrology, also known as Jyotish, is an ancient Indian science that has guided humanity for thousands of years. Rooted in the sacred Vedas, this profound system reveals the cosmic connections between celestial bodies and human destiny.",
                "Unlike mere fortune-telling, Vedic astrology provides a comprehensive framework for understanding life's patterns, cycles, and opportunities. It offers practical wisdom for navigating challenges and harnessing positive cosmic energies for personal growth and prosperity.",
                "The principles of Vedic astrology help individuals understand their karmic patterns, life purpose, and the optimal timings for important decisions. Through accurate birth chart analysis and planetary remedies, seekers can align their lives with cosmic harmony."
            ]
        },

        philosophy: {
            title: "Our Philosophy",
            paragraphs: [
                "At TejalBen Acharya Soni, we believe that astrology is a divine science meant to illuminate the path toward happiness, success, and spiritual awakening. Our approach combines traditional Vedic knowledge with compassionate, personalized guidance.",
                "We honor the sacred connection between the cosmos and human consciousness. Every reading is conducted with utmost authenticity, integrity, and respect for the seeker's journey. Our goal is to empower you with clarity and cosmic wisdom."
            ]
        },

        whyChooseUs: [
            "Thousands of years of proven wisdom and guidance",
            "Comprehensive understanding of your life pattern",
            "Scientific accuracy in planetary calculations",
            "Personalized remedies tailored to your needs",
            "Spiritual growth and personal transformation",
            "Clarity for important life decisions"
        ],

        enquiryProcess: [
            "Your enquiry will be sent directly to TejalBen via WhatsApp",
            "We'll review your birth details and cosmic information",
            "Our team will contact you to schedule a personalized consultation",
            "You'll receive comprehensive guidance tailored to your needs"
        ],

        wisdomQuote: {
            text: "The stars whisper secrets that the heart already knows. Seek guidance from the cosmos, and discover your true path.",
            author: "Ancient Vedic Wisdom"
        }
    },

    // ==================== FOOTER CONTENT ====================
    footer: {
        blessing: "ॐ श्री गणेशाय नमः",
        copyright: "TejalBen Acharya Soni © 2026",
        tagline: "Guiding You Toward Cosmic Harmony and Spiritual Growth",
        subtitle: "Premium Vedic Astrology Services"
    },

    // ==================== CONTACT METHODS ====================
    contactMethods: {
        primary: "WhatsApp",
        phone: "8849622721",
        email: null,  // Add email if needed
        address: null // Add address if needed
    }
};

// ==================== UTILITY FUNCTION ====================
function getConfig(path) {
    const keys = path.split('.');
    let value = WEBSITE_CONFIG;
    for (let key of keys) {
        value = value[key];
    }
    return value;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WEBSITE_CONFIG, getConfig };
}