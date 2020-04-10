---
layout: post
title: "Error in Thruk 'You are not authorized.'"
desc: "Following the update of thruk, a problem of access to the view of the components can occur if it is not accompanied by an eonconf update."
ref: post-thruk-you-are-not-authorized
date: 2020-04-09 21:30 +0100
categories: [kb, EyesOfNetwork, Thruk]
lang: en
permalink: /en/kb/:title
---

## Introduction

Versions: EyesOfNetwork > 5.2

From the EyesOfNetwork web interface, you may encounter the following error message when viewing "Services", "Equipment", "Problems".

Each of the visualizations below is based on the subcomponent ** thruk **.

```
Logged as: ?

You are not authorized
It seems like you are not authorized.
```

Thruk, since version 5.2 of EyesOfNetwork is installed and updated from a community repository not "managed" by the EyesOfNetwork community.

## Problem

This phenomeno is due to the updating of the ** thruk ** component.

When updating thruk from the "labs_consol_stable" repository, the file */etc/httpd/conf.d/thruk_cookie_auth_vhost.conf* was introduced and conflicts with the configuration of EyesOfNetwork.

## Workaround

Deleting the file and restarting the *httpd* service.

```bash
echo "" > /etc/httpd/conf.d/thruk_cookie_auth_vhost.conf
systemctl restart httpd
```

## Solution

Applying the **eonconf** update to a newer version than the published version of thruk will correct this problem.

```bash
yum update eonconf
```