/*

	by afanmi
	http://www.php888.com
	MAIN Update 2010.3.21

*/
//window.onerror = function(message, URI, line){return true;};
var WDIR='w';
var baseurl='http://'+basedomain;
var thisdomain=document.domain;document.write(unescape('%3Cscript src="'+baseurl+'/'+WDIR+'/t/js/cookie.js" type="text/javascript"%3E%3C/script%3E'));var isIE=(document.all)?true:false;var isIE6=isIE&&([/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1]==6);var $afanmi_id=function(id,f){if(f===undefined||f=='')return "string"==typeof id?document.getElementById(id):id;else if(f=='top') return window.top.document.getElementById(id);else return id;};var $afanmi_ns=function(id){return "string"==typeof id?document.getElementsByName(id):id;};var $afanmi_n=function(id,i){if(i===undefined)i=0;return $afanmi_ns(id).item(i)};var $afanmi_nv=function(id,i){if(i===undefined)i=0;if("string"==typeof id)return $afanmi_n(id,i)?$afanmi_n(id,i).value:'';else return id;};var $afanmi_nvc=function(id){if("string"==typeof id){var j=-1;for(i=0;i<$afanmi_ns(id).length;i++){if($afanmi_n(id,i).checked)j=i;}return j==-1?'':$afanmi_nv(id,j);}else return id};var $afanmi_nc=function(id){var ids='';if("string"==typeof id){if($afanmi_ns(id)){for(i=0;i<$afanmi_ns(id).length;i++){if($afanmi_n(id,i).checked){ids+=(ids?'`':'')+$afanmi_nv(id,i)}}}}return ids;};var $afanmi_ncs=function(id){var ids='';if($afanmi_nc(id))ids='`'+$afanmi_nc(id)+'`';return ids;};function SAll(id,type){if("string"==typeof id){if($afanmi_ns(id)){for(i=0;i<$afanmi_ns(id).length;i++){if(type===undefined)$afanmi_n(id,i).checked=true;else if(type==0)$afanmi_n(id,i).checked=false;else if(type==-1)$afanmi_n(id,i).checked=$afanmi_n(id,i).checked?false:true;}}}}function externallinks(){if (!document.getElementsByTagName)return;var anchors=document.getElementsByTagName("a");for(var i=0;i<anchors.length;i++){var anchor=anchors[i];if(anchor.getAttribute("href")&&anchor.getAttribute("rel")=="new")anchor.target="_blank";}}window.onload=externallinks;function getXMLHTTPRequest(){var request=false;try{request=new XMLHttpRequest();}catch(trymicrosoft){try{request=new ActiveXObject("Msxml2.XMLHTTP");}catch(othermicrosoft){try{request=new ActiveXObject("Microsoft.XMLHTTP");}catch(failed){request=false;}}}return request;}function getPostParams(params){var buf=[],bp=params;for(var key in bp){if(typeof bp[key]!="function"){buf.push(encodeURIComponent(key),"=",encodeURIComponent(bp[key]),"&");}}buf.push("submit=","submit");return buf.join("");}function PostDataAjax(posturl,params,callbackfun){var request=getXMLHTTPRequest();if(!request){return;}request.open("POST",posturl,true);var qstr=getPostParams(params);var requestid=0;if(params['requestid']){requestid=params['requestid'];}request.setRequestHeader('Content-Length',qstr.length);request.setRequestHeader('CONTENT-TYPE','application/x-www-form-urlencoded');request.onreadystatechange=function(){if(request.readyState==0 && typeof callbackfun == 'function'){callbackfun('request.send______'+requestid);}if(request.readyState==1 && typeof callbackfun=='function'){callbackfun('request.read______'+requestid);}if(request.readyState==2 && typeof callbackfun=='function'){callbackfun('request.form______'+requestid);}if(request.readyState==3 && typeof callbackfun=='function'){callbackfun('request.load______'+requestid);}if(request.readyState==4 && request.status==200 && typeof callbackfun=='function'){callbackfun(request.responseText);}};request.send(qstr);}function GetDataAjax(pageurl,callbackfun){var request=getXMLHTTPRequest();if(!request){return;}try{request.open("GET",pageurl,true);request.onreadystatechange=function(){if(request.readyState==0 && typeof callbackfun=='function'){callbackfun('request.send');}if(request.readyState==1 && typeof callbackfun=='function'){callbackfun('request.read');}if(request.readyState==2 && typeof callbackfun=='function'){callbackfun('request.form');}if(request.readyState==3 && typeof callbackfun=='function'){callbackfun('request.load');}if(request.readyState==4 && request.status==200 && typeof callbackfun=='function'){callbackfun(request.responseText);}};request.send(null);}catch(e){}}function c_n(id,cn){if($afanmi_id(id))$afanmi_id(id).className=cn;}function isc_n(id,cn){if($afanmi_id(id)&&$afanmi_id(id).className==cn)return true;else return false;}function LoadJS(url){PostDataAjax(url,new Array,function(a){if(a.substring(0,8)!='request.')eval(a)});}function ChangeAction(changelist){for(var s in changelist){infosids(s);mouses(s);if(isc_n("info"+s+"1","h")){changeonce(s,1);}autochange(s);}}function infosids(s){for(var i=1;i<=ChangeTabList[s][0];i++){if(!$afanmi_id("info"+s+i)){$afanmi_id("info"+s).innerHTML+='<div class="h" id="info'+s+i+'"></div>';}}}function mouses(s){if(ChangeTabList[s][5]=='over'){for(var i=1;i<=ChangeTabList[s][0];i++){$afanmi_id(s+i).onmouseover=function(){clearTimeout(ChangeTabList[s][2]);changeonce(s,this.attributes.getNamedItem("id").nodeValue.split(s)[1]);};$afanmi_id(s+i).onmouseout=function(){ChangeTabList[s][4]=0;autochange(s);};$afanmi_id("info"+s+i).onmouseover=function(){clearTimeout(ChangeTabList[s][2]);changeonce(s,this.attributes.getNamedItem("id").nodeValue.split("info"+s)[1]);};$afanmi_id("info"+s+i).onmouseout=function(){ChangeTabList[s][4]=0;autochange(s);};}}else if(ChangeTabList[s][5]=='click'){for(var i=1;i<=ChangeTabList[s][0];i++){$afanmi_id(s+i).onclick=function(){clearTimeout(ChangeTabList[s][2]);changeonce(s,this.attributes.getNamedItem("id").nodeValue.split(s)[1]);};$afanmi_id("info"+s+i).onclick=function(){clearTimeout(ChangeTabList[s][2]);changeonce(s,this.attributes.getNamedItem("id").nodeValue.split("info"+s)[1]);};}}}function changeonce(s,id){if($afanmi_id("info"+s+id) && $afanmi_id("info"+s+id).innerHTML==""){eval("get_"+s+"_data('"+s+id+"');");}for(var i=1;i<=ChangeTabList[s][0];i++){if(i==id){c_n(s+i,"thist");c_n("info"+s+i,"info");} else {c_n(s+i,"");c_n("info"+s+i,"h");}}}function autochange(s){if(ChangeTabList[s][3]){for(var i=1;i<=ChangeTabList[s][0];i++){if(isc_n(s+i,"thist")){var id=ChangeTabList[s][4]?(i%ChangeTabList[s][0]?i+1:1):i;break;}}changeonce(s,id);ChangeTabList[s][2]=setTimeout("autochange(\""+s+"\");",ChangeTabList[s][1]);ChangeTabList[s][4]=1;}else{return false;}}var ChangeTabList=new Array;

