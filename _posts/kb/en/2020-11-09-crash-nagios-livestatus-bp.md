---
layout: post
title: "Nagios crash when a Business Process is configured"
desc: "Nagios crash sur on EON 5.3 when a check of a Business Process is done"
ref: nagios-crash-bp
categories: [kb, EyesOfNetwork]
lang: en
permalink: /en/kb/:title
---

## Presentation

To date, we have not clearly identified the source, however we have found that the problem arises when we have a Business Process configured, which reinforces the hypothesis of instability caused by the interaction Livestatus <-> Nagios

- install EON 5.3 + custo AMS => NOK
- fresh install EON 5.3 => NOK
- fresh install EON 5.3 + yum update => NOK
- Using the gearman => NOK

The observation is always the same Nagios crashes following a BP check :
```
<---
[2020-10-29 11:01:03][32194][TRACE] 364 +++>
u3DXzGJUdGuiGtTtt6Ek0qAYkEB+Xs+e8bBTEhJfrUAkUzBttQ3/QnKOh4pJeJUjLDLJFvYfH+kUsUis4iq3BHsOopGgSetIN0A6H68CRpELugF/gabgxZTjtIJr+tnQCUHdG02wgR/eS3OI8WaavJCmbO1/jMNUiygWxk1PhKgoq1VVIV9NDebqgFqDrFmGJNl/Bizc5yTCMFYAgj8d2LP19drWZ8XEpWOIXR6+kxb2fNY/jVcq1fcG2/IqBSPIAN/yKBWtrUy5fr+YWBXs2RYMeZJh6Lpy8LIvnIYmOUhUfEIUkvDAlDZlq3dU9DFHouf3TsrQmW/6ZscoGczHYO2Rf+v8R0O0g8KjT661+20=
<+++
[2020-10-29 11:01:03][32194][TRACE] handle_host_check(7)
[2020-10-29 11:01:03][32194][TRACE] ---------------
host Job -> 7, 801
[2020-10-29 11:01:03][32194][TRACE] handle_perfdata(7)
[2020-10-29 11:01:03][32194][TRACE] add_job_to_queue(perfdata, BP_ALED, 2, 1, 1)
[2020-10-29 11:01:03][32194][TRACE] 182 --->DATATYPE::HOSTPERFDATA      TIMET::1603965663       HOSTNAME::BP_ALED       HOSTPERFDATA::runtime=0.003s    HOSTCHECKCOMMAND::check_thruk_bp!(null) HOSTSTATE::0HOSTSTATETYPE::1
HOSTINTERVAL::1.000000

<---
[2020-10-29 11:01:03][32194][TRACE] 256 +++>
8z/FwJS1cDg/qcp2C+5TUhfu5mNKd34kXVfKu0QZlLvXbfYGzKOelX28SpfZTjwiUHNww6QKvia0vf0ji8ClLLKSS3vdX1Gtp4r6wats5Nl7iyo3mL1FiFEjxWV0Mh4H6MZsCMgKPRu8qTDnoo3I9FY6U39UW7fw02sWA7lMGHsBkHMzZZYoyPF/13O5M7ICjj2wVRTYPv310mg6V/hfXGLf3j+NqftWTBRCTCcm1Rd9PoNUGF4UnIlXeLhwJmYG
<+++
nagios: libgearman/client.cc:1257: void _pop_non_blocking(gearman_client_st*): Assertion `client->universal.options.stored_non_blocking == client->options.non_blocking' failed.
Aborted
```
This can happen a few minutes after start-up as well as after 2 hours.

We also noticed this message when starting Nagios :
```
WARNING: RLIMIT_NPROC is 7259, total max estimated processes is 11374! You should increase your limits (ulimit -u, or limits.conf)
```
We have tried to modify the value but the change does not seem to be taken into account.
