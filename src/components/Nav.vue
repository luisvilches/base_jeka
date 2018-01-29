<script>
export default {
  name: 'Navbar',
  props: ['loginState']
}
</script>

<template>
    <div>
        <nav class="navbar navbar-fixed-top navbar-toggleable-md ">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
            <router-link class="navbar-brand" to="/"><img src="../assets/ibatidos.png" alt=""/></router-link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto"></ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/Productos">Productos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">Blog</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">Contacto</router-link>
                    </li>
                    <li class="shop hidden-xs hidden-sm">
                        <router-link class="nav-link" to="/shop"><i class="fa fa-shopping-bag" aria-hidden="true"></i></router-link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0 hidden-xs hidden-sm">
                    <input class="form-control mr-sm-2 " type="search" placeholder="Buscar..." aria-label="Buscar...">
                </form>
                <ul class="navbar-nav" v-if="loginState">
                    <li class="nav-item"><router-link class="nav-link" to="/account">Mi Cuenta</router-link></li>
                    <li class="shop shows-xs">
                        <router-link class="nav-link text-right" to="/shop"><i class="fa fa-shopping-bag" aria-hidden="true"></i></router-link>
                    </li>
                </ul>
                <ul class="navbar-nav" v-else="loginState">
                    <li class="nav-item nav-link"> <router-link to="/register">Registrar</router-link> / <router-link to="login">Iniciar</router-link></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<style scoped>
    nav.navtop{
        height: 30px;
        background: #409e2d;
    }
    nav.navtop p{
        padding: 3px;
        color: #fff;
        font-size: 14px;
    }
    nav.navbar{
        border-top: 2px solid #47AD33;
        border-bottom: 3px solid #47AD33;
        background: linear-gradient(-30deg, #47AD33 75%, rgba(255, 255, 255, 0.5) 75%);
    }
    .navbar-brand img{
        max-width: 200px;
    }

    a{
        color: #fff;
    }

    a:hover{
        color: #111;
    }

    form{
        margin-left: 20px;
    }

    .login{
        color: #fff;
    }

    .mr20{
        margin-right: 20px;
    }
    .shop{
        margin: auto 20px;
    }

    .fa.fa-bars{
        position: relative;
        top: 15px;
        font-size: 30px;
        color: #47AD33;
    }

    .collapsed .fa.fa-bars{
        color: #fff !important;
    }

    @media (max-width:768px){
        nav.navbar{
            background: linear-gradient(-30deg, #47AD33 30%, rgba(255, 255, 255, 0.5) 30%);
        }
        .hidden-xs{
            display: none;
        }
        .shows-xs{
            display: block !important;
        }

        .shop a{
            color: #fff !important;
            font-size: 30px;
        }
    }

     @media (min-width:768px){
        .shows-xs{
            display: none !important;
        }
    }


    /*.navbar-nav .nav-link {
        color: #111;
        padding-right: 0;
        padding-left: 0;
    }*/
</style>
