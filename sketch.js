// Woordkunst - Game Logic

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

function setup() {
  noCanvas();
  
  // Event listeners
  document.getElementById('start-btn').addEventListener('click', startGame);
  document.getElementById('next-btn').addEventListener('click', nextQuestion);
  document.getElementById('play-again-btn').addEventListener('click', resetGame);
  document.getElementById('review-btn').addEventListener('click', showReview);
  document.getElementById('back-to-results-btn').addEventListener('click', backToResults);
}

function startGame() {
  // Select 20 random questions from the 100 available
  currentQuestions = shuffle(woordkunstData).slice(0, 20);
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  
  // Hide welcome, show question screen
  document.getElementById('welcome-screen').classList.add('hidden');
  document.getElementById('question-screen').classList.remove('hidden');
  
  // Load first question
  loadQuestion();
}

function loadQuestion() {
  if (currentQuestionIndex >= currentQuestions.length) {
    showResults();
    return;
  }
  
  const question = currentQuestions[currentQuestionIndex];
  
  // Update progress
  document.getElementById('question-number').textContent = `Vraag ${currentQuestionIndex + 1} van 20`;
  document.getElementById('score').textContent = `Score: ${score} / ${currentQuestionIndex}`;
  const progress = ((currentQuestionIndex) / 20) * 100;
  document.getElementById('progress-fill').style.width = `${progress}%`;
  
  // Display question
  document.getElementById('question-text').textContent = question.question;
  
  // Create choice buttons
  const choicesContainer = document.getElementById('choices-container');
  choicesContainer.innerHTML = '';
  
  question.choices.forEach((choice, index) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = choice;
    btn.addEventListener('click', () => selectAnswer(index));
    choicesContainer.appendChild(btn);
  });
  
  // Hide feedback
  document.getElementById('feedback-card').classList.add('hidden');
}

function selectAnswer(selectedIndex) {
  const question = currentQuestions[currentQuestionIndex];
  const isCorrect = selectedIndex === question.correct;
  
  if (isCorrect) {
    score++;
  }
  
  // Store user answer
  userAnswers.push({
    question: question.question,
    selected: selectedIndex,
    correct: question.correct,
    isCorrect: isCorrect
  });
  
  // Update score display
  document.getElementById('score').textContent = `Score: ${score} / ${currentQuestionIndex + 1}`;
  
  // Disable all buttons and show correct/incorrect
  const buttons = document.querySelectorAll('.choice-btn');
  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === question.correct) {
      btn.classList.add('correct');
    } else if (index === selectedIndex && !isCorrect) {
      btn.classList.add('incorrect');
    }
  });
  
  // Show feedback
  showFeedback(question, selectedIndex, isCorrect);
}

function showFeedback(question, selectedIndex, isCorrect) {
  const feedbackCard = document.getElementById('feedback-card');
  const feedbackContent = document.getElementById('feedback-content');
  
  let html = '';
  
  // Result header
  if (isCorrect) {
    html += `<div class="result-header correct">✓ Uitstekend!</div>`;
  } else {
    html += `<div class="result-header incorrect">✗ Helaas, niet het juiste antwoord</div>`;
  }
  
  // Show explanation for the selected answer
  html += `<div class="explanation">`;
  html += `<h3>Jouw antwoord:</h3>`;
  html += `<p><strong>"${question.choices[selectedIndex]}"</strong></p>`;
  html += `<p>${question.explanations[selectedIndex]}</p>`;
  html += `</div>`;
  
  // Show ALL explanations
  html += `<h3>Alle antwoordopties uitgelegd:</h3>`;
  question.choices.forEach((choice, index) => {
    html += `<div class="option-explanation">`;
    html += `<span class="option-label">${index + 1}. ${choice}</span>`;
    html += `<p>${question.explanations[index]}</p>`;
    html += `</div>`;
  });
  
  feedbackContent.innerHTML = html;
  feedbackCard.classList.remove('hidden');
  
  // Scroll to feedback
  setTimeout(() => {
    feedbackCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

function nextQuestion() {
  currentQuestionIndex++;
  loadQuestion();
  
  // Scroll back to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showResults() {
  document.getElementById('question-screen').classList.add('hidden');
  document.getElementById('results-screen').classList.remove('hidden');
  
  // Update progress to 100%
  document.getElementById('progress-fill').style.width = '100%';
  
  // Show final score
  document.getElementById('final-score').textContent = `${score} / 20`;
  
  // Performance message
  const percentage = (score / 20) * 100;
  let message = '';
  
  if (percentage === 100) {
    message = '🌟 Perfect! Je beheerst de Nederlandse taal uitstekend!';
  } else if (percentage >= 80) {
    message = '🎉 Geweldig! Je hebt een uitstekende woordenschat.';
  } else if (percentage >= 60) {
    message = '👍 Goed gedaan! Je bent goed op weg.';
  } else if (percentage >= 40) {
    message = '💪 Niet slecht! Er is nog ruimte voor verbetering.';
  } else {
    message = '📚 Blijf oefenen! Elke keer leer je meer.';
  }
  
  document.getElementById('performance-message').textContent = message;
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetGame() {
  document.getElementById('results-screen').classList.add('hidden');
  document.getElementById('welcome-screen').classList.remove('hidden');
  
  // Reset progress
  document.getElementById('progress-fill').style.width = '0%';
  document.getElementById('question-number').textContent = 'Vraag 1 van 20';
  document.getElementById('score').textContent = 'Score: 0 / 0';
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showReview() {
  document.getElementById('results-screen').classList.add('hidden');
  document.getElementById('review-screen').classList.remove('hidden');
  
  const reviewContent = document.getElementById('review-content');
  let html = '';
  
  currentQuestions.forEach((question, index) => {
    const userAnswer = userAnswers[index];
    const isCorrect = userAnswer && userAnswer.isCorrect;
    
    html += `<div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">`;
    html += `<div class="review-question"><strong>Vraag ${index + 1}:</strong> ${question.question}</div>`;
    
    if (userAnswer) {
      html += `<div class="review-answer">`;
      html += `<p><strong>Jouw antwoord:</strong> ${question.choices[userAnswer.selected]}</p>`;
      html += `<p><strong>Correct antwoord:</strong> ${question.choices[question.correct]}</p>`;
      html += `<p class="status">${isCorrect ? '✓ Correct' : '✗ Fout'}</p>`;
      html += `</div>`;
    }
    
    html += `</div>`;
  });
  
  reviewContent.innerHTML = html;
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToResults() {
  document.getElementById('review-screen').classList.add('hidden');
  document.getElementById('results-screen').classList.remove('hidden');
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Helper function to shuffle array
function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
