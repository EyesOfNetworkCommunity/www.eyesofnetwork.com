---
layout: post
title: "Ticket creation module from EON"
desc: "EyesOfNetwork now includes a generic module allowing manual or automatic creation of tickets from supervision events."
ref: itsm-module
categories: [news, feature, EyesOfNetwork]
lang: en
permalink: /en/news/:title
---

## Presentation

Incident monitoring is a crucial task for any information systems manager, finding the history of events and your corrective actions allows you to save time in your administrative acts.

With the ITSM module (*Beta*) integrated in *eonweb* from version **5.3-4**, connect EyesOfNetwork to your incident monitoring tool through APIs.

## How it works ?

The *ITSM* module consists of a generic connector for making REST and SOAP calls and an action selector available from the *GED* module of eonweb.

1. Configure your SOAP / REST requests from the administration menu
2. Activate the connector
3. Trigger a ticket opening from the "active events" view

![Report an incident from EyesOfNetwork 5.3](/img/news/2020-04-21-module-itsm/declaration-incident.png)


## Compatibilities

The module has been developed to be compatible with the maximum number of ticket management tools, only those tested are referenced:

| Ticket manager | Version of the ticket manager | Type of call | Compatibility | | |
|--------------------------------|------------------------------------|--------------|---------------|---|---|
| GLPI                           | 9+                                 | REST         | ✔             |   |   |
| Mantis                         |                                    | SOAP         | ✔             |   |   |
|                                |                                    |              |               |   |   |


## Limitations

- Incident reporting is currently only available from the "active events" view

## Documentation

Find the developer documentation at the following address: [ITSM module documentation](https://github.com/EyesOfNetworkCommunity/eonweb/tree/master/module/admin_itsm)