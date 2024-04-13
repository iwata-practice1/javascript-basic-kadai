console.log(document.head);
console.log(document.body);
console.log(window);

const btn = document.getElementById('btn');
const text = document.getElementById('text');
btn.addEventListener('click', () => {
  setTimeout( () => {
    console.log(text.textContent = 'ボタンをクリックしました');
  }, 2000);
});
