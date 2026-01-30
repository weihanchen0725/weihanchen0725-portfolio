<script lang="ts">
    import { onMount } from 'svelte';
    export let url: string = '';
	export let className: string = '';
    let svgContent: string = '';

	onMount(async () => {
		if (url) {
			try {
				const response = await fetch(url);
				const text = await response.text();
				// Optional: Sanitize 'text' here if users are uploading untrusted SVGs
				svgContent = text; 
			} catch (e) {
				console.error('Failed to load SVG', e);
			}
		}
	});
</script>
{#if svgContent}
	<span class="{className}">
		{@html svgContent}
	</span>
{:else}
    <div class="{className}"></div>
{/if}