---
layout: post
title: "How to Configure LDAPs on EyesOfNetwork"
desc: "EyesOfNetwork allows the definition and configuration of an external LDAP account database. Connect EON to your Active Directory using LDAPs"
ref: auth-ldaps-module
categories: [kb, Security, EyesOfNetwork]
lang: en
permalink: /en/kb/:title
---

## Presentation

EyesOfNetwork can be connected to a database of external accounts through the LDAP(s) protocol.

## Configuration

### Prerequisites

- EyesOfNetwork >= 5.0
- Have access to the EyesOfNetwork administration interface
- Have TTY power user to EyesOfNetwork
- Have the certificate of your certification authority exported in Base-64 format

### Adding the certification authority to certificates recognized by OpenLDAP

1. Deposit the certificate of your certification authority in the **/tmp** directory of EON
2. Convert the certificate to PEM format and place it in the OpenLDAP certificates directory

``` bash
openssl x509 -in /tmp/ROOT-CA.cer -out /etc/openldap/certs/ROOT-CA.pem
chown apache:root /etc/openldap/certs/ROOT-CA.pem
chmod 0400 /etc/openldap/certs/ROOT-CA.pem
```

3. Adding certificat in trust store

``` bash
cp /etc/openldap/certs/ROOT-CA.pem /etc/pki/ca-trust/source/anchors/
update-ca-trust extract
```

4. Restarting httpd

``` bash
    systemctl restart httpd
```

### Configuration in EyesOfNetwork

![EyesOfNetwork LDAPs Configuration](/img/kb/2020-04-24-ldaps-configuration/EON-ldaps-configuration.png)

## Investigations

You may encounter an error while logging in to your Domain Controller. In order to investigate the problem and thus have more details, you can try to establish the connection interactively `php`.

``` bash
php -a
```

``` php
ldap_set_option(NULL, LDAP_OPT_DEBUG_LEVEL, 7);
$ldapconn=ldap_connect("ldaps://FQDN","636");
$ldapbind=ldap_bind($ldapconn, "CN=SERVICE-ACCOUNT,OU=Users,DC=mydomain,DC=fr", "MY-PASSWORD");
```