function select_isvalueexit(s,v){var e=false;for(var i=0;i<s.options.length;i++){if(s.options[i].value==v){e=true;break;}}return e;}
function select_add(s,v,o){if(!select_isvalueexit(s,v)){s.options.add(new Option(o,v));}} 
function select_remove(s,v){if(select_isvalueexit(s,v)){for(var i=0;i<s.options.length;i++){if(s.options[i].value==v){s.options.remove(i);break;}}}}
function select_removeselected(s){var length=s.options.length-1;for(var i=length;i>=0;i--){if(s[i].selected==true){s.options[i]=null;}}}function select_select(s,v,o){if(select_isvalueexit(s,v)){for(var i=0;i<s.options.length;i++){if(s.options[i].value==v){s.options[i].text=o;break;}}}} 
function select_selectfirstoption(s,o){for(var i=0;i<s.options.length;i++){if(s.options[i].text==o){s.options[i].selected=true;break;}}}

function AjaxUrl(ajaxmethode,ajaxurl){if(thisdomain!=basedomain)ajaxurl ='/'+WDIR+'/proxy.php?method='+ajaxmethode+'&url='+encodeURIComponent(baseurl+ajaxurl);return ajaxurl;}
function ResizeWin(id,width,height,top,left){if(width=='max'){width='100%';left=0;}else{if(left===undefined)left=((window.screen.availWidth-width)/2/window.screen.availWidth*100)+'%';width+='px';}if(height=='max'){height='100%';top=0;}else{if(top===undefined)top=((window.screen.availHeight-height)/2-80)+'px';height+='px';}$afanmi_id(id).style.top=top;$afanmi_id(id).style.left=left;$afanmi_id(id).style.width=width;$afanmi_id(id).style.height=height;}
function MaxWin(id){ResizeWin(id,'max','max',0,0)};
function AjaxWin(id,width,height,z_index,ismask,maskcolor,opacity,isfixed,top,left){
	if(width===undefined)width=360;if(height===undefined)height=210;if(z_index===undefined)z_index=100;if(ismask===undefined)ismask=true;if(maskcolor===undefined)maskcolor='#000';if(opacity===undefined)opacity=95;if(isfixed===undefined)isfixed=true;if(top===undefined)top='center';if(left===undefined)left='center';if(ismask){
		if(isIE6){
			//document.body.innerHTML+='<iframe allowtransparency="true"  style="position:absolute;width:100%;height:100%;top:0;right:0;bottom:0;left:0;z-index:98;"></iframe>';
			$afanmi_id('footer').innerHTML+='<style type="text/css">html{overflow:hidden;}body{height:100%;overflow:hidden;}</style>';
			//$afanmi_id('footer').innerHTML+='<style type="text/css">html{overflow-x:hidden;}body{height:'+document.body.scrollHeight+'px;overflow:hidden;}</style>';//当有绝对（相对）定位时使用这条
		}
		
		
		totalheight=document.body.scrollHeight>window.screen.availHeight?document.body.scrollHeight:window.screen.availHeight;
		totalwidth=document.body.clientWidth;
		if($afanmi_id('locklayer'+id)){
			$afanmi_id('locklayer'+id).style.height=totalheight+"px";$afanmi_id('locklayer'+id).style.width=totalwidth+"px";$afanmi_id('locklayer'+id).style.display="block";
		}else{
			$afanmi_id('footer').innerHTML+='<div id="locklayer'+id+'" style="display:block;position:absolute;height:'+totalheight+'px;width:'+totalwidth+'px;top:0;left:0;z-index:'+(z_index-1)+';background:'+maskcolor+';'+(isIE?'filter:alpha(opacity=30)':'opacity:0.3')+';"></div>';
		}
	}
	if(top=='center')top=(window.screen.availHeight-height)/2-80;
	top+=0;
	if(top<0)top=0;
	top+='px';
	if(left=='center')left=((document.body.clientWidth -width)/2/document.body.clientWidth*100)+'%';	
	if($afanmi_id(id)){
		$afanmi_id(id).style.display="block";
	}else{
		if(!isIE)var opacity2=opacity/100;
		if(width!='auto')width+='px';
		if(height!='auto')height+='px';		
		$afanmi_id('footer').innerHTML+='<div id="'+id+'" style="display:block;'+(isfixed?'position:'+(isIE6?'absolute':'fixed')+';':'')+'z-index:'+z_index+';width:'+width+';height:'+height+';top:'+top+';left:'+left+';text-align:center;overflow:hidden;'+(isIE?'filter:alpha(opacity='+opacity+')':'opacity:'+opacity2)+';"></div>';
	}
}

