<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kansas Consultancy – Study Abroad</title>
    <link rel="stylesheet" href="style.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
    />
  </head>
  <body>
    <!-- Top bar -->
    <div class="header-topbar-wrapper">
      <div class="header-topbar">
        <div class="header-top">
          <p>Kansas National and International Study Consulting Service</p>
        </div>
        <div class="email-info">
          <span class="emailinfo">Email:</span>
          <a href="mailto:info.kansasconsulting@gmail.com">
            info.kansasconsulting@gmail.com
          </a>
        </div>
      </div>
    </div>

    <!-- Logo and navigation -->
    <div class="kansas-logo-wrapper">
      <div class="kansas-logo">
        <div class="kansas-logo-left">
          <img src="images/ce0042f7-4c14-4ace-9d3e-9d914e83161b.jpeg" alt="Kansas Consultancy Logo" />
        </div>

        <div class="kansas-logo-right">
          <div class="kansas-logo-right-menu"><a href="index.html">Home</a></div>
          <div class="kansas-logo-right-menu"><a href="aboutus.html">About Us</a></div>
          <div class="kansas-logo-right-menu"><a href="countries.html">Country</a></div>
          <div class="kansas-logo-right-menu"><a href="visa.html">Visa</a></div>
          <div class="kansas-logo-right-menu"><a href="conatctus.html">Contact Us</a></div>
        </div>

        <div class="kansas-logo-middle">
          <div class="saerch-bar">
            <form>
              <span class="searchlogo-icon">
                <i class="fa fa-search" aria-hidden="true"></i>
              </span>
              <input class="fromsearchbar" type="text" placeholder="Search here" />
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Hero / welcome section -->
    <section class="welcome-section">
      <div class="welcome-content">
        <h1>Empowering Your Study Abroad Dreams</h1>
        <h3>Kansas National and International Consultancy Service</h3>
        <p>
          Welcome to Kansas National and International Consultancy Service,
          your trusted partner for studying abroad. We provide honest,
          personalised guidance to help you choose the right course, university,
          and destination based on your academic background, budget, and career
          goals. From counselling and university selection to applications,
          visas, and pre-departure support, our experienced team walks with you
          at every step of your journey.
        </p>
        <ul class="welcome-services">
          <li>Career counselling and course selection</li>
          <li>University and country selection (UK, Australia, Canada, Europe, and more)</li>
          <li>Application form and document preparation</li>
          <li>SOP and interview guidance</li>
          <li>Visa counselling and pre-departure briefing</li>
          <li>Support with accommodation and travel planning</li>
        </ul>
        <a href="#contact" class="welcome-btn">Book a Free Counselling Session</a>
      </div>
    </section>

    <!-- Simple “steps” section -->
    <section class="steps-section">
      <h2>Your visa sorted in 4 simple steps</h2>
      <div class="steps-grid">
        <div class="step-box">
          <h3>1. Free Consultation</h3>
          <p>Discuss your study plans, background, and budget with our counsellors.</p>
        </div>
        <div class="step-box">
          <h3>2. Course & Country Selection</h3>
          <p>Choose the best course and destination for your career goals.</p>
        </div>
        <div class="step-box">
          <h3>3. Application & Documentation</h3>
          <p>Prepare and submit strong applications with complete documentation.</p>
        </div>
        <div class="step-box">
          <h3>4. Visa & Pre‑departure</h3>
          <p>Get visa guidance and practical help before you fly.</p>
        </div>
      </div>
    </section>

    <!-- Contact form (frontend) -->
    <section id="contact" class="contact-section">
      <div class="contact-wrapper">
        <div class="contact-left">
          <h2>Get in touch</h2>
          <p>Send us your details and our counsellor will contact you.</p>

          <!-- IMPORTANT: action points to contact.php (backend) -->
          <form action="contact.php" method="post" class="contact-form">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" required placeholder="Your full name" />

            <label for="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="you@example.com" />

            <label for="phone">Phone / WhatsApp</label>
            <input type="text" id="phone" name="phone" required placeholder="98XXXXXXXX" />

            <label for="country">Preferred Country</label>
            <select id="country" name="country">
              <option value="UK">United Kingdom</option>
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option>
              <option value="USA">United States</option>
              <option value="Europe">Europe (other)</option>
            </select>

            <label for="message">Your Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Briefly describe your study plan"></textarea>

            <button type="submit" class="submit-btn">Submit</button>
          </form>

          <!-- Success / error message placeholder (simple static) -->
          <?php if (isset($_GET['status']) && $_GET['status'] === 'ok'): ?>
            <p class="form-success">Thank you! Your message has been sent.</p>
          <?php elseif (isset($_GET['status']) && $_GET['status'] === 'error'): ?>
            <p class="form-error">Sorry, something went wrong. Please try again.</p>
          <?php endif; ?>
        </div>

        <div class="contact-right">
          <h3>Contact details</h3>
          <p><i class="fa fa-map-marker"></i> Lokanthali, Bhaktapur, Nepal</p>
          <p><i class="fa fa-envelope"></i> info.kansasconsulting@gmail.com</p>
          <p><i class="fa fa-phone"></i> +977-98XXXXXXXX</p>
          <p><i class="fa fa-facebook-official"></i> Kansas Consultancy (Facebook)</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <div class="footer-wraper">
      <div class="footer">
        <div class="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="aboutus.html">About Us</a></li>
            <li><a href="countries.html">Countries</a></li>
            <li><a href="visa.html">Visa Services</a></li>
            <li><a href="conatctus.html">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-box">
          <h3>We accept</h3>
          <ul>
            <li>Fonepay</li>
            <li>eSewa</li>
            <li>Khalti</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="copyright-section">
      <p>
        Copyright © <span id="year"></span>. Kansas National and International Consultancy
        Service Pvt.Ltd. All rights reserved.
      </p>
    </div>

    <script>
      document.getElementById('year').textContent = new Date().getFullYear();
    </script>
  </body>
</html>
