<script>
    import { page } from "$app/stores";
    import Navbar from "$lib/Navbar.svelte";

    /*
    $page params contains a dicitonary of all the parameters in our
    url e.g. a url of projects/[id] or a url of projects/[id]/[desc]
    or even a url of projects/[id]/[image].png will all return a dictionary
    that has keys set as the name of the parameter and the value set as the
    value we passed that aligns to this parameter so if projects/1
    then $page.params will be {id: 1}
    */
    const {id: project_id} = $page.params;

</script>

<Navbar brand="LMC Engineering Front"/>
<h1>
    Project {project_id}
</h1>