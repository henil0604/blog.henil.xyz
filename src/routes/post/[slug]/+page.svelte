<script lang="ts">
	import type { PageData } from './$types';
	import '$lib/styles/prism-night-owl.css';
	import { formatPublishedAt } from '$lib/utils/date';

	export let data: PageData;

	const { metadata, post: Post } = data;
</script>

<svelte:head>
	<title>{metadata.title} - Blog</title>
	<meta name="description" content={metadata.summary} />
</svelte:head>

<div class="prose prose-sm max-w-none py-4 dark:prose-invert">
	<blockquote class="not-italic">{formatPublishedAt(metadata.publishedAt)}</blockquote>
	<h1 class="text-5xl max-md:text-4xl">{metadata.title}</h1>

	<Post />

	<div class="my-10" />
</div>
