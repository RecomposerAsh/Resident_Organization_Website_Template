
let f = document.createElement("footer")
f.innerHTML = `<div class="footer-section-newsletter">
<h1>SUBSCRIBE</h1>
<P>Subscribe to our newsletter to keep up to date with the latest</P>
<form action="" class="newsletter-form">
    <input class="form-email-input" type="email" name="email" placeholder="Enter your email here">
    <button id="form-subscribe-button" type="submit">Submit</button>
</form>
</div>
<hr class="subscribe-break">

<div class="footer-content">
<div class="footer-section-about">
<h1>About</h1>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laborum beatae necessitatibus dolores architecto quae quasi quidem, ab dolor optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ipsa quasi velit molestiae, dicta obcaecati quos! Enim at, veniam eum nesciunt dolores, itaque fugit ratione harum nihil veritatis optio quidem!</p>
</div>

<div class="footer-section-links">
<h1>LINKS</h1>
<ul class="footer-links">
<li><a href="#"></a>Link 1</li>
<li><a href="#"></a>Link 2</li>
<li><a href="#"></a>Link 3</li>
<li><a href="#"></a>Link 4</li>
<li><a href="#"></a>Link 5</li>
<li><a href="#"></a>Link 6</li>
</ul>
</div>

<div class="footer-section-contact-form">
<form action="" class="contact-form">
<h1>CONTACT US</h1>
<input type="text" name="Name" placeholder="Your name">
<input type="email" name="Email" placeholder="Your email">
<textarea name="Message" id="contact-form-message" cols="30" rows="10"></textarea>
</form>
<ul class="social-buttons">
<li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
<li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
<li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
<li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
<li><a href="#"><i class="fa-brands fa-discord"></i></a></li>
</ul>
</div>
</div>`

document.body.appendChild(f)