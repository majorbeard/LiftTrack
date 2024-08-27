const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mobileNavToggleBar1 = document.querySelector('.bar-1');
const mobileNavToggleBar2 = document.querySelector('.bar-2');
const mobileNavToggleBar3 = document.querySelector('.bar-3');
const mobileNavContainer = document.querySelector('.navbar_mobile');

const faqItems = document.querySelectorAll('.faq-item');
const faqAnswers = document.querySelectorAll('.faq-answer');
const faqLines = document.querySelectorAll('.faq-line-1');

mobileNavToggle.addEventListener('click', () => {
    mobileNavToggleBar1.classList.toggle('bar-1_clicked');
    mobileNavToggleBar2.classList.toggle('bar-2_clicked');
    mobileNavToggleBar3.classList.toggle('bar-3_clicked');

    mobileNavContainer.classList.toggle('navbar_mobile-clicked');
});

document.addEventListener('click', (event) => {
    if (event.target !== mobileNavToggle && !mobileNavToggle.contains(event.target) && !mobileNavContainer.contains(event.target)) {
        mobileNavToggleBar1.classList.remove('bar-1_clicked');
        mobileNavToggleBar2.classList.remove('bar-2_clicked');
        mobileNavToggleBar3.classList.remove('bar-3_clicked');
        mobileNavContainer.classList.remove('navbar_mobile-clicked');
    }
});

// New FAQ functionality
faqItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Toggle the clicked item
        toggleFaqItem(index);

        // Close other open items
        faqItems.forEach((otherItem, otherIndex) => {
            if (otherIndex !== index && otherItem.classList.contains('active')) {
                toggleFaqItem(otherIndex);
            }
        });
    });
});

function toggleFaqItem(index) {
    // Toggle the 'active' class on the clicked item
    faqItems[index].classList.toggle('active');

    // Toggle the plus/minus icon
    faqLines[index].classList.toggle('faq-line-1-cliked');

    // Toggle the answer visibility
    faqAnswers[index].classList.toggle('faq-answer-clicked');
}