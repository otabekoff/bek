<template>
  <bekThemeProvider
    id="app"
    :colors="{
      headerz: '#394575',
      custom: '#FF3D7F',
      backgroundz: '#fff'
    }"
  >
    <router-view />
  </bekThemeProvider>
</template>