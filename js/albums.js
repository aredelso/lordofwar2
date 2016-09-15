var albums = [
  {
    title : 'Suffer',
    cover_img : 'img/suffer/suffer.jpg',
    tracks : [
      'Age of Heresy',
      'Nexus of Hate',
      'Embryo',
      'Suffer',
      'Behold the Harvest',
      'Manufactured Existence',
      'Skin',
      'Carbon Based Genocide',
      'Hamunaptra',
      'Drowning',
      'Killing Must Feel Good to God'
    ],
    bandcamp_link : 'https://uniqueleaderrecords.bandcamp.com/album/suffer',
    indiemerch_link : 'http://www.indiemerch.com/uniqueleader/band/lord-of-war',
    itunes_link : 'https://itunes.apple.com/us/album/suffer/id1117455767',
    amazon_link : 'https://amzn.com/B01G73H5ZG',
    spotify_link : 'https://open.spotify.com/album/1h1HssvRnnVIKKSveCCtPh',
    google_link : 'https://play.google.com/store/music/album/Lord_of_War_Suffer?id=Btraus56a5tofsiilw5nfmrgj4i'
  }
]

var new_album = albums[0];

var a1 = "<li><a href='";
var a2 = "' target='blank'>";
var a3 = "</a></li>";
var indiemerch = a1 + new_album['indiemerch_link'] + a2 + "PHYSICAL" + a3;
var bandcamp =  a1 + new_album['bandcamp_link'] + a2 + "BANDCAMP" + a3;
var itunes = a1 + new_album['itunes_link'] + a2 + "ITUNES" + a3;
var spotify = a1 + new_album['spotify_link'] + a2 + "SPOTIFY" + a3;

$('.links').append(indiemerch + bandcamp + itunes + spotify);

// var cover = "<img src='" + new_album['cover_img'] + "' alt='" + new_album['title'] + " Cover Art' width='350px' height='350px' />";
//
// $("<a href=\"" + new_album['indiemerch_link'] + "\" target='blank'><div class='cover_contain'>" + cover + "<div class='overlay'><h1>Preorder Now</h1></div></div></a>").insertBefore('.track_list_contain');
//
// $("<h2>" + new_album['title'] + " - Out July 8th</h2>").insertBefore(".track_list");
//
// for(var i = 0; i < new_album['tracks'].length; i++)
// {
//     var track_number = i + 1;
//     var li = "<li class='track'>" + track_number + ". " + new_album['tracks'][i] + "</li>";
//     $(".track_list").append(li);
// };
//
// $('#preorder').append("<h2><a href=\"" + new_album['indiemerch_link'] + "\" target='blank'>physical</a><a href=\"" + new_album['bandcamp_link'] + "\" target='blank'>digital</a></h2>");
