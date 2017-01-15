document.querySelector("#add").addEventListener("submit", function(e){
  e.preventDefault();
  var song = document.querySelector("#song").value
  myPlaylist.addSong(song);
})

function playlist(){
  var songs = []
  this.songs = []
  this.addSong = function(song){
    this.songs.push(song)
    $("#list").append("<li>"+song+"</li>")
  }
  this.play = function(){
    for (i=0; i<=this.songs.length;i++){
      console.log(songs[i]);}
  }
}

var myPlaylist = new playlist()


document.getElementById('Play').addEventListener("click", function(e){
  e.preventDefault
  myPlaylist.play;
})



console.log(myPlaylist);
