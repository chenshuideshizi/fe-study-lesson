<div class="app">
	<section class="toolbar">toolbar</section>
	<main>
		<aside class="left">
			<LCL />
		</aside>
		<section class="center" on:dragover={handleDragOver} on:drop={handleDragDrop}>
			<Editor />
		</section>
		<aside class="right">属性面板</aside>
	</main>
</div>

<script>
	import LCL from './left-component-list.svelte';
	import { options } from './built-in-components'
	import { deepCopy, hash } from './utils'
	import { store } from './store'
	import Editor from './editor.svelte';

	function handleDragOver(e) {
		e.preventDefault();
		e.dataTransfer.dropEffect = 'copy';
	}

	function handleDragDrop(e) {
		e.preventDefault()
		e.stopPropagation()
		const component = deepCopy(options[e.dataTransfer.getData('id')])

		component.style.top = e.offsetY
		component.style.left = e.offsetX
		component.id = hash()

		store.update((c = []) => [...c, component]);
	}
</script>

<style>
	.app {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.app .toolbar {
		height: 60px;
		padding: 0px 24px;
		margin-bottom: 1px;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
	}

	main {
		display: flex;
		flex: 1;
	}

	main .left {
		width: 120px;
	}

	main .center {
		flex: 1;
		background-color: #F5F5F5;
		position: relative;
	}

	main .right {
		width: 240px;
	}
</style>