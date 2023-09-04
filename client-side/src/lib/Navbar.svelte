<script>
    /*
    recall that declared variables assigned to values when calling components
    in react were accessed through that components props argument e.g. 
    export default Navbar(props){
        props.<passed variable>
    }

    In svelte when this component is called with a property passed inside it 
    e.g. <Navbar brand="LMC Engineering Front"/> our props arent a dictionary we can
    access through a functions arguments, but rather because we are in a script tag 
    the only way we can access these properties are by declaring a variable of the 
    same name as the name of the prop passed to the component with an export keyword.
    So in the above example we would declare export let brand and assign the prop
    to an initial value then when this component is invoked and passed the prop of
    the same name with a different value then brand in this case would be a different
    value i.e. LMC Eng Front being the now value
    */

    export let brand = 'LMC';
</script>

<nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">{brand}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
                <a class="nav-link" href="/about">About</a>
                <a class="nav-link" href="/projects">Projects</a>
                <a class="nav-link" href="/services">Services</a>
            </div>
        </div>
    </div>
</nav>