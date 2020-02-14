import store from './store.js';

export default (el) => {
  el.innerHTML = `
<div style="margin: 2em;" class="mui-panel mui--text-center">
  <div class="mui--text-headline">Buy Tools</div>
  <div class="mui-divider"></div>
  <img id="orchid-image" style="margin-top: 1em; margin-bottom: 1em; height: 200px"></img>
  <div class="mui-divider"></div>
  <button class="mui-btn mui-btn--accent" style="width: 100%;" id="add-to-cart">Add</button>
</div>
`;
  document.getElementById('add-to-cart').addEventListener('click', () => {
    store.incrementCount();
  });

  document.getElementById('orchid-image').src = store.getImage();
  store.subscribe(() => {
    document.getElementById('orchid-image').src = store.getImage();
  });
};