function startUpload(id){$afanmi_id('upprocess_'+id).innerHTML='<strong>正在努力上传中...</strong><img alt="" src="/w/img/loader.gif" />';$afanmi_id('upform_'+id).className='upform h';return true;}
function clearUpFile(id){if($afanmi_id(id).value){$afanmi_id('upprocess_'+id).innerHTML='<strong class="red">已清空！</strong>';$afanmi_id(id).value='';}else{$afanmi_id('upprocess_'+id).innerHTML='<strong>尚无已上传项目！</strong>';}return true;}
function stopUpload(id,a,b,c){if(!$afanmi_id('upprocess_'+id))alert('NO ID!');$afanmi_id('upprocess_'+id).innerHTML=a;if(c=='1')$afanmi_id(id).value+=($afanmi_id(id).value?"\n":"")+b;else if(b)$afanmi_id(id).value=b;$afanmi_id('upform_'+id).className='upform';return true;}

function AutoSetIframeHeight(obj,maxheight){
	var win=obj;
	if(maxheight===undefined || maxheight>800)maxheight=800;
	if (document.getElementById){
		if (win && !window.opera){
			if (win.contentDocument && win.contentDocument.body.offsetHeight && win.contentDocument.body.offsetHeight<maxheight){
				win.height = win.contentDocument.body.offsetHeight;
				//win.style.overflow='hidden';
			}else if(win.Document && win.Document.body.scrollHeight && win.Document.body.scrollHeight<maxheight){
				win.height = win.Document.body.scrollHeight;
				//win.style.overflow='hidden';
			}else{
				win.height = maxheight;
			}			
		}		
	}
}


