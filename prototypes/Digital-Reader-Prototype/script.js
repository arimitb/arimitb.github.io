var mode = 0;
var readerUi = $("section#reader-screen");
var searchCache = ['','','',''];
var searchInputIndex = 0;
var searchBuffer = 0;
var textIndex = 0;

var searches = [
  ['index-br','index-ur','index-ur','index-ul'],
  ['index-ul','index-br','index-ul','index-ur'],
  ['index-ul','index-bl','index-ur','index-ur'],
  ['index-bl','index-br','index-ul','index-br'],
  ['index-ur','index-ul','index-br','index-ul'],
  ['index-ur','index-bl','index-ur','index-br'],
  ['index-bl','index-ur','index-br','index-bl'],
  ['index-ul','index-ur','index-bl','index-ul']
];

var texts = [
'<h1>Extraordinary Sketchbooks</h1><h2>David Meldrum</h2><p>Graphic designer and artist David Meldrum was touched and inspired when he discovered sketchbooks by his grandfather and great-grandfather and felt these to be an amazing insight into them as individuals. He likes the thought that his own books will be looked at by his family for generations to come. As a keen collector of early advertising signage and ephemera, David enjoys documenting such things in his books as a way of keeping a personal historical reference and record. He is currently working in a large heavy-paper hardback pad for a special project, \'but I usually prefer Moleskine concertina sketchbooks that are pocket-sized, or square, ring-bound books for drawing on location.\'</p><p>David\'s sketchbooks document life around him, both inside and outside his home. His most recent book centres on a self-set project where he is attempting to document everything that he eats and drinks over a period of a year. The images focus on packaging, typography, food, and produce. He works on his food book for approximately one to two hours a day. This unique project has caught the imagination of various food chains as well as some newspapers, both in the UK and USA. Two or three times a week he works in other sketchbooks, \'I also document people in my journals, usually when I\'m travelling or sitting in bars or pubs. When people realise you are drawing them. they can be uncomfortable but I have never had any problems, most people are intrigued. Once when I was in France, a man came over and drew alongside me.\'</p><p>His approach to image making is mixed media. \'In the food book I am using acrylic, gouache, collage, pen, ink and watercolour. My favorite is a Pilot V pen - a disposable fountain pen, but I also use a dip pen and ink (one of my grandfathers\'). In my reportage journals I use a range of fine-liners.\' David considers his sketchbook as something completely detached from any of the other creative activities he\'s involved in, \'It is purely a visual diary that I connect into. I never develop any sketchbook work further but view it as an entity in its own right.\' His dialogue with his books is private when he is in the process of creating them, but he is very happy to share the work with others when a book is complete. Looking back through his large collection of sketchbooks from over the years, David experiences a strong reminder of time. place and atmosphere- He feels that these visual records are a great deal more evocative than photographs could ever be, \'l could not imagine ever not keeping a sketchbook.\'</p><h2>Felicity House</h2><p>The beautiful sketchbooks of artist Felicity House are packed with drawings and paintings made directly from her subjects. She is inspired by travel and new places but responds equally to domestic scenes, such as complex interiors, figures and portraits. Felicity likes to work in books not larger than A4. She always uses top-quality paper for both drawing and painting. \'The heavy paper in a Moleskine drawing book is great, also superb Two Rivers Paper bound in a handmade book, and Saunders Waterford are favourites, in both NOT and HP papers. I like spine bound sketchbooks so I can work across the spread - always hardback - much more sturdy when I\'m on the move! helicity is never without a sketchbook and might use it several times in a week, but when abroad she will use it constantly.</p><p>\'When away on a trip it’s really a visual diary, a means 10 record fast, especially when I might not have time for a painting. Some pages will include a number of small images — drawn or painted •snapshots" to get a flavour of the place, These will be carried out in just ten minutes of fast looking and recording whilst exploring new territory; I will use a viewfinder to help me with these. In the end these sketchbooks ate lovely things to look and they evoke sense of the place - the heat. smells, vityancy and bun of a place. Other sketchbooks will be used as source material from which to make paintings.\' When felicity was teaching full time, she kept a 15-minute-a-day sketchbook and would recommend this to her students as an achievable way of improving their drawing. Felicity works in a sketchbook \'for the sheer pleasure of recording what I\'ve seen. The beautiful or intriguing or odd; it’s about what I\'ve noticed, what eye has rested on - pattern, shape, colour, composition - one visually selects and draws what attracts you to the scene / image / object: Her most recent travel book was made • on a trip to Italy, She also has a small book kept for the life class (that she teaches, to remember poses. \'I keep a tiny to draw in when rr-n at the bailer take my eyes off the It records the aruj movernentf„ Another one is kept landscape often done from the cat: The sketchbooks Chat have influenced and inspired Felic•ty irclude of her \'illustration tutor Tony Kerins. artist Tom Coates/ Neil Meacher RI arvi Robert Wade. The referral paintings drawings of hoth Eric and John Ward have provided inspiration.</p><h2>Liz Boast</h2><p>Liz recognises the importance of looking at the work of other artists, which cannot fail to enrich our own ideas and expand possibilities that may not otherwise have occurred to us. Recently she visited the Mito Foundation in Barcelona where she saw Calder Mercury fountain, and it made a big impact. \'I\'ve seen it several times before but this time noticed Guernica (by Picasso) on the wail behind\' This painting has a special affinity for Liz. who has held an exhibition in Guernica. As well as making quick drawings in her sketchbook, makes notes about what she sees and where she Visits on her travels, and always dates there.</p><p>\'l sometimes sit and look through all of my books (even though I know what is in them), purely to remember what it\'s all about - this whole silly business that is making art - something that you can\'t give up.’</p><h2>Corinna Button</h2><p>Painter and printmaker Corinna Button takes her ideas from \'seemingly ordinary Happenings: people at their daily routines, word or snippet 01 conversation, an advert in a magazine, a particular fabric, etc. These are triggers frequently draw upon and use to express that which I feel is bubbling beneath the surface." Having \'recently moved to Chicago. Corinna wanted to develop ideas that had been put aside during the upheaval so is currently \'feasting off\' previous sketchbooks and developing some of the into prints and paintings.\'A new theme will gradually emerge as i develop a sketchbook influenced my new habitat, It will be extension of continuing theme - fascination with people.\'</p>',
'<h1>Intuitive Sketching</h1><p>These objects are drawn very fast and fearlessly, but using a completely different approach in (line) drawing. First a "doodle\' of lines is drawn. These doodles then become the inspiration for the final spatial shape. The purpose of this method lies in the unexpected turns your drawing will take and the surprising shapes that will arise. Innovative shapes can be found that would not seem obvious at all at first, As you can see, this is a method that is best done digitally, so that brighter colour layers can easily cover over earlier black areas.</p><p>Starting with a doodle looks strange at first sight, but it is an interesting way for some designers to come up with a totally new shape instead of being preoccupied with an archetype. If you ask people to draw a pair of binoculars, nearly everybody focuses on two cylindrical shapes or an equivalent to these shapes. Starting with a doodle may create something else. You can actually see this change happening is this example: a search for a new shape for e video beamer. It looks like intuitive shaping and changing contours, Ike a 2D equivalent to 3D clay modelling. Shaping and reshaping, choosing and rejecting, and finally detailing and finishing.</p><h2>How to Practice</h2><p>A good way to practice is to make so- called \'five minute sketches\'. A good way to start the day is to make a drawing of a train, a lamp, a chair or an alarm clock. Most effective will be to sketch with a fat marker straight away, as we see here. After some time you will definitely improve. It doesn\'t matter whether you draw side views or perspective sketches.</p><p>Of course you can also use other drawing materials such as a fineliner, as seen here. When there is a lot of overlap and the drawings start to interfere with one another, it becomes a good exercise In improvisation. Can you draw attention to a particular Sketch? Here, in close-up, you can see the number of lines used, while the drawing remain legible when you zoom out.</p>',
'<h1>Basic Pencil Techniques</h1><h2>Materials</h2><p>The best tools for practicing classical art techniques are pencil on paper because these straightforward media allow you to really focus on the fundamentals of the drawing process: position direction, and pressure. You\'ll need just a few supplies for all the drawing exercises in the book—pencils, erasers, a ruler. and paper. (For research and development, which we\'ll cover in Level 6, you will also need a computer with Internet access and a scanner.)</p><p>Putty eraser (top), 3B pencil, pencil sharpener, plastic eraser (left), and ruler. I recommend grade 3B graphite pencils because they are soft enough that a "black\'" value is relatively easy to achieve but not so soft that you have to sharpen them every few minutes.</p><p>Most artists find inspiration and ideas when they\'re away from their studio or drawing space, so it\'s useful to have a portable sketchbook on hand at all times as a visual diary for daily experiences and ideas, The above examples from Master artists\' sketchbooks illustrate these myriad uses. ranging from Dürer•s proportion studies to Sargent gesture drawings. The moments just before going to sleep and when waking up are Often the most creative, so be ready to capture those thoughts on paper before you forget them. Sketchbook paper should be acid-free, for archival purposes, and around 80 ib (170 gm).</p><h2>Basic Pencil Techniques</h2><p>Even if you\'re an experienced artist it\'s worth working through these fundamentals. which will improve processes that you may otherwise take for granted—like how you hold a drawing pencil. Most of us instinctively assume the same grip for drawing that we use when writing; fingers and thumb near the tip with the heel of the hand resting on the paper for stability. But, unlike writing letters, drawing requires sensitivity and freedom of movement. which necessitates a different style of grip and motion. Your eraser is your pencil\'s companion, and using it with skill entails a lot Of practice and experimentation Here are some basic pencil, eraser, ond shading exercises that will help you develop and perfect your skills.</p><p>Here are the two most common ways to hold a drawing pencil. With grip (A) the pencil is held from above with the forefinger pressing down on the pencil shaft. This grip is great for general drawing purposes as it allows free movement to pull or swipe the pencil in almost any direction. Vary the line quality between sharp and soft by changing the angle of your wrist in relation to the direction of movement.</p><p>Grip (B) is useful for light and delicate lines like perspective guidelines. The grip for (B) is further up the shaft. 50 there\'s less pressure placed on the tip, Both grips prevent the heel of your hand from resting on the paper (as when writing). making you draw from the shoulder and enabling a wider pivot so you can create longer, flowing lines, Which grip you use and how high or low you hold the pencil will vary constantly according to the quality of line you desire.</p><p>Try the various grips with a series of mark-making exercises as shown here, Draw with the pencil tip for thin lines (A) and use the side of the tip for wider lines or try switching between the two along the length of a line Also have a go at drawing long straight lines across the entire paper surface Take at least one opportunity to see how hard you can press before the pencil\'s tip breaks off.</p><p>It\'s important to keep the pencil sharp at all times. A neat trick to avoid constant sharpening is to rotate the pencil along its length as you draw. Foreshortening is the optical illusion linked to perspective that makes distant objects look smaller in relation to closer objects. It is a useful visual tool to create the illusion of depth$ but if you work too large or draw on a surface not angled properly, your perspective may be distorted. causing you to unnecessarily exaggerate features to compensate for foreshortening. To avoid this problem. always draw on a surface tilted at a perpendicular (90-degree) angle to your line of view and keep your drawings small; x (14.8 x 21 cmY is sufficient for a full figure study.</p><p>A fundamental exercise with any artistic medium is creating a black-to-white value scale as shown here. You may find it helps to change the pencil grip to achieve the full range of values; nearer the tip for darker values, delicately shifting the grip further up for lighter marks. It\'s vitally important that you achieve a strong black at the darkest end of the scale as strong darks will be essential to achieving realistic value contrasts in your drawings. If you\'re finding it difficult to get the necessary contrast. you might need to try a different brand of 3B pencil or switch to a softer, grade 4 pencil. More often than not it\'s just a case of having the confidence to push down more firmly on the paper surface.</p>',
'<h1>Lines</h1><p>As you have seen already, the drawing material used after the line drawing has a great impact on the perception of the sketch. Knowing this, you can view the line drawing as an aid for the next materials like markers. It is therefore worthwhile to keep adapting the shape until you are satisfied, knowing that any Wrong\' lines will not be of much importance later. The drawing starts with long thin lines that extend much further than the object. The focus is on the direction of the lines, not on the end points. The shape changes and grows as the sketch develops. At a certain moment, there may be 50 many lines that the shape loses clarity. Darkening some of the lines can clarify the sketch again. Lines on the shaded side of the object can be drawn slightly thicker for spatial purposes. Thickening these •shadow lines\' can also bring back clarity to your drawing. This can even be a good moment to use a French curve or a ruler.</p><p>In the original sketch, these lines are darkened. This clarifies the shape of the object and makes the sketch workable. Applying just a quick airbrush and some highlights can transform this sketch into a presentable spatial drawing. The result is a clearly legible shape, and the sketch is still spontaneous thanks to the sketchy lines.</p><p>Tip: Let the drawing grow and change as it develops rather than precisely duplicating the mental image you had at the start.</p><p>Sometimes a drawing is adapted so much that it is no longer legible. A solution may be to start thickening the tight€ lines. This, however, may result in a messy sketch and leaves little room for variations in line thickness.</p><h2>Tracing</h2><p>Although it is good not to make a habit of it, it may sometimes be wise to trace the initial drawing. A way of tracing that is inappropriate for design sketches is to start tracing very carefully and to get rid of all the /wrong\' lines and leave out all help tines and guidelines. The result may look clean, but it is not efficient in terms of time and rids your sketches of all spontaneity and, far worse, personal handwriting and suggestiveness. Such drawings generally all look the same and lack all dynamism left in their tines.</p><p>Don\'t add too many dark lines, and don\'t try to trace directly on the rough sketch with single lines because it results in impersonal, forced lines.</p>',
'<h1>Perspective</h1><h2>The Five Basic Steps of 1-, 2-, and 3-Point Perspective</h2><p><b>1. Frame</b><br>Get into the habit of drawing a frame before starting each drawing. The frame\'s size and shape is as important as all subsequent steps because every mark you put down will relate to these initial four lines.</p><p><b>2. Horizon Line (HL)</b><br>The horizon line represents the viewer\'s eye level. The position of the HL changes within the picture frame depending on the vantage point of the viewers and whether they\'re looking down, along, or up toward an object.</p><p><b>3. Vanishing Point (VP1, VP2, VP3)</b><br>A vanishing point (VP) is a point on the horizon to which parallel lines converge. Lines that are parallel to the HL are an exception to this rule. A straight set of railway tracks appears to converge at a VP on the HL. while the sleepers holding the tracks together remain parallel to it. The angle and position of the HL and VPs constitute the foundation of your imagined scene. Every object you create must reference these elements if it is to convincingly exist within the same space. Artists often label these elements "HI" and "VP" and reinforce the HL with a permanent marker to ensure they remain visible as subsequent pencil lines are added.</p><p><b>4. Guidelines</b><br>Guidelines emanate from each VP in a 360-degree radius and are the guides along which parallel lines of an object converge to the When drawing freehand, it\'s easier to draw long, straight lines if each pencil stroke is made away from your body, so rotate your drawing paper as you work. Draw guidelines they\'re for reference only. If drawn too dark. lighten them using a putty eraser. Each line should be clear and pre- poorly defined lines make accuracy difficult. Before drawing each line, practice the motion without touching the paper, then draw the line confidently and in a single stroke.</p><p><b>5. Box Construction</b><br>Box forms a vital element of every artist\'s repertoire, as almost every physical object can be conceptualized as a simple box form before complexity and details are overlaid. A box form consists of six flat surfaces. known as planes: front, top, bottom, two sides, and a back plane. Planes are named according to which direction the plane is facing in relation to the viewer. For instance, a front plane of the box form is the one that faces toward the viewer, while a side plane is oriented at an angle, In reality the back-facing plane would not be visible. However, to develop a strong conceptual understanding of three-dimensional volumes. it\'s important to consider all six surfaces when drawing a box form.</p>',
'<h1>Anatomy</h1><h2>Six Stages for Rendering Anatomy</h2><p>The figure has been broken down into nine elements feet, legs, pelvis. spine and ribcage. shoulder girdle, arms. hands, head and neck, and facial expressions/emotions. Each of these elements is executed in six stages: massing, bones, skeletal landmarks, opposing curves, master quick studies, and anatomy in games.</p><p>Note: I\'ve avoided using too many technical terms, which are often not only contusing but easily forgotten. Information about individual muscles was simplified in favor of broader concepts, because such information is often too finely detailed to be of practical help in drawing for video games, where the action is fast-paced and the characters are normally clothed. For comprehensive information regarding anatomy. refer to Artistic Anatomy by Paul Richer.</p><p><b>1. Massing</b><br>Massing is the process of conceptualizing an element of anatomy using a simple volume or combination of volumes to create a coherent whole. Massing should always follow the same order; establish the largest forms before moving to the details. The massing processes here are only suggestions. You\'ll develop your own concepts and shortcuts, as each drawing you do will present you with new challenges and insights.</p><p><b>2. Bones</b><br>Bones constitute the fundamental structure of the figure and dictate much of its outward appearance. It\'s more important that you develop an overall concept for general forms. rather than try to memorize the 200-plus bones of the skeleton For instance, it\'s more important tc understand the ribcage as an egg-like volume than it is to remember the number of ribs it has.</p><p><b>3. Skeletal Landmarks</b><br>Skeletal landmarks are our spatial guides to map out a figure because they reveal the orientation and direction of the skeleton- It\'s important that you emphasize these landmarks because they convincingly communicate that your figures have an internal skeletal frame holding them together.</p><p><b>4. Opposing Curves</b><br>Opposing curves are used to create an illusion of movement by offering viewers a visual path to follow through an image, An element of interpretation is necessary when studying opposing curves because they don\'t reference literal lines on the figure, Which lines on the figure to emphasize is the choice of each artist: the contour of a form or muscle. a shadow edge. or an imaginary line that references the general shape of a body part. Concepts for opposing curves for the feet and hands have been combined with the larger forms of the legs and arms. There is no section on opposing curves for the pelvis and shoulder girdle of their compact form. which makes them more useful as transitional points for a broader system of curves. The opposing curves of the leg are covered along with the foot. and those for the hand are covered with the arm.</p>',
'<h1>Design Lessons From Nature</h1><h2>Introduction</h2><p>\'My hands,\' said the Centaur, \'have felt rocks, waters, plants without number, and the subtlest impressions of atmosphere, for I lift up hands on dark, still nights to detect the breeze and so discover signs to make sure of my way.\' - Henri Focillon</p><p>In this book we are concerned with forms in nature, with drawing, with ways of thinking about art and about design. These are related. Have you thought about nature, about your relationship, as artists, to its processes? Have you thought about your bodies, about life, as closely connected to your need to create and to construct? Have you considered the fact that everything that nature produces has form — not just leaves, fruit, birds, and elephants — but clouds, drops of water, oil, and air? When an artist plans to build something, he gathers materials together, piles up clay or bits of wood, collects tools, and clears a space for work. This is how the world began — gathering materials, clearing spaces, piling up reserves by volcanic eruption, earthquakes, floods. From this, slowly and with effort, in more than seven days, the world grew. So does a sculpture, a construction, a building. When an artist tk gins to run a pencil aimlessly over paper, creating smears and smudges, it is like wind running over sand, bending grass, rippling water. It is like the beginning of things, but it can also be something valid to express, It, too, can leave form. When an artist begins to work over his smudges, to define edges, to emphasize outlines, to fill in details, he is proceeding as nature does. We can see a profile suggested in a cliff, animals taking shape in the clouds, sea life forming in the folds of a wave, and in our own penciled smudgings we can recognize a face, the outline of a hand, or the emergence of a form with the same astonished recognition. Art is miraculous, but it is only a small echo of the great miracle of growth, of the constant process of creation and re-creation which is the way of nature. What is remarkable about the forms of nature is their capacity for self- reproduction, for self-perpetuation, for both change and continuity. As scientists, we would be concerned with the essence of such changes, with the essential nature of processes, but as artists we can see this in the forms themselves. A bone is the beginning of an understanding of the vertebrate skeleton, of the lives of animals and men, of the evolutionary history which produced our world. It is also the solid and necessary basis for an artist\'s drawing of form. The extraordinary quality of those drawings of the human figure created in the Renaissance is due, in large part, to their emphasis on the structural and mechanical aspects of the body. The figures of Luca Signorelli, with their heavy clavicles and deep-set necks resembling turtles, and their enormous, rounded shoulder blades in the shape of miller\'s wheels, convince us by their emphasis on essential structural and functional truths. The sense one gets from the drawings of Michelangelo and Raphael —of the musculature beneath the flesh, of the hard, tx:jny underpinnings — is a reflection of the excitement of discovery which Renaissance artists felt about the body and its functions. It may not be possible to recapture this sense of structure and function in relation to the human body, but it is still possible to understand its importance in relation to art. The glass cases in the American Museum of Natural History which display the skeletons of horses in various running positions are among the most exciting and beautiful visual forms to be seen in any art museum. Nor can I think of many artist\'s creations since the great age of Greek sculpture which can rival, in sheer visual drama, the glass case containing the skeleton of a rearing horse and that of a man with arms raised, as if reaching for the bridle. The forms of nature have a quality which only rarely marks a work of art: the feeling that something must be as it is, that it cannot be otherwise. Art does not have an obvious function and, if it is to avoid becoming mere decoration, it must convey its own sense of necessity and of inevitability. At the same time; a great work of art must be full of analogies—a shape that makes you aware of many shapes and therefore becomes a measure of all shape; a color that makes you aware of "color" and therefore of all other colors. To an artist, a bad drawing is the depiction of a form which can only be identified by the mind — an outline that serves to indicate a shape but does not convince. To convince the viewer that he is seeing something, a drawing must contain impressions of the artist\'s conviction, his involvement. An object is not its outside shape, nor the shadows and highlights which reveal its forms, but its presence from inside, In art, the presence from inside must be expressed through the artist\'s materials. A bone, truly rebuilt of charcoal, absolutely constructed from charcoal, becomes a reality on paper, The artist\'s concentration on the charcoal, on that paper, and on his own belief that a real bone is coming to life through this material more real, perhaps, than the real bone is what makes his drawing come to lite. Artists can learn from nature about lines and shapes; about scale, color, and texture; about the meaning of form and the significance of structure about all the processes which he is ever likely to encounter in his life and work. And, if he can get close to his materials, touch them, feel them, love them, and understand them, he will have properly begun his training as an artist.</p>',
'<h1>Artists\' Techniques and Material</h1><h2>Charcoal</h2><p>Charcoal, the most ancient of drawing materials, has been used since prehistory. Easy to make and use, it is suitable for all kinds of drawings. In his handbook II Libro dell\'arte (1437), Cennino Cennini carefully described the traditional technique for making good drawing charcoal. Small twigs of soft willow-wood should be left to dry, then cut into sticks the length of one\'s palm, tied into small bundles, and placed in a pot covered with an airtight lid that was in turn sealed with a layer of clay. The sealed pot cooked at a low temperature overnight. Once the twigs were charred, they were left to cool slowly. After their tip was sharpened, the twigs were inserted into a reed or tied to a larger stick to avoid soiling the hands, Charcoal\'s highly friable nature gives its easily erasable line an unusually soft and pictoriai quality but also tends to smear the paper and leave blackish rings. Even more problematic is the risk that the lines will pulverize. This is the main cause behind the loss of many older charcoal drawings. Charcoal is especially suitable for making practice drawings and studies, for sketching figures that will be finished in other media {e.g., pen or brush}, and for producing cartoons of large compositions that will become paintings or frescoes.</p><h2>Brush</h2><p>The brush, the painting tool par excellence, is also a drawing tool. It was often used as such in the Middle Ages, whether artists wanted to draw powerful images with broad, simplified strokes or render more accurate descriptions with very fine- tipped brushes, Cennini suggested brushes made Of squirrel hair (vair), though brushes made of polecat, dog, ox, or other animal hair or bristles were also common. The brush can be used by itself or in conjunction with pen, metalpoint, or pencil, on parchment or on paper. It is particularly useful for rendering changes in light that modulate volume and movement. Inks of varying degrees of transparency may be used, and several light coats may be applied because an artist can shade large areas quickly and effectively with a brush, The latter is also suitable for adding highlights. In this case, lead white is used instead of ink; diluted in water and gum arabic, it is applied to bring out the portions of the composition that are closest to the picture plane.</p><h2>Pen</h2><p>In addition to being a writing implement, the pen has always been considered the "graphic" tool par excellence, The earl- pens, used in classical antiquity, were made by sharpening re sticks; dipping the tip in ink produced marks for writing ano drawing. This type of pen, however, left harsh lines that were difficult to soften since the tip was made of wood, a hard terial. For this reason, the wing feathers of the goose—longer and stronger, softer and more flexible—began to be used in the Middle Ages. Drawing the pen is structurally dema ing because pen marks can be erased, and a pen drawing allows only a few expressive elements: the thickness and number of lines, and the Coo; trast between the colors of ink and that of the support. The artist must have great t nical skill to fully exploit features. The pen is used Witt inks Of various kinds, such as those made from gallnuts, bistre, or cuttlefish, and, standing in the 15th century, Chiuu ink. Colored inks—blue, g red—are used more rarely, usually on prepared paper.</p>'
];

