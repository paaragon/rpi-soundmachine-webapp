<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type Button from '../model/Button';
	import SelectFile from './SelectFile.svelte';

	const dispatch = createEventDispatcher();

	export let button: Button;

	function click() {
		dispatch('click', { id: button.id });
	}

	function handleChange(event: CustomEvent) {
		const file = event.detail;
		dispatch('fileChange', { id: button.id, file });
	}
</script>

<div class="wrapper">
	<div class="play" on:click={click}>
		{button.sound || '<empty>'}
	</div>
	<div class="update"><SelectFile on:fileChange={handleChange} id={button.id} /></div>
</div>

<style lang="scss">
	.wrapper {
		width: calc(100% / 4);
		aspect-ratio: 1;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: 1px solid #000;
		background-color: #fff;
		.play {
			border-bottom: 1px solid #000;
			width: 100%;
			height: 70%;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			word-break: break-all;
			&:hover {
				background-color: #efefef;
			}
			&:active {
				background-color: #bebebe;
			}
		}
		.update {
			height: 30%;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #444;
			color: #fff;
			width: 100%;
			&:hover {
				background-color: #000;
			}
		}
	}
</style>
