/* <!-- <!DOCTYPE html ⚡️amp> -->
<!DOCTYPE html>
<head>
<title>xgqfrms™, xgqfrms® : xgqfrms's offical website of cnblogs!</title>
</head>
<!-- https://amp.xgqfrms.xyz/ -->
<blockquote style="display: flex; flex-flow: column; align-items: center; justify-content: center; text-align: center; border: none;">
    <h3>
      <strong>
        <span style="font-size: 16pt; color: #00ff00;">&copy; xgqfrms 2012-<span data-uid="copyright-aside">2020</span></span>
      </strong>
    </h3>
    <section data-uid="seo-flag"></section>
    <!-- SEO  -->.
    <a href="https://s11.flagcounter.com/count2/QIXi" data-flagcounter="a">
       <img data-flagcounter="img" src="https://s11.flagcounter.com/count2/QIXi/bg_000000/txt_00FF00/border_FF00FF/columns_3/maxflags_12/viewers_0/labels_1/pageviews_1/flags_0/percent_1/" alt="cnblogs" border="0" />
    </a>
</blockquote>

<div>
  <a href="https://info.flagcounter.com/QIXi">
    <img src="https://s11.flagcounter.com/count2/QIXi/bg_000000/txt_00FF00/border_FF00FF/columns_3/maxflags_12/viewers_0/labels_1/pageviews_1/flags_0/percent_1/" alt="Flag Counter" border="0">
  </a>
</div> */
/*
<script defer>
// after load
setTimeout(() => {
   console.log(`👻 auto remove vote down`);
   const voteDown = document.querySelector(`[class="buryit"]`);
  // document.querySelector(`.buryit`);
  // voteDown.parentElement.removeChild(voteDown);
  voteDown.remove();
},  0);
</script>
 */

"use strict";
window.SEO_FLAG_FINISHED = false;
const SEO_FLAG = ()=>{
    const log = console.log;
    let counter = 1;
    function auto() {
        const img = document.querySelector(`[data-flagcounter="img"]`);
        const a = document.querySelector(`[data-flagcounter="a"]`);
        if (a && img && !window.SEO_FLAG_FINISHED) {
            log(`❓flagcounter.com trying ${counter} times`);
            a.href = `https://info.flagcounter.com/QIXi`;
            img.src = `https://s11.flagcounter.com/count2/QIXi/bg_000000/txt_00FF00/border_FF00FF/columns_3/maxflags_12/viewers_0/labels_1/pageviews_1/flags_0/percent_1/`;
            window.SEO_FLAG_FINISHED = true;
        } else {
            log(` 🎉 flagcounter.com finished!`);
        }
        counter += 1;
    }
    const timer = setInterval(()=>{
        if (!window.SEO_FLAG_FINISHED) {
            auto();
        } else {
            log(` ✅ clearInterval, after ${counter} times`);
            clearInterval(timer);
        }
    }, 1000);
}
// IIFE
(()=>SEO_FLAG())();
