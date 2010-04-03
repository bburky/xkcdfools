xkcdfools
=========

This a version of the code that runs the [xkcd April fools page][unixkcd].

The original gitub repo is at [chromakode/xkcdfools][].

Command line usage
------------------

When I first saw this I thought it would be great to run it as an actual UNIX
shell. So now you can.

Usage:  
$ java -cp jline-0.9.94.jar:js.jar org.mozilla.javascript.tools.shell.Main -opt -1 rhinoxkcdfools.js

This `rhinoxkcdfools.js` script uses [Rhino][], an implementation of
javascript in java. [Envjs][] is used to allow jQuery function properly and
[jLine][] is used for the console history and such.

Todo
----

Currently some commands don't output properly. The text is taken from the
output with jQuery's `text()` function, so line breaks can get lost. That
should be fixed.

Also images are currently just completely ignored. Displaying them in a web
browser or simply providing a url to the image would be better.

I don't know if I really plan to finish this, I just kind of threw it together
because it looked cool on the actual command line.

[unixkcd]: http://xkcd.com/unixkcd/
[chromakode/xkcdfools]: http://github.com/chromakode/xkcdfools
[Rhino]: http://www.mozilla.org/rhino/
[Envjs]: http://env-js.appspot.com/
[jLine]: http://jline.sourceforge.net/
