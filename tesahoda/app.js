// DOM Elements
const tabs = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.view-section');
const translateBtn = document.getElementById('translate-btn');
const inputText = document.getElementById('input-text');
const outputBox = document.getElementById('output-box');

// Tab Navigation Logic
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        sections.forEach(s => s.classList.add('hidden'));
        
        tab.classList.add('active');
        document.getElementById(tab.dataset.target).classList.remove('hidden');
    });
});

// Tesahoda Dictionary (Expandable)
const dictionary = {
    "mi": "I/Me", "tu": "You", "nu": "We/Us", "mu": "They/Them", "suwa": "Partner",
    "doma": "House", "poro": "Door", "bata": "Shoe", "kute": "Enter", "hato": "Stop",
    "moku": "Eat", "wako": "Walk/Go", "miya": "Hello/Welcome", "ya": "Yes", "na": "No"
};

// Simple Word-to-Word Translator Logic
translateBtn.addEventListener('click', () => {
    const input = inputText.value.toLowerCase().trim();
    if (!input) return;

    const words = input.split(/[\s,!?.]+/);
    const translation = words.map(word => {
        // Basic lookup - in a full build, this would handle suffixes (-pa, -to) and reduplication
        return dictionary[word] || `[${word}?]`;
    });

    outputBox.innerHTML = `<strong>Rough Translation:</strong> ${translation.join(' ')}`;
});
