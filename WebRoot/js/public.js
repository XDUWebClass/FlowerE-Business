/*
 * 鎵撳紑鏂扮獥鍙�f:閾炬帴鍦板潃 n:绐楀彛鐨勫悕绉�w:绐楀彛鐨勫搴�h:绐楀彛鐨勯珮搴�s:绐楀彛鏄惁鏈夋粴鍔ㄦ潯锛�锛氭湁婊氬姩鏉★紱0锛氭病鏈夋粴鍔ㄦ潯
 */



function openWin(f, n, w, h, s) 
{
	//sb = s == "1" ? "1" : "0";
	//l = (screen.width - w) / 2;
	//t = (screen.height - h) / 2;
	//sFeatures = "left=" + l + ",top=" + t + ",height=" + h + ",width=" + w
			//+ ",center=1,scrollbars=" + sb
			//+ ",status=0,directories=0,channelmode=0";
	//openwin = window.open(f, n, sFeatures);
	//if (!openwin.opener)
		//openwin.opener = self;
	//openwin.focus();
	//return openwin;
    var result=window.showModalDialog(f,n,"dialogHeight:"+h+";dialogWidth:"+w+";"+s);
    if(result==true)
    {
    	window.location.reload(true);
    }
    else
    {
    	window.location.reload(true);
    }
    
}





/*
 * 鍒犻櫎璁板綍
 */
function del(url, info) 
{
	//if (openDeleteDialog(url, info)) 
	//{
		//window.location.reload(true);
	//}
	 if (confirm(info))
     {
	     var result=window.showModalDialog(url,"window123","dialogHeight:234px;dialogWidth:271px;resizable:no;help:no;status:no;scroll:no");
	     if(result==true)
	     {
	     	 window.location.reload(true);
	     }
	     else
	     {
	     	
	     }
     }
     else
     {
     	
     }
}



/*
 * 鏍￠獙checkbox
 */
function checkAll(chkName, checkboxName, pageSize) {
	var src = event.srcElement;
	var chkN = eval("document.all." + chkName);

	if (src.checked) {
		chkN[0].checked = true;
		chkN[1].checked = true;
		for (var i = 0; i < pageSize; i++) {
			var chk = eval("document.all." + checkboxName + i);
			if (chk) {
				chk.checked = true;
			}
		}
	} else {
		chkN[0].checked = false;
		chkN[1].checked = false;
		for (var i = 0; i < pageSize; i++) {
			var chk = eval("document.all." + checkboxName + i);
			if (chk) {
				chk.checked = false;
			}
		}
	}
}

/*
 * 
 */
function makePages(maxPage, selectedPage, selectName) {
	var sel = eval("document.all." + selectName);
	sel.length = 0;
	for (var i = 1; i <= maxPage; i++) {
		sel.options[i] = new Option(i, i);
		if (sel.options[i] == selectedPage) {
			sel.options[i].selected = true;
		}
	}
}



/*
 * 鏇挎崲瀛楃涓�
 */
function replaceStr(str) {
	var re = "/( )/gi";
	str = str.replace(re, "");
	re = "/\</gi";
	str = str.replace(re, "&lt;");

	return str;
}

/*
 * 鍘绘帀宸﹁竟绌烘牸
 */
function LTrim(str) {
	var whitespace = new String(" \t\n\r");
	var s = new String(str);
	if (whitespace.indexOf(s.charAt(0)) != -1) {
		var j = 0, i = s.length;
		while (j < i && whitespace.indexOf(s.charAt(j)) != -1) {
			j++;
		}
		s = s.substring(j, i);
	}
	return s;
}

/*
 * 鍘绘帀鍙宠竟绌烘牸
 */
function RTrim(str) {
	var whitespace = new String(" \t\n\r");
	var s = new String(str);
	if (whitespace.indexOf(s.charAt(s.length - 1)) != -1) {
		var i = s.length - 1;
		while (i >= 0 && whitespace.indexOf(s.charAt(i)) != -1) {
			i--;
		}
		s = s.substring(0, i + 1);
	}
	return s;
}

/*
 * 鍘绘帀涓よ竟绌烘牸
 */
function Trim(str) {
	return RTrim(LTrim(str));
}