function AjaxFrame(id,url,title,width,height,z_index,ismask,maskcolor,opacity,isfixed,top,left){
	if(width===undefined)width=document.body.clientWidth*0.7;
	if(height===undefined)height=window.screen.availHeight*0.6;
	if(opacity===undefined)opacity=100;if(title===undefined)title='PHP888建站准系统';
	AjaxWin(id,width,height,z_index,ismask,maskcolor,opacity,isfixed,top,left);
	var _h=Number($afanmi_id(id).style.height.replace('px',''));
	var _w=Number($afanmi_id(id).style.width.replace('px',''));
	$afanmi_id(id).innerHTML='<div style="background:#fff;width:'+(_w-6)+'px;border:3px solid #555;text-align:left;"><div style="font-size:14px;padding:3px 8px;background:#efefef;border-bottom:1px solid #ccc;"><a href="javascript:void(null);" onclick="AjaxWinClose(\''+id+'\');" style="float:right;text-decoration:none;margin:0 0 0 15px;">关闭</a><a href="javascript:void(null);" onclick="if(this.innerHTML==\'全屏\'){this.innerHTML=\'窗口\';MaxWin(\''+id+'\');}else{this.innerHTML=\'全屏\';ResizeWin(\''+id+'\',\''+width+'\',\''+height+'\');}" style="float:right;text-decoration:none;margin:0 0 0 15px;">全屏</a>'+title+'<div style="clear:both;"></div></div><iframe id="iframe_'+id+'" style="width:'+(_w-6)+'px;border:0;" src="'+url+'&amp;inajax=1"  onload="javascript:AutoSetIframeHeight(this,'+(_h-6-30)+');"></iframe></div>';
	

	
	//alert(kijojijpl.document.body.clientHeight);
}
function wurl(url,title,width,height){AjaxFrame('wurl',url+(url.indexOf('?')>-1?'&inajax=1':'?inajax=1'),title,width,height);return false;}
function isArray(o){return Object.prototype.toString.call(o) === '[object Array]';} 
function waction(url,m,d){if(m===undefined||!m||m=='post'){if(d===undefined||!d||!isArray(d))d=new Array;PostDataAjax(url,d,function(a){if(a.substring(0,8)!='request.'){alert(a.split('::::::')[0]);if(a.split('::::::')[1])eval(a.split('::::::')[1]);}})}else{GetDataAjax(url,function(a){if(a.substring(0,8)!='request.'){alert(a.split('::::::')[0]);if(a.split('::::::')[1])eval(a.split('::::::')[1]);}})}}

function AjaxWinClose(id){$afanmi_id(id).style.display="none";if($afanmi_id('locklayer'+id))$afanmi_id('locklayer'+id).style.display="none";}
function NoticeBox(notice){AjaxWin('NoticeBox',250,100,1000);$afanmi_id('NoticeBox').innerHTML='<div class="noticebox"><p>'+notice.split('::::::')[0]+'</p><p class="clickbutton"><a href="javascript:void(null);" onclick="AjaxWinClose(\'NoticeBox\');'+(notice.indexOf('::::::')>-1?'eval(\''+notice.split('::::::')[1]+'\');':'')+'">确定</a></p></div>';}


var lastfocus=timer='';
function form1submitV(id,i,submitvalue){if(i==0){$afanmi_id(id).value=submitvalue;$afanmi_id(id).disabled=false;}else if(i>0){$afanmi_id(id).disabled=true;$afanmi_id(id).value='正在提交中...（'+i+'秒后可以重新提交）';timer=setTimeout('form1submitV(\''+id+'\','+(i-1)+',\''+submitvalue+'\');',1000);}}

