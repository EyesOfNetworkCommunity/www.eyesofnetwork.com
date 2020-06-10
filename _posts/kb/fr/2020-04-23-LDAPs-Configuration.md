---
layout: post
title: "Configuration de la liaison LDAP sécurisée"
desc: "EyesOfNetwork permet la définition et la configuration d'une base de comptes LDAP externe. Connectez EON à vos Active Directory en LDAPs"
ref: auth-ldaps-module
categories: [kb, Security, EyesOfNetwork]
lang: fr
permalink: /fr/kb/:title
---

## Présentation

EyesOfNetwork peut être connecté à une base de comptes externes au travers du protocole LDAP(s).

## Configuration

### Prérequis

- EyesOfNetwork >= 5.0
- Avoir un accès à l'interface d'administration d'EyesOfNetwork
- Avoir un accès utilisateur avec pouvoirs en ligne de commandes à EyesOfNetwork
- Posséder le certificat de votre autorité de certification  exporté au format Base-64

### Ajout de l'autorité de certification aux certificats reconnus par OpenLDAP

1. Déposer le certificat de votre autorité de certification dans le répertoire **/tmp** d'EON
2. Convertir le certificat au format PEM et le placer dans le répertoire des certificats OpenLDAP

``` bash
openssl x509 -in /tmp/ROOT-CA.cer -out /etc/openldap/certs/ROOT-CA.pem
chown apache:root /etc/openldap/certs/ROOT-CA.pem
chmod 0400 /etc/openldap/certs/ROOT-CA.pem
```

3. Rajouter le certificat ROOT dans le magasin de certificats de confiance

``` bash
cp /etc/openldap/certs/ROOT-CA.pem /etc/pki/ca-trust/source/anchors/
update-ca-trust extract
```

3. Redémarrer le serveur httpd

``` bash
    systemctl restart httpd
```

### Configuration dans EyesOfNetwork

![EyesOfNetwork Configuration LDAPs](/img/kb/2020-04-24-ldaps-configuration/EON-ldaps-configuration.png)

## Investigations

Il est possible que vous rencontriez une erreur lors de la connexion à votre Contrôleur de domaine. Afin d'investiguer sur le problème et ainsi avoir davantage de détails, vous pouvez tenter d'établir interactivement la connexion `php`.

``` bash
php -a
```

``` php
ldap_set_option(NULL, LDAP_OPT_DEBUG_LEVEL, 7);
$ldapconn=ldap_connect("ldaps://FQDN","636");
$ldapbind=ldap_bind($ldapconn, "CN=SERVICE-ACCOUNT,OU=Users,DC=mydomain,DC=fr", "MY-PASSWORD");
```