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


unsafeWindow.iphands_toggle_size = function(type, state)
{
    if (state)
	{
	    myFontSize = '';
	    state = 0;
	}
    else
	{
	    myFontSize = 'xx-large';	    
	    state = 1;
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
	'<td><input type="button" value="div" onclick="iphands_toggle_size(\'div\', divState)"></input></td>' +
	'<td><input type="button" value="p" onclick="iphands_toggle_size(\'p\', 0)"></input></td>' +
	'<td><input type="button" value="a" onclick="iphands_toggle_size(\'a\', 0)"></input></td>' +
	'</tr>' +
	'</table>' +
	'\n';
    
    var firstBodyElem = document.getElementsByTagName('body')[0].childNodes[0];
    firstBodyElem.parentNode.insertBefore(menuTable, firstBodyElem);
}

//top_bar();
unsafeWindow.iphands_toggle_size('div', 0);
unsafeWindow.iphands_toggle_size('td', 0);