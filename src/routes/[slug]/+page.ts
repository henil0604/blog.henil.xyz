import type { MarkdownPost } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
	const { params } = event;

	const slug = params.slug;

	const markdownPost: MarkdownPost = await import(`/src/posts/${slug}.md`);

	return {
		metadata: markdownPost.metadata,
		post: markdownPost.default
	};
};
