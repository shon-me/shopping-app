import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {

    const createProductsList = () =>[
        {
            id: 1,
            name: 'Denon Dj',
            image: 'images/products/p1.jpg',
            price: 40000,
            category: 'Music',
            description: 'Black ',
            longDescription: 'Affordable and lightweight controller'
        },
        {
            id: 2,
            name: 'Prime Dj',
            image: 'images/products/p2.jpg',
            price: 120000,
            category: 'Music',
            description: '8 inch screen',
            longDescription: 'All in one controller'
        },
        {
            id: 3,
            name: 'P47 Headphones',
            image: 'images/products/p3.jpg',
            price: 7000,
            category: 'Music',
            description: 'Black and red',
            longDescription: 'Spatial audio headphones'
        },
        {
            id: 4,
            name: 'Sony Headphones',
            image: 'images/products/p4.jpg',
            price: 12000,
            category: 'Music',
            description: 'Black with a form cusion',
            longDescription: 'Powerful bass from sony'
        },
        {
            id: 5,
            name: 'Kid Floats',
            image: 'images/products/p5.jpg',
            price: 2500,
            category: 'Swimming',
            description: 'Multi-color',
            longDescription: 'Pool floats for kids'
        },
        {
            id: 6,
            name: 'LunchBox RC',
            image: 'images/products/p6.jpg',
            price: 7000,
            category: 'Toys',
            description: 'Yellow truck',
            longDescription: 'Long range radio'
        },
        {
            id: 7,
            name: 'Monster Energy',
            image: 'images/products/p7.jpg',
            price: 320,
            category: 'Drinks',
            description: 'White can',
            longDescription: 'Energy Zero Ultra'
        },
        {
            id: 8,
            name: 'Hillton Brushes',
            image: 'images/products/p8.jpg',
            price: 750,
            category: 'Art',
            description: 'paint brush set',
            longDescription: 'Prime goat tail tips'
        },
        {
            id: 9,
            name: 'Soft Brushes',
            image: 'images/products/p9.jpg',
            price: 450,
            category: 'Art',
            description: 'paint brush set',
            longDescription: 'Soft brush set'
        },
        {
            id: 10,
            name: 'Oil brush',
            image: 'images/products/p10.jpg',
            price: 120,
            category: 'Art',
            description: 'paint brush set',
            longDescription: 'Short brush for oil paints'
        },
        {
            id: 11,
            name: 'Type C cables',
            image: 'images/products/p11.jpg',
            price: 0,
            category: 'Tech',
            description: 'Braided cables',
            longDescription: 'New type C charging and data cables'
        },
        {
            id: 12,
            name: 'Cable Hanger',
            image: 'images/products/p12.jpg',
            price: 870,
            category: 'Tech',
            description: 'Hangers',
            longDescription: 'Wall mounted hangers for cables'
        },
    ]

    const products = ref(createProductsList())

    const selectedProductId = ref(null)
    const selectedProduct = computed(() => {
        return products.value.find(product => product.id === selectedProductId.value)
    })

    function selectProduct(id) {
        selectedProductId.value = id
    }

    function addProduct(data){
        const lastId = products.value.length > 0 ? products.value[products.value.length -1].id: 0
        data.id = lastId + 1
        products.value.push(data)
    }


    const resetProducts = () => {
        products.value = createProductsList()
    }

    return{ products, selectedProductId, selectedProduct, selectProduct, resetProducts, addProduct}

},
{
    persist: true,
}
)