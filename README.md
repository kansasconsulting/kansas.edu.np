<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Education Consultancy</title>

  <style>
    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
      font-family: Arial, sans-serif;
    }

    body{
      background:#f4f7fb;
      color:#333;
    }

    header{
      background:#0b5ed7;
      color:white;
      padding:20px;
      text-align:center;
    }

    nav{
      background:#084298;
      padding:12px;
      text-align:center;
    }

    nav a{
      color:white;
      text-decoration:none;
      margin:0 15px;
      font-weight:bold;
    }

    .hero{
      height:400px;
      background:linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
      url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1');
      background-size:cover;
      background-position:center;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      color:white;
      text-align:center;
      padding:20px;
    }

    .hero h1{
      font-size:48px;
      margin-bottom:15px;
    }

    .hero p{
      font-size:20px;
      margin-bottom:20px;
    }

    .btn{
      background:#ffc107;
      color:black;
      padding:12px 25px;
      border:none;
      border-radius:5px;
      text-decoration:none;
      font-weight:bold;
    }

    .services{
      padding:60px 20px;
      text-align:center;
    }

    .services h2{
      margin-bottom:40px;
      font-size:36px;
    }

    .cards{
      display:flex;
      justify-content:center;
      gap:20px;
      flex-wrap:wrap;
    }

    .card{
      background:white;
      width:300px;
      padding:25px;
      border-radius:10px;
      box-shadow:0 4px 10px rgba(0,0,0,0.1);
    }

    .card h3{
      margin-bottom:15px;
      color:#0b5ed7;
    }

    .contact{
      background:#0b5ed7;
      color:white;
      padding:50px 20px;
      text-align:center;
    }

    footer{
      background:#222;
      color:white;
      text-align:center;
      padding:15px;
    }
  </style>
</head>

<body>

  <header>
    <h1>Global Education Consultancy</h1>
    <p>Your Future Begins Here</p>
  </header>

  <nav>
    <a href="#">Home</a>
    <a href="#">Services</a>
    <a href="#">Universities</a>
    <a href="#">Contact</a>
  </nav>

  <section class="hero">
    <h1>Study Abroad With Confidence</h1>
    <p>UK | Australia | Canada | USA</p>
    <a href="#" class="btn">Apply Now</a>
  </section>

  <section class="services">
    <h2>Our Services</h2>

    <div class="cards">

      <div class="card">
        <h3>University Admission</h3>
        <p>Get guidance for top universities and courses worldwide.</p>
      </div>

      <div class="card">
        <h3>Visa Assistance</h3>
        <p>Professional support for student visa application process.</p>
      </div>

      <div class="card">
        <h3>IELTS Preparation</h3>
        <p>Expert coaching and preparation materials for IELTS.</p>
      </div>

    </div>
  </section>

  <section class="contact">
    <h2>Contact Us</h2>
    <p>Email: info@educationconsultancy.com</p>
    <p>Phone: +977-9800000000</p>
  </section>

  <footer>
    <p>© 2026 Global Education Consultancy. All Rights Reserved.</p>
  </footer>

</body>
</html>
