<script lang="ts">
    import './TimeLineList.scss';
    let { children } = $props();
</script>
<ul class="timeline-list">
    {@render children()}
</ul>