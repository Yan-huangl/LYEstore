window.onload = ()=>{
	let serve = document.getElementById('tab-xsk');  //玩家服务区按钮
	let serves_ul = document.getElementById('ul-xsk');  //玩家服务区列表显示
	let tab_html = '';  //玩家服务区按钮html
	let ul_html = '';  //玩家服务区列表显示 html
	let x = 0;
	let y = 0;
	for(let i = 0; i < serves.length; i++) {    //
		if(i == 0) {
			tab_html += '<span class="xsk-span-active">' + serves[i] + '</span>';
		} else {
			tab_html += '<span>' + serves[i] + '</span>';
		}
	}
	show_ul(0); //初始化
	serve.innerHTML = tab_html; //初始化
  clickTab();
  
  function clickTab(){  //玩家服务区选项卡点击事件
  	let p = serve.getElementsByTagName('span');
  	for(let i = 0; i < p.length; i++) {
  		p[i].onclick = ()=>{
        x = i;
  			show_ul(i);  //展示在页面上
  			console.log(i)
  			clearTabActive(i);     			
  		}
  	}
  }
  
  function clearTabActive(j){  //清除上一次选中的选中样式
  	let p = serve.getElementsByTagName('span');
  	for(let i = 0; i < p.length; i++) {
  		p[i].className = ' ';
  	}
  	p[j].className = 'xsk-span-active';
  }
  
	function show_ul(index) { //显示数据在页面上
		ul_html = '';
		for(let i = 0; i < serve_all[index].length; i++) {
			ul_html += '<li>'
			if(i == 0 ) {
				ul_html += '<input type="radio" name="serves" checked="checked">';
				
			} else {
				ul_html += '<input type="radio" name="serves">';
			
			}
			ul_html += '<span>' + serve_all[index][i] + '</span>';
			ul_html += '</li>'
		}
		serves_ul.innerHTML = ul_html;
	}
}
	