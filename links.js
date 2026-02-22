/**
 * links.js
 * ملف الروابط والإعدادات - يتم تحميله قبل script.js
 */

const SOCIAL_LINKS = {
    // معلومات المتجر
    business: {
        name: "Side Döner P.C.",
        owner: "Mahsum Gülec",
        address: "Paunsdorfer Allee, 04329 Leipzig",
        steuernummer: "232/226/10273"
    },
    
    // روابط الموقع والخريطة
    location: "https://maps.app.goo.gl/DHLvFq7YiS4EtyeZ7",
    rating: "https://maps.app.goo.gl/DHLvFq7YiS4EtyeZ7",
    
    // روابط التواصل الاجتماعي
    facebook: "https://www.facebook.com/share/1HgufB2S3v/",
    instagram: "https://www.instagram.com/sideleipzig_p.c",
    tiktok: "https://www.tiktok.com/@side_doner",
    
    // روابط الموقع والطلب
    website: "https://sidedoener-leipzig.de/",
    order: "https://wolt.com/de/deu/leipzig/restaurant/side-doener-paunsdorf-center"
};

// تصدير للاستخدام في ملفات أخرى (إن وجدت)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SOCIAL_LINKS;
}