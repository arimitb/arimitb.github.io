// READER SCRIPT

var mode = 0;
var readerUi = $("section#reader-screen");
var searchCache = ['','','',''];
var searchInputIndex = 0;
var searchBuffer = 0;
var textIndex = 0;

var searches = [
  ['index-ul', 'index-ul', 'index-br', 'index-br'],
  ['index-ur', 'index-ur', 'index-bl', 'index-bl'],
  ['index-ul', 'index-ur', 'index-br', 'index-bl'],
  ['index-ur', 'index-ur', 'index-bl', 'index-br']
];

var texts = [
`Even if you're an experienced artist it's worth working through these fundamentals, which will improve processes that you may otherwise take for granted—like how you hold a drawing pencil. Most of us instinctively assume the same grip for drawing that we use when writing; fingers and thumb near the tip with the heel of the hand resting on the paper for stability. But, unlike writing letters, drawing requires sensitivity and freedom of movement, which necessitates a different style of grip and motion. Your eraser is your pencil's companion, and using it with skill entails a lot of practice and experimentation. Here are some basic pencil, eraser, and shading exercises that will help you develop and perfect your skills.
Here are the two most common ways to hold a drawing pencil. With grip (A) the pencil is held from above with the forefinger pressing down on the pencil shaft. This grip is great for general drawing purposes as it allows free movement to pull or swipe the pencil in almost any direction. Vary the line quality between sharp and soft by changing the angle of your wrist in relation to the direction of movement.
Grip (B) is useful for light and delicate lines like perspective guidelines. The grip for (B) is further up the shaft, so there's less pressure placed on the tip.
Both grips prevent the heel of your hand from resting on the paper (as when writing), making you draw from the shoulder and enabling a wider pivot so you can create konger, flowing lines.
Which grip you use and how high or low you hold the pencil will vary constantly according to the quality of line you desire.`,
`Looking at the question from another side, we can see that representation is not something we may choose to do or not to do. It is theinevitable consequence of visual communication: For, as I pointed out, the formal constructs Of drawing depend on our human facultyof recognizing continuously analogies Of form between our variousvisual experiences, immediate and remembered. These analogieswork as much for the broadest as for the smallest elements Of formand structure. Moreover the faculty has to be continually alert if weare to read a drawing at all, and we cannot expect it to 'switch itselfoff' at some given stage in our reading. It will be there even in readingthe whole drawing. We will recognize analogies of form between thewhole assemblage of strokes on the drawn surface and other integralstructures from our visual experience and reflection. One most im-portant consideration is that these other structures include other drawings,or other works Of art. Forms seen gain much of their meaning from theprevious contexts in which they have been met. And drawings musttherefore deal, in some sense, in general forms and in conceptualtypes (see pp. 183ff.). For the universe of discourse which draughts-man and spectator have in common is not mere designation of theobject but a meeting of well-stocked minds. One must know draw-ings to understand drawing.`,
`If you carefully study an actual leaf, you will notice three particular aspects of the system of veins. First, the veins cover most of the leaf surface, subdividing it into approximately equal segments. Second, the veins vary in thickness. Third,they branch off at different angles. <span id="text-highlight">These subdivisions, variations of width, and changes of angle</span> are the essential design elements in the veining system of a leaf. It is on these characteristics that an expressive drawing must focus.Nature is never extravagant — minimum waste and maximum efficiency are the general rules. Before considering the problems of relative thickness and the angles of branching, consider for a moment the overall problem of the design in a network of veins. Nature has produced two possible solutions to the problem of distributing a liquid equally over a given surface (although one design is most common). It would be worth your while to ponder the probable reason for the design of veins and the two possible solutions to the problem.You should bear in mind that water distribution is the primary function, that water enters the system at one end only, and it must be brought to every part of the leaf and must not be wasted.`,
`Studies of the construction, function and plastic behavior of the leg before hoping to become proficient in conveying the moving mechanics of the body in drawing, in this case those of the leg,the student should undertake a careful review of the overall construction of the body, the forms of the joints and their mobile muscle forces. All skeletal shapes should be simplified so that the constructional form can tell us something about function:

• The most powerful joint is the knee joint which works on a hinging principle, with a roller (a double roller with a projecting front surface for the knee-cap) which can roll over an incongruent corresponding form, the top of the shin bone or tibia, causing the joint to open (fig. 57). Constructional simplifications of this kind help us to recognize what is happening.• The constructional simplification of the pelvis is based on the container-like character of the lesser and greater pelvis(forming a funnel shape), with the front part dropping down gradually. This creates the plastic reference points of the pubic bone and the two front spines of the hip bone(plasticity of the stomach). The crest of the hip bone then runs out sideways and on round to the back. The pelvis is a constant spatial area, and its sexually specific shape forms the body's center of movement (figs 58—60).The pelvis, thigh bone or femur and knee-joint considered as one overall unit form the functional basis where the muscles of the thigh-bone start and are attached. After considering these,we must examine the basic form of the live knee (figs 61, 62) in detailed studies, especially the knee skeleton's capacity for changing in motion and the groups of functional muscles between the pelvis and the shin bone. We shall examine the planes to view and the three-dimensional distortions caused by all factors affecting form. Bearing cross-sections in mind makes it easier to organize the hatching used for modeling. Working out the structural interplay between firm skeletal forms and soft, fleshy forms should prevent the knee from turning into a shapeless mass.`
];

