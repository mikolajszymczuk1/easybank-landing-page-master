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

        <div class="font-main text-center pb-[90px] px-[5%] ssm:px-[20%] md:p-0 md:pl-[10%] md:pr-[5%] md:text-left md:basis-[50%] lg:pl-[11.5%] lg:pr-[8%]">
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

    <!-- Main content -->
    <main class="relative">
        <!-- Why choose Easybank section -->
        <section class="font-main bg-light-grayish-blue px-[7%] py-[65px] ssm:px-[25%] md:px-[8%] lg:py-[110px] lg:px-[11.5%]">
            <h2 class="mb-[20px] text-[2em] font-light text-dark-blue text-center leading-[36px] md:text-left lg:text-[2.4em] lg:mb-[30px]">
                Why choose Easybank?
            </h2>

            <p class="text-center text-[0.9em] text-grayish-blue mb-[55px] leading-[25px] md:text-left md:w-[60%] lg:text-[1.1em] lg:leading-[26px] lg:w-[55%] lg:mb-[75px] xl:w-[43%]">
                We leverage Open Banking to turn your bank account into your financial hub. Control 
                your finances like never before.
            </p>

            <!-- Container with all feature blocks -->
            <div class="md:flex">
                <FeatureBlock class="mb-[60px] last:mb-0 md:mb-0 md:mx-[15px] md:first:ml-0 md:last:mr-0 lg:ml-0 lg:mr-[55px]"
                    v-for="f in features"
                    :key="f.id"
                >
                    <template #icon>
                        <img class="inline-block"
                            :src="`/featureImages/${ f.image }`"
                            :alt="f.name"
                            title="Feature icon"
                        >
                    </template>

                    <template #block-heading>{{ f.title }}</template>
                    <template #block-text>{{ f.content }}</template>
                </FeatureBlock>
            </div>
        </section>

        <!-- Latest Articles section -->
        <section class="bg-very-light-gray px-[7%] pt-[85px] pb-[90px] ssm:px-[25%] md:px-[8%] lg:px-[11.5%] lg:pb-[80px]">
            <h2 class="text-center text-dark-blue font-main text-[1.9em] font-light mb-[27px] md:text-left lg:text-[2.4em] lg:mb-[40px]">
                Latest Articles
            </h2>

            <!-- Container with all latest articles -->
            <div class="md:flex">
                <ArticleCard class="mb-[25px] last:mb-0 md:mb-0 md:mx-[5px] mlg:ml-0 mlg:mr-[15px] mlg:last:mr-0 lg:mr-[30px]"
                    v-for="a in articles"
                    :key="a.id"
                    :article-image="a.image"
                >
                    <template #article-author>{{ a.author }}</template>
                    <template #article-title>{{ a.title }}</template>
                    <template #article-content>{{ a.content }}</template>
                </ArticleCard>
            </div>
        </section>
    </main>
</template>

<script>
    import NavigationBar from "@/components/NavigationBar.vue";
    import InviteButton from "@/components/buttons/InviteButton.vue";
    import FeatureBlock from "@/components/FeatureBlock.vue";
    import ArticleCard from "@/components/cards/ArticleCard.vue";

    export default {
        name: "App",
        components: {
            NavigationBar,
            InviteButton,
            FeatureBlock,
            ArticleCard
        },
        data() {
            return {
                features: [
                    {
                        id: 0,
                        name: "Online Icon",
                        image: "icon-online.svg",
                        title: "Online Banking",
                        content: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
                    },
                    {
                        id: 1,
                        name: "Budgeting Icon",
                        image: "icon-budgeting.svg",
                        title: "Simple Budgeting",
                        content: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
                    },
                    {
                        id: 2,
                        name: "Onboarding Icon",
                        image: "icon-onboarding.svg",
                        title: "Fast Onboarding",
                        content: "We don't do branches. Open your account in minutes online and start taking control of your finances right away."
                    },
                    {
                        id: 3,
                        name: "Api Icon",
                        image: "icon-api.svg",
                        title: "Open API",
                        content: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
                    }
                ],
                articles: [
                    {
                        id: 0,
                        image: "image-currency.jpg",
                        author: "By Claire Robinson",
                        title: "Receive money in any currency with no fees",
                        content: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …"
                    },
                    {
                        id: 1,
                        image: "image-restaurant.jpg",
                        author: "By Wilson Hutton",
                        title: "Treat yourself without worrying about money",
                        content: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
                    },
                    {
                        id: 2,
                        image: "image-plane.jpg",
                        author: "By Wilson Hutton",
                        title: "Take your Easybank card wherever you go",
                        content: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you …"
                    },
                    {
                        id: 3,
                        image: "image-confetti.jpg",
                        author: "By Claire Robinson",
                        title: "Our invite-only Beta accounts are now live!",
                        content: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ..."
                    }
                ]
            }
        }
    }
</script>
