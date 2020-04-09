---
layout: post
title: "Valeur de retour négative pour le service 'memory' sur les hôtes linux"
desc: "Affichage d'une valeur négative pour le pourcentage d'utilisation de la mémoire sur les hôtes Linux."
ref: post-negative-return-memory
date: 2020-02-05 20:42 +0100
categories: [kb, EyesOfNetwork]
lang: fr
permalink: /fr/kb/:title
---
# Symptômes

Affichage d'une valeur négative pour le pourcentage d'utilisation de la mémoire sur les hôtes Linux. 

![Memoire negative](/img/kb/2020-02-05-negative-return-memory/mem_nok.png)

Symptôme présent sur **EON 5.2+**.

# Cause

La cause la plus probable est la présence du paquet *net-snmp* en version supérieure à **5.7.2-43**.

Pour en être sûr, exécutez la commande suivante : 

```sh
yum info net-snmp
```

Regardez enfin le champ *Version* et *Révision*.


# Résolution 

Ce problème est résolu avec la mise à jour **1.2** du paquet **nagios-plugins-eon**. Cette mise à jour comporte le correctif pour le plug-in *[check_snmp_mem.pl](https://github.com/EyesOfNetworkCommunity/nagios-plugins-eon/commit/2ba9ae4d526374fff0af10a458f8abca89841280 "Lien Github")*.

Veuillez mettre à jour le paquet en exécutant la commande suivante : 

```sh
yum update nagios-plugins-eon
```


**Résultat :**

![Memoire OK](/img/kb/2020-02-05-negative-return-memory/mem_ok.png)