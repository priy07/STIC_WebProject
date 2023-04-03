<script>
    import Carousel from "../lib/Components/Carousel.svelte"
	import Division from "../lib/Components/Division.svelte";
	import Footer from "../lib/Components/Footer.svelte";
    import Gallery from "../lib/Components/Gallery.svelte";
    import HomePage from "../lib/Components/HomePage.svelte";
    import Membership from "../lib/Components/Membership.svelte";
    import Mentor from "../lib/Components/Mentor.svelte";
	import Navbar from "../lib/Components/Navbar.svelte";
    import Teams from "../lib/Components/Teams.svelte";
    import About from "../lib/Components/About.svelte";
    import Areyoureadypart from "../lib/Components/Areyoureadypart.svelte";
	import Popup from "../lib/Components/Popup.svelte";
</script>

<main class="bg-[#0E0D0D] text-white">

<Navbar />
<HomePage/>
<Mentor/>
<Gallery/>
<About/>
<Carousel />
<Division/>
<Membership/>
<Teams/>
<Areyoureadypart/>
<Popup/>
<Footer />

</main>
