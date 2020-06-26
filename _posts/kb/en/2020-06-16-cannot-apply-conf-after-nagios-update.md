---
layout: post
title: "Unable to apply configuration after updating Nagios"
desc: "EyesOfNetwork since version 5.2 has sub-components which are updated from third-party Yum community repositories in order to speed up and make updates more accessible. But this generates can cause modifications negatively impacting EyesOfNetwork."
ref: nagios-update-apply-fail
categories: [kb, Security, EyesOfNetwork, "5.3"]
lang: en
permalink: /en/kb/:title
---

## Presentation

EyesOfNetwork since version 5.2 has sub-components which are updated from third-party community repositories in order to speed up and make updates more accessible. But this generates can cause modifications negatively impacting EyesOfNetwork.

This is the case with the switch from version Nagios 4.4.3 to 4.4.5 from the **EPEL** repository.

## Workaround

``` bash
systemctl stop nagios
find /srv/eyesofnetwork/nagios/etc/objects/ -name "*.cfg" -user root -group root -exec rm -f {} \;
rm /var/run/nagios/nagios.pid
chown nagios:eyesofnetwork /srv/eyesofnetwork/nagios/etc/objects/
```

## Fix

Fixed in **eonconf-5.3-3**