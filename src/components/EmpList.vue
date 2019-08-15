<template>
	<div class="container">
		<table class="table table-bordered">
				<caption>雇员信息列表</caption>
				<thead>
					<tr>
						<th>姓名</th>
						<th>年龄</th>
						<th>性别</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="emp in emps">
						<td>{{emp.name}}</td>
						<td>{{emp.age}}</td>
						<td>{{emp.sex}}</td>
						<td>
							<button class="btn-default btn" @click="deleteEmp(emp.eid)">删除</button>
							<button class="btn-default btn" @click="updateEmp(emp.eid)">修改</button>
						</td>
					</tr>

				</tbody>
			</table>
	</div>
</template>

<script>
	export default {
	  name: 'EmpList',
	  data () {
	    return {
			emps:[]	
	    }
	  },
	  methods:{
		  getEmps:function(){
			  this.$http.get("http://127.0.0.1:8081/emp").then(
					function(rs){
						this.emps = rs.body;
					}
			  )
		  },
		  deleteEmp:function(eid){
			   this.$http.delete("http://127.0.0.1:8081/emp",{
				   params:{
					   eid:eid
				   }
			   }).then(
					function(rs){
						this.emps = rs.body;
					}
			  )
		  },
		  updateEmp:function(eid){
			this.$router.push({
				path:"/EmpUpdate",
				query:{
					eid:eid
				}
			})
		  }
	  },
	  created() {
	  	this.getEmps();
	  }
	}
</script>

<style scoped>
</style>
