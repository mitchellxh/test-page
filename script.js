// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Welcome to my GitHub Page!');

    // Interactive button
    const button = document.getElementById('clickMe');
    const message = document.getElementById('message');
    let clickCount = 0;

    button.addEventListener('click', function() {
        clickCount++;
        const messages = [
            "Great! You clicked the button!",
            "You're getting the hang of this!",
            "Awesome! Keep exploring!",
            "You're a natural!",
            "JavaScript is fun, isn't it?"
        ];

        // Pick a random message or cycle through them
        const randomMessage = messages[clickCount % messages.length];
        message.textContent = `${randomMessage} (Click count: ${clickCount})`;

        // Add a fun animation
        message.style.animation = 'none';
        setTimeout(() => {
            message.style.animation = 'fadeIn 0.5s ease-in';
        }, 10);
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#e9ecef';
        });

        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#f8f9fa';
        });
    });

    // Display current year in footer
    const footer = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footer.innerHTML = footer.innerHTML.replace('2024', currentYear);
});

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);