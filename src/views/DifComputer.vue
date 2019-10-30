<template>
    <div class="design">
        <div class="fondo">
           
		<div>
  <b-card
    title="INFORMATIC"
    img-src="http://www.back40foundation.org/wp-content/uploads/2017/08/question-marks-background-question-mark.png"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 100rem;"
    class="mb-2"
  >
    <b-card-text>
      <div>
     <b-form-group v-bind:label="data[currentQue].pregunta">
         <div v-bind:key="item" v-for="item in data[currentQue].AnsInc">
            <b-form-radio v-model="selected" name="some-radios" v-bind:value="item">{{item}}</b-form-radio>
         </div>
     <b-form-radio v-model="selected" name="some-radios" v-bind:value="data[currentQue].AnsC">{{data[currentQue].AnsC}}</b-form-radio>
    </b-form-group>
    <b-button variant="success" @click="checkRadio(data[currentQue].AnsC)">SUBMIT</b-button>
</div>
    </b-card-text>
  </b-card>
</div>

        </div>
    </div>
</template>
<style>
.design{
	width:100%;
	margin:auto;
	max-width:525px;
	min-height:800px;
	position:relative;
	background:url() no-repeat center;
	box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19);
}
.fondo{
	width:100%;
	height:100%;
	position:absolute;
	padding:90px 70px 50px 70px;
	background:rgba(36, 49, 49, 0.603);
}
</style>
<script>
export default {
    data(){
        return{
    hola:"prueba",
    data:[],
    selected:  "",
    currentQue: 0,
    texto:""

};
},
methods:{
     
    checkRadio(AnsC){
        if(AnsC == this.selected){
            this.$swal({
                title:'CORRECT!',
                popup:'success',
                type:'success'
            });
        }
        else{
            this.$swal({
                type: 'error',
                title: 'INCORRECT :(',
                confirmButtonColor: '#3085d6',
            });
        }
        this.currentQue ++;
    
}
},
mounted:function name(params){
    fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple')
   .then(data =>{
       return data.json();
   })
   .then(data => {
       data.results.forEach(element => {
           this.data.push({
               pregunta: element.question,
               AnsC:element.correct_answer,
               AnsInc:element.incorrect_answers
           });
       });
       console.log(this.data);
   });
},
};
</script>