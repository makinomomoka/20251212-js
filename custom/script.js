// const button = document.querySelector('.btn-question');

// button.addEventListener('click', () => {
//     button.classList.add('animete');
// });

// button.addEventListener('mouseleave', () => {
//     button.classList.remove('animete');
// })

const button = document.querySelector(".btn-question");

button.addEventListener("click", () => {
  // クラスを追加してアニメーションを開始
  button.classList.add("animate");
});

button.addEventListener("mouseleave", () => {
  // カーソルがはずれたらクラスを削除
  button.classList.remove("animate");
})