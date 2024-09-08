<script>
	import '../app.css';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
</script>

<Header />
<main class="pt-24 max-w-5xl mx-auto">
	<slot />
</main>
<Footer />
