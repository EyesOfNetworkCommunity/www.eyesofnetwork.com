---
layout: post
title: "Random ping loss on multiple devices"
desc: "With EON 5.3, some devices encounter random ping loss during checks"
ref: lost-ping-on-multiple-devices
date: 2021-04-28 09:30 +0100
categories: [kb, EyesOfNetwork, Ping]
lang: en
permalink: /fr/kb/:title
---

## Introduction

Versions: EyesOfNetwork >= 5.3

EyesOfNetwork provides ping supervision with "check-host-alive" command.

In some cases, several devices are facing random ping loss during EON checks.
 

## Problem

This problem is caused by the command configuration. The plugin state becomes critical when the check failed.


## Solution

You can edit the following commande *check-host-alive* :

The default command is :

```bash
$USER1$/check_ping -H $HOSTADDRESS$ -w 3000.0,80% -c 5000.0,100% -p 1
```
You have to delete the "-p 1" argument to obtain the new following command :

```bash
$USER1$/check_ping -H $HOSTADDRESS$ -w 3000.0,80% -c 5000.0,100%
```
