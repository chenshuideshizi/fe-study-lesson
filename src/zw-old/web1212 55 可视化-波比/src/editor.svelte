<div on:mousedown={handleMouseDown} class="editor" bind:this={ele}>
  {#each $store as option (option.id)}
    <Sharp style={getStyleStr({...option.style, ...pos})}>
      <svelte:component this={option.c} value={option.attrs.value}></svelte:component>
    </Sharp>
  {/each}
</div>

<script>
  import { store } from './store'
  import Sharp from './sharp.svelte';

  let ele = null;
  let pos = {};

  function getStyleStr(styles = {}) {
    return Object.keys(styles).map(s => `${s}: ${styles[s]}px`).join(';')
  }

  function handleMouseDown(e) {
    if (!e || !ele) return;
    const { x, y } = ele.getBoundingClientRect();
    const move = me => {
      const cx = me.clientX
      const cy = me.clientY

      pos = {
        top: cy - y,
        left: cx - x
      }
    }

    const up = me => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
    }

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  }

</script>

<style>
  .editor {
    height: 100%;
  }
</style>