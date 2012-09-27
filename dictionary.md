---
layout: page
title: "Dictionary"
description: ""
---
{% include JB/setup %}

# Hackernaut Dictionary
<hr />
<br />

### Adware ###  
Annoying malware type that throws ads at you constantly. Constantly.

### APT ###  
Advanced Persistent Threat. Typically a buzzword, used by corporate tools and security product marketers to schill their products. Occasionally used correctly to describe a particular threat, like that of a nation state or other similarly sized organization targeting attacks against a similarly large group or collection. Aurora is APT. Script kiddie scans are not. If someone uses both the words 'cyberwar' and 'APT' in close conjunction and non-ironically, then look at them very carefully and assess if time spent with them is a total waste.

### Antivirus ###  
Reactionary security, but I still think it has its place. Not an answer to everything. It checks systems for known virus signatures and attempts to remove known viruses, with varying degrees of success. When a system is running without antivirus it is sometimes said to be 'running free'.

### Assembler ###  
Code written in Assembly. Features low level instructions to the CPU. Because it is written at such a low level it is a) harder to write b) faster and c) harder to interpret. Hackers that write in assembler are extremely hardcore (or at least have a reputation as being so). Trinity in the Matrix movies uses some assembler to hack the power station.

### Authentication ###  
A principle of secure that allows us to know you are who you say you are. Attacks against this rely on impersonation of legitimate users. Many methods are used to try to authenticate, often tokens or passwords. The list of possible tokens is a long.

### Base64 ### 
A type of encoding which represents binary data in ASCII form. Not generally human readable.

### Binary ###  
Usually refers to a compiled executable. Not human readable (without tools). Because it is not readable, sometimes is used to sneak code into places it shouldn't be. Binary is the 1's and 0's of an application.

### Bot ###  
An automatic script that performs a certain task. Bots are installed on hacked machines to perform certain tasks, like sending out spam, attacking a website, or something like that.

### Botnet ###
A network of compromised computers that hackers use to attack other targets. Often these are home systems, but sometimes also work computers. The users are unaware that their computers have 'bots' installed on them, or do not understand how to remove them properly.

### Brute Force ###  
To try different username and password combinations over and over, usually by means of an automated program. Basically you try all combinations. 'Raw' brute forcing time can be very long, but can be decreased if you know something about the system you are trying to brute force, i.e. that a valid user name is `tim` and the there is a maximum of 8 alphanumeric characters in a password.

### Client-Side ###  
In a server client model, an action or hack that happens on the client, or originates from the client is called client side.

### Confidentiality ###  
When its working it means only the people that should have access to information are the ones that do. When its broken, it means that people who shouldn't be able to see things do.

### CSRF/XSRF ###  
Cross Site Request Forgery. A way to make one website take advantage of another websites functionality without the user knowing. It relies on the user already being logged into an account somewhere, and so is somewhat complicated. Usually involves a targeted phish to pull off. When this vulnerability really shines is when it is worm-able, e.g. one infection leads to many others.

### DOM ###  
Document Object Model. A part of a website that might be vulnerable to XSS. Javascript writes this.

### DoS ###  
Or sometimes DDoS. Denial of Service, or Dedicated Denial of Service. A type of attack that involves sending more requests than a resource can handle. Sometimes these are triggered on accident by misconfigured services, and sometimes they are done maliciously to bring something down. Because of the relative simplicity of the attack, it is a favorite of script kiddies. They use this attack to bring down Internet sites that they don't like at the moment.

### Ego hack, ergo sum ###  
Roughly, "I hack therefore I am." Humorously based on ego cognito, ergo sum, the famous "I think therefore I am." To add to the humor, it is based on Latin, while the English word 'hack' is Celtic, who the Romans conquered when they took over Britain. Because Celtic was the language of the barbarians, the simple 4 letter words that they favored became the curse words of the elite. That's why 4 letter words for things are still considered curse words. Anyway, another layer of humor from the juxtaposition of elite Latin and barbaric Celtic. Maybe just for me. 

### Encoding ###  
The way the machine expects your input to be written. Mismatched encoding can lead to errors. Understanding lower levels of encoding is a common trick to get past firewalls or other input sanitation methods.

### Firewall ###  
Protects one thing from another thing. Can be a dedicated device running to protect a network, or software running on a specific computer. Firewalls are all about controlling access.

### Hack ###  
Often it refers to a trick to get past some control, like a username password screen. Generally it refers to making something perform in a way it was not supposed to for a specific purpose.

### Hacker ###
A person who hacks.

### Hackernauts ###  
An awesome website about hacking.

### Hash ###  
A cryptographically generated fingerprint of a file. You know a file is the file it says it is, and hasn't been changed because the fingerprints, or hashes, match.

### Hex ###  
Short for hexadecimal, or hexadecimal notation. Base sixteen notation. Used for things you might not think. Most common place to see the is a computers MAC address, or physical address.

### HTTP/S ### 
Hyper Text Transfer Protocol/Secure. The protocol that the Internet is built on. The 'S' typically means that the connectection is secured over SSL. The support methods of the protocol are fairly simple, and it is time well spent to learn them.

### Injection Point ###  
A place in a website that a script can be inserted into. This can be any input into the server. A URL, a form field, or a raw post request might be an injection point. More specifically it can refer to the specific point in the request that the script should be inserted, or injected into. I.e. `...some/vulnerable/url.php?uname=!!INJECTION POINT!!`

### Integrity ###  
In this sense, integrity is the amount of trust that you can place in data to say it is correct and accurate. If a system has high integrity, you should trust it's data. If it has low integrity, you should be cautious. A breach of integrity means data has been altered.

