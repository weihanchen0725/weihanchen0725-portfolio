<script lang="ts">
    import './FavoriteSkills.scss';
	import type { SkillType } from '$lib/types/SkillType';
	import SvgGetter from '../SvgGetter/SvgGetter.svelte';
    let { skill = null }: { skill?: SkillType | null } = $props();
</script>
<div class="skill-badge float">
    <SvgGetter url={skill?.iconUrl} className="skill-icon" />
    <p>{skill?.title}</p>
</div>