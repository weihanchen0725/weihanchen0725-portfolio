<script lang="ts">
    import './FavoriteSkills.scss';
    let { skill = "" }: { skill?: string } = $props();
</script>
<div class="skill-badge">
    <p>{skill}</p>
</div>