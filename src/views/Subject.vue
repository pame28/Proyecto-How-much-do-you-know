<template>
    <div class="design">
        <div class="fondo">
          
            <div>
    <b-card-group deck>
    <b-card title="SUBJECT" img-src="https://www.thecompleteuniversityguide.co.uk/media/4885491/banner_image.jpg" img-alt="Image" img-top id="diff" style="height:35em;">
    <div><b-button id="back2"><a href="./homee" style="color:white">BACK</a></b-button></div>
      <b-card-text>
        <br>
      <div>
        <b-form-radio v-model="selected" name="some-radios" value="A" class="radiobtn">History</b-form-radio>
        <br>
        <b-form-radio v-model="selected" name="some-radios" value="B" class="radiobtn">Math</b-form-radio>
        <br>
        <b-form-radio v-model="selected" name="some-radios" value="B" class="radiobtn">Technology</b-form-radio>
      </div>
      <div><b-button id="next2"><a href="./subject" style="color:white">NEXT</a></b-button></div>
      
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
#next2{
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

#back2{
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
        dificultad: '',
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

