<template>
	<div class="pai">
		<div class="mae">
			<div class="PC">
				<h1>Pontos de coleta</h1>
			</div>
			<div class="paragrafo">
				<h3>Saiba onde está o ponto mais próximo da sua casa!</h3>
			</div>
			<div class="legenda">
				<h5>Ecobags</h5>
				<h5>Caçamba da comlurb</h5>
			</div>
			<div class="bola-verde"></div>
			<div class="bola-laranja"></div>
		</div>
		<div class="map">
    		<gmap-map :center="center" :zoom="17" style="width: 100%; height: 290px">
     		<gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position"  :clickable="true" :draggable="true" @click="center=m.position"> 
      		</gmap-marker>
    		</gmap-map>
  		</div>
	</div>									
</template>
<!-- <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDuvwT5GKbjFg1YDkSe8VuCQKT9R4GuIbQ&callback=initMap">
</script> -->

<script>
	import * as VueGoogleMaps from 'vue2-google-maps';
  	import Vue from 'vue';

  	Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyDpERu3FYPh0oJetlNFawdT3b3WftK5Uec',
      v: 'OPTIONAL VERSION NUMBER',
      // libraries: 'places', //// If you need to use place input
    }
  });

  	 export default {
    data () {
      return {
        center: {lat: -22.935043, lng: -43.201247},
        markers: [
        {
          position: {lat: -22.935043, lng: -43.201247} 
      	}, 
      	{
          position: {lat: -22.935043, lng: -43.201247}
        },
        {
        	position:{lat: -22.934836, lng: -43.202392}
        },
        {
        	position:{lat: -22.934401, lng: -43.202381}
        },
        {
        	position:{lat: -22.933334, lng: -43.202767}
        },
        {
        	position:{lat: -22.933057, lng:-43.202724}
        },
        {
        	position:{lat:-22.932419,  lng:-43.202820}
        },
        {
        	position:{lat: -22.932251, lng: -43.202799}
        },
        {
        	position:{lat: -22.932864, lng: -43.203116}
        },
        {
        	position:{lat: -22.933738, lng: -43.202901}
        },
        {
        	position:{lat: -22.933822, lng: -43.203319}
        },
        {
        	position:{lat: -22.933728, lng: -43.203416}
        },
        {
        	position:{lat: -22.933891, lng: -43.203475}
        },
        {
        	position:{lat: -22.933975, lng: -43.203083}
        },
        {
        	position:{lat: -22.934617, lng: -43.202793}
        },
       	{
       		position:{lat: -22.934973, lng: -43.202890}
       	},
       	{
       		position:{lat: -22.935511, lng: -43.202922}
       	}
        ]
      }
    }
  }
</script>
 
<style scoped>
	.mae{
		margin-left: 25px;
	}
	.PC{
		width: 160px;
		color: green;
	}
	.paragrafo{
		width: 280px;
		color: #85C226;
	}
	.legenda{
		color: orange;
		margin-left: 30px;
	}
	.bola-verde{
		border-radius: 50%;
    	display: inline-block;
    	height: 20px;
    	width: 20px;
    	background-color: green;
    	position: absolute;
    	top: 253px;
    	left: 27px;
	}
	.bola-laranja{

		border-radius: 50%;
    	display: inline-block;
    	height: 20px;
    	width: 20px;
    	background-color: orange;
    	position: absolute;
    	top: 290px;
    	left: 27px;
	}
	.map{
		width: 100%;
		height: 258px;
		background-color: grey;
	}

</style>