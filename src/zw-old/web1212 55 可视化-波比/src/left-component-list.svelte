<div class="list" on:dragstart={handleDragStart}>
  {#each componentList as comp (comp.key)}
    <section draggable={true} class="item" data-id={comp.key}>
      <span>{ comp.label }</span>
    </section>
  {/each}
</div>

<script>
  import { componentList } from './built-in-components'

  function handleDragStart(e) {
    if (!e) return;
    const id = e.target.dataset.id;
    e.dataTransfer.setData('id', id);
  }
</script>

<style>
  .list {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    padding: 10px;
    justify-content: center;
  }

  section.item {
    width: 45%;
    height: 24px;
    border: 1px solid #ddd;
    cursor: grab;
    margin-bottom: 10px;
    text-align: center;
    color: #333;
    padding: 2px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  section.item:active {
    cursor: grabbing;
  }
</style>