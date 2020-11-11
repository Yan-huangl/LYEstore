window.onload = ()=>{
	let load = document.getElementById('load'); //登录按钮
	let reg = document.getElementById('reg');   //注册按钮
	let zzc = document.getElementById('zzc');  //遮罩层
	let load_pic = document.getElementById('load-pic'); //登录图片按钮
	let reg_pic = document.getElementById('reg-pic'); //注册图片按钮
	let register = document.getElementById('register');
	let login_close = document.getElementById('login-close'); //关闭按钮
	let login_tag = document.getElementById('login-tag').getElementsByTagName('li');  //登录方式选项卡
	let login_tagnum = document.getElementById('login-tagnum').getElementsByClassName('tagnum'); //登录方式不同选项卡具体内容
	let  duanx = document.getElementById('duanx');  //短信登录
	let dxyzm = document.getElementById('dxyzm');  //短信验证码
	for(let i=0;i<login_tag.length;i++){			
		login_tag[i].onclick = ()=>{
			clearDis()
			clearTActive()
			login_tagnum[i].style.display = 'block';
			login_tag[i].getElementsByTagName('a')[0].className = 'login-tag-active';
		}
	}
	
	load.onclick = ()=>{
		loginCSH(0);//初始化页面
		setDisplay('block')
	}
	
	reg_pic.onclick = ()=>{
		loginCSH(2);//初始化页面
		setDisplay('block')
	}
	
	load_pic.onclick = ()=>{  
		loginCSH(0);//初始化页面
		setDisplay('block')
	}
	
	reg.onclick = ()=>{ //注册
		loginCSH(2);//初始化页面
		setDisplay('block')
	}
	
	login_close.onclick = ()=>{  //关闭按钮
		setDisplay('none')
	}
	
	duanx.onclick = ()=>{  //短信选项卡点击
		loginCSH(1);//初始化页面
		setDisplay('block')
	}
	
	dxyzm.onclick = ()=>{  //短信验证码选项卡点击
		loginCSH(1);//初始化页面
		setDisplay('block')
	}
	function clearTActive(){  //清除之前的选项卡的选中样式
		for(let i=0;i<login_tag.length;i++){
		  login_tag[i].getElementsByTagName('a')[0].className = ' ';
	  }
	}
	
	function clearDis(){  //将所有选项卡隐藏
		for(let i=0;i<login_tagnum.length;i++){
			login_tagnum[i].style.display = 'none';
		}
	}
	
	function loginCSH(index){ //登录页面初始化实现
		clearTActive();
		clearDis();
		login_tagnum[index].style.display = 'block';
		login_tag[index].getElementsByTagName('a')[0].className = 'login-tag-active';				
	}
	
	function setDisplay(dis){ //显示选项卡
		zzc.style.display = dis;
		register.style.display = dis;
	}
		
}
