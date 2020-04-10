---
layout: post
title: "Cacti does not generates graphs after installation"
desc: "After EyesOfNetwork installation, cacti is provided, but cannot graph correctly"
ref: post-cacti-poller-spine-issue
date: 2020-04-10 16:30 +0100
categories: [kb, EyesOfNetwork, Cacti]
lang: en
permalink: /en/kb/:title
---

## Introduction

Versions: EyesOfNetwork >= 5.3

EyesOfNetwork provides Cacti usage to generate bandwidth graphs, especially for network devices.
After adding your equipments, and check SNMP polling is OK, graphs are not generated.

We can see in logs `/srv/eyesofnetwork/cacti/log/cacti.log` the following errors:

```
04/01/2020 04:10:01 AM - POLLER: Poller[0] ERROR: The path: /usr/bin/spine is invalid.  Can not continue
04/01/2020 04:15:01 AM - POLLER: Poller[0] ERROR: The path: /usr/bin/spine is invalid.  Can not continue
04/01/2020 04:20:01 AM - POLLER: Poller[0] ERROR: The path: /usr/bin/spine is invalid.  Can not continue
04/01/2020 04:25:01 AM - POLLER: Poller[0] ERROR: The path: /usr/bin/spine is invalid.  Can not continue
04/01/2020 04:30:01 AM - POLLER: Poller[0] ERROR: The path: /usr/bin/spine is invalid.  Can not continue
04/01/2020 04:35:01 AM - POLLER: Poller[0] ERROR: The path: /usr/bin/spine is invalid.  Can not continue
```

## Problem

This issue is linked to a missing packages, avoiding Cacti to periodically retrieve SNMP data.


## Solution

You have to install *cacti0-spine* package:

```bash
yum install cacti0-spine
```