function getEditorHTMLContents(EditorName){var oEditor=FCKeditorAPI.GetInstance(EditorName);return(oEditor.GetXHTML(true));}
function getEditorTextContents(EditorName){var oEditor=FCKeditorAPI.GetInstance(EditorName);return(oEditor.EditorDocument.body.innerText);}
function SetEditorContents(EditorName,ContentStr){var oEditor=FCKeditorAPI.GetInstance(EditorName);oEditor.SetHTML(ContentStr);}

function form1submit(array,url,id,timeoutvalue){if(url===undefined||!url) url=window.location.href;var submitvalue=$afanmi_id(id+'submit').value;$afanmi_id(id+'submit').disabled=true;form1submitV(id+'submit',timeoutvalue,submitvalue);var PostArray=new Array;if(array['nvc'])for(var i in array['nvc'])PostArray[array['nvc'][i]]=$afanmi_nvc(id+array['nvc'][i]);if(array['nv'])for(var i in array['nv'])PostArray[array['nv'][i]]=$afanmi_nv(id+array['nv'][i]);if(array['nc'])for(var i in array['nc'])PostArray[array['nc'][i]]=$afanmi_nc(id+array['nc'][i]);if(array['ncs'])for(var i in array['ncs'])PostArray[array['ncs'][i]]=$afanmi_ncs(id+array['ncs'][i]);if(array['id'])for(var i in array['id'])PostArray[array['id'][i]]=$afanmi_id(id+array['id'][i])?$afanmi_id(id+array['id'][i]).value:'';if(array['oid'])for(var i in array['oid'])PostArray[array['oid'][i]]=$afanmi_id(array['oid'][i])?$afanmi_id(array['oid'][i]).value:'';if(array['cke'])for(var i in array['cke'])eval('PostArray[array["cke"][i]]=CKEDITOR.instances.'+id+array['cke'][i]+'.getData()');PostDataAjax(url,PostArray,function(a){if(a.substring(0,8)!='request.'){
	if(a){
		if(a.split('::::::')[0]!="成功"){
			clearTimeout(timer);
			$afanmi_id(id+'submit').value=submitvalue;
			$afanmi_id(id+'submit').disabled=false;
		}
		alert(a.split('::::::')[0]);
		//try{NoticeBox(a.split('::::::')[0])}catch(e){alert(a.split('::::::')[0])}
		if(a.split('::::::')[1])eval(a.split('::::::')[1]);		
	}else{
		//NoticeBox("ERR");
	}
}});
}

function form2submitV(b,i){if(i==0){b.value=' 重新提交 ';b.disabled=false;}else if(i>0){b.disabled=true;b.value='正在提交中...（'+i+'秒后可以重新提交）';timer=setTimeout('form2submitV(\''+b+'\','+(i-1)+');',1000);}}
function form2submit(o,u,t){
	if(o===undefined){if(form2)o=document.form2;else{alert('err: no form');return false;}}
	if(u===undefined){if(o.action)u=o.action;else u=window.location.href;}
	if(t===undefined)t=120;
	var _o=o.elements;
	var b=o.submitbutton;
	if(!_o||!b)return false;
	b.disabled=true;
	var p=new Array;
	form2submitV(b,t);
	for(var i=0;i<_o.length;i++)if(_o[i].name!=undefined&&_o[i].name!=''&&_o[i].disabled==false)p[_o[i].name]=_o[i].value;
}



function showHTML(toshow){
	var p=toshow.split(':');
	var url='http://10.25.4.19/w/js/show';
	var showid="";
	var paras=new Array;
	for(var i=0;i<p.length;i++){if(i==0){url+=p[i]+".php?action=action";var showtype=p[i];}else if(i%2==1){url+="&"+p[i]+"=";
	if(p[i]=="id")showid=p[i+1];
	}else if(i%2==0){url+=p[i];}}
	PostDataAjax('/'+WDIR+'/proxy.php?method=post&url='+encodeURIComponent(url),new Array,function(a){
	if(a.substring(0, 8)!='request.'){
		var atext=a.split('::::::::::')[0].split('::::::::');
		for(var i=0;i<atext.length;i++)if(i%2==0 && $afanmi_id(atext[i]) && atext[i+1])$afanmi_id(atext[i]).innerHTML=atext[i+1];
		if(a.split('::::::::::')[1])eval(a.split('::::::::::')[1]);
	}else if($afanmi_id("show"+showtype+showid))$afanmi_id("show"+showtype+showid).innerHTML='<a title="诺无反应请点击重新载人" href="javascript:void(null);" onclick="showHTML(\''+toshow+'\');">数据载入中...</a>';
});}