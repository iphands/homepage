// ==UserScript==
// @name           LargeText
// @namespace      Ian Hands
// @description    Increase text size for Yo Adrian
// @include        *alsforums.com*
// @include        *als.net*
// @include        *facebook.com*
// ==/UserScript==

unsafeWindow.iphands_toggle_size = function(type)
{
    
    var state_elem = document.getElementById(type + "_state");
    var state_button = document.getElementById(type + "_button");
    
    if (state_elem.innerHTML == 1)
	{
	    myFontSize = '';
	    state_elem.innerHTML = 0;
	    state_button.style.color = "";
	}
    else
	{
	    myFontSize = 'xx-large';
	    state_elem.innerHTML = 1;
	    state_button.style.color = "red";
	}

    var elements = document.getElementsByTagName(type);
    for (var i = 0, x = elements.length; i < x; i++)
	{
	    elements[i].style.fontSize = myFontSize;
	    elements[i].style.color = "black";	    
	}

};

unsafeWindow.saveSettings = function()
{
    // div p a td
    // var settings = "0000";
    var settings = document.getElementById("div_state").innerHTML;
    settings = settings + document.getElementById("p_state").innerHTML;
    settings = settings + document.getElementById("a_state").innerHTML;
    settings = settings + document.getElementById("td_state").innerHTML;
    settings = settings + document.getElementById("span_state").innerHTML;

    document.cookie = "_iphands_settings="+ settings  +"; expires=Fri, 17 Dec 2050 10:00:00 GMT; path=/";

    alert('Cookie written. (' + settings +')');
};


