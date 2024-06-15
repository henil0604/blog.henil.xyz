<script>
	import { NAVBAR_TITLE } from '$lib/const';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<nav class="navbar">
	<a href="/" class="head">
		<!-- head -->
		{NAVBAR_TITLE}
	</a>

	<div class="content">
		<!-- content -->
	</div>

	<div class="tail">
		<ThemeSwitcher />
	</div>
</nav>

<style>
	.navbar {
		@apply backdrop-blur-md;

		width: 100%;
		height: fit-content;

		padding: theme('padding.4') 0;

		display: flex;
		justify-content: center;
		align-items: center;

		z-index: 10;

		& .head {
			font-size: theme('fontSize.2xl');
			font-weight: theme('fontWeight.medium');
		}

		& .content {
			flex-grow: 1;
		}
	}
</style>
