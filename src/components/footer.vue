<script>
export default {
  name: 'footer'
}
</script>


<template>
    <footer>
        <div class="container-fluid">
            <div class="row contactinfo">
                <div class="col-md-4">
                    <ul>
                    <li><i class="fa fa-phone" aria-hidden="true"></i></li>
                    <li>+56 9 8492 3552</li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <ul>
                    <li><i class="fa fa-life-ring" aria-hidden="true"></i></li>
                    <li>informacion@ibatido.cl</li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <ul>
                    <li><i class="fa fa-clock-o" aria-hidden="true"></i></li>
                    <li>Lun - Vie / 09:00 - 18:00</li>
                    </ul>
                </div>
                </div>
                <div class="row footerinfo">
                <div class="col-md-3">
                    <div class="logo">
                        <router-link class="navbar-brand" to="/"><img src="../assets/ibatidos.png" alt=""/></router-link>
                        <br>
                        <br>
                    </div>
                </div>
                <div class="col-md-3">
                    <ul>
                    <li class="title">Productos destacados</li>
                    <li><a href="">producto 1</a></li>
                    <li><a href="">producto 2</a></li>
                    <li><a href="">producto 3</a></li>
                    <li><a href="">producto 4</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <ul>
                    <li class="title">Nuestra compañia</li>
                    <li><a href="">Quienes Somos</a></li>
                    <li><a href="">Delivery</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <ul>
                    <li class="title">Su cuenta</li>
                    <li><a href="">Carrito de compras</a></li>
                    <li><a href="">Información personal</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    footer .contactinfo ul li i{
        color: #47AD33;
        font-size: 50px;
        position: relative;
        top: 12px;
        left: -10px;
    }
    footer .contactinfo ul li{
        list-style: none;
        color:#fff;
        display:inline-block;
    }

    footer .contactinfo,footer .footerinfo{
        padding-bottom: 20px; 
        border-bottom: 1px solid #32373d;
        background: #111;
    }

    footer .footerinfo{
        padding-top: 20px;
    }

    @media (min-width:991px){
        footer .container {
            padding: 20px 0px;
        }
    }

    footer .footerinfo ul li.title{
        text-transform: uppercase;
        font-size: 14px;
        margin-bottom: 10px;
        color: #fff;
    }

    footer .footerinfo ul li{
        list-style: none;
    }

    footer .footerinfo ul li a {
        color: #898d90;
        font-size: 12px;
    }

    footer .footerinfo ul li a:hover {
        color: #47AD33;
    }

    footer .postfooter h5{
        color: #fff;
        text-align: center;
        position: relative;
        top: 8px;
    }

    footer .postfooter{
        padding: 15px 0px;
        background: #111;
    }

    footer .newsletter li{
        list-style: none;
        display: inline-block;
    }

    footer .newsletter li button{
        margin-left: -8px;
        margin-top: -1px;
        border: 1px solid transparent;
        border-radius: 3px;
        background: #24babc;
        color: #fff;
        font-weight: 100px;
    }

    footer .newsletter li input{
        border-radius: 3px;
        border: 1px solid transparent;
        background: #3a424b;
        color: #fff;
    }

    footer .newsletter li input:focus,footer .newsletter li input:active{
        border: 1px solid transparent !important;
    }

    footer .newsletter li input:focus{
        border: none;
    }

    footer .mediospagos{
        max-height: 40px;
        margin: 0 auto;
        display: block;
    }

    .logo a{
        text-decoration: none;
        position: relative;
        top: 10px;
    }
    .logo h3{
        font-style: italic;
        font-size: 50px;
        color: #fff;
        font-family: "AvenirNextLTPro-Regular";
    }
    .logo p{
        margin-top: -20px;
        font-size: 10px;
        color: #fff;
        font-family: "AvenirNextLTPro-Regular";
    }

    @media (max-width:768px){
        footer .footerinfo .col-md-3{
            text-align:center;
        }

        footer .footerinfo ul{
            padding:0;
        }
    }

    .logo img{
        max-width: 200px;;
    }
</style>