### Malware ###  
Bad software. Software or program that does bad things to the computer (from the users perspective). This term generally is used as a collection term for adware, viruses, worms, backdoors, and root-kits.

### Man in the Middle ###  
A specific type of attack that involves getting your computer 'in between' the victim and their destination. By passing on all the traffic to both sides the attacker can get gather information like credentials or other sensitive details.

### Mitigation ###  
Things that people do to try to make an attack unsuccessful. Never perfect, but often good enough.

### Pass the Hash ###  
An attack where the target system can be forced to compare password hashes directly for authentication, rather than taking a plaintext password, hashing it and comparing the result. This eliminates a step for some hackers, however, the step of reversing a hash has become more and more trivial as time goes on.

### Payload ###
The program that is delivered to a vulnerable computer in order to exploit it. Sometimes the payload is a shell, sometimes a payload might be ads, or a bot.

### Penetration Tester ###
Or 'Pen Tester'. Basically a hacker that people hire to test their systems. The best are usually good communicators, talking and writing. They also have their own specialties, just like regular hackers, i.e., social engineering, web hacking, host attacks, firewall or network controls evasion, coding, decompiling, persistence. Not to say that they must be limited. Some few are good at everything.

### Phish ###  
A communication, usually an email, designed with the sole purpose of getting a user to click a link. A spear-phish is a specifically targeted phish for a specific company or person. A decent phish can get around 5% click turnover. With some minimal effort, you can get that up to about about 10 or 15%. The more effort, the better the chance of success.

### Pop ###  
As in 'pop a box'. This means that a computer has been compromised, hacked, or 'pwnd'. The attacker has complete local access to the box. As in  "Oh, just popped a box!", "Sweet install this tool", "Well, I don't have admin yet...", "Then its not popped, let me know when it is".

### Port ###  
A network communication point with a computer. Some common ports are webservers on 80, secure webserver on 443, ssh on 22, ftp on 20&21, telnet on 23. Nothing forces these services to run on these ports, however. Often, for example, you might find a webserver in development running on port 8000. Or ssh on 2222.

### Port Scanner ###  
A tool that scans ports to tell you if they are open or not. Nmap is the defacto standard. Often a good learning exercise is to build your own simple port scanner.

### PRE ###
Protocol Reverse Engineering. It means taking a packet capture (or pcap), and without documentation, figure out what its doing and what its sending. By that I mean what is protocol structure is and what data is being sent. Its a tricky bit of business, and takes time, talent, and luck. However, sometimes the hacking payoff can be great, as custom protocols are often poorly secured.

### Proxy ###  
Generally. And specifically like a SOCKS proxy

### Pwnd ###  
Or sometimes 'owned'. A computer can be pwnd by being completely compromised. A person can be pwnd by being defeated catastrophically in some match or game. A company can be pwnd when it loses all its sensitive information. Pwnage is the attribute of being excellent at pwning things, when you have pwnd something impressive you are said to have pwnage.

### Reversing ###  
An overloaded term that can refer to a few things. Most often, it refers to *reverse engineering*, the process of taking something apart to see how it works.

### Risk ###  
The product of threat, vulnerability, and cost. Risk is a property or attribute of an asset. A high score in any one of the 3 factors can reflect in an increased risk value. As a hacker, you often represent or model the threat portion of risk.

### Root ###  
Administrative access. Accurate when speaking about linux or unix-y systems, but colloquially used to refer to any systems administrative access. As in 'I got root on the system'.

### Root-Kit ###  
A really bad piece of malware that infects your computer at some of the lowest levels. Its disgusting tendrils wrap around the beating heart of your machine. It can be removed, but you are better off just re-imaging.

### Shell ###  
A command line interface for a computer. There are various types, but most often it is a key step in gaining control of a computer, as you may be able to execute arbitrary commands.

### Shellcode ###
Code that gives a hacker a remote *shell*. This could be any type of code, written in any language. It is often a payload of some other attack.

### Signatures ###  
Programs have programmatic signature, or a common piece of code that can be used to identify it. These are formed from how the program executes, and the way that the program is written. Signatures for malware are used to prevent them from being transferred or executed.

### SQLi ###  
SQL, or Structured Query Language, injection. SQL is the language used by databases to manipulate their contents. A SQLi attack causes your attack code to run on the database, allowing you to manipulate the contents of the database. Good stuff is usually found in databases, like usernames, password hashes, credit cards, Social Security Numbers, things like that.

### Threat ###  
A factor in assessing risk. Threat, sometimes threat agent, is the attacker or instigator. Usually a person or entity, but sometimes an event like a tornado or earthquake.

### Token ###  
Some identifying factor, like a password, an encrypted key, or USB stick.

### URL ###  
Uniform Resource Locator. You may see URI, uniform resource identifier, used interchangeably with URL, though that is not quite accurate. A URL is a string that refers to an Internet resource, like 'http //www.google.com'. Or 'ftp //data.google.com'. From wikipedia  `scheme //domain port/path?query### string#fragment### id`.

### Virus ### 
A type of malware that infects a computer to do malicious things. For example, deleting all your Foo Fighters albums, prompting you to install other bad software, or emailing all your friends to tell them how bad at security you really are. 

### Vulnerability ###  
A weak spot in the armor. Like a bad haircut on a teenage girl, an unpatched Windows Server, a root account without a password, or a text input field without validation.

### XSS ###  
Cross Site Scripting. One of the top vulnerabilities according to OWASP. The vulnerability is that the site allows user input to be executed on the page. The (common) attack against this is to make a link that uses the vulnerability to make your (bad) code to look like its coming from a good page. Depending on what the code is, you can steal someones session, 'hook' their browser so you can look at everything the browse (in addition to other things), or exploit their host with a drive-by.