<template>
    <div
    class="bg-main-bg dark:bg-gradient-to-tl dark:to-[#09090b] dark:from-[#3d3d3d] bg-fixed bg-center bg-cover overflow-hidden h-auto flex-col font-kanit items-center justify-center">
    <NavbarView idPage="home" color="#E962AD" navColor="rgb(51 14 144 / 0.4)" textShadow="text-shadow-primary" />
    <div
      class="flex flex-col lg:flex-row-reverse items-center lg:mt-[10%] justify-start lg:justify-center gap-10 h-auto w-full opacity-0 mt-16"
      :class="{ 'opacity-100 duration-500': time }">
      <div class="flex flex-col justify-center lg:-mt-12 lg:w-6/12 items-center">
        <h1 class="text-cyan-50/80 text-5xl text-center px-[5%] lg:px-[0%] md:text-6xl mt-[5%] font-extrabold text-shadow-cyan uppercase -translate-x-full-tl duration-[1200ms]" :class="{ 'translate-x-[0%]': time }">Bem vindo ao mundo dos <span class="text-primary text-shadow-primary tracking-wider">pixels</span></h1>
        <p class="px-10 md:px-20 lg:px-0 2xl:px-15 2xl:text-2xl mt-[6%] text-lg lg:mt-[5%] md:text-xl text-shadow-cyan lg:text-base translate-x-full-tl duration-[1200ms] text-center text-cyan-50/80 w-auto"
          :class="{ '-translate-x-[0.1%]': time }">
          E aí, Explorador digital! Me chamo <spam class="text-primary text-shadow-primary">Kohako</spam>, o programador
          por trás dos pixels.
          Pronto para mergulhar em um <spam class="text-primary text-shadow-primary">universo</spam> onde desafios se
          convertem em <spam class="text-primary text-shadow-primary">conquistas extraordinárias?</spam>
        </p>
        <a class="text-cyan-50/80 opacity-0 text-lg border-2 hover:bg-primary duration-[400ms] px-[5%] py-[1%] uppercase tracking-wider border-primary mt-[7%] hover:shadow-3xl hover:shadow-primary" :class="{ 'opacity-100': time }" href="#coffee-section">Explorar</a>
      </div>
      <img src="../assets/room-3D.png"
        class="drop-shadow-2xl duration-[2000ms] animation-room-3d lg:w-4/12 md:w-4/6 object-cover md:mt-[1%] lg:mt-0 w-4/5 opacity-0"
        :class="{ 'opacity-100': time }" />
      <img src="../assets/ICON_arrows.png" :class="{ 'opacity-0 duration-300': visibleContentOne }" class="absolute hidden lg:flex bottom-[10%] left-[51%] w-[2%] animation-arrow-bounce" alt="">
    </div>
    <ContentBlock :visible="visibleContentOne" fadeClass="opacity-100 duration-500"
      class="h-[100vh] md:h-[90vh] lg:mt-[15%] 2xl:mt-[8%] flex w-full items-center justify-evenly opacity-0 duration-500"
      :class="{ 'opacity-100 duration-1000': visibleContentOne }">
      <div id="cardOne" class="w-5/12 md:w-2/5 h-3/4 lg:h-full gap-y-12 lg:gap-24 mt-1 flex items-center justify-start lg:justify-end flex-col">
        <SectionCard title="Desenvolvimento Web Completo"
          content="Construo aplicações web do início ao fim, da estrutura ao design intuitivo." />
        <SectionCard title="Integrações de API Otimizadas"
          content="Garanto eficiência em seus sistemas com integrações perfeitamente alinhadas." />
        <SectionCard title="Manutenção e Otimização"
          content="Mantenha seus apps na vanguarda com serviços contínuos de atualização e otimização." />
      </div>
      <div
        class="w-2.5 bg-secondary/60 overflow-y-hidden flex flex-col justify-between rounded-full translate-y-4 h-2/3 lg:h-full">
        <div class="w-2.5 h-2.5 bg-primary rounded-full animation-rounded-movement"></div>
      </div>
      <div
        class="w-5/12 md:w-2/5 h-3/4 gap-y-16 mt-16 md:mt-[15%] lg:gap-24 flex items-center justify-end lg:justify-start flex-col lg:h-full">
        <SectionCard title="Aplicações Móveis Nativas e Híbridas"
          content="Estabeleço bases sólidas para o gerenciamento seguro e eficiente de dados." />
        <SectionCard title="Banco de Dados Robusto"
          content="Estabeleço bases sólidas para o gerenciamento seguro e eficiente de dados." />
        <SectionCard title="Consultoria Tecnológica"
          content="Vai além do desenvolvimento, orientando suas escolhas tecnológicas com precisão." />
      </div>
    </ContentBlock>
    <ContentBlock id="coffee-section" :visible="visibleContentTwo" fadeClass="opacity-100 duration-1000"
      class="h-[55vh] mt-48 xl:mt-[20%] md:mt-[40%] lg:mt-[30%] flex w-full flex-col lg:flex-row-reverse items-center opacity-0 duration-1000 justify-center mb-24 md:mb-40">
      <img
        class="absolute lg:relative z-10 -translate-y-64 lg:translate-y-0 lg:w-2/5 md:-translate-y-80 md:w-3/4 pointer-events-none animation-shadow-cyan"
        :style="{ '--sec': animationSec + 's', '--opacity': progress / 100 }" src="../assets/user-PC.png" alt="">
      <div
        class="flex items-center justify-center md:mt-36 lg:pb-0 lg:mt-0 flex-col rounded bg-gradient-to-tl to-[#330e9080] from-[#981c5680] backdrop-blur-md lg:py-0 md:py-14 h-[140%] lg:w-5/12 md:pb-32 w-10/12 px-5">
        <h2 class="mt-20 lg:mt-0 text-cyan-50/100 text-shadow-cyan text-sm md:mt-56 md:text-xl 2xl:text-2xl  lg:text-lg">
          Status do DEV: {{ statusDev }} </h2>
        <div class="w-10/12 bg-cyan-50/80 h-6 md:h-8 2xl:h-10 2xl:w-9/12 mt-2 rounded-xl md:rounded-2xl">
          <div class="h-6 md:h-8 2xl:h-10 text-center duration-200 rounded-xl md:rounded-2xl bg-secondary"
            :style="{ width: `${progress}%` }">
            <h2 class="text-cyan-50/80 pl-2 md:pl-4 md:text-xl 2xl:text-2xl md:pt-0.5">{{ progress }}%</h2>
          </div>
        </div>
        <div class="flex gap-2 mt-4">
          <h2
            class="text-sm md:text-2xl lg:text-lg 2xl:text-2xl 2xl:h-12 2xl:rounded-full 2xl:px-8 md:rounded-2xl text-secondary h-8 md:h-12 lg:h-10 px-4 w-auto flex items-center bg-cyan-50/80 backdrop-blur-3xl py-1.5 rounded-2xl select-none">
            Copos de café de hoje: {{ coffeeNumber }}</h2>
          <button @click="() => { updateProgressBar(); randonCoffee(); }"
            class="select-none custom-image duration-200 h-8 md:h-12 hover:lg:-outline-offset-2 hover:lg:outline hover:lg:bg-transparent outline-cyan-50/80 2xl:h-12 2xl:w-12 md:w-12 lg:h-10 lg:w-10 md:rounded-2xl z-50 w-8 bg-cyan-50/80 backdrop-blur-3xl hover:lg:backdrop-blur-none p-2 rounded-xl">
            <img src="../assets/coffee.png" class="object-contain" alt="">
          </button>
        </div>
        <p
          class="text-center text-cyan-50 text-sm md:text-lg lg:text-base 2xl:text-xl md:px-5 mt-6 2xl:mt-10">
          Agora que já me conhece um pouco, e já até degustamos um cafézinho, que tal ver o que
          consigo fazer usando um PC e muita criatividade?</p>
        <div class="w-full flex justify-center gap-4 items-center mt-6 2xl:mt-10">
          <RouterLink to="/portfolio">
            <button
              class="w-auto border border-cyan-50 hover:bg-cyan-50 hover:lg:text-[#20076e] duration-300 text-cyan-50 hover:text-[#20076e] md:text-2xl lg:text-lg 2xl:text-2xl md:px-24 tracking-wider rounded-sm px-8 h-10">
              Portfolio
            </button>
          </RouterLink>
        </div>
      </div>
    </ContentBlock>
    <FooterView class="hidden lg:flex" dropShadow="drop-shadow-primary" text-shadow="text-shadow-primary" color="text-primary" border-color="border-primary"/>
  </div>
