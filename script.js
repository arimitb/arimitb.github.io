// PROJECTS

var projtitle = [
  'Canvas Art Run',
  'Interactive Bin',
  'Binge'
];

var projimg = [
  'images/projects/canvas.jpg',
  'images/projects/trashbin.png',
  'images/projects/binge.jpg'
];

var projdesc = [
  'This is a compilation of everything I made while exploring the creation of visual design using programming, specifically the HTML5 canvas element.',
  'The interactive bin is an installation aimed towards raising awareness towards environmental issues, the current state of sustainability, and difficulties faced by the cleaner force.',
  'App designed to help the user schedule TV and movie series marathons and keep track of their progress. With curated reviews and custom viewing orders, I tried to cater to every type of binger - casual or pedantic.'
];

var projurl = [
  'https://vimeo.com/313986685',
  'https://www.behance.net/gallery/78326075/Interactive-Bin-P1-Autonomous',
  'https://www.behance.net/gallery/78057525/Binge-Discover-binge-shows-and-films-App-Design'
];

for(k = 0; k<projimg.length; k++)
{
  $('#projects-container').append('<a href="' + projurl[k] +'" target="_blank"><div class="projects-item"' + ((k < projimg.length-1) ? '' : ' style="margin-bottom:0;"') + '><div class="projects-item-bg" style="background-image:url(' + projimg[k] + ');"></div><div class="projects-item-inner-border"></div><div class="projects-item-title">' + projtitle[k] + '</div><div class="projects-item-description">' + projdesc[k] + '</div></div></a>');

}

// GALLERY

var workimg = [
  'images/works/retro.jpg',
  'images/works/binge.jpg',
  'images/works/octopode.jpg',
  'images/works/toxicity.jpg',
  'images/works/woke.jpg',
  'images/works/censor.jpg',
  'images/works/canvas24.jpg',
  'images/works/canvas-focus.jpg',
  'images/works/canvas-entropy.png',
  'images/works/canvas13.jpg',
  'images/works/canvas18.jpg',
  'images/works/positioning-hand.gif'
];

var $gallery = $('#gallery-container');
var lightbox = $('#lightbox');
var lbcontain = $('#lightbox-container');

var curImg = 0;
var $prev = $('#prev-icon');
var $next = $('#next-icon');
var $esc = $('#esc-icon');

for(k = 0; k < workimg.length; k++)
{
  $gallery.append('<div id="gallery-' + k + '" class="gallery-item" style="background-image:url(' + workimg[k] + ');"><div id="gallery-' + k + '" class=\"gallery-item-inner-border\"></div></div>');
}

$('.gallery-item').click(function(e)
{
  curImg = e.target.id.split("-").pop();
  lbcontain.css('background-image', 'url(' + workimg[curImg] + ')');
  enableLightbox(0);
});

// VIDEO GALLERY

var vidurl = [
  'https://vimeo.com/329292191',
  'https://vimeo.com/327540717',
  'https://vimeo.com/313986685',
  'https://www.youtube.com/watch?v=d-C5wsp7K00',
  'https://vimeo.com/240265216',
  'https://www.youtube.com/watch?v=j31yi0M4xrM'
];

/* For YouTube: https://img.youtube.com/vi/[VIDEO ID]/maxresdefault.jpg
For Vimeo: http://vimeo.com/api/v2/video/[VIDEO ID].xml -> <thumbnail_large> */

var thumbnail = [
  'https://i.vimeocdn.com/video/774072781_640.webp',
  'https://i.vimeocdn.com/video/774073164_640.webp',
  'https://i.vimeocdn.com/video/755441617_640.jpg',
  'https://img.youtube.com/vi/QTbrcJl6D4I/maxresdefault.jpg',
  'https://img.youtube.com/vi/d-C5wsp7K00/maxresdefault.jpg',
  'https://i.vimeocdn.com/video/663541530_640.jpg',
  'https://img.youtube.com/vi/j31yi0M4xrM/maxresdefault.jpg'
];

var vimeoEmbed = [
  '<iframe id=\"vimeoframe\" src=\"https://player.vimeo.com/video/',
  '\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen></iframe>'
];

var ytEmbed = [
  '<iframe id=\"ytframe\" src=\"https://www.youtube.com/embed/',
  '\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>'
];

var curVid = 0;
var $vidgallery = $('div#video-gallery-container');

for(var k = 0; k < vidurl.length; k++)
{
  $vidgallery.append('<div id="video-' + k + '" class="video-item" style="background-image:url(' + thumbnail[k] + ');"><div class="play-icon"></div></div>');
}

