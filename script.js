/**
 * script.js
 * الملف الرئيسي للجافاسكريبت
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ===============================================
    // 1. تحميل الروابط من ملف links.js
    // ===============================================
    
    const linkMapping = {
        'link-location': SOCIAL_LINKS.location,
        'link-rating': SOCIAL_LINKS.rating,
        'link-facebook': SOCIAL_LINKS.facebook,
        'link-instagram': SOCIAL_LINKS.instagram,
        'link-tiktok': SOCIAL_LINKS.tiktok,
        'link-website': SOCIAL_LINKS.website,
        'link-order': SOCIAL_LINKS.order
    };
    
    // تعيين الروابط لكل زر
    Object.keys(linkMapping).forEach(function(id) {
        const element = document.getElementById(id);
        if (element) {
            element.href = linkMapping[id];
        }
    });
    
    // ===============================================
    // 2. إدارة ملفات تعريف الارتباط (Cookies)
    // ===============================================
    
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');
    const declineBtn = document.getElementById('cookie-decline');
    
    // التحقق مما إذا كان المستخدم قد اتخذ قراراً مسبقاً
    const savedConsent = localStorage.getItem('cookieConsent');
    
    if (savedConsent) {
        // إخفاء البانر إذا كان المستخدم قد اتخذ قراراً
        cookieBanner.classList.add('hidden');
        
        // تطبيق الإعدادات المحفوظة
        if (savedConsent === 'accepted') {
            console.log('✅ Cookies previously accepted');
            // يمكن إضافة كود Google Analytics هنا
        }
    }
    
    // عند الضغط على زر القبول
    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieBanner.classList.add('hidden');
        console.log('✅ Cookies accepted');
        
        // هنا يمكن تحميل سكريبتات التتبع مثل Google Analytics
        // loadAnalytics();
    });
    
    // عند الضغط على زر الرفض
    declineBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'declined');
        cookieBanner.classList.add('hidden');
        console.log('❌ Cookies declined');
    });
    
    // ===============================================
    // 3. تأثيرات إضافية (اختياري)
    // ===============================================
    
    // إضافة تأثير عند التمرير
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(function(btn) {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // ===============================================
    // 4. تسجيل معلومات العمل في الكونسول (للمطورين)
    // ===============================================
    
    console.log('🏪 Side Döner P.C.');
    console.log('👤 Inhaber:', SOCIAL_LINKS.business.owner);
    console.log('📍 Standort:', SOCIAL_LINKS.business.address);
    console.log('🔢 Steuernummer:', SOCIAL_LINKS.business.steuernummer);
});