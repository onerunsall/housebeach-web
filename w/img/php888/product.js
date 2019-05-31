function lijiyuyue(){
	var d=new Array;
	d['mobile']=$afanmi_id('mobile').value;
	d['productname']=$afanmi_id('productname').value;
	d['name']=$afanmi_id('name').value;
	d['yuyuetime']=$afanmi_id('yuyuetime').value;	
	waction('?action=lijiyuyue','post',d);
	return false; 
}