$("body").keyup(function(e)
  {
    if(e.keyCode == 13)
    {
      changeMode();
    }
  }
);

$("div.index-button").click(function(e){
  selection(e.target.id);
});

function selection(e)
{
  if(mode == 0)
  {
    searchBuffer = 0;
    if(searchInputIndex > 3)
    {
      searchCache = ["","","",""];
      searchInputIndex = 0;
    }
    searchCache[searchInputIndex] = e;
    if(searchCache[searchInputIndex] != "")
    {
      searchInputIndex++;
    }
    if(searchInputIndex > 3)
    {
      for(var r = 0; r < searches.length; r++)
      {
        for(var c = 0; c < 4; c++)
        {
          if(searchCache[c] == searches[r][c])
          {
            if(c >= 3)
            {
              textIndex = r;
              changeMode();
              break;
            }
          }
          else
          {
            if(r == searches.length)
            {
              searchInputIndex = 0;
            }
            break;
          }
        }
      }
    }
  console.log(searchCache);
  }
}

$("div#reader-back").click(function(e){
  changeMode();
});

setInterval(function()
{
  searchBuffer++;
  if(searchBuffer > 4 && searchCache != ['','','',''])
  {
    searchInputIndex = 0;
    searchCache = ['','','',''];
    console.log(searchCache);
  }
}
,4000);

function changeMode()
{
  if(mode == 0)
  {
    mode = 1;
    $('div#reader-text').append(texts[textIndex]);
    $('div#reader-text').scrollTop(0);
    readerUi.css("display", "block");
    readerUi.addClass("reader-screen-anim").css('animation-name', 'reader-in').on("animationend", function(){
      //$(this).removeClass("reader-screen-anim");
      readerUi.css("display", "block");
      readStart();
    });
  }
  else if(mode == 1)
  {
    mode = 0;
    readerUi.scrollTop(0);
    var logoscreen = document.getElementById('logo-screen');
    logoscreen.style.animation = 'none';
    logoscreen.offsetHeight;
    logoscreen.style.animation = null;
    var logocontainer = document.getElementById('logo-container');
    logocontainer.style.animation = 'none';
    logocontainer.offsetHeight;
    logocontainer.style.animation = null;
    logoUpdate();
    clearInterval(checkSpeech);
    $().articulate('stop');
    readerUi.addClass("reader-screen-anim").css('animation-name', 'reader-out').on("animationend", function(){
      //$(this).removeClass("reader-screen-anim");
      readerUi.css("display", "none");
    });
  }

  searchInputIndex = 0;
}

var pos = 0;
var startPos = 0;
var endPos = 0;
var paused = 0;
var playSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><g><polygon points="955.4 512 68.59 0 68.59 1024 955.4 512"/></g></svg>';
var pauseSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 251 201"><g><rect x="0.5" y="0.5" width="100" height="200"/><rect x="150.5" y="0.5" width="100" height="200"/></g></svg>';
var volumeLevel = 0.5;
var speedLevel = 1.1;
var checkSpeech;

