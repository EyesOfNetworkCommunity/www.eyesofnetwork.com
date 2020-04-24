---
layout: post
title: "Connexion au Contrôleur de domaine impossible en LDAP non sécurisé"
desc: "La communication en LDAP non sécurisé deviendra sous peu impossible par défaut à partir de EyesOfNetwork vers les services AD DS/AD LDS (2020 LDAP channel binding and LDAP signing requirement for Windows)"
ref: itsm-module
categories: [news, LDAP, EyesOfNetwork]
lang: fr
permalink: /fr/news/:title
---

# Présentation

Microsoft l'avait annoncé dans son avis de sécurité [ADV190023](https://portal.msrc.microsoft.com/en-us/security-guidance/advisory/ADV190023), un changement de comportement dans les mécanismes d'authentification allait être nécessaire afin de garantir une meilleure sécurité entre les services AD DS/AD LDS et leurs clients.

[2020 LDAP channel binding and LDAP signing requirement for Windows](https://support.microsoft.com/fr-fr/help/4520412/2020-ldap-channel-binding-and-ldap-signing-requirements-for-windows)

Une mise à jour Microsoft reportée à plusieurs reprises, finalement attendue pour le 2e semestre 2020 va entrainer la **rupture de la communication entre EyesOfNetwork et vos contrôleurs de domaines**.

# Correction

Afin de maintenir la connexion entre EyesOfNetwork et le contrôleur de domaine, il est nécessaire d'établir une communication chiffrée en **LDAPs**.

Base de connaissance: [Authentification en LDAPs sur EyesOfNetwork ](https://www.eyesofnetwork.com/fr/kb/LDAPs-Configuration)