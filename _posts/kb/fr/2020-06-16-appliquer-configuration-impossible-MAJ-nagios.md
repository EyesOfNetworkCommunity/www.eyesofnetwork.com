---
layout: post
title: "Impossible d'appliquer la configuration après la mise à jour de Nagios"
desc: "EyesOfNetwork depuis sa version 5.2 possède des sous-composants qui sont mis à jour à partir de dépôts communautaires Tiers. Afin d'accélérer et rendre plus accessible les mises à jour. 
Mais cela peut engendrer des modifications qui impactent négativement EyesOfNetwork."
ref: nagios-update-apply-fail
categories: [kb, Security, EyesOfNetwork, "5.3"]
lang: fr
permalink: /fr/kb/:title
---

## Présentation

EyesOfNetwork depuis sa version 5.2 possède des sous-composants qui sont mis à jour à partir de dépôts communautaires Tiers. Afin d'accélérer et rendre plus accessible les mises à jour. Mais cela peut engendrer des modifications qui impactent négativement EyesOfNetwork.

C'est le cas du passage de la version de Nagios 4.4.3 en 4.4.5 provenant du dépôt **EPEL**.

## Contournement

``` bash
systemctl stop nagios
find /srv/eyesofnetwork/nagios/etc/objects/ -name "*.cfg" -user root -group root -exec rm -f {} \;
rm /var/run/nagios/nagios.pid
chown nagios:eyesofnetwork /srv/eyesofnetwork/nagios/etc/objects/
```

## Correction

Corrigé en **eonconf-5.3-3**
