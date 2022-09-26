<script>
    export let title;
    export let img;
    export let id;
</script>

<a href="/{id}" class="flex w-full max-w-4xl justify-center">
    <div class="h-40 w-40 flex items-end justify-center rounded-sm hover:shadow-md transition-all duration-100" style="background:{img}">
        <span class="w-full py-2 bg-bakery-light flex justify-center cursor-pointer">{title}</span>
    </div>
</a>