<script>
export default {
  name: 'productos',
  data () {
    return {
      products: []
    }
  },
  props: ['products']
}
</script>

<template>
    <div>
        <div class="row">
            <div class="col-md-3 text-center" v-for="(item,index) in products" :key="index">

                <div class='product--green'>
                    <div class='product_inner relative'>
                        <img :src="item.img" width='200'>
                        <div class="desc">
                            <p class="desc1">{{item.name}}</p>
                            <p class="desc2"><b>${{item.price}}</b></p>
                            <button class="desc3"><i class="material-icons">shopping_cart</i> Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    h2{
        font-size: 25px;
    }
    
    .product, .product--blue, .product--orange, .product--red, .product--green, .product--yellow, .product--pink {
        box-shadow: 0px 0px 50px 0px rgba(200,200,200,0.6);
        height: auto;
        min-height: 460px;
        max-height: 460px;
        border-radius: 15px;
        padding: 2em;
        margin: 1em;
        overflow: hidden;
        position: relative;
        -webkit-box-flex: 1;
            -ms-flex: auto;
                flex: auto;
    }
    
    .product--green {
        background: linear-gradient(-25deg, #47AD33 60%, rgba(255, 255, 255, 0.5) 60%);
    }
    
    .product img, .product--blue img, .product--orange img, .product--red img, .product--green img, .product--yellow img, .product--pink img {
        max-width: 100%;
        height: auto !important;
        text-align: center;
    }
    .product_inner {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-flow: column wrap;
                flex-flow: column wrap;
    }
    .product_inner p {
        color: rgba(255, 255, 255, 0.9);
    }
    .product_inner button {
        border: 1px solid rgba(255, 255, 255, 0.5);
        width: 100%;
        color: #FFF;
        border-radius: 3px;
        padding: 10px 20px;
        margin: 1em 0 0 0;
        background: none;
        cursor: pointer;
        -webkit-transition: background ease-in .25s;
        transition: background ease-in .25s;
    }
    .product_inner button:hover {
        background: white;
        color: #2B2D42;
    }

    .product_inner button i{
        position: relative;
        top: 5px;
    }
    
    .product_overlay {
        background: rgba(255, 255, 255, 0.9);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        -webkit-transform: translateY(-500px);
                transform: translateY(-500px);
        opacity: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-flow: column wrap;
                flex-flow: column wrap;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
    }
    .product_overlay h2 {
        color: rgba(43, 45, 66, 0.7);
        font-size: 1.2em;
        margin: 1em 0;
    }
    .product_overlay i {
        color: rgba(43, 45, 66, 0.7);
        font-size: 1.5em;
    }

    .relative{
        position: relative;
    }

    .desc1 {
        position: absolute;
        left: 0;
        right: 0;
        top:220px;
    }
    .desc2 {
        position: absolute;
        left: 0;
        right: 0;
        top:310px;
    }
    .desc3 {
        position: absolute;
        left: 0;
        right: 0;
        top:330px;
    }

</style>
