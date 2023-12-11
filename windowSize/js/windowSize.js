"use strict";

window.onload = function getSize() {
  const updateSize = () => {
    const unitSelector = document.getElementById('unit');
    const unit = unitSelector.value;

    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;

    document.getElementById('wh').innerHTML = `<h1>Width: ${width}${unit}<br />Height: ${height}${unit}</h1>`;
  };

  updateSize();

  window.addEventListener('resize', updateSize);
};

function updateBackgroundColor() {
  const body = document.body;
  const unitSelector = document.getElementById('unit');
  const unit = unitSelector.value;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  body.className = windowWidth < 600 && windowHeight < 600 ? 'bg-color-small' : 'bg-color-large';
}
