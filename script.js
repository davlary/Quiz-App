  // Animated welcome text
        const welcomeText = "Welcome to AnonMsg";
        const welcomeElement = document.getElementById('welcome-text');
        
        function typeWriter(text, element, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    const char = text.charAt(i);
                    const span = document.createElement('span');
                    span.textContent = char;
                    span.style.animationDelay = `${i * 0.05}s`;
                    element.appendChild(span);
                    i++;
                    setTimeout(type, speed);
                }
            }
            
            type();
        }
        
        // Start the animation when the page loads
        document.addEventListener('DOMContentLoaded', () => {
            typeWriter(welcomeText, welcomeElement, 150);
        });