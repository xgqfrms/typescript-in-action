
/*

https://www.cnblogs.com/xgqfrms

https://cdn.xgqfrms.xyz/plugins/seo-flag.js

https://github.com/xgqfrms/cdn/blob/gh-pages/plugins/seo-flag.js

*/

(() => {
  const flagBox = document.querySelector(`[data-uid="seo-flag"]`);
  const domStr = `
    <a href="https://s11.flagcounter.com/count2/QIXi" data-flagcounter="a">
      <img data-flagcounter="img" src="https://s11.flagcounter.com/count2/QIXi/bg_000000/txt_00FF00/border_FF00FF/columns_3/maxflags_12/viewers_0/labels_1/pageviews_1/flags_0/percent_1/" alt="cnblogs" border="0" />
    </a>
  `;
  flagBox.insertAdjacentHTML(`beforeend`, domStr);
  const log = console.log;
  log(` 🎉 flagcounter.com finished!`);
})();
