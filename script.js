document.addEventListener('DOMContentLoaded', () => {
    const checkoutBtn = document.getElementById('checkout-btn');

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            // बटन दबाते ही एक बढ़िया सा लोडिंग इफेक्ट दिखेगा
            checkoutBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> REDIRECTING TO SECURE PAYMENT...';
            checkoutBtn.style.pointerEvents = 'none'; // डबल क्लिक रोकने के लिए
            
            // यहाँ तुम्हारा SuperProfile का पेमेंट लिंक है
            // जैसे ही पेमेंट गेटवे रेडी हो, आप इसे कस्टमाइज़ भी कर सकते हैं
            const paymentUrl = 'https://superprofile.bio/vp/english-mastery';
            
            // 800 मिलीसेकंड के बाद कस्टमर सीधे पेमेंट पेज पर पहुँच जाएगा
            setTimeout(() => {
                window.location.href = paymentUrl;
            }, 800);
        });
    }
});
