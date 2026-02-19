document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const url = btn.href;
      window.open(url, "_blank"); // يفتح الرابط في نافذة جديدة
    });
  });
});