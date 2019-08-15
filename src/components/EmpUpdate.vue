<template>
  <div class="form-horizontal">
			<div class="form-group">
					<label for="firstname" class="col-sm-1 control-label">姓名</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" id="name" v-model="name" placeholder="请输入姓名">
					</div>
				</div>
				<div class="form-group">
					<label for="lastname" class="col-sm-1 control-label">年龄</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" id="age" v-model="age" placeholder="请输入年龄">
					</div>
				</div>
				<div class="form-group">
					<label for="lastname" class="col-sm-1 control-label">性别</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" id="sex" v-model="sex" placeholder="请输入性别">
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-10 col-sm-offset-1">
						<button type="button" class="btn btn-default" @click="updateEmp()">修改</button>
					</div>
				</div>
  </div>
</template>

<script>
export default {
  name: 'EmpAdd',
  data () {
    return {
		eid:0,
		name:'',
		age:0,
		sex:'male'	
    }
  },
	methods:{
		updateEmp:function(){
			var _this = this;
			this.$http.put("http://127.0.0.1:8081/emp",{
				eid:this.eid,
				name:this.name,
				age:this.age,
				sex:this.sex
			}).then(
				function(){
					 this.$router.push("/EmpList");
				}
			)
		},
		getEmp:function(){
			var eid = this.$route.query.eid;
			console.log(eid);
			this.$http.get("http://127.0.0.1:8081/emp1",{
				params:{
					eid:eid
				}
			}).then(
				function(rs){
					this.eid = rs.body.eid;
					this.name = rs.body.name;
					this.age = rs.body.age;
					this.sex = rs.body.sex;
				}
			)
		}
	},
	created() {
		this.getEmp();
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
