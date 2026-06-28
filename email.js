// =============================================
// LISSAFI BUSINESS SOLUTIONS
// COMPLETE EMAIL SYSTEM - email.js
// FIXED VERSION
// =============================================

// Email Configuration
const EMAIL_CONFIG = {
    publicKey: 'VPQasViIF-713bzM7',
    serviceId: 'service_sy7g4gw',
    ceoTemplateId: 'template_ja1r9pd',
    clientTemplateId: 'template_hx54yys'
};

// Initialize EmailJS
(function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAIL_CONFIG.publicKey);
        console.log('✅ EmailJS Initialized');
        console.log('📧 Service:', EMAIL_CONFIG.serviceId);
        console.log('📝 CEO Template:', EMAIL_CONFIG.ceoTemplateId);
        console.log('📝 Client Template:', EMAIL_CONFIG.clientTemplateId);
    } else {
        console.error('❌ EmailJS library not loaded!');
    }
})();

// Service Names
const SERVICE_NAMES = {
    'ai': 'AI Development',
    'cyber': 'Cyber Security',
    'school': 'Online School',
    'business': 'Business Consultancy',
    'graphics': 'Graphics Design',
    'web': 'Web Development',
    'mining': 'Mining Services',
    'printing': 'General Printing',
    'other': 'Custom Solution'
};

// Company Information
const COMPANY = {
    ceoName: 'COMRADE MUHAMMAD ABDURRAHMAN',
    ceoEmail: 'm.amusa2023@gmail.com',
    ceoPhone: '+234 904 938 7070',
    ceoTitle: 'CEO & Founder',
    companyName: 'LISSAFI BUSINESS SOLUTIONS',
    companyWebsite: 'www.lissafibusiness.com',
    companyAddress: 'Main Business District'
};

// =============================================
// SEND EMAIL FUNCTION
// =============================================
async function sendContactEmails(formData) {
    
    const serviceName = SERVICE_NAMES[formData.service] || formData.service || 'General Inquiry';
    const timestamp = new Date().toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    console.log('═══════════════════════════════');
    console.log('📤 SENDING EMAILS');
    console.log('═══════════════════════════════');
    console.log('👤 Name:', formData.name);
    console.log('📧 Email:', formData.email);
    console.log('📞 Phone:', formData.phone);
    console.log('🛠️ Service:', serviceName);

    // ===== 1. SEND TO CEO (m.amusa2023@gmail.com) =====
    console.log('📤 [1/2] Sending to CEO...');
    
    try {
        const ceoResult = await emailjs.send(
            EMAIL_CONFIG.serviceId,
            EMAIL_CONFIG.ceoTemplateId,
            {
                to_email: COMPANY.ceoEmail,
                to_name: COMPANY.ceoName,
                from_name: formData.name,
                from_email: formData.email,
                client_phone: formData.phone || 'Not provided',
                service_requested: serviceName,
                client_message: formData.message,
                timestamp: timestamp,
                subject: 'New Request: ' + serviceName,
                reply_to: formData.email
            }
        );
        console.log('✅ CEO Email Sent! Status:', ceoResult.status);
    } catch (error) {
        console.error('❌ CEO Email Failed!');
        console.error('Status:', error.status);
        console.error('Message:', error.text || error.message);
        throw error;
    }

    // ===== 2. SEND TO CLIENT =====
    console.log('📤 [2/2] Sending to Client:', formData.email);
    
    try {
        const clientResult = await emailjs.send(
            EMAIL_CONFIG.serviceId,
            EMAIL_CONFIG.clientTemplateId,
            {
                to_email: formData.email,
                to_name: formData.name,
                from_name: COMPANY.ceoName,
                from_email: COMPANY.ceoEmail,
                reply_to: COMPANY.ceoEmail,
                service_requested: serviceName,
                ceo_name: COMPANY.ceoName,
                ceo_email: COMPANY.ceoEmail,
                ceo_phone: COMPANY.ceoPhone,
                ceo_title: COMPANY.ceoTitle,
                company_name: COMPANY.companyName,
                company_website: COMPANY.companyWebsite,
                company_address: COMPANY.companyAddress,
                timestamp: timestamp,
                subject: 'Thank you for contacting LISSAFI BUSINESS SOLUTIONS'
            }
        );
        console.log('✅ Client Email Sent! Status:', clientResult.status);
    } catch (error) {
        console.error('❌ Client Email Failed!');
        console.error('Status:', error.status);
        console.error('Message:', error.text || error.message);
        throw error;
    }

    console.log('═══════════════════════════════');
    console.log('🎉 ALL EMAILS SENT SUCCESSFULLY!');
    console.log('═══════════════════════════════');

    return { success: true };
}

