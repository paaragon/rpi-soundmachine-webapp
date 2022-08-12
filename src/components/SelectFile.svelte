<script lang="ts">
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let id: number;
	let myInput: HTMLElement | null;

	onMount(() => {
		myInput = document.getElementById(`${id}-sound`);
	});

	function click() {
		if (myInput) {
			myInput.click();
		}
	}

	function inputChange(event: any) {
		const file: File = event.target.files[0];
		dispatch('fileChange', file);
	}
</script>

<button on:click={click}>Update sound</button>

<input type="file" name="sound" id="{id}-sound" on:change={inputChange} />

<style lang="scss">
	input[type='file'] {
		display: none;
	}

	button {
		width: 100%;
		height: 100%;
		border: 0;
		background-color: #444;
		color: #fff;
		border-radius: 3px;
		&:hover {
			background-color: #000;
		}
	}
</style>
