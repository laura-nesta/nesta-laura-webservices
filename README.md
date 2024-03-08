# nesta-laura-webservices

# Consignes

>Le client est un espace de co-working qui est également un incubateur pour start-up
>
>L’api servira à lister et à manager les projets et les équipes présentes ou passées

## Specs

- Au coeur de l’api doit se trouver la notion de projets, chaque projet est constitués d’une équipe de dév avec des compétences spécifiques  
- Un projet peut nécessiter plusieurs personnes et une personne peut se retrouver dans plusieurs projets en même temps  
- On retrouve sur chaque personne les informations classiques (nom, prénom, email) mais également une liste de ses compétences (VueJs,Typescript, scrum, etc.)
- Il est important de garantir l’intégrité des compétences pour ne pas se retrouver avec des “angularJs, angular, AnguLar”

## FEATURES
- Il doit être possible de faire toutes les opérations d’édition, de création, de lecture et de suppression via l’api pour qu’une interface d’admin complète puisse être mise en place
- Un invité (non connecté) a juste la capacité de lister les projets
- Un user connecté peut lister les projets et les users
- Pour une première version il est envisagé deux rôles “user” et “admin”
- Les users avec le rôles d’admin peuvent faire toutes les opérations d’édition, création et de suppression
- Il est important de fournir également des filtres pour la lecture des users et des projets avec des possibilités de tri (par compétences par exemple) et d’ordre (par date de création)
- Sur la home page il est d’ores et déjà envisagé de lister les 3 projets les plus récents


# PROJET 

## Structure de l'API

Les projets de l'incubateur  
Project
 - name : String {bligatoire, unique}
 - users : User []
 - competences : Competences []

Les developpeurs 
Retrospectievement, le nom user est pas terible. Il peut préter à confusion avec le rôle du même nom  
User 
 - lastName : String 
 - firstName : String 
 - email : String {obligatoire, unique}
 - password : String 
 - competences : Competence[]

Les competences disponibles que possèdent les dev et dont nécessitent les projets 
Competence
 - name : String 

Permet de derminer quelles autorisaions peux avoir un utilisateur  
A date, on a seulement les rôles user et admin 
Role 
 - name : String 
 - authorization 


## Mise en place 

La connexion a mongoDB fonctionne, le fichier .env est fournis a part du repertoire git pour des questions de sécurité. 
Il permet, une fois ajouter au répertoire 'server' de se connecter a la base avec la commande `npm run start`.   
Le fichier d'environnement postman est également fournis. 

Concernant l'API et les fonctionnalités attendues, il manque pas mal de choses, je n'ai pas réussi à avancer correctement.  
La connexion par un utilisateur fonctionne tous comme la plupart des routes. Mais pas mal de spécifités techniques sont manquantes.  
J'ai essayé d'avancer sur la plupart des consignes mais il manque la concrétisation.  


