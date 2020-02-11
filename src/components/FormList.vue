<template>
    <div class="container-fuid">
      <div class="row row-show">
        <div class="show mx-auto">
          Veja como será apresentado ao cliente
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-3 align-middle" >
            <img :src="todo.img" class="img-thumbnail formlist-img-thumbnail rounded float-left" alt="pastel">
          </div>
          <div class="col-md-9">
            <div class="form-list-card">
              <div class="form-list-card-header">
                <div class="row">
                  <div class="col">
                    <p class="title">"{{todo.pedido}}"</p>
                  </div>
                  <div class="col">
                    <p class="price">R$ {{todo.price}}</p>
                  </div>
                </div>
              
              </div>
              <div class="form-list-card-body">
                <p>Pedido: {{todo.checked}}</p>
                <p>Sabor: {{todo.sabor}}</p>
                <p>Descrição: {{todo.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
</template>
<script>
export default {
  props:{
    todo: { type: Object, required: true}
  }
   
  }

</script>
<style lang="scss">
.form-list-card{
  border-radius: 15px!important;
  background-color: #fff!important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 15px;
   margin-left: -100px;
  z-index: -1;
}
.form-list-card-header{
  background-color: #e43636;
  padding-left: 50px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 15px 15px 0 0;
  

}
.form-list-card-header .title{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #ffca00 ;
  font-size: 25px;
  margin: 0px;
  
}
.form-list-card-header .price{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #fff ;
  font-size: 20px;
  text-align: right;
  margin: 0px;
}
.form-list-card-body{
  padding-left: 50px;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-right: 10px;
 

}
.row-show{
  border-color: #f44336!important;
  border-bottom: 1px solid;
  margin-top: 25px;
  margin-bottom: 50px;
  position: relative;
 
}
.row-show .show{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #e43636;
  font-size: 20px;
  font-weight: bold;
  position: relative;
  top: 35px;
  background-color: #ffffff;
  padding: 20px 10px 20px 10px;
  

}
.formlist-img-thumbnail{
  width: 230px;
 
  z-index: 1!important;
  position: relative;
  margin-top: 10px;

}
</style>