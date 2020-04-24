---
layout: post
title: "Unable to connect to the domain controller in unsecured LDAP connection"
desc: "Communication in non-secure LDAP will soon become impossible by default from EyesOfNetwork to AD DS / AD LDS services (2020 LDAP channel binding and LDAP signing requirement for Windows)"
ref: itsm-module
categories: [news, LDAP, EyesOfNetwork]
lang: en
permalink: /en/news/:title
---

# Presentation

Microsoft announced in its security advisory [ADV190023](https://portal.msrc.microsoft.com/en-us/security-guidance/advisory/ADV190023), a change in behavior in the authentication mechanisms would be necessary in order to guarantee better security between AD DS / AD LDS services and their customers.

[2020 LDAP channel binding and LDAP signing requirement for Windows](https://support.microsoft.com/fr-fr/help/4520412/2020-ldap-channel-binding-and-ldap-signing-requirements-for-windows)

A Microsoft update postponed several times, finally expected for the second half of 2020 will cause the **breakdown of communication between EyesOfNetwork and your domain controllers**.

# Correction

In order to maintain the connection between EyesOfNetwork and the domain controller, it is necessary to establish encrypted communication in **LDAPs**.

Knowledge base: [Authentication in LDAPs on EyesOfNetwork](https://www.eyesofnetwork.com/fr/kb/LDAPs-Configuration)