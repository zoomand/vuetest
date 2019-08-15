<template>
	<div>
		<table align="center">
			<img v-bind:src="imgname"/>
			<tr><input type="file" name="file" /></tr>
			<tr>
				<td>&nbsp;</td>
			</tr>
			<tr><input type="button" value="上传" @click="uploadEmp()"/></tr>
		</table>
	</div>
</template>

<script>
	export default{
		name:'EmpUpload',
		data:function(){
			return{
				imgname:''
			}
		},
		methods:{
			uploadEmp:function(){
				var formData = new FormData();
				formData.append("file",document.querySelector("input[name=file]").files[0]);
				this.$http.post("http://127.0.0.1:8081/upload",formData,{
					headers:{
						"Content-Type":"multipart/form-data"
					}
				}).then(
					function(rs){
						this.imgname='http://127.0.0.1:8081/test.jpg';
					}
				)
			}
		}
	}
</script>

<style>
</style>