function readStart()
{
  var newText;
  var spanInsert = '<span id="text-highlight">';
  startPos = 0;
  endPos = 0;
  paused = 0;

  newLine();
  function newLine()
  {
    startPos = endPos;
    newText = [texts[textIndex].slice(0,startPos),spanInsert,texts[textIndex].slice(startPos)].join('');
    getEnd();
  }

  function getEnd()
  {
    var wordCount = 0;

    for(var t = startPos; t < texts[textIndex].length; t++)
    {
      if(texts[textIndex][t] === '\n' || texts[textIndex][t] === '.')
      {
        endPos = t+1;
        insertEnd();
        break;
      }
      else if(texts[textIndex][t] === ' ')
      {
        wordCount++;
        if(wordCount >= 14)
        {
          endPos = t;
          insertEnd();
          break;
        }
      }
    }

    function insertEnd()
    {
      var finalText = [newText.slice(0,endPos+spanInsert.length),'</span>',newText.slice(endPos+spanInsert.length)].join('');
      $('#reader-text').replaceWith('<div id="reader-text">' + finalText + '</div>');
      var scrollCache = $('section#reader-screen').scrollTop();
      $('section#reader-screen').animate({
        scrollTop: $('span#text-highlight').offset().top + scrollCache - 32
      },750);
      speak();
    }
  }

  function speak()
  {
    $('span#text-highlight').articulate('setVoice','name','Google UK English Male').articulate('volume',volumeLevel).articulate('rate',speedLevel).articulate('speak');

    checkSpeech = setInterval(function()
    {
      if($().articulate('isSpeaking') == false)
      {
        clearInterval(checkSpeech);
        $().articulate('stop');
        newLine();
      }
    },100);
  }

  function skip(dir)
  {
    clearInterval(checkSpeech);
    $().articulate('stop');
    startPos = dir == 1 ? startPos + 100 : startPos - 100;
    while(texts[textIndex][startPos-1] != " ")
    {
      startPos++;
    }
    newText = [texts[textIndex].slice(0,startPos),spanInsert,texts[textIndex].slice(startPos)].join('');
    getEnd();
  }

  $("div#reader-skip-f").click(function(){
    skip(1);
  });

  $("div#reader-skip-b").click(function(){
    skip(0);
  });
}

$("div#reader-pause").click(function(){
  pause();
});

function pause()
{
  if(paused == 0)
  {
    $().articulate('pause');
    paused = 1;
    $('div#reader-pause svg').replaceWith(playSvg);
  }
  else
  {
    $().articulate('resume');
    paused = 0;
    $('div#reader-pause svg').replaceWith(pauseSvg);
  }
}

var settingState = 0;

$("div#reader-settings").click(function(){
  if(settingState == 0)
  {
    settingState = 1;
    $("div#volume-level").css('width', volumeLevel*100 + '%');
    $("div#speed-level").css('width', speedLevel*100/2 + '%');
    $('section#settings-screen').css('display','block');
  }
});

$("div#settings-back").click(function(){
  if(settingState == 1)
  {
    settingState = 0;
    $('section#settings-screen').css('display','none');
  }
});

$("div#settings-volume").click(function(e){
  volumeLevel = (e.pageX-($(document).width()*0.25))/($(document).width()*0.75);
  $("div#volume-level").animate({width : volumeLevel*100 + '%'},200);
  $().articulate('volume',volumeLevel);
});

$("div#settings-speed").click(function(e){
  speedLevel = (e.pageX-($(document).width()*0.25))/($(document).width()*0.75);
  $("div#speed-level").animate({width : speedLevel*100 + '%'},200);
  speedLevel = Math.max(speedLevel*2,0.1);
});

// --------- HAND DETECTION ----------

const video = document.getElementById("myvideo");
const handimg = document.getElementById("handimage");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let isVideo = false;
let model = null;

// video.width = 500
// video.height = 400

