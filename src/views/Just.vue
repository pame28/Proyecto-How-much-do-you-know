<template>

<div class="design">

<div class="fondo">
  <label id="tittle">CATEGORIES</label>
<img src="http://catchingfire.ca/wp-content/uploads/2016/09/question-mark-square-01.png" width="200px" id="img"> 
</div>
<div>
  <b-dropdown id="config2" text="INFORMATIC" variant="primary" class="m-2">
    <b-dropdown-item href="#" @click="Facil_Computer()">Easy</b-dropdown-item>
    <b-dropdown-item href="#" @click="Dificil_Computer()">Difficult</b-dropdown-item>
  </b-dropdown>
</div>
<div>
  <b-dropdown id="config2" text="GEOGRAPHY" variant="primary" class="m-2">
    <b-dropdown-item href="#" @click="Facil_Math()">Easy</b-dropdown-item>
    <b-dropdown-item href="#" @click="Dificil_Math()">Difficult</b-dropdown-item>
  </b-dropdown>
</div>

<div>
  <b-dropdown id="config2" text="HISTORY" variant="primary" class="m-2">
    <b-dropdown-item href="#" @click="Facil_History()">Easy</b-dropdown-item>
    <b-dropdown-item href="#" @click="Dificil_History()">Difficult</b-dropdown-item>
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

#config2{
	padding-block-start: 2em;
  padding-block-end: 1em;
  display:table-caption;
}
#img{
  margin-bottom: -20em;
  margin-left: -7em;
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
      },
      Facil_Computer(){
          this.$router.push('/facilComputer')
      },
      Dificil_Computer(){
          this.$router.push('/difComputer')
      },
      Facil_Math(){
          this.$router.push('/facilGeo')
      },
      Dificil_Math(){
          this.$router.push('/difGeo')
      },
       Facil_History(){
          this.$router.push('/facilHist')
      },
      Dificil_History(){
          this.$router.push('/difHist')
      },
    }
  }
</script>