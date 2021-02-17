
var start = 1;
function set_time(){
  setInterval(image_show,3000);
}
function image_show(){
  var image_data;
  start++;
  if(start==1){
    image_data="https://i.ibb.co/Y8Z4wVg/1.jpg";
  }else if(start==2){
    image_data="https://i.ibb.co/zRQftSg/2.jpg";
  }else if(start==3){
    image_data="https://i.ibb.co/xh9HC2H/3.jpg";
  }else if(start==4){
    image_data="https://i.ibb.co/hmLQ6kB/4.jpg";
  }else if(start==5){
    image_data="https://i.ibb.co/SJJLghr/5.jpg";
  }else{
    image_data="https://i.ibb.co/Y8Z4wVg/1.jpg";
  }

  document.querySelector(".img").src=""+image_data;
  
}







