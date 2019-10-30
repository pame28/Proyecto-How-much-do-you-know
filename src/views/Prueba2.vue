<template>
<div>
     <b-form-group v-bind:label="data[currentQue].pregunta">
         <div v-bind:key="item" v-for="item in data[currentQue].AnsInc">
            <b-form-radio v-model="selected" name="some-radios" v-bind:value="item">{{item}}</b-form-radio>
         </div>
     <b-form-radio v-model="selected" name="some-radios" v-bind:value="data[currentQue].AnsC">{{data[currentQue].AnsC}}</b-form-radio>
    </b-form-group>
    <b-button variant="success" @click="checkRadio(data[currentQue].AnsC)">SUBMIT</b-button>
</div>
</template>
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
    fetch('https://opentdb.com/api.php?amount=10')
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