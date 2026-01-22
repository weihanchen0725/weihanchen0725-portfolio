<script lang="ts">
	import type { Snippet } from 'svelte';
	import './Button.scss';

	type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
	type Size = 'sm' | 'md' | 'lg' | 'xl';

	let {
		children,
		onclick,
		variant = 'primary',
		size = 'md',
		class: className = '',
		type = 'button',
		disabled = false,
		...rest
	}: {
		children: Snippet;
		onclick?: (event: MouseEvent) => void;
		variant?: Variant;
		size?: Size;
		class?: string;
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
		[key: string]: any;
	} = $props();

	// Removed conflicting base styles (rounded, shadow, transition) as SCSS handles them
	const baseStyles = 'chunky-btn focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

	// Simplified variants to primarily handle colors
	const variants: Record<Variant, string> = {
		primary: 'primary',
		secondary: 'secondary',
		outline: 'outline',
		ghost: 'ghost',
		danger: 'danger'
	};

	// Sizes might still be useful, or we can rely on SCSS padding. 
	// The SCSS has fixed padding: 1rem 2rem. 
	// If we want to support sizes, we should probably override the padding with utility classes.
	const sizes: Record<Size, string> = {
		sm: 'small',
		md: 'medium', // Matching SCSS default roughly
		lg: 'large',
		xl: 'xlarge'
	};
</script>

<button
	{type}
	class="{baseStyles} {variants[variant]} {sizes[size]} {className}"
	{onclick}
	{disabled}
	{...rest}
>
	{@render children()}
</button>
