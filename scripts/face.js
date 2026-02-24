const cap = document.getElementById('cap');
const SwapCapBtn = document.getElementById('swap-cap-btn');

SwapCapBtn.addEventListener('click', () => {
    console.log('Button clicked');
    const currentSrc = cap.getAttribute('src');

    if (currentSrc.includes('cap1')) {
        cap.setAttribute('src', '#cap2');
    } else {
        cap.setAttribute('src', '#cap1');
    }
});

// Force resize to ensure model loads
setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
}, 2000);