/*
 * 
 */
function exeOperation(exePath) {
	var obj = new ActiveXObject("Microsoft.XMLHTTP");
	obj.open("post", exePath, false);
	obj.send();
	var res = obj.responseText;
	var rs = Trim(res);
	if (rs.indexOf('true', 0) != -1) {
		return true;
	} else {
		return false;
	}
}

/*
 * 
 */
function exeValidate(exePath) {
	var obj = new ActiveXObject("Microsoft.XMLHTTP");
	obj.open("post", exePath, false);
	obj.send();
	var res = obj.responseText;
	var rs = Trim(res);
	if (rs.indexOf('validate_login_user', 0) != -1) {
		return true;
	} else {
		return false;
	}
}



/*
 * 鏄剧ず
 */
function validate_date(exePath) {
	var obj = new ActiveXObject("Microsoft.XMLHTTP");
	obj.open("post", exePath, false);
	obj.send();
	var res = obj.responseText;
	var rs = Trim(res);
	var begin_str = "<!--begin-->";
	var beginIndex = rs.indexOf(begin_str) + begin_str.length;
	var endIndex = rs.indexOf("<!--end-->");
	rs = ((beginIndex >= 0) && (endIndex >= 0)) ? rs.substring(beginIndex,
			endIndex) : "";
	return Trim(rs);
}

/*
 * 鏍￠獙鏄惁鏁板瓧
 */
function checkNumber(name, TempS) {
	for (Count = 0; Count < TempS.length; Count++) {
		TempChar = TempS.substring(Count, Count + 1);
		RefString = "0123456789";
		if (RefString.indexOf(TempChar, 0) == -1) {
			alert("璇疯緭鍏ユ暟瀛�");
			eval("document.all." + name).focus();
			return false;
		}
	}
}



/*
 * 鏄惁鏈夐潪娉曞瓧绗�
 */
function chksafe(a) {
	fibdn = new Array("'", "\\");
	i = fibdn.length;
	j = a.length;
	for (ii = 0; ii < i; ii++) {
		for (jj = 0; jj < j; jj++) {
			temp1 = a.charAt(jj);
			temp2 = fibdn[ii];
			if (temp1 == temp2) {
				return false;
			}
		}
	}
	return true;
}

/*
 * 
 */
function fucCheckNUM(NUM) {
	var i, j, strTemp;
	strTemp = "0123456789";
	if (NUM.length == 0)
		return false;
	for (i = 0; i < NUM.length; i++) {
		j = strTemp.indexOf(NUM.charAt(i));
		if (j == -1) {
			return false;
		}
	}
	return true;
}



/*
 * 
 */
function fucCheckLength(strTemp) {
	var i, sum;
	sum = 0;
	for (i = 0; i < strTemp.length; i++) {
		if ((strTemp.charCodeAt(i) >= 0) && (strTemp.charCodeAt(i) <= 255)) {
			sum = sum + 1;
		} else {
			sum = sum + 2;
		}
	}
	return sum;
}

/*
 * 
 */
function chkElements(name, errMsg, max_length, lengthMsg) {
	var el_name = eval("document.all." + name);
	var v = el_name.value;
	if (!chksafe(v)) {
		el_name.focus();
		alert(errMsg);
		return false;
	} else if (fucCheckLength(v) > max_length) {
		el_name.focus();
		alert(lengthMsg);
		return false;
	}
	return true;
}



/*
 * 鏍￠獙绌哄瓧绗︿覆
 */
function checkNullStr(name, msg) {
	var el_name = eval("document.all." + name);
	if (Trim(el_name.value).length == 0) {
		alert(msg);
		el_name.focus();
		return false;
	}
	return true;
}




/*
 *  鏄剧ず鏃ユ湡鎺ian
 */
function GetDate(nText, para) {
	var v_url = para == "1" ? "./common/data.html" : "../../common/data.html";
	var reVal = window
			.showModalDialog(
					v_url,
					'data',
					"status:no;center:yes;scroll:no;resizable:no;dialogWidth:255px;dialogHeight:260px");
	if (reVal != null) {
		var n = eval("document.all." + nText);
		n.value = reVal;
	}
}