$('.video-item').click(function(e){
  curVid = e.target.id.split("-").pop();
  lbcontain.css('background-image', 'none');
  enableLightbox(1);
});

// LIGHTBOX

function enableLightbox(lbMode)
{
  if(lbMode == 1)
  {
    addVid();
  }
  lightbox.css('display','block');
  lightbox.animate({opacity: '1'}, 200);

  $esc.click(function()
  {
    lbEsc();
  });

  $(document).keyup(function(e)
  {
    if(e.keyCode == 27)
    {
      lbEsc();
    }
    else if(e.keyCode == 37)
    {
      lbSwitch(lbMode,0);
    }
    else if(e.keyCode == 39)
    {
      lbSwitch(lbMode,1);
    }
  });

  $prev.click(function(){
    lbSwitch(lbMode,0);
  });

  $next.click(function(){
    lbSwitch(lbMode,1);
  });
}

function lbEsc()
{
  lightbox.animate({opacity: '0'}, 200);
  setTimeout(
    function()
    {
      lightbox.css('display','none');
      lbcontain.css('background-image', 'none');
      $('#lightbox-container').empty();
    }, 200);
}

function lbSwitch(mode,dir) //dir: 0 = prev, 1 = next
{
  if(mode == 0)
  {
    if(dir == 0)
    {
      if(curImg > 0)
      {
        curImg--;
      }
      else if(curImg == 0)
      {
        curImg = workimg.length - 1;
      }
    }
    else if(dir == 1)
    {
      if(curImg < workimg.length-1)
      {
        curImg++;
      }
      else if(curImg == workimg.length-1)
      {
        curImg = 0;
      }
    }
    $('#lightbox-container').empty();
    lbcontain.css('background-image', 'url(' + workimg[curImg] + ')');
  }
  else if(mode == 1)
  {
    if(dir == 0)
    {
      if(curVid > 0)
      {
        curVid--;
      }
      else if(curVid == 0)
      {
        curVid = vidurl.length - 1;
      }
    }
    else if(dir == 1)
    {
      if(curVid < vidurl.length-1)
      {
        curVid++;
      }
      else if(curVid == vidurl.length-1)
      {
        curVid = 0;
      }
    }
    addVid();
  }
}

function addVid()
{
  lbcontain.css('background-image', 'none');
  $('#lightbox-container').empty();
  if(vidurl[curVid].indexOf("youtube") != -1)
  {
    $('#lightbox-container').append(ytEmbed[0] + vidurl[curVid].split('=')[1] + ytEmbed[1]);
  }
  else if(vidurl[curVid].indexOf("vimeo") != -1)
  {
    $('#lightbox-container').append(vimeoEmbed[0] + vidurl[curVid].split('m/')[1] + vimeoEmbed[1]);
  }
}

// SCROLL TO TOP ON LOAD

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// HEADER TRANSITIONS

$(window).scroll(function() {
  var $height = $(window).scrollTop();
  if($height > 50) {
    $('.header-scale').addClass('active');
    $('#header').removeClass('landing-header');
    $('div#landing-about').addClass('landing-element-active');
    $('div#landing-social').addClass('landing-element-active');
  }
  else {
    $('.header-scale').removeClass('active');
    $('#header').addClass('landing-header');
    $('div#landing-about').removeClass('landing-element-active');
    $('div#landing-social').removeClass('landing-element-active');
  }
})

// SMOOTH SCROLLING

$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event)
{
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - ($(window).height()/10) + 1
      }, 800);
    }
  }
});

// HAMBURGER ANIM

var hamMenu = $('div#ham-menu');
var hamHandle1 = $('div#header-menu-mobile-handle-1');
var hamHandle2 = $('div#header-menu-mobile-handle-2');
var hamState = 0;

