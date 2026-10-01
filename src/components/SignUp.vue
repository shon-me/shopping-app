<script setup>
import {ref} from 'vue'
import { useAuth } from '../service/auth'
import { useRouter } from "vue-router";

const router = useRouter();
const { signup } = useAuth();

//data models
const email = ref(null)
const password = ref(null) //model
const showPassword = ref(false)
const firstName = ref(null)
const lastName = ref(null)
const phone = ref(null)

const confirmPassword = ref(null)
const showConfirm = ref(null)
const rules = {
    required: value => !!value || 'Required',
    min: v => v.length >= 8 || 'Min 8 characters',
    passwordMatch: () => password.value == confirmPassword.value || 'Password must match',
}

function handleSignup(){
    const data = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        password: password.value,
        role:2, // Role 1 is for admin, role 2 is for nurse
    }
    signup(data)
    router.push('/').then(() => {
        router.go(0)
    });
}

</script>

<template>
    <v-container align="center" class="mt-12">
        <v-row>
            <v-col>
                <v-card max-width="80%" class="bg-secondary">
                    <v-img src="/logo.png" height="100" width="200" class="mt-4"></v-img>
                    <v-card-title class="ma-5"> Sign Up</v-card-title>
                    <v-divider></v-divider>
                    <v-form class="ma-8">
                        <v-row>
                            <v-col md="2">
                                <div class="text-right"> First Name</div>
                            </v-col>
                            <v-col md="4">
                                <v-text-field v-model="firstName" variant="outlined"></v-text-field>
                            </v-col>
                            <v-col md="2">
                                <div class="text-right">Last Name</div>
                            </v-col>
                            <v-col md="4">
                                <v-text-field v-model="lastName" variant="outlined"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col md="2">
                                <div class="text-right"> Email</div>
                            </v-col>
                            <v-col md="4">
                                <v-text-field v-model="email" variant="outlined"></v-text-field>
                            </v-col>
                            <v-col md="2">
                                <div class="text-right">Phone</div>
                            </v-col>
                            <v-col md="4">
                                <v-text-field type="number" v-model="phone" variant="outlined"></v-text-field>
                            </v-col>
                        </v-row>
                        
                        <v-row>
                            <v-col md="2">
                                <div class="text-right"> Password</div>
                            </v-col>
                            <v-col md="4">
                                <v-text-field 
                                v-model="password"
                                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="showPassword ? 'text' : 'password'"
                                variant="outlined"
                                @click:append="showPassword = !showPassword"
                            ></v-text-field>
                            </v-col>
                            <v-col md="2">
                                <div class="text-right">Confirm Password</div>
                            </v-col>
                            <v-col md="4">
                                <v-text-field 
                                v-model="confirmPassword"
                                :append-inner-icon="showConfirm ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min, rules.passwordMatch,]"
                                :type="showConfirm ? 'text' : 'password'"
                                variant="outlined"
                                @click:append="showConfirm = !showConfirm"
                            ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col md="6">
                                <v-btn @click="handleSignup()" block>Sign Up</v-btn>
                            </v-col>
                            <v-col md="6">
                                <div>
                                    Already have an account? 
                                    <router-link to="/login">Login</router-link>
                                </div>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>