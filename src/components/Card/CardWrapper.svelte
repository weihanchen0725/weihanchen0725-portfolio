<script lang="ts">
	import Card from './Card.svelte';
	import { type Snippet } from 'svelte';
	
	let { 
		title = undefined, 
		description = undefined, 
		footer = undefined,
		testId = undefined,
		...rest
	} = $props();
</script>

	{#snippet titleSnippet()}
		<span data-testid="title-slot">{title}</span>
	{/snippet}

	{#snippet descSnippet()}
		<span data-testid="desc-slot">{description}</span>
	{/snippet}

	{#snippet footerSnippet()}
		<button data-testid="footer-btn">Action</button>
	{/snippet}

	<Card
		{...rest}
		data-testid={testId}
		title={title ? titleSnippet : undefined}
		description={description ? descSnippet : undefined}
		footer={footer ? footerSnippet : undefined}
	>
		<div data-testid="default-slot">Default Content</div>
	</Card>
