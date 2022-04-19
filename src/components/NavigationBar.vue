<template>
    <!-- Navigation bar component -->
    <nav class="flex justify-between items-center py-[23px] px-[27px] relative bg-white before:fixed before:top-[0] before:left-[0] before:w-[100%] before:h-[100%] before:bg-dark-blue/25 before:-z-[1] z-1 md:py-0 lg:px-[160px]"
        :class="isMenuActive ? '' : 'before:hidden'"
    >
        <LogoIcon />
        
        <!-- Links container -->
        <div class="absolute flex-col justify-center items-center bg-white rounded-[5px] py-[30px] w-[87%] left-[50%] top-[93px] translate-x-[-50%] sm:w-[400px] sm:translate-x-0 sm:left-auto sm:right-[4%] sm:top-[105px] md:static md:flex md:flex-row md:rounded-none md:p-0"
            :class="isMenuActive ? 'flex' : 'hidden'"
        >
            <NavigationLink class="mb-[18px] md:mb-0 md:mx-[15px]" link-address="#Home" is-menu-link>Home</NavigationLink>
            <NavigationLink class="mb-[18px] md:mb-0 md:mx-[15px]" link-address="#About" is-menu-link>About</NavigationLink>
            <NavigationLink class="mb-[18px] md:mb-0 md:mx-[15px]" link-address="#Contact" is-menu-link>Contact</NavigationLink>
            <NavigationLink class="mb-[18px] md:mb-0 md:mx-[15px]" link-address="#Blog" is-menu-link>Blog</NavigationLink>
            <NavigationLink class="md:mx-[15px]" link-address="#Careers" is-menu-link>Careers</NavigationLink>
        </div>
        
        <InviteButton class="hidden sm:block" />
        <HamburgerIcon @active-menu="toggleMenu" />
    </nav>
</template>

<script>
    import LogoIcon from "@/components/icons/LogoIcon.vue";
    import HamburgerIcon from "@/components/icons/HamburgerIcon.vue";
    import NavigationLink from "@/components/NavigationLink.vue";
    import InviteButton from "@/components/buttons/InviteButton.vue";

    export default {
        name: "NavigationBar",
        components: {
            LogoIcon,
            HamburgerIcon,
            NavigationLink,
            InviteButton
        },
        data() {
            return {
                isMenuActive: false
            }
        },
        methods: {
            toggleMenu(status) {
                this.isMenuActive = status;
            }
        }
    }
</script>