function top_bar(settings)
{
    var hands_image = "iVBORw0KGgoAAAANSUhEUgAAADkAAAAeCAQAAAA8uH6AAAAAAXNSR0IArs4c6QAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH2gERFAMN5AeocQAAA/ZJREFUSMed121ollUYB/CfOnHSBBWT6dRecJmmYQhiYLRijkiDPkj0wWCYgX4RIQMjMT8UFYWTEF9CxHCJhJm9gJqmlho0XyupZaKk5oxnuumWmy53+uDx7n6e7ZmPXveXc65z/v///VzXda5zP3RvY5yyyt3bWH9ZVujmIrBUcN2Qu5asEYQsxsR652yd6RelOIQbBoISNWYVIDPEatPjeAAOgwUO5opm2y7BcswSBFPBYsGmAiQfFjQpSXhOYoiOhCfPr2zAiSQYl0EFJkWqnqwCAz0GmiNHo0uRNa9k36xZJuai3XGtt5U8qVG7PqAx+opdy2Xt3SUfvIwDaHABlOljSwGB3eWSfsrAEexHlZGRNa/kMbTgD/wMHjBaX98XVKc/6GUaEXsSVxLWlORws1N5anVVcRzf9E5FvT8LktyBJ5KKvRnYq6SS8rSqIsdd1Gl9dJ3RYYwy1zACPEnBTWGr8x40wjllMZzTtSZ5hZXu6a2X+1Kx/kcfF5QrwTAwDd8UKNluH6owPEZpgvOx7m/aUCN6e01f4xLXF5oNcNgF59SAThf8XnDX+Q6dWKfZIXxpojXJ6iiD1MMawaTE/Xr8zaUxly2W30GjGyh4FYyOnvdSvecrHUbCIBlLUj1khqc0qrfbXvPNTMCFdehKz9tir93a1epvYbJW4orFtyZTrU3qdLztOoT4tGlSeUcN/WtBW4I/+7+IORalu22Nd+NolhOC+hRsRU4n3eNsrOalmizKWh2WvG6bekGwLa6M0JDdEkqsN1e9gxaa4rRMIhh8mnPcg2A82CwIqlKrj6RwbTJqVFqhWa23zMgNyGhBRpDxuLdti7BOGRNTuyYKgp1JQoJga2q9lw2uRmzGJmNt1aJJh1pdrs/B2O0FQ5R7w0Tvm+26PZYpzTp5l90wP872W2Wev1PrQblPNLtXnTrntBulRJ2hBnVN+/gkHA8lvimC4GjqxSqUxItbkqMxsWncvOLT+aPIR5F3c1fJMq2CYHXK92PcXl1gtRb7LSKeTXylgqC9+6ZZ7B1BS7xkoS4StMQKvZ0tT0pneuKrFZwyPt/HyCJB8FNys5xNKI6q9kwPYqWqvZmq1jnR/5IgaNI/H/DDCJgNHk1RBMG6HiRH5ez9LGbyVJwPzgdcEg9Kiw+UWpAQfCs4klW5XW2uThcdTQ5IkZn2CZp06MwP25J6z+0a4qjDhi49qLvQdjhjZ4L/OMXVmXW2s2xvTnhuPU1asj8Mu7XPNeXBBxW3r7jsZ6vnCqjXflY63S2+LX9Sxvk3a2udyXZYW8A37C2rdMArFuZIbuwJslqz4FfzlKtWacJd/QW634sqTLZRm+CYKenl/wAC281JXsYxDAAAAABJRU5ErkJggg==";

    var menuTable = document.createElement('center');
    menuTable.id = 'iphands_menuTable';
    menuTable.innerHTML = // '<span onMouseOver="document.getElementById(\'_iphands_menu_table\').style.display = \'block\'">-</span>' +
	// '\n<table id="_iphands_menu_table" style="display: none">\n' +
	'\n<table id="_iphands_menu_table">\n' +
	'\t<tbody>\n' +
	//'<tr style="background:#dfd3d3 url(data:image/jpeg;base64,'+ hands_image +') no-repeat scroll right center">\n' +
	'\t\t<tr>\n'+

	// div button
	'\t\t\t<td><input style="font-size: xx-large;" id="div_button" type="button" value="div" onclick="iphands_toggle_size(\'div\')"></input></td>\n' +

	// p button
	'\t\t\t<td><input style="font-size: xx-large;" id="p_button" type="button" value="p" onclick="iphands_toggle_size(\'p\')"></input></td>\n' +

	// a button
	'\t\t\t<td><input style="font-size: xx-large;" id="a_button" type="button" value="a" onclick="iphands_toggle_size(\'a\')"></input></td>\n' +

	// td button
	'\t\t\t<td><input style="font-size: xx-large;" id="td_button" type="button" value="td" onclick="iphands_toggle_size(\'td\')"></input></td>\n' +

	// span button
	'\t\t\t<td><input style="font-size: xx-large;" id="span_button" type="button" value="span" onclick="iphands_toggle_size(\'span\')"></input></td>\n' +

	// seperator
	'\t\t\t<td> </td>\n' +

	// save button
	// '\t\t\t<td><input style="font-size: xx-large;" id="save_button" type="button" value="save" onclick="saveSettings()"></input></td>\n' +

	// save image
	'\t\t\t<td><img src="data:image/gif;base64,'+ hands_image +'" onclick="saveSettings()" alt="save" /></td>\n' +

	'\t\t</tr>\n' +
	'\t</tbody>\n' +
	'</table>\n' +
	'<a id="div_state" style="visibility: hidden">0</a>\n' +
	'<a id="p_state" style="visibility: hidden">0</a>\n' +
	'<a id="a_state" style="visibility: hidden">0</a>\n' +
	'<a id="td_state" style="visibility: hidden">0</a>\n' +
	'<a id="span_state" style="visibility: hidden">0</a>\n' +
	'\n';
    
    var firstBodyElem = document.getElementsByTagName('body')[0].childNodes[0];
    firstBodyElem.parentNode.insertBefore(menuTable, firstBodyElem);
}

//Taken from the internets...
function get_cookie(cookie_name)
{
    var myCookie = document.cookie.match('(^|;) ?'+ cookie_name +'=([^;]*)(;|$)');
    
    if (myCookie)
	return (unescape(myCookie[2]));
    else
	return false;
}

function init(settings)
{
    if (settings[0] == 1)
	unsafeWindow.iphands_toggle_size('div');

    if (settings[1] == 1)
	unsafeWindow.iphands_toggle_size('p');

    if (settings[2] == 1)
	unsafeWindow.iphands_toggle_size('a');

    if (settings[3] == 1)
	unsafeWindow.iphands_toggle_size('td');

    if (settings[4] == 1)
	unsafeWindow.iphands_toggle_size('span');
}

var my_settings = get_cookie("_iphands_settings");
if (my_settings == "")
    my_settings = "00000";

top_bar(my_settings);
init(my_settings);