<script lang="ts">
	import { Button, Card } from '../components';
	import type { Snippet } from 'svelte';

	const handlePrimaryClick = () => {
		alert('Primary button clicked!');
	};

	const handleSecondaryClick = () => {
		console.log('Secondary button clicked');
	};
</script>

<div class="min-h-screen dark:bg-gray-900 p-8">
    <div class="background-pattern"></div>
    <div class="max-w-4xl mx-auto space-y-12">
        <!-- Header Section -->
		<div class="text-center space-y-4">
			<h1 class="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
				Component Demo
			</h1>
			<p class="text-lg text-gray-600 dark:text-gray-400">
				Showcasing our new beautiful Svelte 5 components
			</p>
		</div>

		<!-- Buttons Section -->
		<section class="space-y-6">
			<h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 border-b pb-2">Buttons</h2>
			<div class="flex flex-wrap gap-4 items-center">
				<Button variant="primary" onclick={handlePrimaryClick}>Primary Action</Button>
				<Button variant="secondary" onclick={handleSecondaryClick}>Secondary</Button>
				<Button variant="outline">Outline</Button>
				<Button variant="ghost">Ghost</Button>
				<Button variant="danger">Danger Zone</Button>
			</div>
			<div class="flex flex-wrap gap-4 items-center mt-4">
				<Button size="sm" variant="primary">Small</Button>
				<Button size="md" variant="primary">Medium</Button>
				<Button size="lg" variant="primary">Large</Button>
				<Button size="xl" variant="primary">XLarge</Button>
			</div>
		</section>

		<!-- Cards Section -->
		<section class="space-y-6">
			<h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 border-b pb-2">Cards</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<!-- Card 1: Basic -->
				<Card title="Project Alpha" description="A revolutionary new initiative.">
					<p class="text-gray-600 dark:text-gray-300">
						This projects aims to solve complex problems with simple solutions. 
						It leverages the power of Svelte 5 runes.
					</p>
					{#snippet footer()}
						<div class="flex justify-end gap-2">
							<Button variant="ghost" size="sm">Learn More</Button>
							<Button variant="primary" size="sm">Join Now</Button>
						</div>
					{/snippet}
				</Card>

				<!-- Card 2: Custom Content -->
				<Card>
					{#snippet title()}
						<span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
							Premium Plan
						</span>
					{/snippet}
					
					<div class="space-y-4">
						<div class="text-4xl font-bold text-gray-900 dark:text-white">$29<span class="text-lg text-gray-500 font-normal">/mo</span></div>
						<ul class="space-y-2 text-gray-600 dark:text-gray-300">
							<li class="flex items-center">✓ Unlimited Access</li>
							<li class="flex items-center">✓ Priority Support</li>
							<li class="flex items-center">✓ Advanced Analytics</li>
						</ul>
					</div>

					{#snippet footer()}
						<Button variant="primary" class="w-full">Subscribe</Button>
					{/snippet}
				</Card>
			</div>
		</section>
	</div>
</div>
