---
layout: post
title: "Cacti ne génère pas de graphes après installation"
desc: "Après installation d'EyesOfNetwork, cacti est installé, mais ne permet pas de grapher correctement "
ref: post-cacti-poller-spine-issue
date: 2020-04-10 16:30 +0100
categories: [kb, EyesOfNetwork, Cacti]
lang: fr
permalink: /fr/kb/:title
---

## Présentation

Versions concernées: EyesOfNetwork >= 5.3

EyesOfNetwork propose l'utilisation de Cacti pour générer des graphes de charges, notamment pour les équipements réseaux.
Après avoir ajouté vos équipements, et vérifié que la récupération d'informations SNMP est OK, les graphes n'apparaissent pas.

On peut voir dans les logs `/srv/eyesofnetwork/cacti/log/cacti.log` les lignes suivantes:

```
04/01/2020 04:10:01 AM - POLLER: Poller[0] ERROR: The path: /usr/bin/spine is invalid.  Can not continue
04/01/2020 04:15:01 AM - POLLER: Poller[0] ERROR: The path: /usr/bin/spine is invalid.  Can not continue
04/01/2020 04:20:01 AM - POLLER: Poller[0] ERROR: The path: /usr/bin/spine is invalid.  Can not continue
04/01/2020 04:25:01 AM - POLLER: Poller[0] ERROR: The path: /usr/bin/spine is invalid.  Can not continue
04/01/2020 04:30:01 AM - POLLER: Poller[0] ERROR: The path: /usr/bin/spine is invalid.  Can not continue
04/01/2020 04:35:01 AM - POLLER: Poller[0] ERROR: The path: /usr/bin/spine is invalid.  Can not continue
```

## Problème

Ce phénomène est lié à un paquet manquant, qui empêche Cacti de récupérer les données SNMP.


## Solution

Il faut installer le paquet *cacti0-spine* pour résoudre le problème :

```bash
yum install cacti0-spine
```
