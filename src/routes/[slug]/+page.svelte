<script lang="ts">
	import './lucario.css';
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<div class="prose py-4 px-4">
		<hgroup>
			<h1>{data.meta.title}</h1>
			<p>Published on {formatDate(data.meta.date)}</p>
		</hgroup>

		<div class="flex flex-col">
			{#each data.meta.categories as category}
				<span class="surface-4">&num;{category}</span>
			{/each}
		</div>

		<div>
			<svelte:component this={data.content} />
		</div>
	</div>
</article>
