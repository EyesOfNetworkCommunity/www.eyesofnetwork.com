---
layout: post
title: "Module de création de tickets à partir de EON"
desc: "EyesOfNetwork intègre dorénavant un module générique permettant la création manuelle ou automatique de tickets à partir d'évènements de supervision."
ref: itsm-module
categories: [news, feature, EyesOfNetwork]
lang: fr
permalink: /fr/news/:title
---


## Présentation


Le suivi des incidents est une tache cruciale pour tout gestionnaire de systèmes d'information, retrouvez l'historique des évènements et vos actions correctives vous permettront de gagner du temps dans vos actes d'administration. 


Avec le module ITSM (*Beta*) intégré dans *eonweb* à partir de la version **5.3-4**, connectez EyesOfNetwork à votre outil de suivi d'incident au travers des APIs.


## Fonctionnement


Le module *ITSM* est constitué d'un connecteur générique permettant de faire des appels REST et SOAP et d'un sélecteur d'actions disponible à partir du module *GED* d'eonweb.


1. Configurez vos requêtes SOAP/REST depuis le menu d'administration
2. Activez le connecteur
3. Déclenchez une ouverture de tickets depuis la vue "évènements actifs"


![Déclarer un incident depuis EyesOfNetwork 5.3](/img/news/2020-04-21-module-itsm/declaration-incident.png)


## Compatibilités


Le module a été développé afin d'être compatible avec le maximum d'outil de gestion de tickets, seuls ceux testés y sont référencés:


| Nom du gestionnaire de tickets | Version du gestionnaire de tickets | Type d'appel | Compatibilité |   |   |
|--------------------------------|------------------------------------|--------------|---------------|---|---|
| GLPI                           | 9+                                 | REST         | ✔             |   |   |
| Mantis                         |                                    | SOAP         | ✔             |   |   |
|                                |                                    |              |               |   |   |


## Limitations


- La déclaration d'incidents n'est pour le moment disponible qu'à partir de la vue "évènements actifs"


## Documentation


Retrouvez la documentation développeur à l'adresse suivante: [Documentation du module ITSM](https://github.com/EyesOfNetworkCommunity/eonweb/tree/master/module/admin_itsm)
