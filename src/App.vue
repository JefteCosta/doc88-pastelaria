<template>
  
  <div id="app">
    <div class="head">
      <div class="container">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8 ">
            <img class= "img-logo rounded mx-auto img-fluid" src="./assets/Logo.svg" alt="logo pastelaria">
          </div>
          <div class="col-md-2"></div>
        </div>
        <div class="row">
          <div class="col-md-4 img-pastel mr-auto">
            <img class= "pastel" src="./assets/pastel-paralax.png" alt="pastel">
          </div>
        </div>
        <div class="row">
          <div class="col app-form ">
            <div class=" app-form-card ">
              <div class="app-from-card-header">
                <strong>Monte aqui o seu cardapio. O que está esperando!</strong>
              </div>
              <div class="app-form-card-body">
                <form class="form-pastel needs-validation" @submit.prevent="AddTodo(todo)" novalidate>
                  <div class="form-row app-form-for">
                      <div class="col-md-3 ml-auto app-form-radio">
                          <div class="custom-control custom-radio custom-control-inline">
                              <input type="radio" id="checked1" v-model="todo.checked" name="checked" class="custom-control-input" value="Pastel"> 
                              <label class="custom-control-label" for="checked1">Comida</label>
                              </div>
                              <div class="custom-control custom-radio custom-control-inline">
                              <input type="radio" id="checked2" v-model="todo.checked" name="checked" class="custom-control-input" value="Bebida">
                              <label class="custom-control-label" for="checked2">Bebida</label>
                          </div>
                      </div>
                  </div>
                  <div class="form-row">
                      <div class="col-md-5 mb-3">
                          <input type="text" class="form-control" v-model="todo.pedido" id="validationTooltip01" maxlength="60" placeholder="Titulo do Pedido" required>
                          <div class="valid-tooltip">
                              Tudo certo!
                          </div>
                      </div>
                      <div class="col-md-5 mb-3">
                                
                          <input type="text" class="form-control" v-model="todo.sabor" id="validationTooltip02" maxlength="60" placeholder="Sabor"  required>
                          <div class="valid-tooltip">
                              Tudo certo!
                          </div>
                      </div>
                      <div class="col-md-2 mb-3">
                          <div class="input-group">
                              <div class="input-group-prepend">
                                  <span class="input-group-text" id="validationTooltipUsernamePrepend">R$</span>
                              </div>
                              <input type="" class="form-control" id="validationTooltipUsername" v-model="todo.price" placeholder="0.00" aria-describedby="validationTooltipUsernamePrepend" required>
                              <div class="invalid-tooltip">
                                  Por favor, Digite um valor.
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  <div class="form-row">
                      <div class=" col mb-3">
                          <textarea class="form-control" id="validationTextarea" v-model="todo.description" placeholder="Descrição do Pedido" required></textarea>
                          <div class="invalid-tooltip">
                              Por favor descreva seu pedido.
                          </div>
                      </div>
                  </div>
                  <div class="form-row">
                    <div class="col mb-3">
                      <div class="custom-file">
                        <input type="file" class="custom-file-input" @change="onFileChange" id="validatedCustomFile" required>
                        <label class="custom-file-label" for="validatedCustomFile"> aqui a imagem do seu pedido ou clique para carregar a imagens</label>
                        <div class="invalid-feedback">por favor selecione sua imagenm</div>
                        
                      </div>
                    </div>
                  </div>
                  <div class="form-row app-form-btn">
                      <div class="col-md-6 float-right" style="text-align:right;">
                          <button class="btn btn-lg btn-danger app-form-btn-limpar" type="reset">Limpar</button>
                      </div>
                      <div class="col-md-6 float-left">
                          <button class="btn btn-lg btn-warning app-form-btn-Cadastrar" type="submit" >Cadastrar</button>
                      </div>
                  </div>
                </form>
              </div>
            </div>
            <img :src="todo.img">
          </div>
        </div>
    </div>
   <FormList v-for="t in todos" :key="t.id" :todo="t"/>
    </div>
    
  </div>
</template>

<script>
import FormList from './components/FormList';

export default {
  name: 'App',
  components: {FormList},
  data() {
    return {selectedImg: null, todos:[], todo:{status: false, img: null}}
  },
  methods: {
    AddTodo(todo){
      todo.id = Date.now();
      this.todos.push(todo);
      this.todo = {status:false, img:null};
      
    },
    onFileChange(event) {
      this.selectedImg = event.target.files[0];
      var input = event.target;
            // Ensure that you have a file before attempting to read it
            if (input.files && input.files[0]) {
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    //aqui é onde eu setaria a url da imagem que estou manipulando, mas como ela é um objeto do tipo categoria não sei como acessar essa propriedade dela
                    this.todo.img = e.target.result;

                }
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input.files[0]);
            }
      
      
    },
  
  }
  

};

</script>

<style lang="scss">

.head{
  background-image: url('./assets/wave.svg');
  background-repeat: no-repeat;
  background-position: bottom;
  height:500px;
  margin: 0px auto;
  padding: 0px;
}
.head .img-logo{
    
    margin-top: 30px;
}
.img-pastel{
  text-align: left;
  margin-top: -300px;
  z-index: 1;
  margin-left: -280px;
 
}
.img-pastel .pastel{
  height: 500px;
  margin-left: 0px;
  padding: 0px;
  z-index: 1;
  display: block;
  transition:  margin-left 2s,filter 1s, z-index 1s ;
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(5px);
}
.pastel:hover{
  margin-left: 13px;
  z-index: -1;
  filter: blur(0px);
}
.app-form{
  background-image: url('./assets/pasteis-img.png');
  padding-top: 100px;
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 250px;
  margin-top: -300px;
}
.app-form .form-pastel{
  z-index: -1;
  transition: z-index 1s;
}
.form-pastel:hover{
  z-index: 1;

}
.app-form-card{
  border-radius: 15px!important;
  background-color: #fff!important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.app-form-card .app-from-card-header{
  background-color: #ffca00;
  padding-left: 50px;
  padding-right: 10px;
  padding-top: 20px;
  padding-bottom: 50px;
  border-radius: 15px 15px 0 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #a03400;
  font-size: 20px;
}
.app-form-card-body{

  padding-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
  margin-bottom: 30px;
}
.app-form-radio{
  text-align: right;
  padding-bottom: 30px;
  

}
.app-form-for{
  margin-top: -130px;
}
.app-form-btn{
  margin-top: 0px;
  position: relative;
  top: 20px;
}
.app-form-btn-limpar{
  padding-left: 50px!important;
  padding-right: 50px!important;
  font-size: 20px;
  font-weight: bold!important;
  border-radius: 25px!important;

}
.app-form-btn-Cadastrar{
  padding-left: 50px!important;
  padding-right: 50px!important;
  font-size: 20px;
  font-weight: bold!important;
  color: #a03400!important;
  border-radius: 25px!important;

}
@media only screen and (max-device-width: 671px) {
  body {
    
  }
  .app-form{
  background-image: url('./assets/pasteis-img.png');

  padding-top: 100px;
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 250px;
  margin-top: -30px;
}
.img-pastel{
  display: none;
 
}

}
//inicio do css app.vue
body{
  background-image: url('./assets/pattern.png');
}
#app {
 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
}
</style>
