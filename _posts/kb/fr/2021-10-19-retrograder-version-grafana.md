---
layout: post
title: "Rétrograder la version de Grafana"
desc: "Grafana 8.X est incompatible avec EON 5.X et affiche donc une erreur 404 Page Not Found"
ref: downgrade-grafana-version
categories: [kb, EyesOfNetwork, Grafana]
lang: fr
permalink: /fr/kb/:title
---

## Présentation

La version 8.X de Grafana est incompatible avec EyesOfNetwork 5.X et remonte une erreur 404 Page Not Found lors de l'affichage des graphiques.

![EyesOfNetwork Grafana 8.X error](/img/kb/2021-10-19-downgrade-grafana-version/eon-grafana-error-404.png)

## Solution

1. Identifier la version de Grafana 7 la plus récente dans son repository

``` bash
    yum search --showduplicates grafana | grep 'grafana-7' | tail -n 1 | cut -d '.' -f 1-3
```

2. Rétrograder la version de Grafana avec le résultat de la commande précédente

``` bash
    yum downgrade grafana-7.X.X-X
```

3. Vérifier le fonctionnement du service ainsi que la version. A noter que le service devrait redémarrer automatiquement après le changement de version.

``` bash
    systemctl status grafana-server
```