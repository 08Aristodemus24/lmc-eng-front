<script>
    import Navbar from "$lib/Navbar.svelte";

    /*
    we have a reactive state, instead of typing onChange, setting it
    to a callback that modifies the state a shorthand is to bind it
    to the reactive state
    */
    let page_title = 'About Page';
</script>

<Navbar brand="LMC Engineering Front"/>
<h1>
    {page_title}    
    <input type="text" placeholder="something" bind:value={page_title}>
</h1>