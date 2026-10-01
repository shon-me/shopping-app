<script setup>
import { useAuth } from '../service/auth';
import { useRouter } from "vue-router";

const router = useRouter();
const { logout } = useAuth()
const isAuthenticated = localStorage.getItem('isAuthenticated')

const user = JSON.parse(localStorage.getItem('user'))

let letter = ''
if(user) {
    letter = user.firstName[0]
}else{
    letter='P'
}

function handleLogout(){
    logout()
    router.push('/').then(() => {
        router.go(0)
    });
}

</script>

<template>
    <v-app-bar color="primary">
        <v-app-bar-title>
            <router-link to="/">
                <v-img src="/logo.png" width="10%" height="10%"></v-img>
            </router-link>
        </v-app-bar-title>
        <v-btn to="/products" v-if="isAuthenticated">Products</v-btn>

        <v-btn icon="mdi-account" v-if="isAuthenticated" variant="tonal">{{ letter }}
            <v-menu activator="parent">
                <v-list>
                    <v-list-item>
                        <v-btn color="primary" to="/profile">Profile</v-btn>
                    </v-list-item>
                    <v-list-item>
                        <v-btn color="primary" @click="()=> { handleLogout();}">Logout</v-btn>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-btn>

        <v-btn to="/signup" v-else>SignUp</v-btn>
    </v-app-bar>
</template>