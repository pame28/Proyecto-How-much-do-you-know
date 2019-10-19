<template>

<div class="design">

<div class="fondo">
  <label id="tittle">HOW MUCH DO YOU KNOW? </label>
<img src="http://catchingfire.ca/wp-content/uploads/2016/09/question-mark-square-01.png" width="200px">
<div><b-button id="next1"><a href="./difficult" style="color:white">NEXT</a></b-button></div>
<div><b-button id="scores" variant="primary"><a href="./home/table" style="color:white">Scores</a></b-button></div>
<br>
    </div>

<div>
  <b-dropdown id="config" text="Configuration" variant="primary" class="m-2">
    <b-dropdown-item href="#">Language</b-dropdown-item>
	 
    <b-dropdown-item href="#" v-b-modal.modal-tall>Help</b-dropdown-item>
    
  </b-dropdown>
</div>

<div>
  <b-modal id="modal-tall" title="HELP">
    <p class="my-4" v-for="i in 1" :key="i">
      INFORMATION INFORMATION INFORMATION INFORMATION INFORMATION INFORMATION INFORMATION INFORMATION INFORMATION INFORMATION INFORMATION INFORMATION INFORMATION INFORMATION INFORMATION INFORMATION INFORMATION INFORMATION INFORMATION INFORMATION
    </p>
  </b-modal>

</div>

<div>
  <b-dropdown id="dropdown-dropright" dropright text="Language" variant="primary" class="m-2" style="width:8.5em;">
    <b-dropdown-item href="#" class="mb-1" @click="showMsgBoxTwo">Spanish</b-dropdown-item>
    <b-dropdown-item href="#" class="mb-1" @click="showMsgBoxTwo">English</b-dropdown-item>
  </b-dropdown>
</div>

  </div>
</template>


<style>
#tittle{
  font-family: 'Times New Roman', Times, serif;
  font-size: 25px;
  color: aliceblue;
  margin-top: -4em;
}

#config{
	padding-block-start: 22em;
  
}
#next1{
  background: #64dd17 ;
  font-size: 25px;
  color: white;
  position:absolute;
  z-index:0;
  margin: 4em;
  margin-top: 11em;
  margin-bottom: 9em;
  width: 4.5em;
  border-radius: 10px;  
  padding: 0.3em;
 
}

#scores{
  background: #1e88e5;
  font-size: 17px;
  color: white;
  position:absolute;
  z-index:0;
  margin: 0em;
  margin-top: 9em;
  border-radius: 5px;  
  width: 8em;
  margin-left: -4em;
  padding: 0.3em;
}

.design{
	width:100%;
	margin:auto;
	max-width:525px;
	min-height:600px;
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
    data() {
      return {
        boxTwo: ''
      }
    },
    methods: {
  
      showMsgBoxTwo() {
        this.boxTwo = ''
        this.$bvModal.msgBoxOk('Are you sure you want to change the language?', {
          title: 'Language',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
          .then(value => {
            this.boxTwo = value
          })
          .catch(err => {
            // An error occurred
          })
      }
    }
  }
</script>>