</template>

<script setup lang="ts">
import NavbarView from "@/components/NavbarView.vue";
import { ref, onMounted, type Ref, onBeforeMount, watchEffect } from "vue";
import { RouterLink } from "vue-router";
import ContentBlock from "@/components/ContentBlock.vue";
import SectionCard from "@/components/SectionCard.vue";
import FooterView from "@/components/FooterView.vue";

const time: Ref<boolean> = ref(false);
const visibleContentOne: Ref<boolean> = ref(false);
const visibleContentTwo: Ref<boolean> = ref(false);
const coffeeNumber: Ref<number> = ref(0);
const animationSec: Ref<number> = ref(4.4)
const statusDev: Ref<string> = ref("Com sono")
const screenWidth: Ref<number> = ref(window.innerWidth);

const progress = ref(0);

const randonCoffee = () => {
  coffeeNumber.value += 1
}

const card: Ref<HTMLDivElement> = ref(document.getElementById('card') as HTMLDivElement)

watchEffect(() => {
  if(card.value) {
    card.value.style.opacity = String(window.scrollY + 10)
    console.log(card.value)
  }
})

const updateProgressBar = () => {
  const increment = 10;
  const decrement = 0.4;

  const update = () => {
    if (progress.value < 100) {
      progress.value += increment;
      animationSec.value -= decrement;
    }

    if (progress.value >= 19 && progress.value < 39) {
      statusDev.value = "Nada mal, nada bem";
    } else if (progress.value >= 39 && progress.value < 59) {
      statusDev.value = "Ligado no 220";
    } else if (progress.value >= 59 && progress.value < 79) {
      statusDev.value = "Um Cafézinho Extra, Por Favor";
    } else if (progress.value >= 79 && progress.value < 99) {
      statusDev.value = "Ser ou não ser?";
    } else if (progress.value === 100) {
      statusDev.value = "Conquistando o mundo...";
    }

    if (coffeeNumber.value >= 100) {
      statusDev.value = "Virou uma usina Nuclear";
    }

  };

  update();
  
};

