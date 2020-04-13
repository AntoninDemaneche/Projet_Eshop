# Projet e-Shop #
Par Antonin Demaneche B1B

## 1 - Le projet ##

### 1.1 - Le Contexte du Projet ###

Le projet E-Shop est donc un projet d'UF mise en palce **Ynov Bordeaux** pour les Bachelors 2, nous devions réaliser un site web tout en utilisant un **frameworks Web**.Le site web en questions devez rasemblez certaine fonctionalié mais aussi avoir un inspect plus individuel.

### 1.2 - Mon Projet ###

Mon projet à mois devez donc être un **site de partage de photos** ou il aurrait étais possible de noter positivement ou négativement les photos poster, via un **systéme de Like ou de dislike**.

### 1.3 - Les Outils Utilisé ###

J'ai décider d'utiliser ``` Vue.Js ```  et ``` Firebase ``` pour mon projets.
J'ai décider d'utilisez Vue car je me sentez simplement plus à l'aise avec celui-ci, j'avais pus essayer d'autre frameworks avant qui ne m'ont pas séduit.
Pour la base de donnée j'ai utiliser Firebase car je souhaitez me former à quelques chose de différent de SQL.

## 2 - Le Site ##

### 2.1 - L'architecture du site ###

Le site compte donc plusieur page, 5 pages en tout.Ont arrive sur la page "home", depuis celle-ci nous pouvons aller nous enregistré, nous connecter ou aller voirs la liste des villes existante.Sur la page des villes nous avons plusieur choix de ville que nous pouvons consulter.
![40% center](image_rendu/schema.png)

### 2.2 - La Base de Donnée ###

La base de donnée quand à elle est plutôt simple elle contient une seule table "City" avec les nom des villes leurs nombre de like, de photos.
La base de donnée avec firebase gére aussi la connections.
J'aurrais aussi aimer que le storage inclus dans firebase puisse héberger les images mais sans succés.

### 2.3 - Les fonctionalitées ###

Fonctionalitée : Il est possible de s'inscrire et de se connecter, des boutons s'affiche en fonction de si l'utilisateurs est connecter ou non, certaine page ne sont pas accescibles si l'ont n'est pas connecter il n'est pas possible de poster des photos ni même de les "likez".
