var dates = [
    {
        date : new Date("2016/11/4"),
        location : "Bad Oeynhausen, DE",
        venue : "Druckerei",
        buyLink : "#"
    },
    {
        date : new Date("2016/11/5"),
        location : "Andernach, DE",
        venue : "Juz-Live-Club",
        buyLink : "#"
    },
    {
        date : new Date("2016/11/6"),
        location : "Arlon, BE",
        venue : "L\'Entrepôt",
        buyLink : "#"
    },
    {
        date : new Date("2016/11/7"),
        location : "Jena, DE",
        venue : "F-Haus",
        buyLink : "#"
    },
    {
        date : new Date("2016/11/8"),
        location : "Weinheim, DE",
        venue : "Café Central",
        buyLink : "#"
    },
    {
        date : new Date("2016/11/9"),
        location : "Zurich, CH",
        venue : "Dynamo Zürich",
        buyLink : "#"
    },
    {
        date : new Date("2016/11/10"),
        location : "Puget, FR",
        venue : "Le RAT\'S",
        buyLink : "#"
    },
    {
        date : new Date("2016/11/11"),
        location : "Brescia, IT",
        venue : "Circolo Colony",
        buyLink : "#"
    },
    {
        date : new Date("2016/11/12"),
        location : "Munich, DE",
        venue : "Backstage",
        buyLink : "#"
    },
    {
        date : new Date("2016/11/13"),
        location : "Rotterdam, NL",
        venue : "Baroeg",
        buyLink : "#"
    },
    {
        date : new Date("2016/11/14"),
        location : "London, UK",
        venue : "The Dome",
        buyLink : "#"
    },
    {
        date : new Date("2016/11/15"),
        location : "Birmingham, UK",
        venue : "The Courtyard",
        buyLink : "#"
    },
    {
        date : new Date("2016/11/16"),
        location : "Bremen, DE",
        venue : "Tivoli",
        buyLink : "#"
    },
    {
        date : new Date("2016/11/17"),
        location : "Haarlem, NL",
        venue : "Patronaat",
        buyLink : "#"
    },
    {
        date : new Date("2016/11/18"),
        location : "Berlin, DE",
        venue : "Nuke Club",
        buyLink : "#"
    },
    {
        date : new Date("2016/11/19"),
        location : "Essen, DE",
        venue : "Turock",
        buyLink : "#"
    },
    {
        date : new Date("2016/11/20"),
        location : "Rostock, DE",
        venue : "Alte Zuckerfabrik",
        buyLink : "#"
    },
]

dates.sort(function(a,b){
    return new Date(a.date) - new Date(b.date);
});

var upcomingDates = [];

for(var i = 0; i < dates.length; i++)
{
    var now = new Date();
    if (dates[i]["date"] >= now) {
        var month = dates[i]["date"].getMonth() + 1;
        var day = dates[i]["date"].getDate();
        var tr = "<tr>";
        var td1 = "<td class='date'>" + month + "/" + day + "</td>";
        var td2 = "<td class='location'>" + dates[i]["location"] + "</td>";
        var td3 = "<td class='venue'>" + dates[i]["venue"] + "</td>";
        if (dates[i]["buyLink"]) {
            var link = "<a href='" + dates[i]["buyLink"] + "' target='blank'><span class='fa fa-ticket' aria-hidden='true'>";
            var td4="<td class='ticket'>" + link + "</span></a></td></tr>";
        } else {
            var td4="</tr>";
        };
        upcomingDates.push(dates[i]);
        $(".datesTable").append(tr + td1 + td2 + td3 + td4);
    };
};

if (upcomingDates.length == 0) {
    $(".datesTable").append("<tr><td colspan='4'><h2>No Upcoming Dates</h2></td></tr>")
}
