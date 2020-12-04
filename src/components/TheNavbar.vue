<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img src="@/assets/logo.png" alt="">
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" to="/">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" to="/my-list">
                My List
            </b-navbar-item>
        </template>

        <template slot="end">
        </template>
    </b-navbar>
</template>

<style lang="scss" scoped>
.navbar {
  background: transparent;
  padding: 0 20px;
}

.navbar-item {
  color: #fff;
  &:hover, &:focus {
    background: transparent;
    color: #fff;
  }
}
</style>