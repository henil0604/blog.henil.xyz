import type { ComponentType } from 'svelte';

export type MarkdownPost = {
	metadata: {
		title: string;
		publishedAt: string;
		summary: string;
	};
	default: ComponentType;
};

export type MarkdownPostMetadataAndSlug = {
	slug: string;
	metadata: MarkdownPost['metadata'];
};
