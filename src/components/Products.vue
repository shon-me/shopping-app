<script setup>
import {ref} from 'vue'
import { useProductsStore } from '../stores/products'
import { useRouter } from "vue-router";

const router = useRouter();
const productsStore = useProductsStore()
const products = productsStore.products

const isAdmin = localStorage.getItem('isAdmin')


const viewProduct = (productId) => {
  productsStore.selectProduct(productId)
  
  router.push({ name: 'ViewProduct', params: { id: productId } })
}

const showAddDialog = ref(false)

//process image
const selectedFile = ref(null);
const previewUrl = ref(null);

// Capture selected file and create local preview
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  selectedFile.value = file;
  
  previewUrl.value = URL.createObjectURL(file);
};

//models
const name = ref(null)
const image = ref(null)
const price = ref(null)
const category = ref(null)
const description = ref(null)
const longDescription = ref(null)

function handleAddProduct(){
    const data = {
        name: name.value,
        image: image.value,
        price: price.value,
        category: category.value,
        description: description.value,
        longDescription: longDescription.value,
    }
        productsStore.addProduct(data)
        showAddDialog.value = false
}
</script>

<template>
    <v-container max-width="100%">
        <v-row>
            <v-col md='8'>
                <div class="text-display-small text-center">
                    Browse Products
                </div>
            </v-col>
            <v-col md="2">
                <v-btn class="ma-2" color="primary" icon="mdi-plus" @click="showAddDialog = true" v-if="isAdmin"></v-btn>
            </v-col>
            <v-col md="2">
                <v-btn class="ma-2"color="error" @click="productsStore.resetProducts" v-if="isAdmin"> Reset Test Data </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="item in products">
                <v-card class="h-100 d-flex flex-column" width="250">
                    <v-img :src="item.image" height="200px" cover></v-img>
                    <v-card-title class="overflow-y-auto">{{ item.name }}</v-card-title>
                    <v-card-subtitle>{{ item.price }}</v-card-subtitle>
                    <v-card-text>{{ item.description }}</v-card-text>
                    <v-card-text>{{ item.category }}</v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" variant="elevated" @click="buy(item)">Add to Cart</v-btn>
                        <v-btn color="primary" variant="elevated" @click="viewProduct(item.id)">View</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

     <!-- Add Product -->
    <v-dialog v-model="showAddDialog" max-width="50%" >
        <v-form>
            <v-card class="pa-4">
                <v-row>
                    <v-card-title>Add Product</v-card-title>
                    <v-spacer></v-spacer>
                    <v-btn class="ma-2" color="secondary" icon="mdi-close" @click="showAddDialog = false"></v-btn>
                </v-row>
                <v-divider class="mb-4" color="primary" opacity=".7" thickness="3" gradient></v-divider>
                <v-row>
                    <v-col md="12">
                        <v-card v-if="previewUrl" class="mt-4 mx-auto" max-width="400">
                            <v-img :src="previewUrl" height="250" cover ></v-img>
                            <v-card-subtitle class="text-center py-2"> Image Preview </v-card-subtitle>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-text-field label="First Name" v-model="name" variant="outlined" prepend-icon=""></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field label="Last Name" v-model="price" variant="outlined" prepend-icon="" ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-select :items="['Music', 'Swimming', 'Toys', 'Art', 'Drinks', 'Tech']" v-model ="category"/>
                    </v-col>
                    <v-col md="6">
                            <v-file-input label="Select Image" accept="image/*" prepend-icon="mdi-camera" variant="outlined" v-model="image" @change="handleFileChange"></v-file-input>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-textarea label="Short Description" variant="outlined" prepend-icon="" v-model="description"></v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-textarea label="Long Description" variant="outlined" prepend-icon="" v-model="longDescription"></v-textarea>
                    </v-col>
                </v-row>
                <v-divider class="mb-4" color="primary" opacity=".7" thickness="3" gradient></v-divider>
                <v-row>
                    <v-col>
                        <v-card-actions>
                            <v-btn color="primary" variant="outlined" @click="showAddDialog = false"> 
                                <v-icon icon="mdi-close" ></v-icon> 
                                Close </v-btn> 
                            <v-spacer/>
                            <v-btn color="primary" variant="outlined" @click="handleAddProduct"> 
                                <v-icon icon="mdi-content-save-outline" ></v-icon> 
                                Save </v-btn> 
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-card>
        </v-form>
    </v-dialog>
</template>