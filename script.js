// Vardan Academy - Premium Dynamic Features
document.addEventListener('DOMContentLoaded', () => {
    console.log('Vardan Academy Premium UI Loaded Successfully!');

    // Simple interactive effect for primary buttons
    const goldButtons = document.querySelectorAll('.btn-gold, .btn-outline');
    
    goldButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Future tracking or action can be added here
            console.log(`Navigating to: ${button.getAttribute('href')}`);
        });
    });
});