const handleScroll = () => {
  const scrollTop = window.scrollY;
  screenWidth.value = window.innerWidth;

  const animatedCard: Ref<boolean> = ref(false)
  
  const cardTriggerPoint = 200;

  if(cardTriggerPoint < 300) {
    console.log('aaa')
  }
  // Ajuste esse valor conforme necessário com base na posição que você deseja que a animação comece
  const triggerPointOne = 200;
  const triggerPointTwo = 1000;

  if (scrollTop > triggerPointOne) {
    visibleContentOne.value = true;
  }

  if (scrollTop > triggerPointTwo) {
    visibleContentTwo.value = true;
  }
};

onMounted(() => {
  setTimeout(() => {
    time.value = !time.value;
  }, 500);
  window.addEventListener('scroll', handleScroll)
});

onBeforeMount(() => {
  window.removeEventListener('scroll', handleScroll)
})

/*setInterval(() => {
  console.log(window.scrollY)
  console.log(time.value)
}, 1000)*/

</script>

<style scoped>
.custom-image:hover img {
  content: url('@/assets/coffee-light.png');
}

.text-shadow-primary {
  text-shadow: 0px 0px 3px rgba(233, 98, 173, 1);
}

.text-shadow-cyan {
  text-shadow: 0px 0px 3px rgba(162, 232, 252, 1);
}

.animation-shadow-cyan {
  animation: animate-dev-img var(--sec) ease 0s infinite normal forwards;
}

.animation-room-3d {
  animation: animate-room-3d 3s ease 0s infinite normal forwards;
}

.animation-rounded-movement {
  animation: animate-rounded-movement 60s ease 0s infinite normal forwards;
}

.animation-text-pulse {
  animation: animate-text-pulse 4s ease 0s infinite normal forwards;
}

.animation-arrow-bounce {
  animation: animation-arrow-bounce 5s ease-in-out 0s infinite normal forwards;
}

@keyframes animate-room-3d {

  0%,
  50%,
  100% {
    filter: drop-shadow(0 0 30px rgba(117, 255, 244, 0.6));
  }

  25%,
  75% {
    filter: drop-shadow(0 0 30px rgba(233, 98, 173, 0.6));
  }
}

@keyframes animate-dev-img {

  0%,
  50%,
  100% {
    filter: drop-shadow(0px 0px 6px rgba(162, 232, 252, 0.4));
    -webkit-filter: drop-shadow(0px 0px 6px rgba(162, 232, 252, 0.4));
  }

  25%,
  75% {
    filter: drop-shadow(0px 0px 4px rgba(162, 232, 252, var(--opacity)));
    -webkit-filter: drop-shadow(0px 0px 4px rgba(162, 232, 252, var(--opacity)));
  }
}

@keyframes animate-text-pulse {

  0%,
  50%,
  100% {
    text-shadow: 0px 0px 2px rgba(233, 98, 173, 0.1);
  }

  25%,
  75% {
    text-shadow: 0px 0px 2px rgba(233, 98, 173, 0.4);
  }
}

@keyframes animate-rounded-movement {

  0%,
  50%,
  100% {
    transform: translateY(-6em);
    filter: drop-shadow(0 0 30px rgba(233, 98, 173, 0.4));
  }

  25%,
  75% {
    transform: translateY(42em);
    filter: drop-shadow(0 0 30px rgba(233, 98, 173, 1));
  }
}

@keyframes animation-arrow-bounce {
  0%,
  50%,
  100% {
    transform: translateY(1.8em);
  }
  
  25%,
  75% {
    transform: translateY(2.8em);
  }
}

</style>