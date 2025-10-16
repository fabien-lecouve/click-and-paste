const result = document.getElementById('result');
let language = "FR";

const notes = [
  {
    slug: "relance_1",
    translations: {
      FR: "Bonjour,\n Pourriez-vous prendre en charge ce ticket s'il vous plaît ?\nCordialement,\nSupport informatique",
      EN: "Hello,\n Could you handle this ticket please?\nBest regards,\nIT Support"
    }
  }
];

function addValue(slug) {
  const note = notes.find(n => n.slug === slug);
  if (!note) return;

  const content = note.translations[language];
  if (!content) return;

  result.textContent = content;
}

// Boutons liés à des slugs
const buttons = document.querySelectorAll('button[data-slug]');
buttons.forEach(button => {
  button.addEventListener('click', () => addValue(button.dataset.slug));
});

// Boutons de langue
const langButtons = document.querySelectorAll('.lang-btn');
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    language = btn.value;
  });
});
