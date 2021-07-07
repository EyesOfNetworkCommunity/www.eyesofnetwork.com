---
layout: post
title: "Vulnérabilité"
desc: "Une vulnérabilité a été détecté dans la solution EyesOfNetwork, un correctif est disponible."
ref: post-Vulnerability-Cacti
categories: news
lang: fr
permalink: /fr/news/:title
---

Une vulnérabilité a été détecté dans la solution EyesOfNetwork

Cette vulnérabilité permet à un attaquant d'obtenir 
un shell avec les droits root sur une instance de EON sans 
information préalable ou login.

Un correctif a été publié jeudi 1 juillet, puis empaqueté et est maintenant disponible sur les dépôts EyesOfNetwork [[5.3](https://download.eyesofnetwork.com/repos/5.3/updates/)].

L'application du correctif se réalise par l'exécution de la commande suivante:

```bash
yum update cacti0
```
