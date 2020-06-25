---
layout: post
title: "Cacti: error : Template user 'admin' does not exist"
desc: "Erreur affichée lors du lancement de cacti."
ref: cacti-erreur-user-admin
categories: [kb, cacti, EyesOfNetwork, "5.2"]
lang: fr
permalink: /fr/kb/:title
---

## Présentation
Lorsque l'on souhaite se connecter à Cacti en utilisant le lien présent dans l'interface EON peut se produire l'erreur:

```error : Template user 'admin' does not exist". ```

## Solution

Exécuter la commande SQL suivante dans la base cacti

``` bash
INSERT INTO user_auth VALUES (1,'admin','21232f297a57a5a743894a0e4a801fc3',0,'Administrator','on','on','on','on','on',1,1,1,1,1,'on');
```


## Indication
Pour exécuter la commande, il est nécessaire d'avoir un accès SSH ou au terminal du serveur EON puis d'accéder à la base comme suit;

``` bash
$ mysql -u root -p root66
$ use cacti
$ INSERT INTO user_auth VALUES (1,'admin','21232f297a57a5a743894a0e4a801fc3',0,'Administrator','on','on','on','on','on',1,1,1,1,1,'on');

```
