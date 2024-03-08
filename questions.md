# Questions 

## PUT & PATCH
Quelle est la différence entre un PUT un PATCH  ?
> PUT et PATCH sont deux type de requêtte http qui permette d'"envoyer" des données vers une base de donnée. 
>
> Elles sont semblables mais ne font pas la même chose. PUT permet de remplacer entièrement une entité avec les informations contenues dans la requête. On a une nouvelle entité avec de nouvelles données. 
>
> PATCH permet de modifier une entité de manière partielle grâce à des méthode de modification. On garde la même entité avec des données certaines donnée mises à jour. 

## FETCH/AXIOS
Pourquoi un call vers mon api depuis Postman fonctionne mais semble bloqué lorsque le même call est exécuté par Firefox?
> Plusieurs choses peuvent provoqué cette erreur. 
>
> Cela peut être dû à une restriction CORS. Postman peut ignorer ces restrictions contrairement à Firefox.
>
> De même que pour les certificats SSL, postman les ignorent. 
>
> Si le navigateur met en cache les requêtes http, cela peut égallement provoqué des erreurs 

## NGINX/APACHE
Qu'est ce qui justifie d'avoir en plus de notre api node un serveur web comme Apache ou Nginx?
> Il peut y avoir plusieurs avantages a utiliser un serveur web en plus d'une API node. 
>
> Le serveur web peut gérer des fichiers statiques ce qui permet a node de gérer seulement les demandes dynamiques. Les serveur web permettent égallement de gérer plus de trafic et ainsi augmenter les performances. 
>
> Les serveurs web ont des systèmes de sécurité intégré qui permettent d'augmenter la sécurité et protection. 
> 

## PERFORMANCES
Citez 3 axes vus en cours pour améliorer les performance d'une api Rest
> La mise en cache permet d'améliorer les performances d'une API Rest  
>
> query 
>
>
>
>