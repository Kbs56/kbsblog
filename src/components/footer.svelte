<script lang="ts">
	import { Linkedin } from 'lucide-svelte';
</script>

<footer class="footer px-4 py-2 mt-auto flex flex-col md:flex-row items-center justify-end">
	<nav class="flex gap-4">
		<a
			href="https://www.x.com/KDev566"
			target="_blank"
			aria-label="X Profile"
			class="flex items-center justify-center w-6 h-6"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="icon icon-tabler icon-tabler-brand-x"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M4 4l11.733 16h4.267l-11.733 -16z" />
				<path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
			</svg>
		</a>
		<a
			href="https://www.linkedin.com/in/kbs56"
			target="_blank"
			aria-label="LinkedIn Profile"
			class="flex items-center justify-center w-6 h-6"
		>
			<Linkedin class="w-6 h-6" />
		</a>
	</nav>
</footer>
