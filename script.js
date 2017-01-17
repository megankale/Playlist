function playlist(){
  this.songs = [];
  var i=0;

  this.addSong = function(song){
    this.songs.push(song)
    console.log(this.songs.length);

  }
  this.play = function(){
    audio.src = this.songs[i];
    audio.play();
  }

  this.pause = function(){
    audio.pause();
  }

  this.next = function(){
    ++i;
    audio.src = this.songs[i];
    audio.play()
  }

this.back = function(){
    --i;
    audio.src = this.songs[i];
    audio.play()
  }
}

function Jukebox(){
  this.play = function(){
		playlist.play()
	}
  }

var myPlaylist = new playlist()
var myJukebox = new Jukebox();
var query= document.querySelector("input").value;
var audio = document.getElementById('playSong');


document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    var query= document.querySelector("input").value;
    console.log(query);
    searchTracks(query)
    ;
  })

function searchTracks(query) {
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: query,
            type: 'track'
        },
        success: function(response) {
            var track = response.tracks.items[0]
            // var audio = document.getElementById('playSong');
            console.log(track.preview_url);
            audio.src = track.preview_url;
            $("#list").append("<li>" + query + "</li>");
            addTracks(audio.src);
            current = response.tracks.items[0].name;
            console.log(current);
            document.getElementById("current").innerHTML = "Current Track: " + current;
            }

    })
}

function addTracks(song) {
  myPlaylist.addSong(song);
}

document.getElementById('Back').addEventListener("click", function(e){
  e.preventDefault();
  console.log("back button pressed");
  myPlaylist.back();
})
document.getElementById('Pause').addEventListener("click", function(e){
  e.preventDefault();
  console.log("pause button pressed");
  myPlaylist.pause();
})
document.getElementById('Play').addEventListener("click", function(e){
  e.preventDefault();
  console.log("play button pressed");
  myPlaylist.play();
})
document.getElementById('Forward').addEventListener("click", function(e){
  e.preventDefault();
  console.log("forward button pressed");
  myPlaylist.next();
})


console.log(myPlaylist);
