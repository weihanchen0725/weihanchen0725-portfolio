<script lang="ts">
	import type { Snippet } from 'svelte';
	import './Card.scss';

	let {
		children,
		title,
		description,
		footer,
		class: className = '',
		...rest
	}: {
		children: Snippet;
		title?: Snippet | string;
		description?: Snippet | string;
		footer?: Snippet;
		class?: string;
		[key: string]: any;
	} = $props();
</script>

<div
	class="project-card {className}"
	{...rest}
>
	{#if title || description}
		<div class="project-card-header" data-testid="card-header">
			{#if title}
				<h3>
					{#if typeof title === 'string'}
						{title}
					{:else}
						{@render title()}
					{/if}
				</h3>
			{/if}
			{#if description}
				<div class="project-card-description" data-testid="card-description">
					{#if typeof description === 'string'}
						{description}
					{:else}
						{@render description()}
					{/if}
				</div>
			{/if}
		</div>
	{/if}

	<div class="project-card-body" data-testid="card-body">
		{@render children()}
	</div>

	{#if footer}
		<div class="project-card-footer" data-testid="card-footer">
			{@render footer()}
		</div>
	{/if}
</div>
