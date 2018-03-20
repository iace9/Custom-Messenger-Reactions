//Custom JSON Url:
var customUrl = 'reactions.JSON';

//Parse JSON from URL
function getJSON(url) {
    var resp ;
    var xmlHttp ;

    resp  = '' ;
    xmlHttp = new XMLHttpRequest();

    if(xmlHttp != null)
    {
        xmlHttp.open( "GET", url, false );
        xmlHttp.send( null );
        resp = xmlHttp.responseText;
    }

    return resp ;
}

var newEmojis = JSON.parse(getJSON(customUrl));

//Create a new Style Sheet
var css = document.createElement('style');
css.type = 'text/css';

//Existing Fb Emoji URLs (16px, 32px, 64px & 128px)
var loveE = ["https://static.xx.fbcdn.net/images/emoji.php/v9/z5b/1.5/16/1f60d.png", "https://static.xx.fbcdn.net/images/emoji.php/v9/z15/1.5/32/1f60d.png", "https://static.xx.fbcdn.net/images/emoji.php/v9/zb4/1.5/64/1f60d.png", "https://static.xx.fbcdn.net/images/emoji.php/v9/z63/1.5/128/1f60d.png"];
var laughE = ["https://static.xx.fbcdn.net/images/emoji.php/v9/z2d/1.5/16/1f606.png", "https://static.xx.fbcdn.net/images/emoji.php/v9/ze7/1.5/32/1f606.png", "https://static.xx.fbcdn.net/images/emoji.php/v9/z86/1.5/64/1f606.png", "https://static.xx.fbcdn.net/images/emoji.php/v9/z35/1.5/128/1f606.png"];
var surpriseE = ["https://static.xx.fbcdn.net/images/emoji.php/v9/z1a/1.5/16/1f62e.png", "https://static.xx.fbcdn.net/images/emoji.php/v9/zd4/1.5/32/1f62e.png", "https://static.xx.fbcdn.net/images/emoji.php/v9/z73/1.5/64/1f62e.png", "https://static.xx.fbcdn.net/images/emoji.php/v9/z22/1.5/128/1f62e.png"];
var cryE = ["https://static.xx.fbcdn.net/images/emoji.php/v9/z67/1.5/16/1f622.png", "https://static.xx.fbcdn.net/images/emoji.php/v9/z21/1.5/32/1f622.png", "https://static.xx.fbcdn.net/images/emoji.php/v9/zc0/1.5/64/1f622.png", "https://static.xx.fbcdn.net/images/emoji.php/v9/z6f/1.5/128/1f622.png"];
var angryE = ["https://static.xx.fbcdn.net/images/emoji.php/v9/z65/1.5/16/1f620.png", "https://static.xx.fbcdn.net/images/emoji.php/v9/z1f/1.5/32/1f620.png", "https://static.xx.fbcdn.net/images/emoji.php/v9/zbe/1.5/64/1f620.png", "https://static.xx.fbcdn.net/images/emoji.php/v9/z6d/1.5/128/1f620.png"];
var likeE = ["https://static.xx.fbcdn.net/images/emoji.php/v9/z55/1.5/16/1f44d.png", "https://static.xx.fbcdn.net/images/emoji.php/v9/zf/1.5/32/1f44d.png", "https://static.xx.fbcdn.net/images/emoji.php/v9/zae/1.5/64/1f44d.png", "https://static.xx.fbcdn.net/images/emoji.php/v9/z5d/1.5/128/1f44d.png"];
var dislikeE = ["https://static.xx.fbcdn.net/images/emoji.php/v9/zd6/1.5/16/1f44e.png", "https://static.xx.fbcdn.net/images/emoji.php/v9/z90/1.5/32/1f44e.png", "https://static.xx.fbcdn.net/images/emoji.php/v9/z2f/1.5/64/1f44e.png", "https://static.xx.fbcdn.net/images/emoji.php/v9/zde/1.5/128/1f44e.png"];



var styles = 'img[src="'+loveE[0]+'"], img[src="'+loveE[1]+'"], img[src="'+loveE[2]+'"], img[src="'+loveE[3]+'"] {content:url('+newEmojis.loveUrl+') !important;}';
styles += 'img[src="'+laughE[0]+'"], img[src="'+laughE[1]+'"], img[src="'+laughE[2]+'"], img[src="'+laughE[3]+'"] {content:url('+newEmojis.laughUrl+') !important;}';
styles += 'img[src="'+surpriseE[0]+'"], img[src="'+surpriseE[1]+'"], img[src="'+surpriseE[2]+'"], img[src="'+surpriseE[3]+'"] {content:url('+newEmojis.surpriseUrl+') !important;}';
styles += 'img[src="'+cryE[0]+'"], img[src="'+cryE[1]+'"], img[src="'+cryE[2]+'"], img[src="'+cryE[3]+'"] {content:url('+newEmojis.cryUrl+') !important;}';
styles += 'img[src="'+angryE[0]+'"], img[src="'+angryE[1]+'"], img[src="'+angryE[2]+'"], img[src="'+angryE[3]+'"] {content:url('+newEmojis.angryUrl+') !important;}';
styles += 'img[src="'+likeE[0]+'"], img[src="'+likeE[1]+'"], img[src="'+likeE[2]+'"], img[src="'+likeE[3]+'"] {content:url('+newEmojis.likeUrl+') !important;}';
styles += 'img[src="'+dislikeE[0]+'"], img[src="'+dislikeE[1]+'"], img[src="'+dislikeE[2]+'"], img[src="'+dislikeE[3]+'"] {content:url('+newEmojis.dislikeUrl+') !important;}';

if (css.styleSheet) css.styleSheet.cssText = styles;
else css.appendChild(document.createTextNode(styles));

document.getElementsByTagName("head")[0].appendChild(css);
