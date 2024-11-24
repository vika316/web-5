document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image-item img");
  let currentFontSize = 16; // Поточний розмір шрифту (у пікселях)

  // Анімація під час завантаження сторінки
  images.forEach((img, index) => {
    setTimeout(() => {
      img.classList.add("animate");
    }, index * 200); // Кожне зображення з'являється із затримкою
  });

  // Анімація при прокручуванні
  window.addEventListener("scroll", function () {
    images.forEach((img) => {
      const rect = img.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        img.classList.add("animate");
      }
    });
  });

  // Додаємо анімацію при наведенні на зображення
  images.forEach((img) => {
    img.addEventListener("mouseenter", function () {
      img.classList.add("hover-animation"); // Додаємо клас при наведенні
    });

    img.addEventListener("mouseleave", function () {
      img.classList.remove("hover-animation"); // Видаляємо клас при відведенні курсору
    });
  });

  // Додаємо анімацію при натисканні певних клавіш
  window.addEventListener("keydown", function (event) {
    const key = event.key;

    // Збільшення тексту на сайті при натисканні клавіші "+"
    if (key === "+") {
      currentFontSize += 2; // Збільшуємо розмір шрифту на 2px
      document.body.style.fontSize = `${currentFontSize}px`;
    }

    // Інші анімації для зображень
    if (key === "Enter") {
      images.forEach((img) => {
        img.classList.add("key-press-animation");
        setTimeout(() => img.classList.remove("key-press-animation"), 500);
      });
    }

    if (key === "ArrowUp") {
      images.forEach((img) => {
        img.classList.add("key-press-animation-up");
        setTimeout(() => img.classList.remove("key-press-animation-up"), 500);
      });
    }

    if (key === "ArrowDown") {
      images.forEach((img) => {
        img.classList.add("key-press-animation-down");
        setTimeout(() => img.classList.remove("key-press-animation-down"), 500);
      });
    }

    if (key === "s" || key === "S") {
      images.forEach((img) => {
        img.classList.add("key-press-animation-scale");
        setTimeout(() => img.classList.remove("key-press-animation-scale"), 500);
      });
    }

    if (key === "r" || key === "R") {
      images.forEach((img) => {
        img.classList.add("key-press-animation-rotate");
        setTimeout(() => img.classList.remove("key-press-animation-rotate"), 1000);
      });
    }
    if (key === "-") {
      currentFontSize = Math.max(10, currentFontSize - 2); // Зменшуємо, але не менше 10px
      document.body.style.fontSize = `${currentFontSize}px`;
    }
  });
});