$("body").keyup(function(e)
  {
    if(e.keyCode == 13)
    {
      changeMode();
    }
  }
);

$("div.index-button").click(function(e)
  {
    if(mode == 0)
    {
      searchBuffer = 0;
      searchCache[searchInputIndex] = e.target.id;
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
    }
  }
);

$("div#reader-back").click(function(e){
  changeMode();
});

setInterval(function()
  {
    searchBuffer++;
    if(searchBuffer > 3)
    {
      searchInputIndex = 0;
      searchCache = ['','','',''];
    }
  }
,1000);

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
    if(texts[textIndex][startPos] == '<')
    {
      for(var t = startPos; t < texts[textIndex].length; t++)
      {
        if(texts[textIndex][t] == '>')
        {
          startPos = t+1;
          break;
        }
      }
    }
    newText = [texts[textIndex].slice(0,startPos),spanInsert,texts[textIndex].slice(startPos)].join('');
    getEnd();
  }

  function getEnd()
  {
    var wordCount = 0;

    for(var t = startPos; t < texts[textIndex].length; t++)
    {
      if(texts[textIndex][t] === '\n' || texts[textIndex][t] === '.' || texts[textIndex][t] === '<')
      {
        endPos = texts[textIndex][t] === '<' ? t : t+1;
        //endPos = t+1;
        insertEnd()
        break;
      }
      else if(texts[textIndex][t] === ' ')
      {
        wordCount++;
        if(wordCount >= 14)
        {
          var extraWords = 0;
          for(var r = t; t < texts[textIndex].length; r++)
          {
            if(extraWords <= 15)
            {
              if(texts[textIndex][r] === ' ')
              {
                extraWords++;
              }
              else if(texts[textIndex][r] === '.' || texts[textIndex][r] === '?' || texts[textIndex][r] === '"' || texts[textIndex][r] === '\'')
              {
                console.log('extended');
                endPos = r+1;
                break;
              }
            }
            else
            {
              console.log('normal');
              endPos = t;
              break;
            }
          }
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
});

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
  $("div#settings-speed .audio-caption").articulate();
  speedLevel = (e.pageX-($(document).width()*0.25))/($(document).width()*0.75);
  $("div#speed-level").animate({width : speedLevel*100 + '%'},200);
  speedLevel = Math.max(speedLevel*2,0.1);
});

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
