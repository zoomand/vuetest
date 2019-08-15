<template>
  <div id="app">
		<nav class="navbar navbar-default " role="navigation">
				<div class="container-fluid">
					<div class="navbar-header">
						<a class="navbar-brand active" href="#">首页</a>
					</div>
					<div>
						<ul class="nav navbar-nav">
							<li>
								<router-link to="/">雇员新增</router-link>
							</li>
							<li>
								<router-link to="/EmpList">雇员列表</router-link>
							</li>
							<li>
								<router-link to="/EmpUpload">上传头像</router-link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		<router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  
}
</style>
