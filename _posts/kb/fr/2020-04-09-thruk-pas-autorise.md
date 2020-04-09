---
layout: post
title: "Message d'erreur Thruk 'You are not authorized.'"
desc: "Suite à la mise à jour de thruk un problème d'accès à la vue des composants peut survenir s'il n'est pas accompagné d'une mise à jour eonconf."
ref: post-thruk-you-are-not-authorized
date: 2020-04-09 21:30 +0100
categories: kb,EyesOfNetwork,Thruk
lang: fr
permalink: /fr/kb/:title
---

## Présentation

Versions concernés: EyesOfNetwork > 5.2

Depuis l'interface Web d'EyesOfNetwork, il est possible que vous rencontriez le message d'erreur suivant lors de la visualisation des "Services", "Equipements", "Problèmes".

Chacune des visualisations ci-dessous se repose sur le sous-composant **thruk**.

```
Logged as: ?

You are not authorized
It seems like you are not authorized.
```

Thruk, depuis la version 5.2 d'EyesOfNetwork est installé et mis à jour à partir de dépôt communautaire non "maitrisé" par la communauté EyesOfNetwork afin notamment de profiter des mises à jour les plus recentes.

## Problème

Ce phénomène est lié à la mise à jour du composant **thruk**.

Lors de la mise à jour de thruk à partir du dépôt "labs_consol_stable", le fichier */etc/httpd/conf.d/thruk_cookie_auth_vhost.conf* à été introduit et rentre en conflit avec la gestion de la configuration d'EyesOfNetwork.

## Contournement

Afin de contourner le problème, une suppression du fichier et le redémarrage du service *httpd* est nécessaire

```bash
rm /etc/httpd/conf.d/thruk_cookie_auth_vhost.confsystemctl restart httpd
```

## Solution

L'application de la mise à jour d'**eonconf** à une version plus recente que la version publié de thruk permet la correction de ce problème.

```bash
yum update eonconf
```