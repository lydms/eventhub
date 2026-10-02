# EventHub

## Description

EventHub est un projet permettant de mettre en place une gestion d'événements.

## Conventions de commits

Ce projet utilise la convention **Conventional Commits 1.0.0** afin de rendre l'historique Git clair et compréhensible.

### Format d'un commit

`<type>[scope optionnel]: <description>`

### Types de commits

- `feat`: ajout d'une fonctionnalité
- `fix`: correction d'un bug
- `docs`: modification de la documentation
- `style`: modification du formatage du code sans changement fonctionnel
- `refactor`: restructuration du code sans modification du comportement
- `test`: ajout ou modification de tests
- `build`: modification des outils de compilation ou dépendances
- `ci`: modification de l'intégration continue
- `chore`: tâches de maintenance

### Exemples

- `feat: add event creation`
- `fix: correct event date validation`
- `docs: update README`
- `style: format JavaScript files`
- `refactor: simplify event service`
- `test: add event validation tests`
- `chore: configure Husky`

### Bonnes pratiques

- Utiliser un type suivi de deux-points et d'un espace.
- Écrire une description courte et explicite.
- Décrire le changement réalisé.
- Utiliser un scope facultatif pour préciser la partie concernée, par exemple `feat(events): add event creation`.
- Signaler les changements incompatibles avec `!`, par exemple `feat!: change the event API`.

### Vérification automatique

Les hooks Git sont configurés avec Husky et lint-staged.
Prettier formate les fichiers concernés avant chaque commit.
Commitlint vérifie que le message de commit respecte Conventional Commits.
