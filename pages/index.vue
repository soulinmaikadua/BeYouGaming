<template>
  <div>
    <!-- Home -->
    <div
      id="home"
      style="height: 80vh"
      class="d-flex justify-center text-center align-center"
    >
      <div>
        <h5 class="my-10">GAMES FOR FUN AND CHALLENGE.</h5>
        <h1 class="my-10">BE YOU GAMING</h1>
        <v-btn href="#about" class="mx-10" elevation="0">SEE MORE</v-btn>
      </div>
    </div>

    <!-- about -->
    <v-container id="about" class="my-10">
      <v-row>
        <v-col cols="12" class="text-center my-5">
          <h3>ABOUT BE YOU GAMING</h3>
        </v-col>
        <v-col cols="12" md="4">
          <p>
            <span style="font-size: 40px; font-weight: bold">Don't</span> stop
            when you're <span style="font-weight: bold">tired</span>.
          </p>
          <p>
            Stop when you're
            <span style="font-size: 40px; font-weight: bold">done</span>
          </p>
          <p class="text-center">- Unknown</p>
        </v-col>
        <v-col cols="12" md="4">
          <p>
            We embarked this journey 5 years ago with the motto of making fun
            games for people. After exploring many projects over the years,
            children and word games have become the core focus of our game lab.
            Today, FunLab is one of the most well-known gaming studios within
            Turkey and it is the creator of famous word game 'Kelime Gezmece'
            which ranked #1 in stores for weeks.
          </p>
        </v-col>
        <v-col cols="12" md="4">
          <p>
            In Funlab Mobile, We believe success lies on working hard and keep
            trying. While you are reading this, we will be working on some new
            projects that will make the gaming world a better place. Keep
            following us!
          </p>
        </v-col>
      </v-row>
    </v-container>
    <!-- our games -->
    <v-container id="games" class="my-10">
      <v-row>
        <v-col cols="12" class="text-center my-5">
          <h3>OUR GAMES</h3>
        </v-col>
        <v-col cols="12">
          Be You Gaming games were downloaded millions of times by players all
          over the world and we are happy to reach thousands of people each day.
          As being one of the top mobile game developers we are always trying to
          achive the best. Discover some of the games from our portfolio.
        </v-col>
        <v-col cols="12" class="text-center">
          <v-btn elevation="0">GAMES</v-btn>
          <v-btn elevation="0" class="ml-2">PUZZLE GAMES</v-btn>
          <v-btn elevation="0" class="ml-2">MATH GAMES</v-btn>
        </v-col>
        <v-col cols="4">
          <h1>Game 1</h1>
        </v-col>
        <v-col cols="4">
          <h1>Game 2</h1>
        </v-col>
        <v-col cols="4">
          <h1>Game 3</h1>
        </v-col>
      </v-row>
    </v-container>
    <!-- contacts -->
    <v-container id="contacts" class="my-10">
      <v-row>
        <v-col cols="12" class="text-center my-5">
          <h3>CONTACTS</h3>
        </v-col>
        <v-col cols="6" class="mx-auto">
          <div class="my-3">
            <v-text-field
              label="Name"
              variant="outlined"
              hide-details="auto"
            ></v-text-field>
          </div>
          <div class="my-3">
            <v-text-field
              label="Email"
              variant="outlined"
              hide-details="auto"
            ></v-text-field>
          </div>
          <div class="my-3">
            <v-textarea label="Message" variant="outlined"></v-textarea>
          </div>
          <div class="my-3">
            <v-btn block size="x-large" elevation="0">Send message</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

