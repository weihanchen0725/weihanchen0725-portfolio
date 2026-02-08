<script lang="ts">
	import { Button, Card, OpenToWork, FavoriteSkills, Experience, TimeLineList } from '../components';
	import type { PageData } from './$types';
	import '../lib/styles/home.scss';
	import type { ProfileType } from '$lib/types/ProfileType';

	export let data: PageData;

	// Extract profile data
	const profile:ProfileType = data?.portfolio;

	//
	let projectSection: HTMLElement;
	let descriptionSection: HTMLElement;
	
	// Helper to resolve a reference object to the actual Skill object from profile.skills
	const getSkillFromRef = (ref: any) => {
		if (!ref) return undefined;
		const refId = (ref._ref ?? ref);
		return (profile as any)?.skills?.find((s: any) => s._id === refId || s.id === refId);
	};

	// Scroll to the projects section
	const handleButtonOnClick = (mode: 'projects' | 'description') => {
		if (mode === 'projects') {
			projectSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		} else if (mode === 'description') {
			descriptionSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
		console.log(mode, "button clicked");
	};

	// Sort experience by order field
	data.portfolio.experience.sort((a: { order?: number }, b: { order?: number }) => {
		return (a.order ?? 0) - (b.order ?? 0);
	});		

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
				<Button size="md" variant="primary" onclick={() => handleButtonOnClick('projects')}>My Work</Button>
				<Button size="md" variant="secondary" onclick={() => handleButtonOnClick('description')}>My Experience</Button>
			</div>
			<div class="header-skills-section">
				{#if profile?.favoriteSkills}
				{#each profile.favoriteSkills as skill, index}
				{#if skill?.favorite}
				{#if getSkillFromRef(skill?.skill)}
				<FavoriteSkills skill={getSkillFromRef(skill?.skill)} index={index} />
				{/if}
				{/if}
				{/each}
				{/if}
			</div>
		</section>


		<!-- Projects Section -->
		<section bind:this={projectSection} class="project project-section" >
			<h2 class="section-title">Featured Work</h2>
			<div class="section-content">
				{#each profile?.projects as project}
					<Card class="project-card" title={project.title} description={project.description}>
						{#snippet footer()}
							<div class="project-card-footer-content">
								<a href={project.url} target="_blank" rel="noopener noreferrer">
									<Button class="project-button" size="sm">View Project</Button>
								</a>
							</div>
						{/snippet}
					</Card>
				{/each}
			</div>
		</section>
		<section bind:this={descriptionSection} class="experience-section">
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
