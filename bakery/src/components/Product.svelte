<script>
    export let title;
    export let img;
    export let id;
</script>

<a href="/{id}" class="w-full max-w-4xl justify-center grid gap-2 hover:shadow-md py-2 transition-all duration-100">
    <div class="h-40 w-40 flex items-end justify-center rounded-sm" style="background:{img}">
    </div>
    <span class="w-full flex justify-center cursor-pointer">{title}</span>
</a>