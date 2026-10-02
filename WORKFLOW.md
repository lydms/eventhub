# Workflow Git — EventHub

## 1. Branches

- `main` : branche de production. Elle contient uniquement le code validé.
- `dev` : branche d'intégration. Elle rassemble les fonctionnalités avant la mise en production.
- `feature/*` : branches temporaires pour les nouvelles fonctionnalités.
- `fix/*` : branches temporaires pour les corrections.

## 2. Schéma du workflow

```text
main (production)
       ^
       | Pull Request validée
       |
dev (intégration)
       ^
       | Pull Request validée
       |
feature/* ou fix/*
       |
       | Développement et tests
       v
  Modifications locales
```

## 3. Etapes du workflow

1. Créer une branche temporaire depuis `dev`.
2. Développer et tester les modifications.
3. Respecter les conventions de nommage des branches et des commits.
4. Ouvrir une Pull Request vers `dev`.
5. Vérifier et valider les changements avant leur intégration.
6. Ouvrir une Pull Request de `dev` vers `main` pour la mise en production.
7. Ne pas pousser directement sur `main` ou `dev`.

## 4. Protection des branches

- Exiger une Pull Request pour intégrer des changements.
- Interdire les suppressions et les force-push sur les branches protégées.
- Exiger la validation des changements avant leur fusion.
