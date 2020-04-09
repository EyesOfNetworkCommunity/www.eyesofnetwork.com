# Knowledge bases
## Create a knowledge base

### 1 - Files location 
* Knowledge bases must be deployed in a **specific folder** :
`/_posts/kb/<lang>/`

  This folder contains all Knowledge bases in the **specified language**.

* Specified images for your knowledge base must be deployed in a **specific folder**,
the folder name must contains the **date of publication** and your **knowledge base name** in a specific format :

  `/img/kb/YYYY-MM-DD-<KnowledgeBaseName>/`

  To use an image in your knowledge base you must specify an **absolute path**.
  
### 2 - File name structure
The file name must contains the **date of publication** and your **knowledge base name** in a specific format :

`YYYY-MM-DD-<KnowledgeBaseName>.md`

Example with path : `/_posts/kb/en/2020-04-08-how_to_create_a_kb.md`

### 3 - File content structure
The header of the file contains specific keys :
  * "layout" **must** be set to "post".
  * "title" will display the desired title .
  * "desc" will display a short description in the knowledge bases list.
  * "ref" do the link between languages, it **must** be the same in all languages.
  * "categories" **must** be set to "kb".
  * "lang" will set the desired language.
  * "permalink" **must** be set following the format `/"lang"/kb/:title`.
  
Then we can put the content in the file.

Basic structure example : 
```
---
layout: post
title: "<KnowledgeBaseTitle>"
desc: "<KnowledgeBaseDescription>"
ref: kb-<KnowledgeBaseReference>
categories: kb
lang: <lang>
permalink: /<lang>/kb/:title
---
<ContentInMarkDown>
```

* Example in english :
  ```
  ---
  layout: post
  title: "How to create a Knowledge Base"
  desc: "This Knowledge Base explain his own creation"
  ref: kb-howtokb
  categories: kb
  lang: en
  permalink: /en/kb/:title
  ---
  # Knowledge bases
  ## Create a knowledge base
  ...
  ...
  ```
* Example in french :
  ```
  ---
  layout: post
  title: "Comment créer une Base de connaissance"
  desc: "Cette Base de connaissance explique sa propre création"
  ref: kb-howtokb
  categories: kb
  lang: fr
  permalink: /fr/kb/:title
  ---
  # Bases de connaissances
  ## Créer une base de connaissance
  ...
  ...
  ```

# Contributors

Thanks to all contributors !

<a href="https://github.com/EyesOfNetworkCommunity/www.eyesofnetwork.com/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=EyesOfNetworkCommunity/www.eyesofnetwork.com" />
</a>
