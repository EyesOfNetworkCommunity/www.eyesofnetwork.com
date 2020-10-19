---
layout: post
title: "Une faille de type Boot Hole touche tous les systèmes EON excepté la 5.3"
desc: "Tous les systèmes EON (sauf la 5.3) qui boot en mode UEFI sont touchés par une faille de type Boot Hole qui compromet ces systèmes"
ref: boot-hole-vulnerability
categories: [kb, EyesOfNetwork]
lang: fr
permalink: /fr/kb/:title
---

## Présentation

Les systèmes équipés d'EON qui boot en mode **UEFI** sont touchés par la faille BootHole, en effet à la mise sous tension de l'ordinateur, le micrologiciel de la carte mère, appelé **UEFI** sur la majorité des appareils récents, charge le bootloader, qui à son tour lance le démarrage du système d'exploitation. L'**UEFI** intègre un outil de démarrage sécurisé, appelé Secure Boot, qui vérifie l'intégrité du code du bootloader afin de s'assurer qu'il s'agit bien d'une version certifiée, sans danger pour l'ordinateur. La majorité des systèmes s'appuient sur une base de données de certificats signés par Microsoft.

Le bootloader GRUB2 charge ses paramètres depuis un fichier séparé - grub.cfg - qui n'est pas vérifié. Il est donc possible d'y insérer un code spécifique qui exploite la faille découverte dans le programme. Même avec une mise à jour de GRUB2, toutes les versions précédentes contenant la faille restent signées, et donc acceptées par les systèmes. Il suffit donc de remplacer le bootloader par une version contenant la faille. Il suffit d'installer GRUB2 au démarrage à l'insu de l'utilisateur, et il sera validé par l'**UEFI** Secure Boot.

La société Red Hat a alors répondu à ce problème en developpant un script permettant la détection de la vulnérabilité et sa possible correction. C'est ce script qui nous a permis de constater que certains systèmes EON sont vulnérables.

D'après ce que nous savons, les machines les plus touchées seraient :
-    VM sous Hyper-V (car UEFI par défaut)
-	 Serveurs Physiques récents

## Détection

Si vous voulez être sur que votre système n'est pas vulnérable, nous vous recommandons de télécharger et d'executer le script suivant sur la machine en question : 

https://access.redhat.com/sites/default/files/cve-2020-10713--2020-08-01-1153.sh

Pour executer le script, il faut évidemment disposer des droits d'execution puis l'executer.
Pour ce faire, il suffit d'executer les lignes de commande suivantes :

chmod +x cve-2020-10713--2020-08-01-1153.sh

./cve-2020-10713--2020-08-01-1153.sh

En temps normal, si votre machine est touchée vous devriez avoir le message suivant :

![system is vulnerable to Boot Hole](/img/kb/2020-10-16-BootHole-grub2/BootHole-vulne.PNG)

Si elle ne l'est pas alors, c'est une message de ce type que vous devriez recevoir :

![system is not vulnerable to Boot Hole](/img/kb/2020-10-16-BootHole-grub2/BootHole-no-vulne.PNG)

## Correction

- Si votre système est vulnérable et que le message est le même que celui de la présentation alors votre système a besoin de mettre à jour le paquet Kernel. Pour ce faire, executez simplement la ligne de commande suivante :

yum update -y kernel


Après cela, vérifiez que votre système n'est plus vulnérable en executant le script une nouvelle fois.

- Si votre système est vulnérable mais que le message est différent de celui de la présentation, référez vous à cette article et mettez à jour les paquets demandés :
https://access.redhat.com/security/vulnerabilities/grub2bootloader

## Sources

https://access.redhat.com/security/vulnerabilities/grub2bootloader
https://www.futura-sciences.com/tech/actualites/cybersecurite-boothole-faille-redoutable-affecte-ordinateurs-equipes-windows-linux-82227/
https://eclypsium.com/2020/07/29/theres-a-hole-in-the-boot/