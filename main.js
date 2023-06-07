const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var tabs = $$(".tab-item");
var panes = $$(".tab-pane");

const line = $(".tabs .line");

var tabActive = $(".tab-item.active");

requestIdleCallback(function () {
    line.style.left = tabActive.offsetLeft + "px";
    line.style.width = tabActive.offsetWidth + "px";
  });

tabs.forEach(function (tab, index) {
  tab.addEventListener("click", function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    panes[index].classList.add("active");
  });
});
