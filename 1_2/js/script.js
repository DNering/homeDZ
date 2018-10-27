var btn_3 = document.getElementsByClassName("btn")[2];

function go_to(url) { 
window.location=url; 
} 
function rand_link() { 
var a; 
a = 1+Math.round(Math.random()*4); 
if (a==1) go_to("str1.html"); 
if (a==2) go_to("str2.html"); 
if (a==3) go_to("str3.html"); 
if (a==4) go_to("index.html");
}  

function change_css(){
  document.getElementById('style').style.cssText = 'padding:20px; background-color:#42ff42; border:2px solid #004f14; color:#42ff72; font-size:50px;';
}
 function del(){
 var elem = document.getElementById('delete'); 
   elem.innerHTML = '';

   var header = document.createElement("header");
   header.innerHTML='\
   <header>\
		<div class="container">\
			<div class="head">\
			<img src="img/logo.png" alt="Minto" class="logo">\
			<nav>\
				<ul class="menu">\
					<li>\
						<img src="img/icon_home.png">\
						<a href="#">Home</a>\
					</li>\
					<li>\
						<img src="img/icon_about.png">\
						<a href="#">About Us</a>\
					</li>\
					<li>\
						<img src="img/icon_services.png">\
						<a href="#">Services</a>\
					</li>\
					<li>\
						<img src="img/icon_contact.png">\
						<a href="#">Contact Us</a>\
					</li>\
				</ul>\
			</nav>\
		</div>\
		</div>\
	</header>\
   ';
   var section = document.createElement("section");
   section.innerHTML ='\
<section>\
		<div class="container">\
			<img src="img/banner.png" alt="banner" class="banner">\
		</div>\
	</section>\
	<section>\
		<div class="container">\
			<div class="qt">\
			<p><b>Lorem ipsum dolor sit amet,</b> consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\
			</div>\
		</div>\
	</section>\
	<section>\
		<div class="container">\
			<div class="content">\
				<img src="img/content.png" alt="content" class="content_im" align="left" hspace="30px">\
				<h2>Lorem ipsum dolor sit amet</h2>\
				<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>\
				<a href="#"><img src="img/Group.png" class="group"></a>\
			</div>\
		</div>\
	</section>\
	<section>\
		<div class="container">\
			<img src="img/clients.png" class="clients">\
		</div>\
	</section>\
';

   var footer = document.createElement("footer");
    footer.innerHTML ='\
    <footer>\
		<div class="container">\
			<hr>\
			<a href="#"><img src="img/fb_footer.png" class="fb">\
			</a>\
			<a href="#"><img src="img/twit_footer.png" class="twit">\
			</a>\
			<p>&copy; 2010-All rights reserved</p>\
		</div>\
	</footer>\
    ';

   document.body.appendChild(header);
   document.body.appendChild(section);
    document.body.appendChild(footer);
 }
