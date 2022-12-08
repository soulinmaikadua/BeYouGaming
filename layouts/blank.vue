<template>
  <v-app>
    <v-app-bar elevation="0">
      <v-app-bar-title>
        <img src="~/assets/logo.png" width="40" alt="Be You Gaming Logo" />
      </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
    <Footer />
  </v-app>
</template>
