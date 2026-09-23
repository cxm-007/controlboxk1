/* 数据转换盒子 · 宣传网站交互脚本（无外部依赖） */
(function () {
  "use strict";

  /* 导航滚动边框 */
  var nav = document.getElementById("nav");
  var backTop = document.getElementById("backTop");
  function onScroll() {
    var y = window.scrollY || 0;
    nav.classList.toggle("scrolled", y > 10);
    backTop.classList.toggle("show", y > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* 移动端菜单 */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  toggle.addEventListener("click", function () {
    links.classList.toggle("open");
  });
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") links.classList.remove("open");
  });

  /* 进场动画 */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("visible");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* 图片放大查看 */
  var lightbox = document.getElementById("lightbox");
  var lbImg = document.getElementById("lbImg");
  var lbClose = document.getElementById("lbClose");
  document.querySelectorAll(".lightbox-target, .img-card img, .scene-img img, .banner img").forEach(
    function (img) {
      img.addEventListener("click", function () {
        lbImg.src = img.src;
        lbImg.alt = img.alt || "";
        lightbox.classList.add("open");
        lightbox.setAttribute("aria-hidden", "false");
      });
    }
  );
  function closeLB() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  }
  lbClose.addEventListener("click", closeLB);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLB();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLB();
  });

  /* 返回顶部 */
  backTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
