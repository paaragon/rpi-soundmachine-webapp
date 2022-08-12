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
		padding: 3px;
		.play {
			width: 100%;
			height: 80%;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			word-break: break-all;
			background-color: #efefef;
			border-radius: 3px;
			&:hover {
				background-color: #efefef;
				cursor: pointer;
			}
			&:active {
				background-color: #bebebe;
			}
		}
		.update {
			height: 20%;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			margin-top: 3px;
		}
	}
</style>
