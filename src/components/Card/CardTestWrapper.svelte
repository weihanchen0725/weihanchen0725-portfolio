<script lang="ts">
  import Card from './Card.svelte';
  
  let { 
    titleStr = undefined, 
    descStr = undefined, 
    showFooter = false, 
    customClass = undefined, 
    ...rest 
  } = $props();
</script>

  {#snippet footerSnippet()}
      <button data-testid="footer-action">Click me</button>
  {/snippet}

  <Card 
    {...rest}
    class={customClass}
    title={titleStr} 
    description={descStr}
    footer={showFooter ? footerSnippet : undefined}
    data-testid="test-card"
  >
    <div data-testid="child-content">Child content</div>
  </Card>
