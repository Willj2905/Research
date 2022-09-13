var score = 0;

function talk() {
  document.getElementById("starter").style.display = "none";
  document.getElementById("topmouth").style.display = "block";
  document.getElementById("mouth").classList.add("mouth2");
  setTimeout(() => {
    document.getElementById("mouth").classList.remove("mouth2");
    document.getElementById("topmouth").style.display = "none";
    document.getElementById("starter").style.display = "block";
}, "3000")
}

function research() {
  score = score + 1;
  if (score == 1) {
    document.getElementById("starter").value = "Next >";
    document.getElementById("info").textContent = "I started off researching just the word cosmic. This led to images of space and stars. I like the idea of space and unknowable things influencing my world and was drawn to one particular image.";
    document.getElementById("image").style.backgroundImage = "url(Spacehand.jpeg)";
    talk();
  } else if (score == 2){
    document.getElementById("info").textContent = "After seeing this hand like shape made out of stars I started to think of other things that are beyond our comprehension so I researched Cosmic Horror, which of course went straight to Cthulhu.";
    document.getElementById("image").style.backgroundImage = "url(Cthulhu.jpeg)";
    talk();
  } else if (score == 3){
    document.getElementById("info").textContent = "I continued on this path of otherworldly creatures that we can't fully understand. In doing so I came across this big ass snake that scares me but also interests me. I think scale is something very important especially in the visual design of a world.";
    document.getElementById("image").style.backgroundImage = "url(LargeSnake.jpeg)";
    document.getElementById("image").style.backgroundSize = "auto 75%";
    talk();
  } else if (score == 4){
    document.getElementById("info").textContent = "After the last image I noticed a small amount of nature peeking through all the bleak, grey imagery so I looked up the word Natural, which led to this image.";
    document.getElementById("image").style.backgroundImage = "url(Cliffs.jpeg)";
    document.getElementById("image").style.backgroundSize = "75% auto";
    talk();
  } else if (score == 5){
    document.getElementById("info").textContent = "The last image was very different from the others and I understand that however, I want to have a world that can do both. I want something that's both bleak and scary while also being beautiful at times.";
    document.getElementById("image").style.backgroundImage = "url(AshLake.jpeg)";
    talk();
  } else if (score == 6){
    document.getElementById("info").textContent = "Naturally I instantly went to Dark Souls. This game has some incredible scenery mixed with horrible disgusting swamps that aren't great to look at or go through. I want my world to reflect that duality and complexity in both the scenery, and the systems in place in it.";
    document.getElementById("image").style.backgroundImage = "url(BlightTown.jpeg)";
    talk();
  } else if (score == 7){
    document.getElementById("info").textContent = "Overall I really like darker undertones but I want to have some complexity in both the visual style and the atmosphere/structure of the world. I'm interested to see where these ideas will take me.";
    document.getElementById("image").style.display = "none";
    talk();
  } else if (score == 8){
    document.getElementById("info").textContent = "That's about it. I don't know what else to say.";
    talk();
  } else if (score == 9){
    document.getElementById("starter").style.display = "none";
    document.getElementById("info").textContent = "Bye.";
  }
}
