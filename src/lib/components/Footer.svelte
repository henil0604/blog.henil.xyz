<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { SOCIALS } from '$lib/const';
	import Icon from '@iconify/svelte';
</script>

<div class="footer">
	<Button variant="link" aria-label="Open website" target="_blank" href={SOCIALS.WEBSITE}>
		<Icon icon="mdi:earth" font-size={22} />
	</Button>
	<Button variant="link" aria-label="Open X Profile" target="_blank" href={SOCIALS.X}>
		<Icon icon="tabler:brand-x" font-size={22} />
	</Button>
	<Button variant="link" aria-label="Open Github Profile" target="_blank" href={SOCIALS.GITHUB}>
		<Icon icon="tabler:brand-github" font-size={25} />
	</Button>
	<Button variant="link" aria-label="Open LinkedIn Profile" target="_blank" href={SOCIALS.LINKEDIN}>
		<Icon icon="tabler:brand-linkedin" font-size={22} />
	</Button>
</div>

<style>
	.footer {
		width: 100%;
		height: fit-content;

		padding: theme('padding.4') 0;

		display: flex;
		justify-content: center;
		align-items: center;
		gap: theme('gap.0');
	}
</style>