const modelParams = {
    flipHorizontal: true,   // flip e.g for video
    maxNumBoxes: 2,        // maximum number of boxes to detect
    iouThreshold: 0.5,      // ioU threshold for non-max suppression
    scoreThreshold: 0.8,    // confidence threshold for predictions. INCREASE IF IT DETECTS MY HAIR AS HANDS.
}

function startVideo()
{
    handTrack.startVideo(video).then(function (status) {
        console.log("video started", status);
        if (status) {
            isVideo = true
            runDetection()
        }
    });
}

function toggleVideo()
{
    if (!isVideo) {
        startVideo();
    } else {
        handTrack.stopVideo(video)
        isVideo = false;
    }
}

// predictions[0] = bbox[x, y, width, height]
// predictions.length -> Number of hands detected

function runDetection()
{
    model.detect(video).then(predictions => {
      if(predictions[0])
      {
        //console.log(predictions[0].bbox[0] + (predictions[0].bbox[2]/2));
        parsePos(predictions[0].bbox);
        clearTimeout(detectionTimer);
        detectionTimer = null;
        handVisible = true;
      }
      else if(detectionTimer == null)
      {
        detectionTimer = setTimeout(function(){
          $("div#index-select-bg-" + curSelect).stop();
          $("div#index-select-bg-" + curSelect).animate({
            width : "0",
            height: "0"
          },100);
          handVisible = false;
          curSelect = -1;
          boxList = [];
          console.log("cleared");
        },250);
      }
      //console.log("Predictions: ", predictions);
      model.renderPredictions(predictions, canvas, context, video);
      if (isVideo) {
          requestAnimationFrame(runDetection);
      }
    });
}

function runDetectionImage(img)
{
    model.detect(img).then(predictions => {
        //console.log("Predictions: ", predictions);
        model.renderPredictions(predictions, canvas, context, img);
    });
}

// Load the model.
handTrack.load(modelParams).then(lmodel => {
    // detect objects in the image.
    model = lmodel
    runDetectionImage(handimg)
});

toggleVideo();

// Toggle Video Overlay

var overlayState  = false;

$('body').keyup(function(e)
{
  if(e.keyCode == 70)
  {
    if(!overlayState)
    {
      overlayState = true;
      $('div#vidoverlay').css('display','block');
    }
    else
    {
      overlayState = false;
      $('div#vidoverlay').css('display','none');
    }
  }
});

var detectionTimer;
var handVisible = false;
var canGesture = true;
var boxList = new Array ();
var bufferLength = 20; // Number of previous values stored in frames
var curSelect;
var gestureDistThreshold = 0.4;

// Gesture Select

function parsePos(bbox)
{
  var handX = Math.round(bbox[0] + (bbox[2]/2))/canvas.width;
  var handY = Math.round(bbox[1] + (bbox[3]/2))/canvas.height;

  if(boxList.length >= bufferLength)
  {
    boxList.shift();
  }
  var tempArray = new Array ();
  boxList.push([handX,handY]);
  //console.log(handX + " " + handY);
  if(mode == 0)
  {
    var avgX = 0;
    var avgY = 0;
    for(var t = 0; t < boxList.length; t++)
    {
      avgX += boxList[t][0];
      avgX /= 2;
      avgY += boxList[t][1];
      avgY /= 2;
    }

    if(curSelect != getCurSelect(handX,handY))
    {
      $("div#index-select-bg-" + curSelect).stop();
      $("div#index-select-bg-" + curSelect).animate({
        width : "0",
        height: "0"
      },100);
      curSelect = getCurSelect(handX,handY);
      $("div#index-select-bg-" + curSelect).animate({
        width : "100%",
        height: "100%"
      },2000,function(){
        if(handVisible)
        {
          var selectid;
          console.log("Selected");
          switch (curSelect){
            case 0: selectid = "index-ul";
                    break;
            case 1: selectid = "index-ur";
                    break;
            case 2: selectid = "index-bl";
                    break;
            case 3: selectid = "index-br";
                    break;
          }
          selection(selectid);
          var curIconTransform = $("#" + selectid + " svg.index-icon").css("transform");
          $("#" + selectid + " svg.index-icon").css("transform", curIconTransform + "scale(1.1)");
          setTimeout(function(){
            $("#" + selectid + " svg.index-icon").css("transform", curIconTransform);
          },1000);
        }
      });
    }
  }
  else if(mode == 1 && canGesture == 1)
  {
    //console.log(handX - boxList[0][0]);
    canGesture = false;
    if(handX - boxList[0][0] >= gestureDistThreshold)
    {
      $('div#reader-pause').trigger("click");
      boxList = [];
      console.log("PAUSE");
    }
    else if(handX - boxList[0][0] <= -gestureDistThreshold)
    {
      $('div#reader-back').trigger("click");
      boxList = [];
      console.log("BACK");
    }
    else if(handY - boxList[0][1] <= -gestureDistThreshold)
    {
      $('div#reader-skip-b').trigger("click");
      boxList = [];
      console.log("SKIP BACK");
    }
    else if(handY - boxList[0][1] >= gestureDistThreshold)
    {
      $('div#reader-skip-f').trigger("click");
      boxList = [];
      console.log("SKIP FORWARD");
    }
    else
    {
      canGesture = true;
    }
    setTimeout(function(){
      canGesture = true;
    },1000);
  }
}

