---
layout: post
title: "Cacti: error : Template user 'admin' does not exist"
desc: "Error shown when openning cacti."
ref: cacti-erreur-user-admin
categories: [kb, cacti, EyesOfNetwork, "5.2"]
lang: en
permalink: /en/kb/:title
---

## Presentation
When you want to connect to Cacti using the link contained in EON's interface this error could occurs:

```error : Template user 'admin' does not exist". ```

## Fix
Execute the following SQL command in 'cacti' database
``` bash
INSERT INTO user_auth VALUES (1,'admin','21232f297a57a5a743894a0e4a801fc3',0,'Administrator','on','on','on','on','on',1,1,1,1,1,'on');
```


## Indication
To execute the command, you need to have SSH or terminal access to the EON server and then access the database as follows;

``` bash
$ mysql -u root -p root66
$ use cacti
$ INSERT INTO user_auth VALUES (1,'admin','21232f297a57a5a743894a0e4a801fc3',0,'Administrator','on','on','on','on','on',1,1,1,1,1,'on');
```
