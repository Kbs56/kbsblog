<script lang="ts">
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
		</hgroup>

		<div>
			<svelte:component this={data.content} />
		</div>
	</div>
</article>
