var videos = [
    {
        title : "Nexus of Hate",
        url: "https://www.youtube.com/embed/P8cYTkvx4_g"
    },
    {
        title: "Suffer",
        url: "https://www.youtube.com/embed/W_S7c_ii58w"
    },
]


for(var i = 0; i <= videos.length; i++)
{
    var video = videos[i];
    var yt_embed = "<div class='embed-container'><iframe src='" + video['url'] + "' frameborder='0' allowfullscreen></iframe></div>";
    $(".yt-contain").append(yt_embed);
};
