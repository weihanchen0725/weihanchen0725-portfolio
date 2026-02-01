<script lang="ts">
    import './Experience.scss';
    import type { ExperienceType } from '$lib/types/ExperienceType';
	import Card from '../Card/Card.svelte';
    let { experience  }: { experience?: ExperienceType } = $props();
</script>
<Card class="experience experience-card">
    <div class="experience-header">
        <div class="experience-dot-badge">
            <div class="experience-dot"></div>
        </div>
        <div class="experience-dates-badge">
            {(experience?.startDate && !isNaN(Date.parse(experience.startDate)))
            ? new Date(experience.startDate).toLocaleString(undefined, { month: 'short', year: 'numeric' })
            : experience?.startDate ?? ''}
            {' - '}
            {(experience?.endDate && !isNaN(Date.parse(experience.endDate)))
            ? new Date(experience.endDate).toLocaleString(undefined, { month: 'short', year: 'numeric' })
            : (experience?.endDate ? experience.endDate : 'Now')}
            </div>
        </div>
    <div class="experience-content">
        <h3 class="job-title">{experience?.jobTitle}</h3>
        <div class="company-info">
            <p class="company-name">{experience?.companyName}</p>
            <p class="company-location">{experience?.companyLocation}</p>
        </div>
        
        <p class="description">{experience?.description}</p>
    </div>
</Card>