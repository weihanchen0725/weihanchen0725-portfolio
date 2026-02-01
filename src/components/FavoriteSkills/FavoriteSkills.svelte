<script lang="ts">
    import './FavoriteSkills.scss';
	import type { SkillType } from '$lib/types/SkillType';
	import { SvgGetter } from '..';
    let { skill = null, index = 0  }: { skill?: SkillType | null, index?: number } = $props();
    let delay = $derived(index * 2000);
</script>
<div class="skill-badge float" style="animation-delay: {delay}ms;">
    <SvgGetter url={skill?.iconUrl} className="skill-icon"  />
    <p>{skill?.title}</p>
</div>