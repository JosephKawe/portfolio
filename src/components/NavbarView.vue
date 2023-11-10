<template>
  <header
    class="flex font-kanit justify-start z-50 opacity-0 items-start w-full overflow-x-hidden fixed lg:justify-end lg:h-auto h-screen"
    :class="{ 'pointer-events-none lg:pointer-events-auto': !isMenuOpen, 'opacity-100 duration-300': time, 'menu-scrolled': visibleContentOne }"
  >
    <button
      @click="toggleMenu"
      class="absolute z-50 lg:hidden pointer-events-auto duration-500 w-auto h-auto mt-3 right-3.5"
      :class="{ '-translate-y-0': isMenuOpen }"
    >
      <p :style="{ backgroundColor: props.color }" class="h-menu-hamburger w-6 duration-300 shadow-xl"
        :class="{ 'rotate-45 translate-y-3': isMenuOpen }"
      ></p>
      <p :style="{ backgroundColor: props.color }" class="h-menu-hamburger my-1.5 w-6 duration-300 shadow-xl"
        :class="{ 'hidden': isMenuOpen }"
      ></p>
      <p :style="{ backgroundColor: props.color }" class="h-menu-hamburger w-6 duration-300 shadow-xl"
        :class="{ '-rotate-45 translate-y-[0.57em]': isMenuOpen }"
      ></p>
    </button>
    <nav
      :style="{ backgroundColor: getBackgroundColor() }"
      class="w-full h-12 flex-col flex justify-center lg:bg-transparent lg:w-auto items-center lg:mt-[1%] lg:backdrop-blur-none lg:mr-[3%] lg:flex-row backdrop-blur-md"
      :class="{ 'duration-700': !isMenuOpen, 'h-full lg:h-16 duration-700': isMenuOpen }"
    >
      <ul :style="{ color: props.color }"
        class="w-2/4 lg:w-auto h-auto overflow-hidden gap-16 text-3xl lg:text-lg 2xl:text-xl flex flex-col 2xl:mr-10 lg:flex-row justify-start items-center"
      >
        <li
          class="flex"
          :style="{ borderColor: props.color }"
          :class="{ '-translate-x-full-tl lg:translate-x-0 opacity-0 lg:opacity-100 duration-100 lg:hover:border-b-2': !isMenuOpen, '-translate-x-0 duration-100': isMenuOpen }"
        >
          <RouterLink to="/">
            <h2 :class="props.textShadow">Home</h2>
          </RouterLink>
        </li>
        <li
          class="flex"
          :style="{ borderColor: props.color }"
          :class="{ 'translate-x-full-tl lg:translate-x-0 opacity-0 lg:opacity-100 duration-100 lg:hover:border-b-2': !isMenuOpen, 'translate-x-0 duration-100': isMenuOpen }"
        >
          <RouterLink to="/portfolio">
            <h2 :class="props.textShadow">Portfolio</h2>
          </RouterLink>
        </li>
        <li
          class="flex"
          :style="{ borderColor: props.color }"
          :class="{ '-translate-x-full-tl lg:translate-x-0 opacity-0 lg:opacity-100 duration-100 lg:hover:border-b-2': !isMenuOpen, '-translate-x-0 duration-100': isMenuOpen }"
        >
          <RouterLink to="/sobre">
            <h2 :class="props.textShadow">Sobre</h2>
          </RouterLink>
        </li>
        <li
          class="flex"
          :style="{ borderColor: props.color }"
          :class="{ 'translate-x-full-tl lg:translate-x-0 opacity-0 lg:opacity-100 duration-100 lg:hover:border-b-2': !isMenuOpen, 'translate-x-0 duration-100': isMenuOpen }"
        >
          <RouterLink to="/contato">
            <h2 :class="props.textShadow">Contato</h2>
          </RouterLink>
        </li>
      </ul>
      <FooterView
        :dropShadow="styles.dropShadow"
        :text-shadow="styles.textShadow"
        :color="styles.color"
        :border-color="styles.borderColor"
        :class="{ 'opacity-100 duration-500 -translate-x-0 lg:hidden': isMenuOpen, 'opacity-0 duration-500 -translate-x-full lg:hidden': !isMenuOpen }"
      />
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, type Ref } from "vue";
import { RouterLink } from "vue-router";
import FooterView from "../components/FooterView.vue";

const time: Ref<boolean> = ref(false);
const isMenuOpen: Ref<boolean> = ref(false);
const screenWidth: Ref<number> = ref(window.innerWidth);
const visibleContentOne: Ref<boolean> = ref(false);
const props = defineProps<Props>();

interface Props {
  color: string;
  navColor: string;
  textShadow: string;
  idPage: string;
}

interface FooterStyles {
  textShadow: string;
  color: string;
  borderColor: string;
  dropShadow: string;
}

const styles = ref<FooterStyles>({
  textShadow: "",
  color: "",
  borderColor: "",
  dropShadow: "",
});

const handleScroll = () => {
  const scrollTop = window.scrollY;
  const triggerPointOne = 200;

  if (scrollTop > triggerPointOne && screenWidth.value > 1025) {
    visibleContentOne.value = true;
  } else {
    visibleContentOne.value = false;
  }
};

onMounted(() => {
  setTimeout(() => {
    time.value = !time.value;
  }, 500);
  window.addEventListener("resize", updateScreenWidth);
  window.addEventListener("scroll", handleScroll);
});

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

function getBackgroundColor() {
  return screenWidth.value > 1024 ? "none" : props.navColor;
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function toggleStyle() {
  if (props.idPage === "home") {
    styles.value.textShadow = "text-shadow-primary";
    styles.value.color = "text-primary";
    styles.value.borderColor = "border-primary";
    styles.value.dropShadow = "drop-shadow-primary";
  } else if (props.idPage === "portifolio") {
    styles.value.textShadow = "text-shadow-secondary";
    styles.value.color = "text-secondary";
    styles.value.borderColor = "border-secondary";
    styles.value.dropShadow = "drop-shadow-secondary";
  } else if (props.idPage === "about") {
    styles.value.textShadow = "text-shadow-fourth";
    styles.value.color = "text-fourth";
    styles.value.borderColor = "border-fourth";
    styles.value.dropShadow = "drop-shadow-fourth";
  }
}

toggleStyle();
</script>

<style scoped>
.menu-scrolled nav {
  opacity: 0;
  pointer-events: none;
}

.text-shadow-primary {
  text-shadow: 0px 0px 3px rgba(233, 98, 173, 1);
}

.text-shadow-secondary {
  text-shadow: 0px 0px 2px rgba(51, 14, 144, 1);
}

.text-shadow-tertiary {
  text-shadow: 0px 0px 2px rgb(134, 111, 185, 1);
}

.text-shadow-quaternary {
  text-shadow: 0px 0px 4px rgba(134, 111, 185, 1);
}
</style>
