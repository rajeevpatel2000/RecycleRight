document.addEventListener('DOMContentLoaded', () => {

    // --- Global: Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- Feature 1: Awareness Accordion Logic ---
    const accordions = document.querySelectorAll('.accordion-header');
    if (accordions.length > 0) {
        accordions.forEach(acc => {
            acc.addEventListener('click', function () {
                // Toggle active class on parent
                this.parentElement.classList.toggle('active');

                // Optional: Close others (for cleaner UI)
                accordions.forEach(otherAcc => {
                    if (otherAcc !== this) {
                        otherAcc.parentElement.classList.remove('active');
                    }
                });
            });
        });
    }

    // --- Feature 2: Materials Guide Expansion ---
    const detailBtns = document.querySelectorAll('.details-btn');
    if (detailBtns.length > 0) {
        detailBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                const details = this.nextElementSibling;

                if (details.classList.contains('hidden')) {
                    details.classList.remove('hidden');
                    this.textContent = 'Hide Details';
                } else {
                    details.classList.add('hidden');
                    this.textContent = 'View Details';
                }
            });
        });
    }

    // --- Feature 3: Interactive Quiz Logic ---
    const quizContainer = document.getElementById('quiz-container');
    if (quizContainer) {
        let currentQuestionIndex = 0;
        let score = 0;
        const questionText = document.getElementById('quiz-item-name');
        const feedbackText = document.getElementById('quiz-feedback');
        const scoreDisplay = document.getElementById('score');
        const totalDisplay = document.getElementById('total-questions');
        const btnYes = document.getElementById('btn-yes');
        const btnNo = document.getElementById('btn-no');
        const restartBtn = document.getElementById('restart-quiz');

        // Initialize Quiz
        if (quizData && quizData.length > 0) {
            totalDisplay.textContent = quizData.length;
            loadQuestion(0);
        }

        function loadQuestion(index) {
            if (index < quizData.length) {
                questionText.textContent = quizData[index].question;
                feedbackText.classList.add('hidden');
                feedbackText.className = 'hidden'; // Reset classes
                btnYes.disabled = false;
                btnNo.disabled = false;
                btnYes.classList.remove('hidden');
                btnNo.classList.remove('hidden');
            } else {
                // End of Quiz
                questionText.textContent = "Quiz Complete! 🎉";
                btnYes.classList.add('hidden');
                btnNo.classList.add('hidden');
                restartBtn.classList.remove('hidden');

                let finalMsg = "";
                if (score === quizData.length) finalMsg = "Perfect Score! You're a recycling hero! ♻️";
                else if (score > quizData.length / 2) finalMsg = "Great job! Keep learning!";
                else finalMsg = "Good effort! Check the guide to learn more.";

                feedbackText.textContent = finalMsg;
                feedbackText.className = ''; // Visible
            }
        }

        function handleAnswer(userSaidYes) {
            const currentQ = quizData[currentQuestionIndex];
            const isCorrect = (userSaidYes === currentQ.isRecyclable);

            if (isCorrect) {
                score++;
                scoreDisplay.textContent = score;
                feedbackText.textContent = "Correct! " + currentQ.feedback;
                feedbackText.className = 'correct';
            } else {
                feedbackText.textContent = "Wrong. " + currentQ.feedback;
                feedbackText.className = 'incorrect';
            }

            feedbackText.classList.remove('hidden');

            // Disable buttons briefly
            btnYes.disabled = true;
            btnNo.disabled = true;

            // Next question after delay
            setTimeout(() => {
                currentQuestionIndex++;
                loadQuestion(currentQuestionIndex);
            }, 2500); // 2.5s to read feedback
        }

        btnYes.addEventListener('click', () => handleAnswer(true));
        btnNo.addEventListener('click', () => handleAnswer(false));

        restartBtn.addEventListener('click', () => {
            currentQuestionIndex = 0;
            score = 0;
            scoreDisplay.textContent = "0";
            restartBtn.classList.add('hidden');
            loadQuestion(0);
        });
    }


    // --- Feature 4: Smart Search ---
    const searchInput = document.getElementById('item-search');
    const resultsContainer = document.getElementById('search-results');

    if (searchInput && resultsContainer) {
        searchInput.addEventListener('keyup', (e) => {
            const query = e.target.value.toLowerCase().trim();
            resultsContainer.innerHTML = ''; // Clear previous

            if (query.length < 2) return; // Wait for 2 chars

            const results = searchItems.filter(item =>
                item.name.toLowerCase().includes(query)
            );

            if (results.length === 0) {
                resultsContainer.innerHTML = '<div class="search-item">No items found. Try a different term.</div>';
            } else {
                results.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'search-item';
                    const statusIcon = item.recyclable ? '✅' : '❌';
                    div.innerHTML = `
                        <strong>${statusIcon} ${item.name}</strong> (${item.category})<br>
                        <span style="font-size: 0.9em; color: #555;">${item.instruction}</span>
                    `;
                    resultsContainer.appendChild(div);
                });
            }
        });
    }


    // --- Feature 5: Impact Calculator ---
    const inputs = document.querySelectorAll('.impact-inputs input');

    if (inputs.length > 0) {
        function updateImpact() {
            const bottles = parseInt(document.getElementById('input-bottles').value) || 0;
            const cans = parseInt(document.getElementById('input-cans').value) || 0;
            const papers = parseInt(document.getElementById('input-paper').value) || 0;

            // Approximate Impact Multipliers
            const energy = (bottles * 0.05) + (cans * 0.3) + (papers * 1.5);
            const water = (bottles * 1.5) + (cans * 0.5) + (papers * 5);
            const trees = (papers * 0.002);

            document.getElementById('res-energy').textContent = energy.toFixed(1);
            document.getElementById('res-water').textContent = water.toFixed(1);
            document.getElementById('res-trees').textContent = trees.toFixed(3);

            if (bottles > 0 || cans > 0 || papers > 0) {
                document.getElementById('impact-results').classList.remove('hidden');
            } else {
                document.getElementById('impact-results').classList.add('hidden');
            }
        }

        inputs.forEach(input => {
            input.addEventListener('input', updateImpact);
        });
    }

});
