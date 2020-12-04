---
layout: post
title: "Nagios plante lorsqu'un Business Process est configuré"
desc: "Nagios plante sur tous les systèmes EON en 5.3 à la suite d'un check du Business Process"
ref: nagios-crash-bp
categories: [kb, EyesOfNetwork]
lang: fr
permalink: /fr/kb/:title
---

## Présentation

A ce jour nous n’avons pas clairement identifié la source néanmoins nous avons constaté que le problème se présente lorsque nous avons un Business Process de configuré ce qui renforce l’hypothèse d’instabilité causée par l’interaction Livestatus <-> Nagios

- install EON 5.3 + custo AMS => NOK
- fresh install EON 5.3 => NOK
- fresh install EON 5.3 + yum update => NOK
- Utilisation du mod gearman => NOK

Le constat est toujours le même Nagios plante suite à un check du BP :
```
<---
[2020-10-29 11:01:03][32194][TRACE] 364 +++>
u3DXzGJUdGuiGtTtt6Ek0qAYkEB+Xs+e8bBTEhJfrUAkUzBttQ3/QnKOh4pJeJUjLDLJFvYfH+kUsUis4iq3BHsOopGgSetIN0A6H68CRpELugF/gabgxZTjtIJr+tnQCUHdG02wgR/eS3OI8WaavJCmbO1/jMNUiygWxk1PhKgoq1VVIV9NDebqgFqDrFmGJNl/Bizc5yTCMFYAgj8d2LP19drWZ8XEpWOIXR6+kxb2fNY/jVcq1fcG2/IqBSPIAN/yKBWtrUy5fr+YWBXs2RYMeZJh6Lpy8LIvnIYmOUhUfEIUkvDAlDZlq3dU9DFHouf3TsrQmW/6ZscoGczHYO2Rf+v8R0O0g8KjT661+20=
<+++
[2020-10-29 11:01:03][32194][TRACE] handle_host_check(7)
[2020-10-29 11:01:03][32194][TRACE] ---------------
host Job -> 7, 801
[2020-10-29 11:01:03][32194][TRACE] handle_perfdata(7)
[2020-10-29 11:01:03][32194][TRACE] add_job_to_queue(perfdata, BP_ALED, 2, 1, 1)
[2020-10-29 11:01:03][32194][TRACE] 182 --->DATATYPE::HOSTPERFDATA      TIMET::1603965663       HOSTNAME::BP_ALED       HOSTPERFDATA::runtime=0.003s    HOSTCHECKCOMMAND::check_thruk_bp!(null) HOSTSTATE::0HOSTSTATETYPE::1
HOSTINTERVAL::1.000000

<---
[2020-10-29 11:01:03][32194][TRACE] 256 +++>
8z/FwJS1cDg/qcp2C+5TUhfu5mNKd34kXVfKu0QZlLvXbfYGzKOelX28SpfZTjwiUHNww6QKvia0vf0ji8ClLLKSS3vdX1Gtp4r6wats5Nl7iyo3mL1FiFEjxWV0Mh4H6MZsCMgKPRu8qTDnoo3I9FY6U39UW7fw02sWA7lMGHsBkHMzZZYoyPF/13O5M7ICjj2wVRTYPv310mg6V/hfXGLf3j+NqftWTBRCTCcm1Rd9PoNUGF4UnIlXeLhwJmYG
<+++
nagios: libgearman/client.cc:1257: void _pop_non_blocking(gearman_client_st*): Assertion `client->universal.options.stored_non_blocking == client->options.non_blocking' failed.
Aborted
```
Cela peut arriver quelques minutes après le démarrage comme après 2h.

Nous avons également remarqué ce message au démarrage de Nagios :
```
WARNING: RLIMIT_NPROC is 7259, total max estimated processes is 11374! You should increase your limits (ulimit -u, or limits.conf)
```
Nous avons bien tenté de modifier la valeur mais le changement ne semble pas être pris en compte.

## Solution de contournement 

Pour contourner le problème, il est conseillé pour le moment d'activer un redémarrage automatiquement de Nagios, pour ce faire :

Il faut modifier le fichier qui permet d'activer un autorestart de nagios :
```
vi /etc/systemd/system/multi-user.target.wants/nagios.service
```

Puis ajouter la ligne de commande suivante au fichier :
```
Restart=always
```

Et enfin relancer le service :
```
systemctl daemon-reload
```