/*
 * 鎸夋瘮渚嬬缉灏忓浘鐗�
 */
function DrawImage(ImgD, iwidth, iheight) {
	var flag = false;
	var image = new Image();
	image.src = ImgD.src;
	if (image.width > 0 && image.height > 0) {
		flag = true;
		if (image.width / image.height >= iwidth / iheight) {
			if (image.width > iwidth) {
				ImgD.width = iwidth;
				ImgD.height = (image.height * iwidth) / image.width;
			} else {
				ImgD.width = image.width;
				ImgD.height = image.height;
			}
			// ImgD.alt=image.width+"脳"+image.height;
		} else {
			if (image.height > iheight) {
				ImgD.height = iheight;
				ImgD.width = (image.width * iheight) / image.height;
			} else {
				ImgD.width = image.width;
				ImgD.height = image.height;
			}
			// ImgD.alt=image.width+"脳"+image.height;
		}
	}
	ImgD.style.visibility = "visible";
}



/*
 * 鍥炶溅閿浆涓篢ab閿�
 */
function enterTab() {
	if (event.keyCode == 13) {
		oElement = document.activeElement;
		if (oElement.tagName != "TEXTAREA" && oElement.type != "button")
			event.keyCode = 9;
		return;
	}
}

/*
 * 
 */
function objectEval(text) {
	text = text.replace(/\n/g, " ");
	text = text.replace(/\r/g, " ");
	if (text.match(/^\s*\{.*\}\s*$/)) {
		text = "[" + text + "]";
	}
	return eval(text)[0];
}



/*
 * 鎵撳紑棰嗗鏌ヨ椤甸潰 action - 鏌ヨ鐨凙ction method - 璋冪敤鐨勬柟娉�title - 鏍囬message name -
 * 鍛樺伐閫夋嫨鍩熺殑name
 */
function openLeaderQuery(action, method, title, name) {
	openWin("../../common/selectStaff.jsp?action=" + action + "&method="
					+ method + "&title=" + title + "&name=" + name,
			"public_leader_find_page", "400", "150");
}

/*
 * 绗竴琛屽彉鑹�
 */
function chgColor() {
	var v_table = document.all["PowerTable"];
	var v_row = v_table.rows[1];
	var len = v_row.cells.length;
	for (var i = 0; i < len; i++) {
		var v_cell = v_row.cells[i];
		v_cell.style.backgroundColor = "yellow";
	}
}

/*
 * 绗竴琛屽彉鑹�
 */
function chgColor2() {
	var v_table = document.all["PowerTable"];
	var rows_count = v_table.rows.length;
	var v_row, v_cell, temp_len, len;
	var rowspan = 0;

	// get rowspan
	if (v_table.rows.length > 1) {
		len = v_table.rows[1].cells.length;
		for (var r = 2; r < rows_count; r++) {
			v_row = v_table.rows[r];
			temp_len = v_row.cells.length;
			if (temp_len == len) {
				rowspan = r - 1;
				break;
			}
		}

		rowspan = (rowspan > 0) ? (rowspan + 1) : rows_count;
		for (var r = 1; r < rowspan; r++) {
			v_row = v_table.rows[r];
			for (var t = 0; t < v_row.cells.length; t++) {
				v_cell = v_row.cells[t];
				v_cell.style.backgroundColor = "yellow";
			}
		}
	}
}



/*
 * 娣诲姞椤甸潰杞藉叆鍚庤Е鍙戠殑shijian
 */
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof(window.onload) != "function") {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}



// adsName:鍚嶇О,adsUrl:鍦板潃,sTime:鏃堕棿(灏忔椂) add by wujie 2005.12.12
function PopAds(adsName, adsUrl, sTime, number, w, h, s) {
	if (document.cookie.indexOf(adsName) == -1) {
		window.open(adsUrl, adsName);
		self.focus();
		var expireDate = new Date();
		var lefttime = 1000 * (3600 * sTime);
		expireDate.setTime(expireDate.getTime() + lefttime);
		document.cookie = adsName + "=yes" + "; expires="
				+ expireDate.toGMTString() + ";";
	}
	openWin(adsUrl, number, w, h, s);
}
