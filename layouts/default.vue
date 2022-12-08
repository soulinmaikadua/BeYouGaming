<template>
  <v-app>
    <v-app-bar elevation="0">
      <v-app-bar-title>
        <img src="~/assets/logo.png" width="40" alt="Be You Gaming Logo" />
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn href="#home">Home</v-btn>
      <v-btn href="#about">About</v-btn>
      <v-btn href="#games">Games</v-btn>
      <v-btn href="#contacts">Contacts</v-btn>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
    <Footer />
  </v-app>
</template>
