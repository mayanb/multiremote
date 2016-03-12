# multiremote
This project is a way to control multiple youtube videos that can be pulled up on different computers from one "remote control". It uses socket.io and node.js along with twilio. 

There is a behind the scenes remote control which you can view at https://vast-garden-51507.herokuapp.com/

  The remote control is created in the index.html file
  
There are three webpages with embedded youtube videos which can be viewed at

  https://vast-garden-51507.herokuapp.com/video1
  
  https://vast-garden-51507.herokuapp.com/video2
  
  https://vast-garden-51507.herokuapp.com/video3
  
You can edit their webpages at the following files: video1.html, video2.html, and video2.html

To change the embedded youtube video on each page copy the videoID of the video you want and paste it into the onYouTubeIframeAPIReady function next to the "videoId:"

Additionally if you want to interact with the videos via movement, go to 
https://vast-garden-51507.herokuapp.com/webcam

On any movement, this page will send a signal to start/play all of the videos.

To edit the twilio integration open the index.js file. You can change the phone number that a text is sent to - but you will need your own twilio account to verify that phone number, and then you should put your own twilio authentication there. You can also edit the content of the text that is sent. 

This project was created out of the need to create an immersive experience using projection technology. You can pull up each video webpage onto a computer and connect each computer to a projector. Make the video fullscreen on each projector and arrange the three projectors so they project onto 3 walls in front of a person. Pull up the webcam onto a device with a webcam, in the Google Chrome browser. Place it behind where the person will sit down, so their motion of walking in and sitting down will trigger the experience. Then pull the remote control up on a mobile phone and you can reset the experience behidn the scenes to start and stop all the videos at once, so they will all be in sync and controlled with the push of just one button.

The experience is as follows: the user walks in and sits down in the stall, triggering all three videos to start playing at once. There is a hardware button next to the user that they can push to exit the experience - the hardware button is currently "wizard-of-oz'ed" so you will have to use the behind the scenes remote to stop the videos when they push the hardware stop button. When the user is finished, click "send text" and a text will be sent via twilio. To reset the experience for the next person click the stop button on the behind the scenes remote and then click "start motion" to restart the motion detection sensor. 


