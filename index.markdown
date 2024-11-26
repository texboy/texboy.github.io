---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---
# About me

{% for post in site.posts %}
{% if post.categories contains "about" %}
<div class="about-preview" onclick="toggleContent(this)">
<p>Hey, my name is Victor, I'm a PHP developer with 5 years of experience, mostly working with Magento and a range of PHP projects. Over the years, I’ve dabbled in different technologies, contributing to internal tools using Node, React, Python, and more.</p>
<div class="hidden-content">
<p>{{ post.content }}</p>
</div>
<p class="read-more">Read More</p>
</div>
{% endif %}
{% endfor %}

# Professional Experience
{% for post in site.posts %}
    {% if post.categories contains "job" %}
<div class="job-entry" onclick="toggleContent(this)">
<img src="{{ post.thumb }}" alt="Logo" class="job-logo">
<div class="job-details">
<div class="job-header">
<h2>{{ post.title }}</h2>
<button class="toggle-btn">View Details</button>
</div>
<p><b>Duration:</b> {{ post.start | date: "%B, %Y" }} - {{ post.end | date: "%B, %Y" }}</p>
<div class="hidden-content">
<p>{{ post.content }}</p>
</div>
</div>
</div>
{% endif %}
{% endfor %}

# Education
{% for post in site.posts %}
{% if post.categories contains "education" %}
<div class="job-entry" onclick="toggleContent(this)">
<img src="{{ post.thumb }}" alt="Logo" class="job-logo">
<div class="job-details">
<div class="job-header">
<h2>{{ post.title }}</h2>
<div class="toggle-btn" disabled>View Details</div>
</div>
<p><b>Duration:</b> {{ post.start | date: "%B, %Y" }} - {{ post.end | date: "%B, %Y" }}</p>
<div class="hidden-content">
<p>{{ post.content }}</p>
</div>
</div>
</div>
{% endif %}
{% endfor %}

<script src="/assets/js/toggle.js"></script>
