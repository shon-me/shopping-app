<script setup>
const user = JSON.parse(localStorage.getItem('user'))

let letter = ''
let names = ''
let profileEmail = ''
let profilePhone = ''

if(user) {
    letter = user.firstName[0]
    names = user.firstName + ' ' + user.lastName
    profileEmail = user.email
    profilePhone = user.phone
}

</script>

<template>
    <v-container>
        <v-row class="align-center justify-center mt-8">
            <v-col md="8">
                <v-card>
                    <template #prepend>
                        <v-avatar size="120" color="primary" variant="tonal">
                            <h2>{{ letter }}</h2>
                        </v-avatar>
                    </template>
                    <v-card-text class="ml-8">{{ names }} </v-card-text>
                    <v-card-text class="ml-8">{{ profileEmail }} </v-card-text>
                    <v-card-text class="ml-8">{{ profilePhone }} </v-card-text>
                    <v-btn class="mb-4 ml-9 ga-2" color="primary">
                        <v-icon icon="mdi-cog"></v-icon>
                        <v-spacer/>
                        Edit info
                    </v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>