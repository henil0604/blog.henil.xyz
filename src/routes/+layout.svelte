<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher defaultMode="system" />

<div class="main">
	<Header />

	<!-- <hr class="mb-4" /> -->

	<div class="content">
		<slot></slot>
	</div>

	<hr />

	<Footer />
</div>

<style>
	.main {
		min-height: 100%;
		max-width: theme('maxWidth.2xl');
		margin: 0 auto;

		display: flex;
		flex-direction: column;

		& .content {
			flex-grow: 1;
		}
	}
</style>