function hamAnim()
{
  if(hamState == 0)
  {
    hamState = 1;
    hamHandle1.addClass('header-menu-mobile-handle-1-anim');
    hamHandle2.addClass('header-menu-mobile-handle-2-anim');
    $('.header-menu-mobile-handle-1-anim').css('animation-direction','normal');
    $('.header-menu-mobile-handle-2-anim').css('animation-direction','normal');
    setTimeout(function()
  	{
      hamHandle1.css('transform','translate(-50%, -50%) rotate(45deg)');
		  hamHandle2.css('transform','translate(-50%, -50%) rotate(-45deg)');
      hamHandle1.css('background','#fff');
		  hamHandle2.css('background','#fff');
  		hamHandle1.removeClass('header-menu-mobile-handle-1-anim');
      hamHandle2.removeClass('header-menu-mobile-handle-2-anim');
  	},500);

    hamMenu.addClass('ham-menu-anim');
    hamMenu.css('display','block');
    $('.ham-menu-anim').css('animation-direction','normal');
    setTimeout(function()
  	{
      hamMenu.css('transform','translateX(0)');
  		hamMenu.removeClass('ham-menu-anim');
  	},500);
  }

  else if (hamState == 1)
  {
    hamState = 0;
    hamHandle1.addClass('header-menu-mobile-handle-1-anim');
    hamHandle2.addClass('header-menu-mobile-handle-2-anim');
    $('.header-menu-mobile-handle-1-anim').css('animation-direction','reverse');
    $('.header-menu-mobile-handle-2-anim').css('animation-direction','reverse');
    setTimeout(function()
  	{
      hamHandle1.css('transform','translate(-50%, calc(-50% + 0.5rem))');
  		hamHandle2.css('transform','translate(-50%, calc(-50% - 0.5rem))');
      hamHandle1.css('background','var(--header-text-color)');
		  hamHandle2.css('background','var(--header-text-color)');
  		hamHandle1.removeClass('header-menu-mobile-handle-1-anim');
      hamHandle2.removeClass('header-menu-mobile-handle-2-anim');
  	},500);

    hamMenu.addClass('ham-menu-anim');
    $('.ham-menu-anim').css('animation-direction','reverse');
    setTimeout(function()
  	{
      hamMenu.css('transform','translateX(100%)');
      hamMenu.css('display','none');
  		hamMenu.removeClass('ham-menu-anim');
  	},500);
  }
}

// MOUSE COORDINATES

var mouseX = 0;
var mouseY = 0;
var hasMouse = 0;

$(document).on("mousemove", function(e){
  mouseX = e.clientX;
  mouseY = e.clientY;
  if(animPlay == 0)
  {
    draw();
  }
});

var test = 0;

// LANDING CANVAS

var canvas = $('canvas#landing-bg')[0];
var ctx = canvas.getContext('2d');

resizeCanvas();

window.addEventListener('resize', resizeCanvas);

function resizeCanvas()
{
	canvas.height = $(window).height()+($(window).height()/10);
	canvas.width = $(window).width();
  if(canvas.width > canvas.height)
  {
    maxCircleRadius = Math.round(canvas.width/10);
  }
  else
  {
    maxCircleRadius = Math.round(canvas.height/10);
  }
  if(matchMedia('(pointer:fine)').matches)
  {
    hasMouse = 1;
  }
  else
  {
    hasMouse = 0;
    mx = canvas.width/2;
    my = canvas.height/2;
    animDir = 0;
    animSpeed = 0;
  }
  if(animPlay == 0)
  {
    draw();
  }
}

var mx = canvas.width/2;
var my = canvas.height/2;
var animDir = 0;
var animSpeed = 100;
var animRate = 1;
var animPlay = 0;
var maxSpeed = 100;
var maxCircleRadius = 0;
var easeFactor = 10;

if(canvas.width > canvas.height)
{
  maxCircleRadius = Math.round(canvas.width/10);
}
else
{
  maxCircleRadius = Math.round(canvas.height/10);
}

$(function()
{
  draw();
});

function draw()
{
  animPlay = 1;
  ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.save();

  if(hasMouse)
  {
    mx = ((mx * (easeFactor - 1)) + mouseX) / easeFactor;
    my = ((my * (easeFactor - 1)) + mouseY) / easeFactor;
  }
  else
  {
    if(animDir == 0)
    {
      animSpeed+=animRate;
      if(animSpeed >= maxSpeed)
      {
        animDir = 1;
      }
    }
    else
    {
      animSpeed-=animRate;
      if(animSpeed <= -1*maxSpeed)
      {
        animDir = 0;
      }
    }
    my = canvas.height/2;
    mx += animSpeed*0.1;
  }

  for(var r = 0; r < (canvas.height/maxCircleRadius)+1; r++)
  {
    for(var c = 0; c < (canvas.width/maxCircleRadius)+1; c++)
    {
      var drawRadius = 0.1*maxCircleRadius*(Math.hypot(mx - (c*maxCircleRadius),my-(r*maxCircleRadius))/100);

      ctx.beginPath();
      ctx.arc(c*maxCircleRadius,r*maxCircleRadius,drawRadius,0,2*Math.PI,0);
      ctx.strokeStyle = "#555";
      ctx.stroke();
    }
  }

  ctx.restore();
  if(hasMouse == 1 && Math.abs(mx - mouseX) > 1)
  {
    window.requestAnimationFrame(draw);
  }
  else if(hasMouse == 0)
  {
    window.requestAnimationFrame(draw);
  }
  else
  {
    animPlay = 0;
  }
}
