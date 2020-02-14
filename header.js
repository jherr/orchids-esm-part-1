import store from './store.js';

export default (el) => {
  el.innerHTML = `
<header class="mui-appbar mui--z1">
  <div class="mui-container">
    <table width="100%">
      <tr class="mui--appbar-height">
        <td class="mui--text-title">ESM Micro-FE</td>
        <td class="mui--text-right">
          Cart Count: <span id="count"></span>
        </td>
      </tr>
    </table>
  </div>
</header>`;
  const update = () => {
    document.getElementById('count').innerText = store.getCount();
  };
  store.subscribe(update);
  update();
};