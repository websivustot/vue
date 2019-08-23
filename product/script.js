var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/vmSocks-green.png',
        link: '#product',
        inventory: 8,
        show: true,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId:1234, 
                variantColor: "green",
                variantImage: './assets/vmSocks-green.png'
            },
            {
                variantId:5678,
                variantColor: "black",
                variantImage: './assets/vmSocks-black.png'
            }
        ],
        sizes: [
            {
                sizeId:3,
                sizeName: "large"
            },
            {
                sizeId:2,
                sizeName: "middle"
            },
            {
                sizeId:1,
                sizeName: "small"
            }
        ],
        cart: 0        
    },
    methods: {
        addToCart(){            
            this.cart += 1;
        },
        updateProduct(variantImage){
            this.image = variantImage;
        }
    }
})