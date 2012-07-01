---
layout: post
title: "Risky Business"
description: ""
category: 
tags: []
---
{% include JB/setup %}

Risk is a subject that is much more on the blue team side of things than we normally discuss. However, I think it is an important concept to understand, and how companies choose to manage risk makes a big difference in how easy it is to hack them. I have found that understanding risk and risk management can also help the conversations that I have with businesses about their penetration test. The short definition is thus: risk is the product of threat, vulnerability, and cost. Risk is a property or attribute of an asset. That little bit is from our newly minted dictionary, the [hackernauts dictionary](/dictionary.html). So you can think of risk as an equation.

{% highlight python %}
Risk = Threat * Vulnerability * Cost
{% endhighlight %}

The main thing to remember how you define these items is that you define them in some consistent way. Otherwise you will not be able to compare risk across multiple assets. I once visited a company that had confusing definitions of risk. One assets risk was rated as 2500, and another's was rated a 9. The funny think is that the asset rated 9 had a higher risk than the other. One simple way to do it is to rate each piece on a scale of 1-10, and then multiply them. This can at least give you a ballpark. You can of course get much more granular. You can define vulnerability as probability that an asset will be compromised within a year, and then give the cost of a breach. If the resultant number is lower than the cost to replace the asset, then you don't do it. This is how businesses approach risk. As a hacker attacking a mature organization, you try to find some asset whose risk was not rated highly, and attempt to exploit it. Assuming that the organizations risk management is sane, there may be a few reasons that the asset was not rated highly to fix. 

* The asset itself may not contain sensitive or business critical data. 
* The vulnerability might be difficult to exploit. 
* The company may have incorrectly identified threats to the system. 

In the first case, we may be able to leverage the machine containing non-sensitive data to compromise a machine which does hold all the cards. The second case means it is just a question of how hard to you want to work. The honest truth is that if a vulnerability looks particularly difficult to safely exploit, then I will probably keep looking. However, work with what you have. You can look at [carnal0wnage's](http://twitter.com/#!/carnal0wnage) [blog](http://carnal0wnage.attackresearch.com/search/label/low2pwned) for some awesome examples on how some clever people leveraged 'low' rated vulnerabilities to pwn a whole system. The third case is of course true, who expected a hacker of your skill to attack the network!?

### For Instance

An example from pop culture: The Hulk is an asset to the Avengers. His vulnerability is anger (get him to angry and he is out of control). We can rate this as a pretty high vulnerability, because chances are, he will get mad. Say 9.5/10. The threat in this case might be Loki. He really does not want the Avengers to succeed. Since he is competent, we can rate this pretty high too. We will give Loki as a threat a score of 10/10 against the Hulk because he is good at making people angry. The cost in this case is the cost to the team of going into battle without the Hulk. The Hulk is a heavy hitter on the team, so they don't want to go into something big without him. So this gets a high rating as well. 9/10. All in all, the Hulk is pretty risky, his score is 855 out of 1000. Which we kinda knew at the beginning, and which happens to be a major source of tension in the latest movie. Now, you may disagree with my numbers, saying 'but what about..', that is mitigation, which is what security people use to reduce risk.

### A Word on Mitigation

Risk mitigation is what people do to try to reduce risk exposure. They are controls or actions that reduce the viability of the threat, vulnerability, or cost of the resource. Per our example, Bruce Banner may engage in mental exercises to control his anger. This mitigates his risk of going out of control. The Avengers may attempt to neutralize Loki as a threat, reducing his ability to attack the Hulk. They could try to bring more heavy hitters into the lineup, so the Hulk is not so critical to every battle. Let's just hope they don't make more hulks! 