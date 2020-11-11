window.onload = () => {
	function menu_m(index, len) {  //选项卡切换显示数据
		let html = ''; //用来存储页面显示html代码
		let num = 0; //当前为第几页
		let max_len = 20; //默认选项卡列表显示20条内容
    let count = 0;
    //页面显示（不同选项卡点击显示）
		for(let i = len * max_len; i < info[index].length && num < max_len; i++, num++) {
			html += '<li class="info-other">';
			html += '<em></em>'
			html += '<a href="#">'
			html += '<span class="info-title">' + info[index][i].title + '</span>'
			if(index == 3) {
				html += '<span class="info-txt txt-color ellipsis ">' + info[index][i].txt + '</span>'
			} else {
				html += '<span class="info-txt ellipsis">' + info[index][i].txt + '</span>'
			}
			html += '<span class="date">' + info[index][i].data + '</span>'
			html += '</a>'
			html += '</li>'
			document.getElementById('info-detail').innerHTML = html;
		}
	}
	
	menu_m(2, 0);  //初始化页面

	count = Math.ceil(info[0].length / 20); //用于得出点击当前选项卡的内容可以分为几页，count保存
	createNum(); //创建当前选项卡的底部页数动态显示

	let menu = document.getElementById('info-menu');
	let index = 0;
	for(let j = 0; j < info.length; j++) {  //移入不同选项卡，显示不同数据的内容
		menu.getElementsByTagName('li')[j].onmousemove = () => {
			menu_m(j, 0);
			count = Math.ceil(info[j].length / 20);
			createNum();
			chang(index, j);
			index = j;
			clickNum(index);
		}
	}

	function chang(index, j) {
		menu.getElementsByTagName('a')[index].className = '';
		menu.getElementsByTagName('a')[j].className = 'active';

	}

	function createNum() {
		let nums = document.getElementById('num');
		nums.innerHTML = '';
		if(count > 1) {
			let start = document.createElement('span');
			start.appendChild(document.createTextNode("首页"))
			nums.appendChild(start)
			for(let i = 0; i < count; i++) {
				let temp = document.createElement('span')
				temp.appendChild(document.createTextNode(i + 1))
				if(i == 0) {
					temp.className = 'num-active';
				}
				nums.appendChild(temp)
			}
			let end = document.createElement('span');
			end.appendChild(document.createTextNode("尾页"))
			nums.appendChild(end)
		}
	}

	function clickNum(index) {
		if(count > 1) {
			let spans = document.getElementById('num').getElementsByTagName('span');
			spans[0].onclick = () => {
				menu_m(index, 0);
				clearNumActive(spans)
				spans[1].className = 'num-active'
			}
			spans[spans.length - 1].onclick = () => {
				menu_m(index, spans.length - 3);
				clearNumActive(spans)
				spans[spans.length - 2].className = 'num-active'
			}
			for(let i = 1; i < spans.length - 1; i++) {
				spans[i].onclick = () => {
					menu_m(index, i - 1);
					clearNumActive(spans)
					spans[i].className = 'num-active'
				}
			}

		}
	}

	function clearNumActive(spans) {
		for(let i = 0; i < spans.length; i++)
			spans[i].className = '';
	}

}