---
layout: page
title: hackernauts
tagline: ego hack, ergo sum
---
{% include JB/setup %}

{% for post in site.posts limit:4 %}
    {% unless post.draft %}
    {% if post.linkedlist %}
## <a href=" {{post.url }} ">#! </a><a href="{{ post.baselink }}" style="color: #174A8B;">{{ post.title }}</a>
    {% else %}  
## <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
    {% endif %}

***
{{ post.content }}

***

<br />
  {% endunless %} 
{% endfor %}