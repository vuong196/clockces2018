<template>
	<div class="searchform">
		<h1> Your IP is {{ ip }}</h1>
	</div>
</template>

<script>
import axios from "axios";
export default{
	name: 'Search',
	date () {
		return {
			ip:"",
		}
	},
	mounted () {
		axios({ method: "GET", "url":"https://httpbin.org/ip"}).then(result =>{
			this.ip= result.origin;
			console.origin;
		}, error =>{
			console.error(error);
		});
	},
	methods: {
		sendData () {
			axios({ method: "POST", "url":"https://httpbin.org/ip"})
		}
	}
}	
</script>

<style>
	h1{
		font-weight: normal;
	}
</style>