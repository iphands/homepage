// ==UserScript==
// @name           LargeText
// @namespace      Ian Hands
// @description    Increase text size for Yo Adrian
// @include        http://www.alsforums.com/*
// @include        http://www.als.net/*
// ==/UserScript==

/*
  function toggle_size(type, state)
  {

  if (state)
  myFontSize = '';
  else
  myFontSize = 'xx-large';

  var elements = document.getElementsByTagName(type);
  for (var i = 0, x = elements.length; i < x; i++)
  {
  elements[i].style.fontSize = myFontSize;
  }
  }
*/


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


function top_bar()
{
    var menuTable = document.createElement('center');
    menuTable.id = 'iphands_menuTable';
    menuTable.innerHTML = '<table>' +
	'<tr>' +
	'<td><input id="div_button" type="button" value="div" onclick="iphands_toggle_size(\'div\')"></input></td>' +
	'<td><input id="p_button" type="button" value="p" onclick="iphands_toggle_size(\'p\')"></input></td>' +
	'<td><input id="a_button" type="button" value="a" onclick="iphands_toggle_size(\'a\')"></input></td>' +
	'<td><input id="td_button" type="button" value="td" onclick="iphands_toggle_size(\'td\')"></input></td>' +
	'</tr>' +
	'</table>' +
	'<a id="div_state" style="visibility: hidden">0</a>'+
	'<a id="p_state" style="visibility: hidden">0</a>'+
	'<a id="a_state" style="visibility: hidden">0</a>'+
	'<a id="td_state" style="visibility: hidden">0</a>'+
	'\n';
    
    var firstBodyElem = document.getElementsByTagName('body')[0].childNodes[0];
    firstBodyElem.parentNode.insertBefore(menuTable, firstBodyElem);
}

top_bar();
unsafeWindow.iphands_toggle_size('div');
unsafeWindow.iphands_toggle_size('td');