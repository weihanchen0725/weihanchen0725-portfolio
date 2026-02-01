<script lang="ts">
	import { Button, Card, OpenToWork, FavoriteSkills, Experience, TimeLineList } from '../components';
	import type { PageData } from './$types';
	import '../lib/styles/home.scss';
	import type { ProfileType } from '$lib/types/ProfileType';

	export let data: PageData;

	// Extract profile data
	const profile:ProfileType = data?.portfolio;
	
	const handlePrimaryClick = () => {
		alert('Primary button clicked!');
	};

	const handleSecondaryClick = () => {
		console.log('Secondary button clicked');
	};

	// Sort experience by order field
	data.portfolio.experience.sort((a: { order?: number }, b: { order?: number }) => {
		return (a.order ?? 0) - (b.order ?? 0);
	});		

	console.log('data', data.portfolio.experience);
</script>

<div class="root-page home-page">
	<div class="background-pattern"></div>
	<div class="content-container">
		<!-- Header Section -->
		<section class="header-section">
			<div class="open-to-work-section">
				<OpenToWork isOpenToWork={profile?.isOpenToWork} />
			</div>
			<div class="header-text-section">
				<h1 class="header-text-title">
					{profile?.title}
				</h1>
				<p class="header-text-subtitle">
					{profile?.subtitle}
				</p>
				<p class="header-text-description">
					{profile?.description}
				</p>
			</div>
			<div class="header-button-section">
				<Button size="md" variant="primary" on:click={handlePrimaryClick}>See My Work</Button>
				<Button size="md" variant="secondary" on:click={handleSecondaryClick}>Get In Touch</Button>
			</div>
			<div class="header-skills-section">
				{#if profile?.favoriteSkills}
				{#each profile.favoriteSkills as skill, index}
				{#if skill?.favorite}
				<FavoriteSkills skill={skill.skill} index={index} />
				{/if}
				{/each}
				{/if}
			</div>
		</section>


		<!-- Cards Section -->
		<section>
			<h2>Featured Work</h2>
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
		<section class="experience-section">
			<h2 class="section-title">Experience</h2>
			<TimeLineList>
				{#each profile?.experience as exp}
					<li class="timeline-item">
						<Experience experience={exp} />
					</li>
				{/each}
			</TimeLineList>
		</section>
	</div>
</div>
