<script lang="ts">
	// import './layout.css';
	import '../lib/styles/app.scss';
	// import favicon from '$lib/assets/favicon.svg';
	import tabicon from '$lib/assets/tab-icon.png';
	import { Footer } from '../components';
	
	let { data, children } = $props();
</script>

<svelte:head>
	<!-- <link rel="icon" href={favicon} /> -->
	<link rel="icon" type="image/png" href={tabicon} />
</svelte:head>
<main class="app-layout">
	{@render children()}
</main>
<Footer socials={data.socials} />