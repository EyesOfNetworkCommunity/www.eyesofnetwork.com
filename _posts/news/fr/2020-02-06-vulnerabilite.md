---
layout: post
title: "Vulnérabilités"
desc: "Plustieurs vulnérabilités ont été détectées dans la solution EyesOfNetwork, les correctifs sont disponibles."
ref: post-Vulnerability
date: 2020-02-06 17:58 +0100
categories: news
lang: fr
permalink: /fr/news/:title
---

Ce mercredi 5 février, plusieurs vulnérabilités ont été détectées dans la solution EyesOfNetwork.

| CVE | Issue | Fix |
| --- | --- | --- |
| CVE-2020-8654 | Discovery module to allows to run arbitrary OS command. <br>We were able to run the 'id' command with the following payload in the target field : ;id #'. | lilac-3.1-2+ |
| CVE-2020-8655 | LPE via nmap NSE script<br>As the apache user is allowed to run nmap as root, we were able to execute arbitrary commands by providing a specially crafted NSE script. | eonconf-5.3-0 |
| CVE-2020-8656 | SQLi in API in getApiKey function on 'username' field<br>PoC: onapi/getApiKey?username=' union select sleep(3),0,0,0,0,0,0,0 or ' | eonapi-2.0-2+ |
| CVE-2020-8657 | Calculable/guessable API key | eonapi-2.0-2+ |

L'association de ces vulnérabilités permet à un attaquant d'obtenir 
un shell avec les droits root sur une instance de EON 5.2 et 5.3 sans 
information préalable ou login.

Un correctif a été publié jeudi 6 février, puis empaqueté et est maintenant disponible sur les dépôts EyesOfNetwork [[5.2](https://download.eyesofnetwork.com/repos/5.2/updates/), [5.3](https://download.eyesofnetwork.com/repos/5.3/updates/)].

L'application du correctif se réalise par l'exécution de la commande suivante:

```bash
yum update eonapi lilac
```

**⚠ Attention ⚠**:
 La mise à jour du paquet eonapi en version >= 2.0-2 engendrera la 
régénération de l'APIKEY de l'utilisateur admin. La nouvelle clé devra 
être récupérée et renseignée dans les outils tiers consommateurs de 
l'API (ex: EyesOfIndicator, ...).