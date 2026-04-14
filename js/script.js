/**
 * Main Script for Portfolio Website
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger terminal typewriter ONLY when the terminal bento comes into view
                if(entry.target.classList.contains('bento-terminal')) {
                    startTerminalAnimation();
                    observer.unobserve(entry.target); // Only play once
                }
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
        scrollObserver.observe(el);
    });

    // 2. Terminal Typewriter Animation (High Density)
    const typingTextEl = document.getElementById('typing-text');
    const terminalOutput = document.getElementById('terminal-output');
    const cursor = document.querySelector('.cursor');
    const commandToType = "./run_system_check.sh && print_skills()";
    let isTyping = false;

    function startTerminalAnimation() {
        if(isTyping) return;
        isTyping = true;
        let charIndex = 0;
        typingTextEl.innerHTML = "";
        
        const typeInterval = setInterval(() => {
            if (charIndex < commandToType.length) {
                typingTextEl.innerHTML += commandToType.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typeInterval);
                // Pause after typing command
                setTimeout(() => {
                    // Hide cursor for realism during execution
                    cursor.style.display = 'none';
                    // Show dense output block (sys logs + stack grid)
                    terminalOutput.classList.remove('hidden');
                    terminalOutput.style.display = 'block';
                }, 500);
            }
        }, 40); // Fast typing speed
    }

});
