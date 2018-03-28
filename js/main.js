/* 
* @Author: anchen
* @Date:   2018-03-28 14:13:19
* @Last Modified by:   anchen
* @Last Modified time: 2018-03-28 14:24:47
*/

$(document).ready(function(){
      var a=11;
      var b="url(images/bg-x.jpg)".replace(/x/gi,Math.ceil(Math.random()*a));
      $("a").tooltip(),
      $("#box").popover(),
      $("#collapse-1,#collapse-2,#collapse-3,#collapse-4,#collapse-5,#collapse-6,#collapse-7,#collapse-8,#collapse-9,#collapse-10,#collapse-11,#collapse-12,#collapse-13,#collapse-14").collapse(),
      $(".box-arrow").css('left', $('#aside').width()/2-3),
      $(".box-context").css('left', $('#aside').width()/2-40),

      $(window).resize(function(){
        $(".box-arrow").css('left', $('#aside').width()/2-3),
        $(".box-context").css('left', $('#aside').width()/2-40);
        
           }),

        $("#aside").css({"background-image": b,"background-size": "cover","background-position": "center"});
        //背景图片随机添加***
     
        $(".navbar").click(function(){
          $(".tips").animate({width:'toggle'},200)
        });


          window.onscroll = function(){
            var scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
            if(scrollTop >= 180){
                $(".header-top").removeClass("hide").addClass("fixed");
            }else{
               $(".header-top").addClass("hide").removeClass("fixed");
            }
           };
});