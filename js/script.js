(function () {
  var tabs = document.querySelectorAll('.tab');
  var cells = document.querySelectorAll('.cell[id^="c"]');
  var urltext = document.getElementById('urltext');
  tabs.forEach(function (t) {
    t.addEventListener('click', function () {
      tabs.forEach(function (x) { x.setAttribute('aria-selected', x === t ? 'true' : 'false'); });
      cells.forEach(function (c) { c.classList.toggle('on', c.id === t.dataset.target); });
      urltext.textContent = 'zigrilus.com/' + t.dataset.path;
      var el = document.getElementById(t.dataset.target);
      if (window.matchMedia('(max-width:640px)').matches && el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
  var fav = document.getElementById('fav');
  fav.addEventListener('click', function () {
    fav.style.background = fav.style.background ? '' : '#b83a2e';
    fav.style.color = fav.style.background ? '#fffbe8' : '';
  });
})();
