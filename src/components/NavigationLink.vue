<template>
    <!-- Navigation link component -->
    <a class="font-main inline-block"
        :href="linkAddress"
        :class="getClasses"
    >
        <slot></slot>
    </a>
</template>

<script>
    export default {
        name: "NavigationLink",
        props: {
            linkAddress: {
                type: String,
                required: true
            },
            isMenuLink: {
                type: Boolean
            },
            isDarkMode: {
                type: Boolean
            }
        },
        computed: {
            getClasses() {
                let classes = "";
                classes += this.isMenuLink ? 'text-[1.1em] ' : 'text-[0.9em] ';
                classes += this.isDarkMode ? 'text-white' : 'text-dark-blue';
                return classes;
            }
        }
    }
</script>
