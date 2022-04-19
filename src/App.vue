<template>
    <NavigationBar />

    <!-- Header section -->
    <header class="md:flex flex-row-reverse items-center bg-very-light-gray">
        <div class="overflow-hidden relative h-[300px] mb-[20px] md:mb-0 md:h-[500px] md:basis-[50%] md:overflow-visible mlg:h-[44vw] lg:h-[655px] xxl:h-[700px]">
            <img class="translate-y-[-65px] w-[100%] md:hidden"
                src="@/assets/svg/bg-intro-mobile.svg"
                alt="Intro icon"
                title="Intro icon">

            <img class="hidden md:block min-w-[150%] translate-y-[-20%] lg:min-w-[200%] lg:translate-y-[-26%] lg:translate-x-[-7%]"
                src="@/assets/svg/bg-intro-desktop.svg"
                alt="Intro icon"
                title="Intro icon"
            >
            
            <img class="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-29%] w-[91%] md:w-[120%] md:left-auto md:translate-x-[25%] md:translate-y-[-12%] z-[1] lg:min-w-[107%] lg:translate-x-[12%] lg:translate-y-[-13%] xl:w-0 xl:min-w-[90%] xl:translate-x-[22%]"
                src="@/assets/images/image-mockups.png"
                alt="Mobile phones mockups"
                title="Mockups"
            >
        </div>

        <div class="font-main text-center px-[5%] ssm:px-[20%] md:p-0 md:pl-[10%] md:pr-[5%] md:text-left md:basis-[50%] lg:pl-[11.5%] lg:pr-[8%]">
            <h1 class="text-[2.4em] text-dark-blue font-light leading-[45px] mb-[20px] lg:text-[3.4em] lg:leading-[65px] lg:mb-[25px]">
                Next generation digital banking
            </h1>

            <p class="text-grayish-blue text-[0.9em] mb-[35px] leading-[25px] lg:text-[1.1em]">
                Take your financial life online. Your Easybank account will be a one-stop-shop 
                for spending, saving, budgeting, investing, and much more.
            </p>

            <InviteButton />
        </div>
    </header>
</template>

<script>
    import NavigationBar from "@/components/NavigationBar.vue";
    import InviteButton from "@/components/buttons/InviteButton.vue";

    export default {
        name: "App",
        components: {
            NavigationBar,
            InviteButton
        }
    }
</script>
