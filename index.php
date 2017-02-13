<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Ran's Portfolio</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/mobile.css">

  </head>
  <body data-spy="scroll" data-target="#navbar-links">
  <!-- Start Nav -->
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <!--Start Header Logo and Mobile toggle button-->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-links" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Ran Yehushua</a>
      </div>
      <!--End Header Logo and Mobile toggle button-->

      <!--Start Nav Links-->
      <div class="collapse navbar-collapse" id="navbar-links">
        <ul class="nav navbar-nav navbar-right">
          <li class="active"><a href="#home">Home</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <!--End Nav Links-->
    </div>
  </nav>
  <!-- End Nav -->

  <!-- Start Home Module -->
  <div id="home" class="module">
    <div class="container">
      <div class="row">
        <div class="col-xs-10 col-xs-offset-1">
          <div id="introHeader">
            <h1 class="text-center">Yehoosh Web Solutions</h1>
            <h3 class="text-center">Full-Stack JavaScript Developer</h3>
          </div>
          <hr>
          <ul id="socialNav" class="list-inline text-center">
            <li><a href="http://www.facebook.com/ran.yehushua/" target="_blank"><img src="img/glyphicons-facebook.png"></a></li>
            <li><a href="http://www.Twitter.com/yehoosh/" target="_blank"><img src="img/glyphicons-twitter.png"></a></li>
            <li><a href="https://www.instagram.com/yehoosh/" target="_blank"><img src="img/glyphicons-instagram.png"></a></li>
            <li><a href="https://www.linkedin.com/in/ran-yehushua-32617422" target="_blank"><img src="img/glyphicons-linkedin.png"></a></li>
            <li><a href="https://github.com/ranyehushua/" target="_blank"><img src="img/glyphicons-github.png"></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div> <!-- End Home Module -->

  <!-- Start Portfolio Module -->
  <!-- Note that each thumbnail preview is 500 x 380 -->
  <!-- Note the clearfixes applied. On small and medium displays where there are 2 columns, clearfix is visible after every 2nd thumbnail. On large display with 3 columns, clearfix div is applied after every 3rd thumnail -->
  <div id="portfolio" class="module">
    <div class="container-fluid">
      <div class="row">
        <!-- Start Thumbnail #1 -->
        <div class="col-xs-12 col-sm-6 col-lg-4">
          <a class="thumbnail" href="BudgetBalancer/index.html">
            <img src="img/thumbnails/budget.png" class="img-responsive">
            <div class="caption">A budget balancing tool built with React and Redux.</div>
          </a>
        </div>
        <!-- End Thumbnail #1 -->
        <!-- Start Thumbnail #2 -->
        <div class="col-xs-12 col-sm-6 col-lg-4">
          <a class="thumbnail" href="http://www.oc4d.org/">
            <img src="img/thumbnails/oc4d.png" class="img-responsive">
            <div class="caption">Open Content for Development. Built on MediaWiki.</div>
          </a>
        </div>
        <!-- End Thumbnail #2 -->
        <!-- Clearfix only visible on small and medium resolution (when in 2 column layout) -->
        <div class="clearfix visible-sm-block visible-md-block"></div>
        <!-- Start Thumbnail #3 -->
        <div class="col-xs-12 col-sm-6 col-lg-4">
          <a class="thumbnail" href="ReactWeather/index.html">
            <img src="img/thumbnails/weather.png" class="img-responsive">
            <div class="caption">A weather search application built with React.</div>
          </a>
        </div>
        <!-- End Thumbnail #3 -->
        <!-- Clearfix only visible on large resolution (when in 3 column layout) -->
        <div class="clearfix visible-lg-block"></div>
        <!-- Start Thumbnail #4 -->
        <div class="col-xs-12 col-sm-6 col-lg-4">
          <a class="thumbnail" href="SimonGame/index.html">
            <img src="img/thumbnails/simon.png" class="img-responsive">
            <div class="caption">Simon game built with jQuery.</div>
          </a>
        </div>
        <!-- End Thumbnail #4 -->
        <!-- Clearfix only visible on small and medium resolution (when in 2 column layout) -->
        <div class="clearfix visible-sm-block visible-md-block"></div>
        <!-- Start Thumbnail #5 -->
        <div class="col-xs-12 col-sm-6 col-lg-4">
          <a class="thumbnail" href="calculator/index.html">
            <img src="img/thumbnails/calculator.png" class="img-responsive">
            <div class="caption">A vanilla JavaScript calculator application.</div>
          </a>
        </div>
        <!-- End Thumbnail #5 -->
        <!-- Start Thumbnail #6 -->
        <div class="col-xs-12 col-sm-6 col-lg-4">
          <a class="thumbnail" href="PomodoroClock/index.html">
            <img src="img/thumbnails/pomodoro.png" class="img-responsive">
            <div class="caption">A Pomodoro clock application.</div>
          </a>
        </div>
        <!-- End Thumbnail #6 -->
        <!-- Clearfix visible on all resolutions (when in 2 and 3 column layout) -->
        <div class="clearfix visible-sm-block visible-md-block visible-lg-block"></div>
      </div>
    </div>
  </div>

  <!-- End Portfolio Module -->

  <!-- Start About Module -->
  <div id="about" class="module">
    <div class="container">
      <div class="row">
        <div class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0 col-md-5 col-md-offset-1" id="bio">
        <h2>Yehoosh Web Solutions.</h2>
        <p>I am a self taught web developer based in Salt Lake City, Utah. When I am not honing my web development skills, I enjoy spending my freetime in the Wasatch Mountains, snowboarding in the winter and mountain biking in the summer.</p>
        <p>I am currently seeking work in the web development and design field. If you would like to network, please do not hesitate to contact me!</p>
        <p>Please also feel free to <a href="files/Resume.pdf">browse my Resume</a></p>
        </div>
        <!-- right column is hidden on screens less than 768px wide -->
        <div class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0 col-md-5 col-md-offset-0">
          <img id="avatarImage" src="img/avatar.jpg" class="img-responsive">
        </div>
      </div>
    </div>
  </div> <!-- End About Module -->

  <!-- Start Contact Module -->
  <div id="contact" class="module">
    <div class="container">
      <div class="row">
        <h3>I look forward to hearing from you!</h3>
      </div>
      <!-- Start ContactForm -->
      <div class="row">
        <form method="post" id="contactForm">
          <div class="col-xs-12 col-sm-6">
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" name="name" class="form-control" id="formName">
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <div id="notEmail" style="display:none">Please enter a valid email address</div>
              <input type="email" name="email" class="form-control" id="formEmail">
            </div>
          </div>
          <div class="col-xs-12 col-sm-6">
            <div class="form-group">
              <label for="comment">Comments:</label>
              <textarea name="comment" id="emailMessage" class="form-control"></textarea>
            </div>
          </div>
          <div class="form-group text-center">
            <input type="submit" name="submit" value="Submit Message" id="submitContact" class="btn btn-success">
            <div id="formError" style="display:none"></div>
          </div>
        </form>
      </div>
      <!-- End Contact Form -->

      <!-- Start PHP email submission -->
      <div>
        <?php

          if ($_POST['submit']) {
            $emailFrom = "ranyehushua@yehoosh.com";
            $emailTo = "ranyehushua@gmail.com";
            $replyTo = $_POST['email'];
            $subject = "Message from " . $_POST['name'];
            $body = $_POST['comment'];
            $headers = "From: $emailFrom \r\n";
            $headers .= "Reply-To: $replyTo \r\n";
            $headers .= "Return-Path: $emailFrom\r\n";
            $headers .= "X-Mailer: PHP \r\n";
            $error = "";

            if (!$_POST['name']) {
              $error .= "<li>You forgot to enter your name</li>";
            }

            if (!$_POST['email']) {
              $error .= "<li>You forgot to enter your email address</li>";
            }

            if (!$_POST['comment']) {
              $error .= "<li>You forgot to enter a comment</li>";
            }

            if ($error) {
              echo "<ul class='form-error-list'>$error</ul>";
            } else if (mail($emailTo, $subject, $body, $headers)) {
              echo "Your message was sent succesfully!";
            } else {
              echo "There was an error sending your message.";
            }



          }

        ?>
      </div>
      <!-- End PHP email submission -->

    </div>
  </div> <!-- End Contact Module -->

  <footer>
    <!-- <div class="container-fluid"> -->
      <ul class="list-inline text-center">
        <li><a href="http://www.facebook.com/ran.yehushua/" target="_blank"><img src="img/glyphicons-facebook-inverted.png"></a></li>
        <li><a href="http://www.Twitter.com/yehoosh/" target="_blank"><img src="img/glyphicons-twitter-inverted.png"></a></li>
        <li><a href="https://www.instagram.com/yehoosh/" target="_blank"><img src="img/glyphicons-instagram-inverted.png"></a></li>
        <li><a href="https://www.linkedin.com/in/ran-yehushua-32617422" target="_blank"><img src="img/glyphicons-linkedin-inverted.png"></a></li>
        <li><a href="https://github.com/ranyehushua/" target="_blank"><img src="img/glyphicons-github-inverted.png"></a></li>
      </ul>
      <p class="text-center">&copy; 2016 Ran Yehushua.</p>
    <!-- </div> -->
  </footer>


    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
  <script src="js/email.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/script.js"></script>
  </body>
</html>
