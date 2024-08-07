const humbergerBtn = document.getElementById("humberger");
const mbSidebar = document.getElementById("mb-sidebar");
try {
  humbergerBtn.addEventListener("click", function () {
    humbergerBtn.classList.toggle("open");
    mbSidebar.classList.toggle("open");
  });
} catch (error) {}

// Trang tin tức trang chính
const menuNewsItems1 = document.getElementsByClassName("menu-news-item1");
const menuNewsItems2 = document.getElementsByClassName("menu-news-item2");
const menuNewsItems3 = document.getElementsByClassName("menu-news-item3");

try {
  function removeActiveClass(list) {
    for (let item of list) {
      item.classList.remove("active");
    }
  }

  for (let item of menuNewsItems1) {
    item.addEventListener("click", function () {
      removeActiveClass(menuNewsItems1);
      item.classList.add("active");
    });
  }
  for (let item of menuNewsItems2) {
    item.addEventListener("click", function () {
      removeActiveClass(menuNewsItems2);
      item.classList.add("active");
    });
  }
  for (let item of menuNewsItems3) {
    item.addEventListener("click", function () {
      removeActiveClass(menuNewsItems3);
      item.classList.add("active");
    });
  }
} catch (error) {}


