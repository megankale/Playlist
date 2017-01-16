function playlist(){
  this.songs = [];

  this.addSong = function(song){
    this.songs.push(song);
    $("#list").append("<li>" + song + "</li>");
    $("#track-title").html(query);
  }

  this.play = function(){
    for (var i = 0; i < this.songs.length; i++){
      console.log(this.songs[i]);
    }
  }
}

function Jukebox(){
  this.play = function(){
		playlist.play();
	}
  }

var myPlaylist = new playlist()
var myJukebox = new Jukebox();
var query= document.querySelector("input").value;

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    var audio = document.getElementById('playSong');
    var query= document.querySelector("input").value;
    console.log(query);
    function searchTracks(query) {
        $.ajax({
            url: 'https://api.spotify.com/v1/search',
            data: {
                q: query,
                type: 'track'
            },
            success: function(response) {
              var track = response.tracks.items[0]
              audio.src = track.preview_url
              var song = audio.src
              console.log(song);
              }
          })
    }
    searchTracks(query);
  })

// function searchTracks(query) {
//       $.ajax({
//           url: 'https://api.spotify.com/v1/search',
//           data: {
//               q: query,
//               type: 'track'
//           },
//           success: function(response) {
//             var track = response.tracks.items[0]
//             audio.src = track.preview_url
//             var song = audio.src
//             console.log(song);
//           }
//         })
//       }
//
//   document.querySelector("form").addEventListener("submit", function(e) {
//       e.preventDefault();
//       searchTracks(query);
//     })

document.querySelector("#add").addEventListener("submit", function(e){
  e.preventDefault();
  var song = document.querySelector("#song").value
  myPlaylist.addSong(song);
})

document.getElementsByClassName('fa').addEventListener("click", function(e){
  e.preventDefault
  console.log(hello);
  // myPlaylist.play();
})



console.log(myPlaylist);
