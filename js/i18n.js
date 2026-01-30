document.addEventListener('DOMContentLoaded', () => {
    const userLang = navigator.language || navigator.userLanguage;
    const isKorean = userLang.startsWith('ko');

    if (!isKorean) {
        applyEnglish();
    }
});

function applyEnglish() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key]) {
            if (translations[key].includes('<')) {
                el.innerHTML = translations[key];
            } else {
                el.textContent = translations[key];
            }
        }
    });

    const pageKey = getPageKey();
    if (translations['page-title-' + pageKey]) {
        document.title = translations['page-title-' + pageKey];
    }
}

function getPageKey() {
    const path = window.location.pathname;
    if (path.includes('privacy.html')) return 'privacy';
    if (path.includes('terms.html')) return 'terms';
    if (path.includes('deepq/')) return 'deepq';
    return 'main';
}

const translations = {
    // Shared
    "footer-contact-title": "Contact",
    "footer-legal": "Legal",
    "footer-terms": "Terms of Service",
    "footer-privacy": "Privacy Policy",

    // index.html
    "page-title-main": "scalla | Shaping the Future of AI",
    "hero-h1": "Turning the Value of Intelligence into Reality",
    "hero-desc": "<span class=\"brand-font\">scalla</span> is a venture studio that expands business possibilities through AI technology and solves complex problems with clear solutions.",
    "portfolio-title": "Portfolio",
    "deepq-desc": "AI-based Technical Interview Prep Platform",
    "btn-visit": "Visit",
    "about-title": "About <span class=\"brand-font\">scalla</span>",
    "about-desc": "<span class=\"brand-font\">scalla</span> is an AI technology company located in Pangyo, Seongnam. We create practical tools so anyone can easily enjoy Generative AI technology.",
    "footer-slogan": "Innovating with Intelligence.",
    "footer-products": "Products",
    "footer-address": "Bundang-gu, Seongnam-si, Gyeonggi-do, Korea",
    
    // deepq/index.html
    "page-title-deepq": "DeepQ | Advanced AI Technical Interview Simulation",
    "nav-main": "<span class=\"brand-font\">scalla</span> Main",
    "hero-title-deepq": "The Relentless Interviewer That Tests Your Technical Logic, <span class=\"highlight brand-font\">DeepQ</span>",
    "hero-desc-deepq": "We digitized engineering interview guidelines from global big tech companies into an AI interviewer. The latest <span class=\"code-text\">Gemini</span> model generates deep follow-up questions digging into technical grounds and diagnoses logical gaps in your answers.",
    "btn-playstore": "Start on Google Play",
    "features-title": "Key Features",
    "feat-1-title": "Big Tech Standard Question Design",
    "feat-1-desc": "We don't ask for simple rote memorization. We provide strict problem sets designed to verify practical design and complexity optimization skills required by top-tier domestic and international companies.",
    "feat-2-title": "2-4 Step Deep Follow-up Questions",
    "feat-2-desc": "Real-time analysis of your answer keywords to ask 'why' you made those technical choices. Follow-up questions clearly measure the depth and limits of your technical stack.",
    "feat-3-title": "Precise Multi-dimensional Evaluation Report",
    "feat-3-desc": "The inference engine based on the latest <span class=\"code-text\">Gemini</span> model analyzes the accuracy, logical consistency, and technical maturity of your answers. We deliver feedback based on objective metrics, not subjective feelings.",
    "quote-deepq": "LLMs know the answer, but <strong><span class=\"brand-font\">DeepQ</span> makes you prove your skills.</strong>",
    "footer-deepq-slogan": "AI-based Technical Interview Solution",

    // deepq/privacy.html
    "page-title-privacy": "Privacy Policy | DeepQ",
    "privacy-h1": "Privacy Policy",
    "privacy-date": "Last updated: January 22, 2026",
    "privacy-intro": "At <strong><span class=\"brand-font\">scalla</span></strong>, accessible from <a href=\"https://scalla.ai\">https://scalla.ai</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by <span class=\"brand-font\">scalla</span> and how we use it.",
    "privacy-h2-1": "1. Information We Collect",
    "privacy-p-1": "The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.",
    "privacy-li-1-1": "<strong>Account Information:</strong> When you register through SSO, we collect your email, provider ID, and optional profile name.",
    "privacy-li-1-2": "<strong>Usage Data:</strong> We collect interaction data with AI interview sessions (including answers and feedback history).",
    "privacy-li-1-3": "<strong>Inquiry Data:</strong> We collect your name, email address, etc., when you contact customer service.",
    "privacy-h2-2": "2. How We Use Your Information",
    "privacy-li-2-1": "Provide, operate, and maintain our service (DeepQ)",
    "privacy-li-2-2": "Improve, personalize, and expand our service",
    "privacy-li-2-3": "Understand and analyze how you use our service",
    "privacy-li-2-4": "Develop new products, services, features, and functionality",
    "privacy-li-2-5": "Communicate with you for customer service and updates",
    "privacy-h2-3": "3. Log Files",
    "privacy-p-3": "scalla follows a standard procedure of using log files. These files log visitors when they visit websites or use applications. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.",
    "privacy-h2-4": "4. Data Security and Management",
    "privacy-p-4-1": "We take your data security seriously and use appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse.",
    "privacy-p-4-2": "Users can request the deletion of their account and related data at any time. If you wish to delete your account, please email <a href=\"mailto:contact@scalla.ai\">contact@scalla.ai</a>. Please note that data cannot be recovered once deleted.",
    "privacy-h2-5": "5. Contact Us",
    "privacy-p-5": "If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.",
    "company-name": "Company: scalla",
    "company-rep": "Representative: Miji Ham",
    "company-address": "Address: 508-1603, 20, Pangyodaejang-ro 5-gil, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea (13544)",

    // deepq/terms.html
    "page-title-terms": "Terms of Service | DeepQ",
    "terms-h1": "Terms of Service",
    "terms-date": "Last updated: January 22, 2026",
    "terms-intro": "Welcome to <span class=\"brand-font\">DeepQ</span>. Please read these Terms of Service (\"Terms\") carefully before using the <span class=\"brand-font\">DeepQ</span> website and services operated by <span class=\"brand-font\">scalla</span> (\"us\", \"we\", or \"our\").",
    "terms-h2-1": "1. Service Description",
    "terms-p-1": "<span class=\"brand-font\">DeepQ</span> is an AI-powered technical interview preparation platform. We provide simulated interview sessions tailored to specific job roles and technical topics. The Service includes AI-generated questions, feedback analysis, and a scoring system (\"Service\").",
    "terms-h2-2": "2. Account Registration",
    "terms-p-2": "To access certain features of the Service, you may be required to register for an account using supported Social Login (SSO) providers (e.g., Google, Kakao). You agree to provide accurate and complete information during the registration process.",
    "terms-h2-3": "3. Virtual Currency (Tickets) and Payment",
    "terms-h3-3-1": "3.1 Ticket System",
    "terms-p-3-1-1": "The Service uses a virtual currency called \"Tickets\" to access premium features, including starting new interview sessions.",
    "terms-li-3-1-1": "Tickets can be purchased through our payment system or earned through promotional events (e.g., sign-up bonus).",
    "terms-li-3-1-2": "Typically, one Ticket is consumed per interview session, but this amount is subject to change.",
    "terms-h3-3-2": "3.2 Refunds",
    "terms-p-3-2-1": "Purchased Tickets are refundable only if they have not been used. You may request a refund within 7 days of purchase. Bonus or free tickets are not eligible for refunds or exchange for cash.",
    "terms-p-3-2-2": "To request a refund, please contact us at <a href=\"mailto:contact@scalla.ai\">contact@scalla.ai</a>.",
    "terms-h2-4": "4. AI Disclaimer",
    "terms-p-4-1": "Content provided by <span class=\"brand-font\">DeepQ</span>, including interview questions, ideal answers, and feedback, is generated by artificial intelligence. While we strive for accuracy, AI models can produce inaccurate or biased information.",
    "terms-p-4-2": "<strong>You acknowledge that:</strong>",
    "terms-li-4-1": "The Service is for educational and preparation purposes only.",
    "terms-li-4-2": "<span class=\"brand-font\">DeepQ</span> does not guarantee employment or specific interview outcomes in real-world scenarios.",
    "terms-li-4-3": "Critical technical information should be verified with official documentation.",
    "terms-h2-5": "5. User Content",
    "terms-p-5": "When you provide answers during interview simulations, we collect and analyze this text data to generate feedback. You retain ownership of your content, but you grant us a license to use it to provide and improve the Service.",
    "terms-h2-6": "6. Limitation of Liability",
    "terms-p-6": "To the maximum extent permitted by law, <span class=\"brand-font\">scalla</span> shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, the Service.",
    "terms-h2-7": "7. Contact Us",
    "terms-p-7": "If you have any questions about these Terms, please contact us:"
};