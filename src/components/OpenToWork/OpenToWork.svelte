<script lang="ts">
    import './OpenToWork.scss';
    let { isOpenToWork = false }: { isOpenToWork?: boolean } = $props();
</script>
{#if isOpenToWork}
    <div class="status-badge open">
        <p>🚀 Open to Work!</p>
    </div>
{/if}
{#if !isOpenToWork}
    <div class="status-badge closed">
        <p>🔒 Lock In</p>
    </div>
{/if}