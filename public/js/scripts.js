window.onload = function() { write(0) };

function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 1 : value;
    write(value);
    value++;
    document.getElementById('number').value = value;
}



function write(i) {

	var nuggets = [{"url":"https://www.thinkwithgoogle.com/articles/cooking-trends-among-millennials.html","articletitle":"\n      Cooking Trends Among Millennials: Welcome to the Digital Kitchen – Think with Google\n    ","layout":"inline","imageurl":"//think.storage.googleapis.com/images/how-to-make-the-best-searches-on-google2.jpg","graphtitle":"","caption":"Source: Google Data, January–May 2014 and January–May 2015, United States. Trending searches are those with strongest YoY growth.\n","below":"","headline":"","accentcolorsecondary":"","keywords":"","accentcolor":"","backgroundcolor":"","itemtype":"article","author":"","imagelayout":"wide","formatteddate":"6/1/2015","date":"6/24/2015","legend":"","primarytopic":"advertising","freeze":"TRUE","country":"united-states","industry":"advertising","title":"","mediachannel":"","rowNumber":1},{"url":"https://www.thinkwithgoogle.com/articles/cooking-trends-among-millennials.html","articletitle":"\n      Cooking Trends Among Millennials: Welcome to the Digital Kitchen – Think with Google\n    ","layout":"graph","imageurl":"//think.storage.googleapis.com/images/top-trending-food-drinks.svg","graphtitle":"What will people bring to all of those block parties, potlucks, and Fourth of July fetes this summer? Here are the top trending foods and drinks on Google:","caption":"Source: Google Data, July–August 2013 and July–August 2014, United States. ","below":"","headline":"","accentcolorsecondary":"#","keywords":"","accentcolor":"#f37c20","backgroundcolor":"#","itemtype":"article","author":"","imagelayout":"","formatteddate":"6/1/2015","date":"6/24/2015","legend":"","primarytopic":"advertising","freeze":"FALSE","country":"united-states","industry":"advertising","title":"","mediachannel":"","rowNumber":2},{"url":"https://www.thinkwithgoogle.com/articles/cooking-trends-among-millennials.html","articletitle":"\n      Cooking Trends Among Millennials: Welcome to the Digital Kitchen – Think with Google\n    ","layout":"graph","imageurl":"//think.storage.googleapis.com/images/searches-related-to-chicken-temperature.svg","graphtitle":"Searches Related to Chicken Temperature","caption":"Source: Google Data, January 2012–April 2015, United States.","below":"","headline":"","accentcolorsecondary":"#","keywords":"","accentcolor":"#f37c20","backgroundcolor":"#","itemtype":"article","author":"","imagelayout":"","formatteddate":"6/1/2015","date":"6/24/2015","legend":"<ul>\n <li>\n   <span class=\"marker\" style=\"background-color:#f9dd5f\"></span>\n   <span class=\"label\">Mobile</span>\n </li>\n <li>\n   <span class=\"marker\" style=\"background-color:#f37c20\"></span>\n   <span class=\"label\">Computer/Tablet</span>\n </li>\n\n</ul>","primarytopic":"advertising","freeze":"FALSE","country":"united-states","industry":"advertising","title":"","mediachannel":"","rowNumber":3},{"url":"https://www.thinkwithgoogle.com/articles/cooking-trends-among-millennials.html","articletitle":"\n      Cooking Trends Among Millennials: Welcome to the Digital Kitchen – Think with Google\n    ","layout":"inline","imageurl":"//think.storage.googleapis.com/images/top-best-recipe-search.jpg","graphtitle":"","caption":"Source: Google Data, April 2015, United States.\n","below":"","headline":"","accentcolorsecondary":"","keywords":"","accentcolor":"","backgroundcolor":"","itemtype":"article","author":"","imagelayout":"wide","formatteddate":"6/1/2015","date":"6/24/2015","legend":"","primarytopic":"advertising","freeze":"TRUE","country":"united-states","industry":"advertising","title":"","mediachannel":"","rowNumber":4},{"url":"https://www.thinkwithgoogle.com/articles/millennial-dads-turn-to-digital-in-moments-of-need.html","articletitle":"\n      Millennial Dads Turn to Digital in Their Moments of Need – Think with Google\n    ","layout":"graph","imageurl":"//think.storage.googleapis.com/images/how-to-searches-related-to-baby-feeding-and-sleeping.svg","graphtitle":"How-To Searches Related to Baby Feeding and Sleeping","caption":"Source: Google Data, April 2015, United States.","below":"","headline":"","accentcolorsecondary":"#","keywords":"","accentcolor":"#38a4dc","backgroundcolor":"#","itemtype":"article","author":"","imagelayout":"","formatteddate":"6/1/2015","date":"6/10/2015","legend":"<ul>\n <li>\n   <span class=\"marker\" style=\"background-color:#38a4dc\"></span>\n   <span class=\"label\">Mobile</span>\n </li>\n <li>\n   <span class=\"marker\" style=\"background-color: #ab6bac\"></span>\n   <span class=\"label\">Desktop</span>\n </li>\n\n</ul>","primarytopic":"advertising","freeze":"FALSE","country":"united-states","industry":"advertising","title":"","mediachannel":"","rowNumber":5},{"url":"https://www.thinkwithgoogle.com/articles/millennial-dads-turn-to-digital-in-moments-of-need.html","articletitle":"\n      Millennial Dads Turn to Digital in Their Moments of Need – Think with Google\n    ","layout":"graph","imageurl":"//think.storage.googleapis.com/images/youtube-search-in-baby-category-yoy.svg","graphtitle":"YouTube Search Growth in the Baby Category (YoY)","caption":"Source: YouTube Data, April 2015, United States.","below":"","headline":"","accentcolorsecondary":"#","keywords":"","accentcolor":"#38a4dc","backgroundcolor":"#","itemtype":"article","author":"","imagelayout":"","formatteddate":"6/1/2015","date":"6/10/2015","legend":"","primarytopic":"advertising","freeze":"FALSE","country":"united-states","industry":"advertising","title":"","mediachannel":"","rowNumber":6},{"url":"https://www.thinkwithgoogle.com/articles/millennial-dads-turn-to-digital-in-moments-of-need.html","articletitle":"\n      Millennial Dads Turn to Digital in Their Moments of Need – Think with Google\n    ","layout":"graph","imageurl":"//think.storage.googleapis.com/images/mobile-search-growth-in-baby-category-yoy.svg","graphtitle":"Mobile Search Growth in the Baby Category (YoY)","caption":"Source: Google Data, April 2015 vs. April 2014, United States.","below":"","headline":"","accentcolorsecondary":"#","keywords":"","accentcolor":"#38a4dc","backgroundcolor":"#","itemtype":"article","author":"","imagelayout":"","formatteddate":"6/1/2015","date":"6/10/2015","legend":"","primarytopic":"advertising","freeze":"FALSE","country":"united-states","industry":"advertising","title":"","mediachannel":"","rowNumber":7}]

    // var t = jsontemplate.Template("<div class='full-width inline-image-panel wide bdd-composable-inline-image' style='max-width: 1440px;';'><figure><img src='{imageurl}' style='max-width:703px'><figcaption class='secondary-text'>{caption}</figcaption></figure></div>");
    // for (i = 0; i<nuggets.length(), i++){
    // 	var s = t.expand(nuggets[i]);
    // 	document.getElementById("replace").innerHTML = s;

  		var t = jsontemplate.Template("<div class='full-width inline-image-panel wide bdd-composable-inline-image' style='max-width: 1440px;';'><h3 class='headline'>{headline}{graphtitle}</h3><figure><img class='nuggetimage' src='{imageurl}' ><figcaption class='secondary-text'>{caption}</figcaption></figure></div><div class='source'>Parent article: <a href='{url}'>{articletitle}</a></div>");
  		var s = t.expand(nuggets[i]);
      		document.getElementById("replace").innerHTML = s;
    
    
	
}


