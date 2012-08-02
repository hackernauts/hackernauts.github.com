---
layout: post
title: "Web Security Dojo 2 on OSX"
description: ""
category: 
tags: []
---
{% include JB/setup %}

[Maven Security][maven] has released a new version of it's [Web Security Dojo][wsd], with enough changes to warrant a 2.0 designation. I was ecstatic to see this, I really depend on the older version of the dojo to vet 'hackers' to see if they know what they are actually doing or not. Which really could be a series of posts on its own "How to Hire a Hacker". Regardless, I wanted to get my grubby mitts on it, and I wanted to run it in [VMWare Fusion][vmware] as I am on a Mac. However, the image is distributed as a .ova file, not designed for Fusion. However, not to worry, we can massage the file a little to get it going.

First you will want to download the [Dojo][dojo] ova file from Sourceforge. While that is downloading (it will take awhile), you can go to the VMWare site and get the OVF [tool][ovf]. Be sure to get the Mac version, it is a package. Go ahead and install it once its downloaded. After the install, which will require admin privileges, we can hit the command line. First get into your Applications directory, and go to the new folder that was added with the install:

{% highlight bash %}

cd /Applications/VMware\ OVF\ Tool/

{% endhighlight %}

Now, of course you will have to wait until the ova file is completely downloaded. You can then turn the ova file into a (much larger) .vmwarevm file with a simple command:

{% highlight bash %}

./ovftool --lax ~/Downloads/Web_Security_Dojo-2.0.ova ~/Downloads

{% endhighlight %}

Important things to note here, you _must_ specifcy the `--lax` flag or it won't work. You can also specify a destination other than the Downloads folder, that was just for convenience. I would recommend you put it in a directory where you keep your VMs. Double click to open it, ignore some of the error messages, and away you go. Although it did give some errors starting up, it worked just fine for me, and hasn't given me an error since. 

This is a neat tool, and the really nice thing about it is that it contains both the vulnerable web applications to attack as well as the tools to attack them with. Notably in this version, the have upgraded versions of burp, BeEF, arachni and others. You can read the full release [notes][notes] for more details.


[maven]: http://www.mavensecurity.com/index.html
[wsd]: http://www.mavensecurity.com/web_security_dojo/
[ovf]: http://www.vmware.com/support/developer/ovf/
[vmware]: http://www.vmware.com/products/fusion/overview.html
[dojo]: http://sourceforge.net/projects/websecuritydojo/
[notes]: http://www.pentestit.com/update-web-security-dojo-20/





