<script>
	import { Github } from 'lucide-svelte';
	import { SearchSlash } from 'lucide-svelte';
</script>

<nav>
	<div class="navbar bg-base-100">
		<div class="flex-1">
			<a class="btn btn-ghost text-xl" href="/">ksheldon.dev</a>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				<li><a href="/about">About<SearchSlash /></a></li>
				<li><a href="https://github.com/Kbs56" target="_blank">Github<Github /></a></li>
				<!-- <li> -->
				<!-- 	<details> -->
				<!-- 		<summary>Parent</summary> -->
				<!-- 		<ul class="bg-base-100 rounded-t-none p-2"> -->
				<!-- 			<li><a href="https://github.com/Kbs56">Github</a></li> -->
				<!-- 			<li><a href="/linkedin">Linkedin</a></li> -->
				<!-- 		</ul> -->
				<!-- 	</details> -->
				<!-- </li> -->
			</ul>
		</div>
	</div>
</nav>
