<script>
    import { page } from "$app/stores";

    // contains all our url's parameters as keys e.g.
    // url pattern projects/[id]/[title] and url projects/1/home-rennovation
    // will have dictionary key-value pairs {id: 1, title: 'home-rennovation'}
    const {id: project_id, title: project_title} = $page.params;
</script>

<h1>
    Project {project_id}
</h1>
<p>Title: {project_title}</p>