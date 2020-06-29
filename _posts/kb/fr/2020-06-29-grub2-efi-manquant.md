---
layout: post
title: "Le paquet grub2-efi-x64 est manquant"
desc: "Lors de l'installation d'EyesOfNetwork 5.3-0 sur un gestionnaire de démarrage UEFI vous rencontrerez une erreure d'absence de paquet."
ref: grub2-efi-is-missing
categories: [kb, EyesOfNetwork, "5.3", iso]
lang: fr
permalink: /fr/kb/:title
---

## Présentation

Lors de l'installation de l'image EyesOfNetwork 5.3.0 sur un gestionnaire de démarrage **UEFI**, nous rencontrons le message d'erreur suivant:

> Le paquet "grub2-efi-x64" est nécessaire pour l'installation. Ce paquet n'existe pas. C'est une erreur fatale et l'installation va être abandonnée."

![grub2-efi-x64 is Missing](/img/kb/2020-06-29-grub2-efi-x64-is-missing/anaconda.png)


## Contournement

Configurer le gestionnaire de démarrage en mode **BIOS**

## Correction

Corrigé avec l'image **EyesOfNetwork-5.3-1.x86-64.iso**, disponible dans la section Téléchargement.
