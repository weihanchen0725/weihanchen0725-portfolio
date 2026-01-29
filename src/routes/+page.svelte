<script lang="ts">
	import { Button, Card, OpenToWork, FavoriteSkills } from '../components';
	import type { PageData } from './$types';

	export let data: PageData;
	

	const handlePrimaryClick = () => {
		alert('Primary button clicked!');
	};

	const handleSecondaryClick = () => {
		console.log('Secondary button clicked');
	};

	console.log(data?.portfolio[0]);
</script>

<div class="min-h-screen dark:bg-gray-900 p-8">
	<div class="background-pattern"></div>
	<div class="max-w-4xl mx-auto space-y-12">
		<!-- Header Section -->
		<section class="text-center space-y-4">
			<div>
				<OpenToWork isOpenToWork={data?.portfolio[0]?.isOpenToWork} />
			</div>
			<div>
				<h1 class="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
					{data?.portfolio[0]?.title}
				</h1>
				<p class="text-lg text-gray-600 dark:text-gray-400">
					{data?.portfolio[0]?.subtitle}
				</p>
				<p>{data?.portfolio[0]?.description}</p>
			</div>
			<div>
				<Button size="md" variant="primary" onclick={handlePrimaryClick}>See My Work</Button>
				<Button size="md" variant="secondary" onclick={handleSecondaryClick}>Get In Touch</Button>
			</div>
			<div>
				{#if data?.portfolio[0]?.favoriteSkills}
					<div>
						{#each data.portfolio[0].favoriteSkills as skill}
						<FavoriteSkills skill={skill} />
						{/each}
					</div>
				{/if}
			</div>
		</section>


		<!-- Cards Section -->
		<section class="space-y-6">
			<h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 border-b pb-2">Cards</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<!-- Card 1: Basic -->
				<Card title="Project Alpha" description="A revolutionary new initiative.">
					<p class="text-gray-600 dark:text-gray-300">
						This projects aims to solve complex problems with simple solutions. It leverages the
						power of Svelte 5 runes.
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
						<span
							class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600"
						>
							Premium Plan
						</span>
					{/snippet}

					<div class="space-y-4">
						<div class="text-4xl font-bold text-gray-900 dark:text-white">
							$29<span class="text-lg text-gray-500 font-normal">/mo</span>
						</div>
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
