---
layout: post
title: "Perte de ping aléatoire sur plusieurs équipements"
desc: "Sur EON 5.3, certains équipements perdent aléatoirement des pings et génèrent des faux positifs"
ref: lost-ping-on-multiple-devices
date: 2021-04-28 09:30 +0100
categories: [kb, EyesOfNetwork, Ping]
lang: fr
permalink: /fr/kb/:title
---

## Présentation

Versions concernées: EyesOfNetwork >= 5.3

EyesOfNetwork permet la supervision du ping d'un équipement avec la commande "check-host-alive".

Dans certains cas, plusieurs équipements rencontrent un problème de perte de ping au niveau du check EON.
 


## Problème

Ce phénomène est causé par la configuration de la commande "check-host-alive". Lors d'une perte de ping, le plugin passe en critique.


## Solution

Il faut éditer la commande *check-host-alive* : 

La commande par défaut est la suivante :

```bash
$USER1$/check_ping -H $HOSTADDRESS$ -w 3000.0,80% -c 5000.0,100% -p 1
```

Il faut retirer l'argument "-p 1" pour obtenir la commande suivante :

```bash
$USER1$/check_ping -H $HOSTADDRESS$ -w 3000.0,80% -c 5000.0,100%
```
