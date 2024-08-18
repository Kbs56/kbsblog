<script lang="ts">
	import { Terminal } from 'lucide-svelte';
	import { Linkedin } from 'lucide-svelte';
</script>

<footer class="footer text-neutral-content items-center p-4 mt-auto">
	<aside class="grid-flow-col items-center">
		<Terminal />
	</aside>
	<nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
		<a href="https://www.x.com/DevOpsKenny" target="_blank">
			<svg
				xmlns="https://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M4 4l11.733 16h4.267l-11.733 -16z" />
				<path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
			</svg>
		</a>
		<a href="https://www.linkedin.com/in/kbs56" target="_blank">
			<Linkedin />
		</a>
	</nav>
</footer>