// {.section nugget}
// <h2>{headline}</h2>
// <img src="{imageurl}">
// {caption}
// {.end}


// <div class='full-width graph-panel clearfix bdd-composable-graph' style='background-color: #'><h3 class='headline' style='color: #'>What will people bring to all of those block parties, potlucks, and Fourth of July fetes this summer? Here are the top trending foods and drinks on Google:</h3><img class="image" src="//think.storage.googleapis.com/images/top-trending-food-drinks.svg" alt=""><div class="graph-info"><p class="graph-data tiny-text" style="color: #">Source: Google Data, July–August 2013 and July–August 2014, United States. </p></div></div>


// // <div class='full-width inline-image-panel wide bdd-composable-inline-image'><figure>
// // <img src='{imageurl}'>
// // <figcaption class='secondary-text'>{caption}
// // </figcaption></figure></div>

// function drawLoop () {
// 		setTimeout(function () {    
//       		var t = jsontemplate.Template("<div class='full-width inline-image-panel wide bdd-composable-inline-image' style='max-width: 1440px;';'><figure><img src='{imageurl}' style='max-width:703px'><figcaption class='secondary-text'>{caption}</figcaption></figure></div>");
//       		var s = t.expand(nuggets[i]);
//       		document.getElementById("replace").innerHTML = s;
//       		i++;
//       		if (i < nuggets.length) {
//          	drawLoop();
//       		}
//    		}, 5000)
// 	}