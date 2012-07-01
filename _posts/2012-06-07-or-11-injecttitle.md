---
layout: post
title: "'OR 1=1; INJECT(TITLE) --"
description: ""
category: 
tags: []
draft: true
---
{% include JB/setup %}

SQL injection is one of the quickest routes that a application penetration tester can take to pwn a database. It relies on improperly filtered user input strings being executed directly on the database. When this vulnerability exists, the exploit could target practically anything, your data, your username and passwords, and your server application connections. The insecure coding that allows SQL injection to work probably looks something like this:

{% highlight ruby %}

$some_var = $_POST['username'];
my_sql_query(SELECT * FROM sometable WHERE id = $some_var);

{% endhighlight %}
	
This code grabs some variable from the user in a POST string, and the passes it directly to the database in a query. So in the course of normal, expected execution I might input into some form field asking for my id: `jason`. In that case, the query being passed will be something like this:

{% highlight sql %}

SELECT * FROM sometable WHERE id = thepleb

{% endhighlight %}
	
Which will do exactly as expected, selecting a bunch of stuff related to the username 'thepleb'. However, suppose that I didn't put that in at all. Suppose I put in a '. Now the query looks like this

{% highlight sql %}

SELECT * FROM sometable WHERE id ='

{% endhighlight %}
	
Which will produce an error, because the id field will never be blank. Right. Later on, it might become important what *specific* type of error this returns. Right now however, I move on to try something a little more tricky. Suppose I input `' OR 1=1; INSERT INTO users (jason, hack3rn4u7s, 12345, 0)`. Now the string looks like this:

{% highlight sql %}

SELECT * FROM sometable WHERE id =' OR 1=1; INSERT INTO users (thepleb, plebalicious, 12345, 0)

{% endhighlight %}
	
Which reads the first statement as true, since 1=1, and then proceeds to happily add a new user, jason with an offical hackernauts approved password, an id of 12345, and privileges equal to 0 (often the admin user privilege set). Wow, bet the developer didn't intend that! So how do we get it going, and how can we ensure that the injection works properly. There are [many][wapiti] [excellent][arachni] [tools][skipfish] and divers advanced automated methods that will perform checks for us, but these tools all have one thing in common. They all work better if you understand SQLi yourself.

## Inject SQL by hand, or SQL 101

When injecting by hand this is the basic outline of tasks that you follow. There is certainly some variability in how this happens.

1. Target
2. Confirm
3. Enumerate
4. Escalate
5. Exfiltrate

The variability, and the finesse are chiefly at the end, although it does take some skill to get started. 

<br />

### Target

For the first step you need to do some reconnaissance. We find out where the candidates are for injection. You do this by trolling a site, looking for forms or other forms of input. if the website is using a GET or a POST function. There is a sophisticated definition when comparing the two; however for practical purposes GET requests are encoded in a URL visible in your browser URL field, and POST requests happen behind the scenes in a message body. To view (and modify) POST requests, you will have to use a proxy. [Burp][portswigger] is an excellent proxy and free to use. My recent guide to setting up Burp can be found [here][burpguide].

### Confirm

Confirming that the field is vulnerable to SQLi. Use of the '.

### Enumerate

Now that we have found an input field and confirmed that it is vulnerable it is a good time to explain just what sort of attacks are available to us. This table should help us understand what sorts of attacks might be available to us. Sometimes these might be strung together into one statement (or injection), that performs multiple attacks.

* Logically Incorrect Queries: These are wrong on purpose, so that you might be able to discern how the database calls work. Suhweet. The most obvious case of this was the simple beginnings that we had the `'`. Another example:

{% highlight sql %}
some broken piece of sql code
{% endhighlight %}

* Tautologies: Evaluated to always be true. Useful for terminating conditions.

{% highlight sql %}
1=1 OR 'a'='a'
{% endhighlight %}

* Union Queries

* Inference
    * Blind Injection
    * Timing Attacks 
    
* Alternate Encodings 

Explore the database. Blind SQL injection.


### Escalate

Usually you start with the rights that the 'application user' has in the database. So in database `foo` you may have a 'user' designated for an application. The name of the application is `bar` and the name of the application's user in the database is `bar`. Anything that that bar user can do in the database, a hacker can do with SQL injection queries.  So to start with the hacker might attempt to enumerate the table being accessed, to see if there is anything interesting on it. Alternatively, they may try to access the information-schema table, which outlines the whole database structure. Usually, everyone has access.

For example, a hacker might use some know exploit in the database to escalate privileges in the DB up to `foo-admin`.

### Exfiltrate

`select load_file('/etc/passwd')`

### Bonus points: stealth, obfuscation 

Some other interesting stuff

[wapiti]: http://wapiti.sourceforge.net/ 
[arachni]: http://arachni-scanner.com/
[skipfish]: http://code.google.com/p/skipfish/
[burp]: http://www.portswigger.net/
[burpguide]: /2012/06/12/burp--firefox/


<!--
    TODO Add in list of types of attack from the whitepaper
    TODO Write a step by step SQLi demonstration using DVWA or Ultimate LAMP. Diff post?
-->
