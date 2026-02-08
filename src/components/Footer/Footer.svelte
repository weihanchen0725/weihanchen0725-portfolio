<script lang="ts">
    import { Github } from 'lucide-svelte';
    import { Linkedin } from 'lucide-svelte';
    import { Mail } from 'lucide-svelte';
    import { FileUser } from 'lucide-svelte';
    
    import './Footer.scss';

    export let socials;
    
    // Extract footer text and seo data (reactive)
    $: footerText = socials?.footer || '';
    $: seo = socials?.seo;
</script>
<footer class="footer footer-border">
    <div class="footer-content">
        <p>© {new Date().getFullYear()}{footerText ? ` ${footerText}` : ''}</p>
        
        {#if seo}
            <div class="social-links">
                {#if seo.email}
                    <a href="mailto:{seo.email}" aria-label="Email">
                        <Mail />
                    </a>
                {/if}
                
                {#if seo.githubUrl}
                    <a href={seo.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github />
                    </a>
                {/if}
                
                {#if seo.linkedinUrl}
                    <a href={seo.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin />
                    </a>
                {/if}
                
                {#if seo.resumeFile}
                    <a href={seo.resumeFile} target="_blank" rel="noopener noreferrer" aria-label="Resume">
                        <FileUser />
                    </a>
                {/if}
            </div>
        {/if}
    </div>
</footer>