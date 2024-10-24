//  smooth scrolling
document.querySelectorAll('.nav button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const sections = document.querySelectorAll('.about, .middle');
        sections[index]?.scrollIntoView({ behavior: 'smooth' });
    });
});

// image hover effect
const image = document.querySelector('.my-picture img');
image.addEventListener('mouseover', () => {
    image.style.border = '2px solid rgb(119, 208, 144)';
    image.style.boxShadow = '0 8px 16px rgba(28, 0, 0, 0.8)';
});
image.addEventListener('mouseout', () => {
    image.style.border = '2px solid #ddd';
    image.style.boxShadow = '0 4px 8px rgb(28, 0, 0)';
});

// open resume file on button click
document.querySelector('.resume button').addEventListener('click', () => {
    window.open('https://drive.google.com/file/d/1lXMb8oQKQVCecfOQVaWQJHswAcD-cMeU/view?usp=sharing', '_blank');
});

// social media links interaction
const socialMediaLinks = {
    'LinkedIn': 'https://www.linkedin.com/evangelene-stanley',
    'GitHub': 'https://github.com/',
    'Instagram': 'https://www.instagram.com/evangelene.s05'
};

document.querySelectorAll('.social-media li').forEach(li => {
    li.addEventListener('click', () => {
        const url = socialMediaLinks[li.textContent];
        if (url) window.open(url, '_blank');
    });
});