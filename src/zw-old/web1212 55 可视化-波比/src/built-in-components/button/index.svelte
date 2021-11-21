<button class="v-btn" {style}>{ value }</button>

<script>

  // export let => data/state
  export let value = '按钮';
  export let style = ''
</script>

<style>
  .v-btn {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #FFF;
    border: 1px solid #e5e6e7;
    color: #606666;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    width: 100%;
    height: 100%;
    font-size: 14px;
  }

  .v-btn:active {
    color: #3e8ee6;
    border-color: #3e8ee6;
    outline: 0;
  }

  .v-btn:hover {
    background-color: #ecf5ff;
    color: #348ee6;
  }
</style>