<script>
    let page_title = 'About Page';

    /*
    we have a reactive state, instead of typing onChange, setting it
    to a callback that modifies the state a shorthand is to bind it
    to the reactive state
    */
</script>

<h1>
    {page_title}
    
    <input type="text" placeholder="something" bind:value={page_title}>
</h1>