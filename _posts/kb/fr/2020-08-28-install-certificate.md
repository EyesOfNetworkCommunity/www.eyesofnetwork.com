# Installer un certificat serveur et certificat root pour EyesOfNetwork
## Disclaimer :
1. Ici, nous partons du principe que l'on dispose, déjà, de nos certificats serveurs et notre ROOT CA.
2. La génération de certificat ne fait pas partie de ce document.
3. être en root ou disposer des droits sudoers
4. la machine qui doit accéder à eon pour vérifier la bonne application du HTTPS doit être dans le même domaine ou a le même root certificat.

### Lister l'ensemble des fichier à mettre en place
Exemple : 
```bash
[root@eyesofnetwork certs]# pwd
/root/certs
[root@eyesofnetwork certs]# ll
total 0
-rw-r--r-- 1 root root 1424 Aug 28 12:45 eyesofnetwork.cer
-rw-r--r-- 1 root root 1679 Aug 28 12:45 eyesofnetwork.key
-rw-r--r-- 1 root root 1325 Aug 28 12:46 root-ca.pem
```
### Changer les droits des fichiers 
Exemple :
```
[root@eyesofnetwork certs]# chmod 0400 *
-r-------- 1 root root 1424 Aug 28 12:45 eyesofnetwork.cer
-r-------- 1 root root 1679 Aug 28 12:45 eyesofnetwork.key
-r-------- 1 root root 1325 Aug 28 12:46 root-ca.pem
```
### Les copiers dans les répertoires ciblent

#### Le certificat du serveur :
> cp certificat-server.{cer|crt|pem} /etc/pki/tls/certs/
```
[root@eyesofnetwork certs]# cp eyesofnetwork.cer /etc/pki/tls/certs/
```
#### La clé du certificat
> cp certificat-server.key /etc/pki/tls/private/
```
[root@eyesofnetwork certs]# cp eyesofnetwork.key /etc/pki/tls/private/
```
#### le ROOT-CA (et le subsidiaire le cas échéant)
> cp root-ca.{cer|crt|pem} /etc/pki/ca-trustb/source/anchors/
```
[root@eyesofnetwork certs]# cp root-ca.pem /etc/pki/ca-trustb/source/anchors/
```

#### Execution de l'update-ca-trust
manage consolidated and dynamic configuration of CA certificates and associated trust
```
# update-ca-trust extract
```
## Apache
### Modification du fichier ssl.conf
```
vim /etc/httpd/conf.d/ssl.conf

modification de la ligne l00:
- SSLCertificateFile /etc/pki/tls/certs/localhost.crt
+ SSLCertificateFile /etc/pki/tls/certs/eyesofnetwork.crt
modification de la ligne 107:
- SSLCertificateFile /etc/pki/tls/private/localhost.key
+ SSLCertificateFile /etc/pki/tls/private/eyesofnetwork.key
```

```
[root@eyesofnetwork certs]# systemctl restart httpd
```
## En théorie la connexion à EyesOfNetwork est validé par votre navigateur (valider avec un poste déjà dans le "domaine")