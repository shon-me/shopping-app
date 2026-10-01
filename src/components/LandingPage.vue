<script setup>

</script>

<template>
    <!-- carousel for news updates -->
    <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-carousel cycle hide-delimiters :show-arrows="false" height="600" cover>
                    <v-carousel-item>
                        <v-img src="/images/carousel1.jpg" h-100 cover class="text-white" gradient="to top, rgba(0,0,0,.7), rgba(0,0,0,0)">
                            <div class="align-end d-flex flex-column position-absolute top-1 bottom-0 right-0 left-0 justify-center w-100 h-40">
                                <v-card-title class="font-weight-black">Get paint Brushes</v-card-title>
                                <v-card-text class="font-weight-bold">Affordable pricing with us</v-card-text>
                                <v-card-text class="font-weight-bold">Fast Delivery <v-icon icon="mdi-cart-arrow-right"></v-icon></v-card-text>
                                <v-card-text class="font-weight-bold text-display-small">Ksh.750</v-card-text>
                            </div>
                        </v-img>
                    </v-carousel-item>

                    <v-carousel-item>
                        <v-img src="/images/carousel2.jpg" h-100 cover class="text-white" gradient="to top, rgba(0,0,0,.7), rgba(0,0,0,0)">
                            <div class="align-start d-flex flex-column position-absolute top-1 bottom-0 right-1 left-0 w-100 h-40">
                                <v-card-title class="font-weight-black">Need a key chain?</v-card-title>
                                <v-card-text class="font-weight-bold">Get your key chains from our large collection</v-card-text>
                                <v-card-text class="font-weight-bold text-display-small">Starting from as low as Ksh.50</v-card-text>
                            </div>
                            <v-btn color="secondary" class="align-start d-flex flex-column position-absolute top-1 bottom-0 right-0 left-1 ma-4" height="70" width="120">
                                Shop now
                                <v-icon icon="mdi-cart-outline"></v-icon>
                            </v-btn>
                        </v-img>
                    </v-carousel-item>

                    <v-carousel-item>
                        <v-img src="/images/carousel3.jpg" h-100 cover class="text-white" gradient="to top, rgba(0,0,0,.7), rgba(0,0,0,0)">
                            <div class="align-start d-flex flex-column position-absolute top-1 bottom-0 right-0 left-0 w-100 h-40">
                                <v-card-title class="text-display-medium font-weight-black">Bose Headphones</v-card-title>
                                <v-card-text class="font-weight-semibold text-body-large">The best headphones in the market</v-card-text>
                                <v-card-text class="font-weight-bold text-display-small">Ksh.5,700 from ksh.9,999</v-card-text>
                            </div>
                        </v-img>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </v-container>

    <!-- card section for highlighted departments -->
    <v-container max-width="100%">
        <v-row>
            <v-col md="4">
                <v-hover v-slot="{ isHovering, props }">
                    <v-card v-bind="props">
                        <v-img src="/images/pic1.jpg"  class="align-end text-white" height="320" cover>
                            <v-card-title>RC car at the best price</v-card-title>
                            <v-expand-transition>
                                <v-card-text>
                                    <div  v-if="isHovering">Ksh.4,500</div>
                                </v-card-text>
                            </v-expand-transition>
                        </v-img>
                        <v-card-item>
                            <v-btn color="primary" size="small">
                                <v-icon icon="mdi-cart"></v-icon>
                                Shop
                            </v-btn>
                        </v-card-item>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col md="4">
                <v-hover v-slot="{ isHovering, props }">
                    <v-card v-bind="props">
                        <v-img src="/images/pic4.jpg" class="align-end text-white" height="320" cover>
                            <v-card-title>Reveal your creativity with the best controller in the industry.</v-card-title>
                            <v-expand-transition>
                                <v-card-text>
                                    <div v-if="isHovering">Ksh.40,000</div>
                                </v-card-text>
                            </v-expand-transition>
                        </v-img>
                        <v-card-item>
                            <v-btn color="primary" size="small">
                                <v-icon icon="mdi-cart"></v-icon>
                                Shop
                            </v-btn>
                        </v-card-item>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col md="4">
                <v-hover v-slot="{ isHovering, props }">
                    <v-card v-bind="props">
                        <v-img src="/images/pic7.jpg" class="align-end text-white" height="320" cover>
                            <v-card-title>Tenda Link router</v-card-title>
                            <v-expand-transition>
                                <v-card-text v-if="isHovering">Ksh.1,500</v-card-text>
                            </v-expand-transition>
                        </v-img>
                        <v-card-item>
                            <v-btn color="primary" size="small">
                                <v-icon icon="mdi-cart"></v-icon>
                                Shop
                            </v-btn>
                        </v-card-item>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>

    <!-- awards section -->
    <v-container class="mt-4">
        <v-row>
            <v-col md="8" class="pa-2">
                <v-img src="/images/pic9.jpg" width="100%"></v-img>
            </v-col>
            <v-col md="4" class="pa-2">
                <v-hover v-slot="{ isHovering, props}">
                    <v-img src="/images/medal1.jpg" height="350" width="350" v-bind="props" class="align-end text-white" cover>
                        <v-expand-transition v-if="isHovering">
                            <div>
                                <h2>Awarded on 20/12/2024</h2>
                            </div>
                        </v-expand-transition>
                    </v-img>
                </v-hover>
            </v-col>
        </v-row>

        <v-row>
            <v-col md="4" class="pa-2">
                <v-hover v-slot="{ isHovering, props}">
                    <v-img src="/images/medal2.jpg" height="350" width="350" v-bind="props" class="align-end text-black" cover>
                        <v-expand-transition v-if="isHovering">
                            <div>
                                <h2>Awarded on 30/09/2025</h2>
                            </div>
                        </v-expand-transition>
                    </v-img>
                </v-hover>
            </v-col>
            <v-col md="8" class="pa-2">
                <v-img src="/images/pic10.jpg" width="100%"></v-img>
            </v-col>
        </v-row>

        <v-row>
            <v-col md="8" class="pa-2">
                <v-img src="/images/pic11.jpg" width="100%"></v-img>
            </v-col>
            <v-col md="4" class="pa-2">
                
            </v-col>
        </v-row>
    </v-container>

    <!-- Footer -->
      <v-container max-width="100%" class="mt-6 bg-secondary">
        <v-row>
            <v-col md="4">
                <v-card height="300px" color="secondary" flat>
                    <v-card-title>Subscribe to our mailing list</v-card-title>
                    <v-card-text>Get the latest new, health tips, and hospital updates deliverd to your inbox. </v-card-text>
                    <v-text-field v-model="inputValue" label="Email address" outlined class="ma-4">
                        <template v-slot:append-inner>
                            <v-btn color="primary">Subscribe</v-btn>
                        </template>
                    </v-text-field>
                    <div class="text-center mb-4">
                        <p>Follow us on:</p>
                        <v-icon icon="mdi-instagram"></v-icon>
                        <v-icon icon="mdi-twitter"></v-icon>
                        <v-icon icon="mdi-facebook"></v-icon>
                    </div>
                </v-card>
            </v-col>

            <v-col md="4">
                <v-card height="300px" color="secondary" flat>
                    <v-card-title>contact information</v-card-title>
                    <v-card-text>
                        <p>
                            <v-icon icon="mdi-map-marker-radius-outline"></v-icon>
                            Uzima Hospitals
                        </p>
                        <p>123, Main Street Madaraka, Nairobi</p>
                        <p>
                            <v-icon icon="mdi-phone-outline"></v-icon>
                            +25471234578
                        </p>
                        <p>
                            <v-icon icon="mdi-email-outline"></v-icon>
                            info@uzimahosptials.com
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col>
                <v-card height="300px" color="secondary" flat>
                    <v-card-title>Quick Links</v-card-title>
                    <v-card-text>Avout us</v-card-text>
                    <v-card-text>Clinics</v-card-text>
                    <v-card-text>Find a Doctor</v-card-text>
                    <v-card-text>News and Events</v-card-text>
                </v-card>
            </v-col>
        </v-row>
      </v-container>
</template>