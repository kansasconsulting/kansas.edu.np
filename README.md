<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kansas Consultancy – Welcome</title>
    <link rel="stylesheet" href="style.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
    />
  </head>
  <body>
    <!-- Header / Topbar -->
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

    <!-- Logo and menu -->
    <div class="kansas-logo-wrapper">
      <div class="kansas-logo">
        <div class="kansas-logo-left">
          <img src="images/ce0042f7-4c14-4ace-9d3e-9d914e83161b.jpeg" alt="Kansas Consultancy Logo" />
        </div>

        <div class="kansas-logo-right">
          <div class="kansas-logo-right-menu">
            <a href="index.html">Home</a>
          </div>
          <div class="kansas-logo-right-menu">
            <a href="aboutus.html">About Us</a>
          </div>
          <div class="kansas-logo-right-menu">
            <a href="countries.html">Country</a>
          </div>
          <div class="kansas-logo-right-menu">
            <a href="visa.html">Visa</a>
          </div>
          <div class="kansas-logo-right-menu">
            <a href="conatctus.html">Contact Us</a>
          </div>
        </div>

        <div class="kansas-logo-middle">
          <div class="saerch-bar">
            <form>
              <span class="searchlogo-icon">
                <i class="fa fa-search" aria-hidden="true"></i>
              </span>
              <input
                class="fromsearchbar"
                type="text"
                placeholder="Search here"
              />
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Welcome / hero section -->
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
          at every step of your study journey.
        </p>
        <ul class="welcome-services">
          <li>Career counselling and course selection</li>
          <li>University and country selection (UK, Australia, Canada, Europe, and more)</li>
          <li>Application form filling and document preparation</li>
          <li>SOP and interview guidance</li>
          <li>Visa counselling and pre-departure briefing</li>
          <li>Support with accommodation and travel planning</li>
        </ul>
        <a href="conatctus.html" class="welcome-btn">
          Book a Free Counselling Session
        </a>
      </div>
    </section>

    <!-- Simple footer -->
    <div class="footer-wraper">
      <div class="footer">
        <div class="footer-box">
          <h3>Contact Us</h3>
          <ul>
            <li>
              Kansas National and International Consultancy Service Pvt. Ltd.
            </li>
            <li>Lokanthali, Bhaktapur</li>
            <li><a href="mailto:info.kansasconsulting@gmail.com">info.kansasconsulting@gmail.com</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=61553378745268">Facebook Messenger</a></li>
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
