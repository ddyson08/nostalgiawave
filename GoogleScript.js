//This is made to run inside Google Script, with the Youtube Search API
//Simply pasting the code will not work. You need to paste the code into Google Script, then deploy it, then copy the link to the deployment (ending in /exec), and finally paste it in the appropriate place in line 3375 of script.js
//Yes most of this file is AI, I'm not good with API calls, but I'll learn

//A test function, btw I love Yuval's content!
/*function test(){
  console.log(doGet({parameter:{
    year: '01/01/2023 ~ 01/01/2026',
    creator: 'yuval ben hayun',
    topic: 'language'
  }}))
}
*/


//Real code begins here
function yearFormat(year) {
    var main = year.replace(/ /g, "").split("-");
    main = main[2] + "-" + main[0] + "-" + main[1];
    return main;
}

function doGet(e) {
    var allInfo = "";

    const year = decodeURIComponent(e.parameter.year);
    const creator = decodeURIComponent(e.parameter.creator).trim();
    const topic = decodeURIComponent(e.parameter.topic).trim();

    const publishedAfter =
        `${yearFormat(year.split('~')[0].replace(/\//g, '-'))}T00:00:00Z`;
    const publishedBefore =
        `${yearFormat(year.split('~')[1].replace(/\//g, '-'))}T23:59:59Z`;

    let results;
    try {
        results = YouTube.Search.list("id,snippet", {
            type: "video",
            videoDuration: "short",
            maxResults: 50,
            publishedAfter,
            publishedBefore,
            q: creator + " " + topic + " tiktok"
        });
    } catch (err) {
        return "ERROR(search error: " + err.message + ")";
    }

    // SAFETY CHECK
    if (!results || !results.items) {
        return "ERRORNo results found (quota may be exhausted).";
    }

    // Add URLs
    results.items.forEach(item => {
        if (!item.id || !item.id.videoId) return;
        const url = "https://www.youtube.com/watch?v=" + item.id.videoId;
        allInfo += url + " ~ ";
    });

    // ADD PAGINATION TOKEN
    const nextToken = results.nextPageToken || null;
    allInfo += "\nNEXT_TOKEN: " + nextToken;

    return allInfo;
}