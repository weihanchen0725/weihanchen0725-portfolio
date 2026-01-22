import { describe, it, expect } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-svelte';
import CardTestWrapper from './CardTestWrapper.svelte';

describe('Card Component Edge Cases', () => {

    it('renders with only children (no title, no description, no footer)', async () => {
        render(CardTestWrapper, { titleStr: undefined, descStr: undefined, showFooter: false });
        
        const childContent = page.getByTestId('child-content');
        await expect.element(childContent).toBeInTheDocument();
        
        // Edge case: Header shouldn't exist
        const header = page.getByTestId('card-header'); 
        await expect.element(header).not.toBeInTheDocument();

        // Edge case: Footer shouldn't exist
        const footer = page.getByTestId('card-footer');
        await expect.element(footer).not.toBeInTheDocument();
    });

    it('renders title string correctly when provided', async () => {
        render(CardTestWrapper, { titleStr: 'Edge Case Title', descStr: undefined, showFooter: false });
        
        const titleEl = page.getByRole('heading', { level: 3, name: 'Edge Case Title' });
        await expect.element(titleEl).toBeInTheDocument();
        
        // Description shouldn't exist
        const descEl = page.getByTestId('card-description');
        await expect.element(descEl).not.toBeInTheDocument();
    });

    it('renders description string correctly when provided without title', async () => {
        render(CardTestWrapper, { titleStr: undefined, descStr: 'Just a description', showFooter: false });
        
        const descEl = page.getByText('Just a description');
        await expect.element(descEl).toBeInTheDocument();
        
        // Header container SHOULD exist because description triggers it
        const header = page.getByTestId('card-header');
        await expect.element(header).toBeInTheDocument();

        // But H3 shouldn't exist (unless empty? code check: {#if title}<h3>...</h3>{/if})
        const titleHeading = page.getByRole('heading', { level: 3 });
        await expect.element(titleHeading).not.toBeInTheDocument();
    });

    it('renders full card with footer', async () => {
        render(CardTestWrapper, { titleStr: 'Full Card', descStr: 'With footer', showFooter: true });
        
        const footerBtn = page.getByTestId('footer-action');
        await expect.element(footerBtn).toBeInTheDocument();
        
        const footerContainer = page.getByTestId('card-footer');
        await expect.element(footerContainer).toBeInTheDocument();
    });

    it('handles empty strings gracefully by not rendering header', async () => {
        render(CardTestWrapper, { titleStr: '', descStr: '', showFooter: false });
        
        const header = page.getByTestId('card-header');
        await expect.element(header).not.toBeInTheDocument();
    });

    it('escapes HTML in title string (prevents XSS)', async () => {
        const dangerousTitle = '<script>alert("xss")</script>';
        render(CardTestWrapper, { titleStr: dangerousTitle, descStr: undefined, showFooter: false });
        
        // Should contain the text literals, not execute script (verification is that it renders as text)
        const titleEl = page.getByRole('heading', { level: 3 });
        await expect.element(titleEl).toHaveTextContent(dangerousTitle);
    });
});

import CardWrapper from './CardWrapper.svelte';

describe('Card Component Advanced Usage (Snippets & Props)', () => {
    
    it('renders snippets for title and description correctly', async () => {
        // CardWrapper forces the usage of snippets for title/desc
        render(CardWrapper, { 
            title: 'Snippet Title', 
            description: 'Snippet Desc', 
            footer: true,
            testId: 'snippet-card' 
        });

        // The snippets in CardWrapper wrap the text in spans with specific IDs
        const titleSlot = page.getByTestId('title-slot');
        await expect.element(titleSlot).toHaveTextContent('Snippet Title');

        const descSlot = page.getByTestId('desc-slot');
        await expect.element(descSlot).toHaveTextContent('Snippet Desc');
        
        const footerBtn = page.getByTestId('footer-btn');
        await expect.element(footerBtn).toBeInTheDocument();
    });

    it('applies custom classes to the root element', async () => {
        render(CardTestWrapper, { customClass: 'custom-theme-class' });
        
        const card = page.getByTestId('test-card');
        await expect.element(card).toHaveClass('custom-theme-class');
    });

    it('spreads arbitrary rest props to the root element', async () => {
        // Passing an aria-label via the wrapper's rest props
        render(CardTestWrapper, { 'aria-label': 'Accessible Card' });
        
        const card = page.getByTestId('test-card');
        await expect.element(card).toHaveAttribute('aria-label', 'Accessible Card');
    });
});
