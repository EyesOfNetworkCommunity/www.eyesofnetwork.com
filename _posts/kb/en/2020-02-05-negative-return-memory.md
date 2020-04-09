---
layout: post
title: "Negative return for 'memory' service on Linux hosts"
desc: "Displaying a negative value for the percentage of memory usage on Linux hosts."
ref: post-negative-return-memory
date: 2020-02-05 20:42 +0100
categories: [kb, EyesOfNetwork]
lang: en
permalink: /en/kb/:title
---
# Symptoms

Displaying a negative value for the percentage of memory usage on Linux hosts.

![Negative Memory](/img/kb/2020-02-05-negative-return-memory/mem_nok.png)

Symptom present on **EON 5.2 +**.

# Cause

The most likely cause is the presence of the package *net-snmp* in version higher than **5.7.2-43**.

To be sure, run the following command :

```sh
yum info net-snmp
```

Finally, look at the *Version* and *Revision* fields.


# Resolution 

This problem is resolved with the update **1.2** of the package **nagios-plugins-eon**. This update includes the fix for the plug-in *[check_snmp_mem.pl](https://github.com/EyesOfNetworkCommunity/nagios-plugins-eon/commit/2ba9ae4d526374fff0af10a458f8abca89841280 "Github link")*.

Please update the package by running the following command :

```sh
yum update nagios-plugins-eon
```

**Result :**

![Memory OK](/img/kb/2020-02-05-negative-return-memory/mem_ok.png)