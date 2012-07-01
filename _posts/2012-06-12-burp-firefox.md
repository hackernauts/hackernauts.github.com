---
layout: post
title: "Burp + Firefox"
description: "Setting up Burp and Firefox to work together"
category: 
tags: []
---
{% include JB/setup %}

[Burp][burp] just had a new [release][release]. In honor of that, I have written a quick how to. These few steps are about setting up burp as a proxy[^0] to inspect (and alter) your network traffic, specifically on the internet. Now you *could* configure Mac OS X to use burp as a global proxy; however, it is often more useful to have  a separate browser specifically proxied so that you can limit what you are looking at. We are going to configure [Firefox][firefox] to be that browswer. We choose Firefox not only because it has an easy to use proxy setup that is unique on the system, but also because of the awesome addons like [Firebug][firebug] which make looking at web code much more enjoyable. First download and launch burp. It is written in java, so it is pretty much cross platform[^1]. Open it up an select the 'Proxy' tab along the top, and the select the options sub tab.

[![](/images/proxy-options.png)](/images/proxy-options.png)

As shown. You should note that the port it is listening on is 8080 on the loopback interface. You can also see under the intercept sub tab, that intercept is set to 'On'. You should (at least at first) just allow it through, so click on it to toggle the option to 'Off'.

[![](/images/proxy-intercept.png)](/images/proxy-intercept.png)

Now switch over to the target tab, this is where you see the traffic begin to populate the site map.

[![](/images/target.png)](/images/target.png)

You are now ready to go. Let's setup the options for Firefox. Open up 'Preferences', and click over to 'Advanced' and the 'Network' sub tub as shown.

[![](/images/ff-network.png)](/images/ff-network.png)

Click 'Settings' to access the proxy configuration. Fill out the proxy information with loopback and port 8080 as shown:

[![](/images/ff-network-settings.png)](/images/ff-network-settings.png)

Now begin to browse whatever site that you want to inspect the traffic of. You will be able to see you requests as they go through. If you want to make changes as you go[^2], flip the intercept option to 'On' and edit the raw requests as they go by. Burp is a really powerful tool, you should check out all the many many [options][options] that man in the middling can make available.

***

[^0]: A proxy stands in between things. In this case, it stands in between your browser and the server on the internet serving you a website. It takes the traffic from one, and hands it to the other, but peeks! Like that one person in elementary school that could not just pass a note, but had to read its contents.
[^1]: If you must run it on other platforms.
[^2]: Like that same kid from elementary that would change what was written on your note before passing it. I may sound bitter, but I poured my heart out in that note, dang it! I maintain that it didn't need a picture of a rocket ship.

[burp]: http://www.portswigger.net/
[release]: http://blog.portswigger.net/2012/06/burp-gets-makeover.html
[firefox]: http://getfirefox.com/
[firebug]: http://getfirebug.com/
[options]: http://www.portswigger.net/burp/help/servercerts.html

