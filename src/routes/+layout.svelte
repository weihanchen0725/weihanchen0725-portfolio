<script lang="ts">
	// import './layout.css';
	import '../lib/styles/app.scss';
	import favicon from '$lib/assets/favicon.svg';
	import { Footer } from '../components';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<main class="app-layout">
	{@render children()}
</main>
<Footer />