document.addEventListener('DOMContentLoaded', () => {
    const subscribeButtons = document.querySelectorAll('.subscribe-btn');
    const paymentSection = document.getElementById('payment-section');

    subscribeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const plan = button.getAttribute('data-plan');
            alert(`You have selected the ${plan} plan. Please scan the QR code or use UPI ID to complete the payment.`);
            paymentSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
