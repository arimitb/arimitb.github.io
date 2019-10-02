var horizons = new Object();
var maxHorizonAmplitude = 0;
var baseline = 0;
$.getJSON("ajax/horizons.json", function(data) {
  horizons = data;
  let offsetLength = horizons.offset.length;
  for(let i = 0; i < offsetLength; i++) {
    let tempArr = horizons.offset[i];
    //horizons.offset.push(tempArr.reverse());
    for(let j = 0; j < horizons.offset[i].length; j++) {
      if(horizons.offset[i][j] > maxHorizonAmplitude) {
        maxHorizonAmplitude = horizons.offset[i][j];
      }
    }
  }
  baseline = Math.max((canvas.height/2),maxHorizonAmplitude);
  console.log("JSON loaded.");
});

var canvas = $('#audio-vis')[0];
var ctx = canvas.getContext('2d');
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
function resizeCanvas() {
  canvas.height = $(window).height();
  canvas.width = $(window).width();
}

var excludeBufferLength = $('input#excludebuffer').val();
var excludeBuffer = [];
var updateFrequency = 60000/$('input#bpm').val();
var multiplier = $('input#multiplier').val();
var curStyle = "bw_line_noaudio";

$('input#bpm').change(function() {
  updateFrequency = 60000/$('input#bpm').val();
});

$('input#multiplier').change(function() {
  multiplier = $('input#multiplier').val();
});

$('input#excludebuffer').change(function() {
  if($('input#excludebuffer').val() >= horizons.offset.length) {
    $('input#excludebuffer').val(horizons.offset.length - 1);
  }
  excludeBufferLength = $('input#excludebuffer').val();
  excludeBuffer = [];
});

$('input[name="visualiser-type"]').change(function() {
  curStyle = $('input[name="visualiser-type"]:checked').val();
  console.log(curStyle);
});

$('body').on("keydown", function(e) {
  if(e.keyCode == 38) {
    multiplier *= 2;
    $('input#multiplier').val(multiplier);
  } else if(e.keyCode == 40) {
    multiplier /= 2;
    $('input#multiplier').val(multiplier);
  }
});

var file = $('input[type="file"]')[0];
var audio = $('audio')[0];

file.onchange = function() {
  console.log("File changed.");
  var files = this.files;
  audio.src = URL.createObjectURL(files[0]);
  audio.load();
  audio.play();
  var context = new AudioContext();
  var src = context.createMediaElementSource(audio);
  var analyser = context.createAnalyser();
  src.connect(analyser);
  analyser.connect(context.destination);
  analyser.fftSize = 256;
  var bufferLength = analyser.frequencyBinCount;
  var dataArray = new Uint8Array(bufferLength);
  var dataArrayLength = dataArray.length;

  var n = horizons.offset[0].length/dataArrayLength; // n normalises horizon length to the shorter dataArray length so horizonLength*n = dataArrayLength

  ctx.strokeStyle = "#fff";
  var interpolationFrequency = 10;
  var timeSinceUpdate = 0;
  var closestMatch = -1;
  var maxAudioAmplitude = 255;
  updateAudioData();

  function updateAudioData() {
    for(let i = dataArrayLength - 1; i >= 0; i--) {
      if(dataArray[i] > 0) {
        dataArrayLength = i + 1;
        break;
      }
    }
    console.log(dataArrayLength);
    var minOffset = -1;
    for(let i = 0; i < horizons.offset.length; i++) {
      let curOffset = 0;
      for(let j = 0; j < dataArrayLength; j++) {
        curOffset += Math.abs((dataArray[j]/maxAudioAmplitude) - (horizons.offset[i][j*n]/maxHorizonAmplitude));
      }
      if(curOffset < minOffset || minOffset == -1) {
        let exclude = false;
        for(let k = 0; k < excludeBuffer.length; k++) {
          if(i == excludeBuffer[k]) {
            exclude = true;
          }
        }
        if(!exclude) {
          minOffset = curOffset;
          closestMatch = i;
        }
      }
    }
    if(excludeBuffer.length >= excludeBufferLength) {
      excludeBuffer.shift();
    }
    excludeBuffer.push(closestMatch);
    timeSinceUpdate = 0;
  }

  draw();
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    analyser.getByteFrequencyData(dataArray);
    switch(curStyle) {
      case 'bw_line_noaudio':
        ctx.strokeStyle = "rgb(255,255,255)";
        ctx.beginPath();
        for(let k = 0; k < canvas.width; k++) {
          let lastVal = baseline - (excludeBuffer.length > 1 ? horizons.offset[excludeBuffer[excludeBuffer.length - 2]][k] : 0);
          let curVal = baseline - horizons.offset[closestMatch][k];
          ctx.lineTo(k, (curVal > lastVal ? curVal - (curVal-lastVal)/Math.max(timeSinceUpdate,1) : curVal + (lastVal - curVal)/Math.max(timeSinceUpdate,1)));
        }
        ctx.stroke();
        break;
      case 'bw_line_audio':
        ctx.strokeStyle = "rgb(255,255,255)";
        ctx.beginPath();
        for(let k = 0; k < canvas.width; k++) {
          let lastVal = baseline - (excludeBuffer.length > 1 ? horizons.offset[excludeBuffer[excludeBuffer.length - 2]][k] : 0);
          let curVal = baseline - horizons.offset[closestMatch][k];
          ctx.lineTo(k, (curVal > lastVal ? curVal - (curVal-lastVal)/Math.max(timeSinceUpdate,1) : curVal + (lastVal - curVal)/Math.max(timeSinceUpdate,1)));
        }
        ctx.stroke();
        ctx.strokeStyle = "rgb(255,0,0)";
        ctx.beginPath();
        for(let k = 0; k < dataArrayLength; k++) {
          ctx.lineTo(k*(canvas.width/dataArrayLength), baseline - dataArray[k]);
        }
        ctx.stroke();
        break;
    }

    timeSinceUpdate++;
    if(timeSinceUpdate >= updateFrequency/multiplier) {
      updateAudioData();
    }
    setTimeout(function() {
      ctx.restore();
      window.requestAnimationFrame(draw);
    },interpolationFrequency);
  }
};

var settingsActive = true;

$('body').on("keydown", function(e) {
  if(e.keyCode == 77) {
    if(settingsActive) {
      settingsActive = false;
      $('.settings-overlay').css('display', 'none');
      $('audio').css('display', 'none');
    } else {
      settingsActive = true;
      $('.settings-overlay').css('display', 'block');
      $('audio').css('display', 'block');
    }
  }
});
