import store from './store.js';

export default (el) => {
  const orchids = [1,2,3,4,5,6,7].map(i => `orchids/orchid${i}.jpg`);
  const html = `
<div class="mui-container-fluid" style="margin: 2em;">
  <div class="mui-row">
    ${orchids.map(url =>
      `
<div class="mui-col-md-4" style="padding: 1em;">
  <img class="orchid-select" style="max-height:200px" src="${url}" />
</div>
    `).join('')}
  </div>
</div>
`;
  el.innerHTML = html;
  document.querySelectorAll('.orchid-select').forEach(img => {
    img.addEventListener('click', () => {
      store.setImage(img.attributes.src.value);
    });
  });
};
