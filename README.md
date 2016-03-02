# multiremote
This project is a way to control multiple youtube videos that can be pulled up on different computers from one "remote control". It uses socket.io and node.js

There is a remote control which you can view at https://vast-garden-51507.herokuapp.com/

  The remote control is created in the index.html file
  
There are three webpages with embedded youtube videos which can be viewed at

  https://vast-garden-51507.herokuapp.com/video1
  
  https://vast-garden-51507.herokuapp.com/video2
  
  https://vast-garden-51507.herokuapp.com/video3
  
You can edit their webpages at the following files: video1.html, video2.html, and video2.html

To change the embedded youtube video on each page copy the videoID of the video you want and paste it into the onYouTubeIframeAPIReady function next to the "videoId:"

This project was created out of the need to create an immersive experience using projection technology. You can pull up each video webpage onto a computer and connect each computer to a projector. Make the video fullscreen on each projector and arrange the three projectors so they project onto 3 walls in front of a person. Then pull the remote control up on a mobile phone and you can start and stop all the videos at once, so they will all be in sync and controlled with the push of just one button. 

This project was created by Maya Balakrishnan. 
