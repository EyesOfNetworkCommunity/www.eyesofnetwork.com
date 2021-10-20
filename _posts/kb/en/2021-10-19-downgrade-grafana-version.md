---
layout: post
title: "Downgrade Grafana version"
desc: "Grafana.X 8.0 is incompatible with EON 5.X and display a 404 Page Not Found error"
ref: downgrade-grafana-version
categories: [kb, EyesOfNetwork, Grafana]
lang: en
permalink: /en/kb/:title
---

## Presentation

Grafana version 8.X is incompatible with EyesOfNetwork 5.X and returns a 404 Page Not Found error when displaying graphics.

![EyesOfNetwork Grafana 8.X error](/img/kb/2021-10-19-downgrade-grafana-version/eon-grafana-error-404.png)

## Solution

1. Identify the most recent version of Grafana 7 in its repository

``` bash
    yum search --showduplicates grafana | grep 'grafana-7' | tail -n 1 | cut -d '.' -f 1-3
```

2. Downgrade the version of Grafana with the result of the previous command

``` bash
    yum downgrade grafana-7.X.X-X
```

3. Check that the service is working and the version. Note that the service should restart automatically after the version change.

``` bash
    systemctl status grafana-server
```