setInterval(function(){
  // console.log(handVisible);
  // console.log(boxList);
  if(mode == 1)
    console.log("Pause Status: " + paused + " | canGesture: " + canGesture + " | handVisible: " + handVisible);
},100);

function getCurSelect(handX,handY)
{
  var selection;

  if(handX < 0.5 && handY < 0.5)
  {
    selection = 0;
  }
  else if(handX > 0.5 && handY < 0.5)
  {
    selection = 1;
  }
  else if(handX < 0.5 && handY > 0.5)
  {
    selection = 2;
  }
  else if(handX > 0.5 && handY > 0.5)
  {
    selection = 3;
  }
  else
  {
    selection = -1;
  }

  return selection;
}

// LOGO ANIM

var logoPartSvg = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\"><path d=\"M256,0C256,141.38,141.38,256,0,256V0Z\"/></svg>";
var logoAnimDur = 15;

logoUpdate();

function logoUpdate()
{
  var logoInterval = setInterval(newConfig, 100);
  var logoAnimCount = 0;
  function newConfig()
  {
    for(var i = 1; i <= 6; i++)
    {
      $("div#logo-container svg").each(function(index)
      {
        $(this).css("transform","rotate("+(90*Math.round(Math.random()*10))+"deg)");
        if(Math.random() >= 0.5)
        {
          $(this).css("opacity","0");
        }
        else
        {
          $(this).css("opacity","1");
        }
        if(6 - (logoAnimDur - logoAnimCount) >= index)
        {
          $(this).css("transform","none");
          $(this).css("opacity","1");
        }
      });
    }
    logoAnimCount++;
    if(logoAnimCount > logoAnimDur)
    {
      $("div#logo-container svg").each(function(index)
      {
        $(this).css("transform","none");
        $(this).css("opacity","1");
      });
      clearInterval(logoInterval);
    }
  }
}

$(function()
{
  var greetingStart = "Welcome to Journey! ";
  var greeting = [
    "What would you like to read?",
    "Ready to read?",
    "Discover, learn, and explore."
  ];
  $('section#logo-screen .audio-caption').replaceWith('<span class="audio-caption">' + greetingStart + greeting[Math.floor(Math.random()*greeting.length)] + '</span>');
  $("section#logo-screen .audio-caption").articulate();
});

//IOS OVERSCROLL FIX

// Uses document because document will be topmost level in bubbling
$(document).on('touchmove',function(e){
  e.preventDefault();
});

var scrolling = false;

// Uses body because jquery on events are called off of the element they are
// added to, so bubbling would not work if we used document instead.
$('body').on('touchstart','.scrollable',function(e) {

    // Only execute the below code once at a time
    if (!scrolling) {
        scrolling = true;
        if (e.currentTarget.scrollTop === 0) {
          e.currentTarget.scrollTop = 1;
        } else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
          e.currentTarget.scrollTop -= 1;
        }
        scrolling = false;
    }
});

// Prevents preventDefault from being called on document if it sees a scrollable div
$('body').on('touchmove','.scrollable',function(e) {
  e.stopPropagation();
});