// =============================================
// FORM VALIDATION
// =============================================
function validateForm(name, email, message) {
    const errors = [];
    if (!name || name.length < 2) errors.push('Please enter your full name.');
    if (!email || !email.includes('@') || !email.includes('.')) errors.push('Please enter a valid email address.');
    if (!message || message.length < 5) errors.push('Please enter your message.');
    return errors;
}

// =============================================
// NOTIFICATION SYSTEM
// =============================================
function showNotification(message, type) {
    const existing = document.querySelector('.email-notification');
    if (existing) existing.remove();

    const colors = { success: '#2ecc71', error: '#e74c3c', warning: '#f39c12', info: '#3498db' };
    const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };

    const notification = document.createElement('div');
    notification.className = 'email-notification';
    notification.innerHTML = `
        <span style="font-size:20px;">${icons[type] || 'ℹ️'}</span>
        <span style="flex:1;">${message}</span>
        <button onclick="this.parentElement.remove()" style="background:rgba(255,255,255,0.2);border:none;color:white;width:24px;height:24px;border-radius:50%;cursor:pointer;font-size:14px;">✕</button>
    `;
    notification.style.cssText = `
        position:fixed;top:20px;right:20px;max-width:450px;background:${colors[type] || colors.info};color:white;padding:16px 20px;border-radius:10px;z-index:10000;box-shadow:0 10px 30px rgba(0,0,0,0.3);font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;font-size:14px;display:flex;align-items:center;gap:12px;animation:slideIn 0.4s ease;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.4s ease forwards';
            setTimeout(() => notification.remove(), 400);
        }
    }, 8000);
}

// Add animations
const styleEl = document.createElement('style');
styleEl.textContent = `
    @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
    @keyframes slideOut { from { transform: translateX(0); opacity: 1; } to { transform: translateX(100%); opacity: 0; } }
`;
document.head.appendChild(styleEl);

// =============================================
// INITIALIZE CONTACT FORM
// =============================================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) {
        console.warn('⚠️ Contact form not found.');
        return;
    }

    console.log('✅ Contact form ready');

    contactForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const formData = {
            name: document.getElementById('name')?.value?.trim() || '',
            email: document.getElementById('email')?.value?.trim() || '',
            phone: document.getElementById('phone')?.value?.trim() || '',
            service: document.getElementById('service')?.value || '',
            message: document.getElementById('message')?.value?.trim() || ''
        };
        
        // Validate
        const errors = validateForm(formData.name, formData.email, formData.message);
        if (errors.length > 0) {
            showNotification(errors[0], 'warning');
            return;
        }
        
        // Get button
        const submitBtn = contactForm.querySelector('.submit-btn') || contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn ? submitBtn.innerHTML : '';
        
        if (submitBtn) {
            submitBtn.innerHTML = '⏳ Sending...';
            submitBtn.disabled = true;
        }
        
        try {
            await sendContactEmails(formData);
            showNotification('✅ Message sent! Check your email.', 'success');
            contactForm.reset();
        } catch (error) {
            console.error('❌ Error:', error);
            showNotification('Failed to send. Contact us:\n📧 ' + COMPANY.ceoEmail + '\n📞 ' + COMPANY.ceoPhone, 'error');
        } finally {
            if (submitBtn) {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        }
    });
}

// =============================================
// START
// =============================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForm);
} else {
    initContactForm();
}

// Test function
window.testEmail = async function() {
    const testData = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '1234567890',
        service: 'web',
        message: 'Test message'
    };
    try {
        await sendContactEmails(testData);
        console.log('✅ Test passed!');
    } catch (error) {
        console.error('❌ Test failed!', error);
    }
};

console.log('═══════════════════════════════════════');
console.log('📧 LISSAFI BUSINESS SOLUTIONS');
console.log('   Email System Ready');
console.log('═══════════════════════════════════════');
console.log('👤 CEO:', COMPANY.ceoName);
console.log('📧 CEO Email:', COMPANY.ceoEmail);
console.log('📝 CEO Template:', EMAIL_CONFIG.ceoTemplateId);
console.log('📝 Client Template:', EMAIL_CONFIG.clientTemplateId);
console.log('═══════════════════════════════════════');