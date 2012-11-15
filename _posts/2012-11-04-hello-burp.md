---
layout: post
title: "Hello, Burp"
description: ""
category: 
tags: []
---
{% include JB/setup %}

[Burp](http://portswigger.net/burp/) has a new point release, so all the goodness that has been coming to pro users in the latest dot releases has hit, plus a few new and shiny features. If you are wondering how to get started with this excellent tool for proxying web traffic, my [old guide](http://www.hackernauts.com/2012/06/12/burp-firefox/) will still serve well. However, since this is a nice new release, I want to highlight some of my favorite features that are still fairly new.

## Comment Your Proxy

As of now you can make a comment and highlight any request that you make through the proxy. This allows you to easily find requests that you may feel are critical, or requests that you modified live. One great part of this is that if there is a return request, it will automatically highlight that with the same color. This can be useful when picking proxy requests out of the logs, because as you can see, even a simple action like going to Google and searching for 'portswigger' will generate a dozen proxy requests in the logs. When you are scoping the attack surface of a web application, this log can be enormous, and highlighting and commenting can be a real godsend when you are reviewing all those entries later for something interesting that you did or saw. Take a look:

[![Comment Proxy](/images/comment-proxy.png)](/images/comment-proxy.png)

## Pasting into Repeater

This is situational, but it can be a real time saver. If like me, you enjoy manually browsing the site you are attacking while Burp is proxying in the background. Consider this, you have intercept turned off because you are just testing some use cases, when you come across something interesting. You want to start messing with this request/page/parameter immediately. Well, you could go back, check the target tab, and drill down, with a little trial and error, to the page or request that you want to send to the Repeater. Or you go to your Proxy logs, find the request that you want to repeat, and it ⌘ - r to send it to the Repeater. Now, though, you can just copy the link from the address bar and paste it into the Repeater, which will auto supply the cookies from your current session and set it all up as you would expect. Here is your option at work:

[![Paste Repeater](/images/pasteurl-request.png)](/images/pasteurl-request.png)

## Disable the Proxy Status Page

There may have been a time that, for some reason, you felt like your traffic was being proxied by Burp. Perhaps your office mates want to play a joke on you, perhaps your spider sense is tingling. You could always tell because you could go to [http://burp](http://burp) and if it loaded something like this, you knew you were being proxied (that is how I knew, Chris).

[![Firefox being proxied through Burp](/images/firefox-burpproxy.png)](/images/firefox-burpproxy.png)

However, all this had just changed. The savvy prankster, or pen tester, can now simply disable that tell tale page, like so.

[![Disable the burp page](/images/disable-web.png)](/images/disable-web.png)

This results in no sign of your nefarious proxy magic. Very slick.

## Android SSL Fixed

If you have been paying attention on the web, you probably have seen lots of vulnerabilies in Android apps being shown around. Especially ones as uncovered by Burp. Part of the reason is that this release[^0] fixes the problem that Burp had when using the default settings proxying Android traffic. Issue was, Android used some custom `CONNECT` requests that Burp choked on. The problem was fixable with some cusom filters and magic. Now, though, it just works. After [a](http://portswigger.net/burp/help/proxy_options_installingCAcert.html) [few](http://support.google.com/android/bin/answer.py?hl=en&answer=1649774) steps[^1] you should be able to peek in on all the exciting traffic. Use a similar process to peer into iOS traffic. My thoughts on just playing with these systems for a little while is 'everything old is new again'. Same issues we saw in the early web. No sanitization, no encryption, no nothing. Happy days for testers.

## In the End

Burp has made some great strides. These are by no means all of the features added in this reelase. Enjoy the awesome built in help, and use the fully developed JSON stack to pwn apps more fully.Thanks again burp.

[^0]: Actually, pro users have had this since 1.4.12
[^1]: You have to then point the device to your proxy, there are several ways to do this. If you want me to do a step by step, let me know on twitter, I might be persuaded. 
