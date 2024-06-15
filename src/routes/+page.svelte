<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { formatPublishedAt } from '$lib/utils/date';

	export let data;
</script>

<div class="list">
	{#each data.posts as post, index (post.slug)}
		<Button href="/{post.slug}" variant="ghost" class="item">
			<div class="title">
				{post.metadata.title}
			</div>
			<div class="summary">{post.metadata.summary}</div>
			<div class="publish-date">{formatPublishedAt(post.metadata.publishedAt)}</div>
		</Button>
		{#if index !== data.posts.length - 1}
			<hr />
		{/if}
	{/each}
</div>

<style>
	.list {
		display: flex;
		flex-direction: column;

		gap: theme('gap.2');

		& .item {
			/* background-color: theme('backgroundColor.secondary.DEFAULT'); */

			height: fit-content;

			padding: theme('padding.4') theme('padding.4');

			display: flex;
			flex-direction: column;
			align-items: start;
			gap: theme('gap.3');

			& .title {
				font-size: theme('fontSize.xl');
				font-weight: theme('fontWeight.semibold');
				letter-spacing: theme('letterSpacing.wide');

				line-height: theme('lineHeight.snug');
				text-wrap: wrap;
			}

			& .summary {
				font-weight: theme('fontWeight.light');
				width: 100%;
				display: -webkit-box;
				-webkit-line-clamp: 3;
				-webkit-box-orient: vertical;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: wrap;
			}

			& .publish-date {
				color: theme('colors.muted.foreground');
				font-weight: theme('fontWeight.light');
			}
		}
	}
</style>
