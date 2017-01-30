$(document).ready(function() {

            var light = $('.bulb');

            var handleBulbClick = function() {
                $(this).addClass('active')
                $(this).siblings().removeClass('active');
            }
            light.on('click', handleBulbClick)
            
            function yellowToRed(){
            	if $('#yellow').hasClass('active')


            }
        	setInterval(sayHello, 2000)
            
        })