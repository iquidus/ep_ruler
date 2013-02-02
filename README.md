ep_ruler
=============

Adds a ruler to Etherpad lite.

<img src=http://i.imgur.com/vvopJpo.png>

The ruler draws a vertical line at a location specified by the user. This allows them to easily see where their desired maximum line length is. Preventing long nasty lines wrapping when exported and viewed in other applications.

e.g Setting the ruler to 80 will draw a vertical line directly after the 80th character. 

The current options are: 

* none
* 70
* 78
* 80
* 100
* 120

Note: ep_ruler is only compatible with monospace font type. Due to this when a the ruler is set the font type will be changed to monospace if it is not already. Also changing the font type to normal while a ruler is set will reset the ruler to none.

# INSTALL
Install via the /admin/plugins UI in Etherpad Lite.

# THEMES
ep_ruler is compatible with ep_themes. When a theme is set the ruler will be colored the same as ep_themes 'sidebar' parameter (the sidebar font color).