const openModalButtons = document.querySelectorAll(".open-modal-button"); // 클래스 이름을 사용
const closeModalButtons = document.querySelectorAll(".close-modal-button"); // 모든 close-modal-button 선택

openModalButtons.forEach((button) =>
  addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.classList.add("open");
  })
);

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.classList.remove("open");
  });
});
