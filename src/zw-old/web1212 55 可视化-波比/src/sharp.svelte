<!-- 包一层，吸附对齐 -->

<div class="sharp" {style}>
  <slot />
</div>

<script>
  export let style = ''
</script>

<style>
  .sharp {
    position: absolute;
  }
</style>
