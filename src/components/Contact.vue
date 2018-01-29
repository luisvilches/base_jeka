<template>
  <div class="inner contact">
      <div class="col-md-12 title">
            <br>
            <h2 class="text-center">¡Contactenos!</h2>
            <hr>
        </div>
      <div class="contact-form pd">
          <form id="contact-us" method="post" action="#">
              <div class="col-xs-6 wow animated slideInLeft" data-wow-delay=".5s">
                  <input type="text" name="name" id="name" required="required" class="form" placeholder="Nombre" />
                  <input type="email" name="mail" id="mail" required="required" class="form" placeholder="Correo Electrónico" />
                  <input type="text" name="subject" id="subject" required="required" class="form" placeholder="Asunto" />
              </div>
              <div class="col-xs-6 wow animated slideInRight" data-wow-delay=".5s">
                  <textarea name="message" id="message" class="form textarea"  placeholder="Mensaje"></textarea>
              </div>
              <div class="relative fullwidth col-xs-12">
                  <button type="submit" id="submit" name="submit" class="form-btn semibold">Enviar Mensaje</button> 
              </div>
              <div class="clear"></div>
          </form>
          <div class="mail-message-area">
              <div class="alert gray-bg mail-message not-visible-message">
                  <strong>Thank You !</strong> Your email has been delivered.
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

  #contact{
    padding:10px 0 10px;
  }

  .contact-text{
    margin:45px auto;
  }

  .mail-message-area{
    width:100%;
    padding:0 15px;
  }

  .mail-message{
    width: 100%;
    background:rgba(255,255,255, 0.8) !important;
    -webkit-transition: all 0.7s;
    -moz-transition: all 0.7s;
    transition: all 0.7s;
    margin:0 auto;
    border-radius: 0;
  }

  .not-visible-message{
    height:0px;
    opacity: 0;
  }

  .visible-message{
    height:auto;
    opacity: 1;
    margin:25px auto 0;
  }

  .form{
    width: 100%;
    padding: 15px;
    background:#f8f8f8;
    border:1px solid rgba(0, 0, 0, 0.075);
    margin-bottom:25px;
    color:#727272 !important;
    font-size:13px;
    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }

  .form:hover{
    border:1px solid #47AD33;
  }

  .form:focus{
    color: white;
    outline: none;
    border:1px solid #47AD33;
  }

  .textarea{
    height: 200px;
    max-height: 200px;
    max-width: 100%;
  }
  

  .button{
    padding:8px 12px;
    background:#0A5175;
    display: block;
    width:120px;
    margin:10px 0 0px 0;
    border-radius:3px;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    text-align:center;
    font-size:0.8em;
    box-shadow: 0px 1px 4px rgba(0,0,0, 0.10);
    -moz-box-shadow: 0px 1px 4px rgba(0,0,0, 0.10);
    -webkit-box-shadow: 0px 1px 4px rgba(0,0,0, 0.10);
  }

  .button:hover{
    background:#47AD33;
    color:white;
  }


  .form-btn{
    width:180px;
    display: block;
    height: auto;
    padding:15px;
    color:#fff;
    background:#47AD33;
    border:none;
    border-radius:3px;
    outline: none;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    margin:auto;
    box-shadow: 0px 1px 4px rgba(0,0,0, 0.10);
    -moz-box-shadow: 0px 1px 4px rgba(0,0,0, 0.10);
    -webkit-box-shadow: 0px 1px 4px rgba(0,0,0, 0.10);
  }

  .form-btn:hover{
    background:#111;
    color: white;
    border:none;
  }

  .form-btn:active{
    opacity: 0.9;
  }
  center{
    margin-top:330px;
  }
  input {
      position: relative;
      z-index: 9999;
  }

  .pd{
    padding:80px;
  }

  .title{
    padding-top: 30px;
  }

  hr{
    max-width: 100px;
    border: 2px solid #47AD33;
  }
</style>
