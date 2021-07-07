---
layout: post
title: "Security issue"
desc: "A vulnerability have been detected in EyesOfNetwork, a patch is available."
ref: post-Vulnerability-Cacti
categories: news
lang: en
permalink: /en/news/:title
---

A vulnerability has been detected in the EyesOfNetwork solution.

This vulnerability allows an attacker to obtain
a shell with root rights on an instance of EON without
prior information or login.

A patch was released Thursday, July 1, then packaged and is now available on the EyesOfNetwork repositories. 
[[5.3](https://download.eyesofnetwork.com/repos/5.3/updates/)].

The patch is applied by executing the following command:

```bash
yum update cacti0
```
