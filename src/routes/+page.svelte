<script src="https://unpkg.com/aos@2.3.1/dist/aos.js">
	import Carousel from '../lib/Components/Carousel.svelte';
	import Division from '../lib/Components/Division.svelte';
	import Footer from '../lib/Components/Footer.svelte';
	import Gallery from '../lib/Components/Gallery.svelte';
	import HomePage from '../lib/Components/HomePage.svelte';
	import Membership from '../lib/Components/Membership.svelte';
	import Mentor from '../lib/Components/Mentor.svelte';
	import Navbar from '../lib/Components/Navbar.svelte';
	import Teams from '../lib/Components/Teams.svelte';
	import About from '../lib/Components/About.svelte';
	import Areyoureadypart from '../lib/Components/Areyoureadypart.svelte';
	import Popup from '../lib/Components/Popup.svelte';
	// import CompleteTeam from "../lib/Components/CompleteTeam.svelte";
</script>


<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">


<main class="bg-[#0E0D0D] text-white">
	<!-- navbaar -->
	<Navbar />
	<!-- homepage -->
	<HomePage />
	<!-- mento -->
	<Mentor />
	<!-- gallery -->
	<Gallery />
	<!-- about -->
	<About id="about" />
	<!-- crousel -->
	<Carousel />
	<!-- division -->
	<Membership />
	<!-- teams -->
	<Teams />
	<!-- are you ready -->
	<Areyoureadypart />
	<!-- popup -->
	<Popup />
	<!-- <CompleteTeam/> -->
	<Footer />
</main>
