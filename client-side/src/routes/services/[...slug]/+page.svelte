<script>
    import { page } from "$app/stores";
    const slug_arr = $page.params.slug;
    console.log(slug_arr);

    /* 
    http://127.0.0.1:5173/services/mechanical will return mechanical
    http://127.0.0.1:5173/services/mechanical/tools will return mechanical/tools
    http://127.0.0.1:5173/services/mechanical/companies/1 will return mechanical/companies/1

    we can see now the above use of slug and how it can catch multiple nested urls that
    we don't need to define explicitly anymore in our file structure
    */
</script>

<h1>
    All our services
</h1>