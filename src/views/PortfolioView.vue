<template>
    <div class="bg-main-bg dark:bg-gradient-to-tl dark:to-[#09090b] dark:from-[#3d3d3d] bg-cover lg:flex-col bg-fixed bg-center flex font-kanit h-auto w-full">
        <NavbarView idPage="portifolio" :color="getColorNavbar().color" navColor="rgb(134 111 185 / 0.3)"
            :textShadow="getColorNavbar().shadowColor" />
        <main class="flex flex-col w-full justify-center mt-[16%] lg:mt-[8%] px-8 lg:pb-[0%] overflow-hidden lg:items-center">
            <section class="flex items-center justify-around bg-tertiary h-[8%] lg:h-[18%] lg:w-3/6 rounded-md">
                <div class="flex justify-between w-full items-center pl-4 text-secondary text-lg lg:text-2xl flex-col">
                    <p class="text-xs font-bold tracking-wide">{{ message + ' explorador!' }}</p>
                    <p class="font-medium">{{ 'Projetos Ativos: ' + dataJson.projects.length }}</p>
                    <p class="font-medium">{{ 'Em andamento: ' + 2 }}</p>
                </div>
                <img src="../assets/pc-3D.png" class="w-3/6 lg:w-2/6 anim3D translate-x-1 object-cover drop-shadow-2xl"
                    alt="pc-icon">
            </section>
            <div class="h-2 w-[90%] rounded my-4 lg:my-6 bg-tertiary"></div>
            <div class="flex container flex-col w-[80em] lg:flex-row lg:justify-around lg:flex-wrap">
                <section
                class="mb-[10%] lg:mb-[7%] w-full lg:w-[50%] overflow-hidden flex bg-white/0 rounded-md h-[13%] lg:h-[22%] items-center"
                v-for="item in dataJson.projects" :key="item.id">
                <article class="h-[22%] container lg:h-[40%] z-10 absolute w-auto bg-tertiary rounded-lg p-1">
                    <img class="h-full object-cover rounded-md" :src="'/src/assets/' + item.imageUrl" />
                </article>

                <div
                    class="h-full flex flex-col translate-x-[20%] lg:translate-x-[15%] bg-tertiary items-center rounded-md justify-between py-20 pt-4 lg:pl-[8.4%] pl-[12%] w-10/12">
                    <h2 class="text-xl font-semibold pt-2 text-secondary text-center">{{
                        item.name }}
                    </h2>

                    <h2 class="font-medium text-sm mt-3 text-secondary text-center">Tecnologias</h2>
                    <div class="flex flex-wrap items-center justify-center mt-1 mx-10 mb-[5%] gap-0
                    .5">
                        <div v-for="language in filterLanguageIcons(item.languages)" :key="language.id" class="relative group inline-block">
                            <div class="group relative flex justify-center items-center h-9 w-9 lg:h-12 lg:w-12 rounded-full">
                                <img class="h-[50%] w-[50%] object-contain" :src="language.path" :alt="language.name" @mouseover="togglePopover(item.id, language.id.toString())" @mouseleave="togglePopover(item.id, language.id.toString())" @click="togglePopover(item.id, language.id.toString())" />
                            </div>
                            <div v-if="isPopoverVisible(item.id, language.id.toString())" class="popover">
                                <p class="px-1 text-xs lg:text-lg text-secondary">{{ language.name }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="gap-4 flex w-auto items-center justify-center">
                        <a :href="item.siteRepository" >
                            <button
                                class="uppercase tracking-wider flex justify-center items-center bg-secondary px-3 lg:px-10 lg:py-2 rounded-sm text-[#9989c9] w-full lg:text-lg py-0.5">
                                Detalhes
                                <img src="../assets/github_icon_button.png" class="object-contain w-4 h-4 ml-[4%]" alt="github">
                            </button>
                        </a>

                        <a :href="item.siteUrl">
                            <button disabled
                                class="uppercase tracking-wider lg:px-6 lg:py-2 lg:text-lg bg-secondary px-2 text-[#9989c9] rounded-sm w-full py-0.5">
                                Ver
                            </button>
                        </a>
                    </div>
                </div>
            </section>
            <img src="../assets/aws_icon.png" alt="">
            </div>
        </main>
        <FooterView class="hidden lg:flex" dropShadow="drop-shadow-tertiary" text-shadow="text-shadow-tertiary" color="text-tertiary" border-color="border-tertiary"/>
    </div>
</template>
  
<script setup lang="ts">
import NavbarView from "../components/NavbarView.vue";
import dataJson from "../assets/data.json";
import FooterView from "@/components/FooterView.vue";
import { onMounted, ref, type Ref } from "vue";

dataJson.projects.map((item) => {
        const imageUrl = ref(item.imageUrl)
        console.log(item.imageUrl)
    })

const time: Ref<boolean> = ref(false);
const message: Ref<string> = ref('');
const colorNavbar: Ref<string> = ref('');
const shadowColor: Ref<string> = ref('');
const screenWidth: Ref<number> = ref(window.innerWidth);
const activePopover: Ref<{ projectId: number; languageId: string } | null> = ref(null);

const filterLanguageIcons = (projectLanguages: string[]): { id: number; name: string; path: string }[] => {
    return dataJson.languageIcons.filter((icon) => projectLanguages.includes(icon.name));
};

const getMessage = () => {
    const now = new Date();
    const hours = parseInt(now.toLocaleDateString('pt-BR', { hour: 'numeric' }) as string);

    if (!isNaN(hours)) {
        if (hours >= 6 && hours < 12) {
            message.value = 'Bom dia';
        } else if (hours >= 12 && hours < 18) {
            message.value = 'Boa tarde';
        } else if (hours >= 18 && hours < 24) {
            message.value = 'Boa noite';
        } else if (hours >= 0 && hours < 6) {
            message.value = 'Boa madrugada';
        }
    } else {
        // Lida com o caso em que a conversão para número falha
        console.error('Erro ao obter as horas.');
    }
};


const getColorNavbar = () => {
    if (screenWidth.value > 1024) {
        colorNavbar.value = '#866FB9'
        shadowColor.value = 'text-shadow-tertiary'
    } else {
        colorNavbar.value = '#330E90'
        shadowColor.value = 'text-shadow-secondary'
    }
    return { color: colorNavbar.value, shadowColor: shadowColor.value };
}

const togglePopover = (projectId: number, languageId: string) => {
    if (activePopover.value && activePopover.value.projectId === projectId && activePopover.value.languageId === languageId) {
        // Se o mesmo item for clicado novamente, oculte o popover
        activePopover.value = null;
    } else {
        // Caso contrário, mostre o popover para o novo item clicado
        activePopover.value = { projectId, languageId };
    }
};

const isPopoverVisible = (projectId: number, languageId: string) => {
    return activePopover.value && activePopover.value.projectId === projectId && activePopover.value.languageId === languageId;
};

onMounted(() => {
    setTimeout(() => {
        time.value = !time.value;
    }, 500);

    getMessage()
})

</script>
  
<style scoped>
.anim3D {
    animation: myAnim 10s ease 0s infinite normal forwards;
}

.popover {
        opacity: 1;
        visibility: visible;
        position: absolute;
        right: 50%;
        transform: translateX(50%) translateY(-10%);
        transition: all 500;
        background-color: #866FB9;
        border: 1px solid #330E90;
        border-radius: 2px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 0.4em;
        z-index: 10;
    }

@keyframes myAnim {

    0%,
    50%,
    100% {
        filter: drop-shadow(0 0 4px rgba(233, 98, 173, 0.1));
    }

    25%,
    75% {
        filter: drop-shadow(0 0 4px rgba(233, 98, 173, 0.8));
    }
}
</style>