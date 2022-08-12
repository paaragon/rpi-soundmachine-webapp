<script lang="ts">
	import { onMount } from 'svelte';
	import SoundButton from '../components/SoundButton.svelte';
	import type Button from '../model/Button';
	import buttonService from '../services/button.service';

	let buttons: Button[] = [];

	onMount(async () => {
		await loadButtons();
	});

	async function loadButtons() {
		const result = await buttonService.getButtons();
		buttons = result.buttons;
	}

	async function handleClick(event: CustomEvent) {
		const { id } = event.detail;
		await buttonService.playSound(id);
	}

	async function handleChange(event: CustomEvent) {
		const { id, file } = event.detail;
		await buttonService.uploadSound(id, file);
		await loadButtons();
	}
</script>

<div class="buttons-wrapper">
	{#each buttons as button}
		<SoundButton {button} on:click={handleClick} on:fileChange={handleChange} />
	{/each}
</div>

<style>
	.buttons-wrapper {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}
</style>
