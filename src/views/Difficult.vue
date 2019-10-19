<template>
    <div class="design">
        <div class="fondo">
          
            <div>
    <b-card-group deck>
    <b-card title="Difficulty Level" img-src="data:image/jpeg;base64,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" img-alt="Image" img-top id="diff" style="height:35em;">
    <div><b-button id="back1"><a href="./homee" style="color:white">BACK</a></b-button></div>
      <b-card-text>
        <br>
      <div>
        <b-form-radio v-model="selected" name="some-radios" value="A" class="radiobtn">Easy</b-form-radio>
        <br>
        <b-form-radio v-model="selected" name="some-radios" value="B" class="radiobtn">Medium</b-form-radio>
        <br>
        <b-form-radio v-model="selected" name="some-radios" value="B" class="radiobtn">Difficult</b-form-radio>
      </div>
      <div><b-button id="next"><a href="./subject" style="color:white">NEXT</a></b-button></div>
      
      </b-card-text>
      
      </b-card>
    </b-card-group>
            </div>
        </div>
    </div>
</template>


<style>
.design{
	width:100%;
	margin:auto;
	max-width:525px;
	min-height:700px;
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
.radiobtn{
  text-align:left;
  margin-left: 8em;
  border-radius: 25px;  
}
#next{
  background: #64dd17 ;
  font-size: 25px;
  color: white;
  position:absolute;
  z-index:0;
  margin: auto;
  margin-top: 2em;
  margin-bottom: 4em;
  margin-left: -2em;
  width: 4.5em;
  border-radius: 10px;  
  padding: 0.3em;
 
}

#back1{
  background: #64dd17 ;
  font-size: 16px;
  color: white;
  position:absolute;
  z-index:0;
  margin: auto;
  margin-top: -17em;
  margin-bottom: 4em;
  margin-left: -11.5em;
  width: 4.5em;
  border-radius: 10px;  
  padding: 0.3em;
}


</style>


<script>
  export default {
    data() {
      return {
        selected: 'first',
        options: [
          { text: 'First radio', value: 'first' },
          { text: 'Second radio', value: 'second' },
          { text: 'Third radio', value: 'third' }
        ]
      }
    },
    methods:{
    difficult:function(dificultad){
      dificultad = selected

      }
    },
  }
</script>

