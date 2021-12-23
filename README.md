## SETUP

- `git config --global core.autocrlf false`: fix for prettier endline;
- `npm install`: install dependencies;
- `npm start`: we suggest you to use `npm start` to run the project;

## PROJECT RULES

- COMPONENTS:
  1. Application specific components must be in "/modules/components";
  2. Components specific to another component must be inside the parent's component folder;

## GIT PATTERNS:

- BRANCHES:

  - `main`: branch containing everything that is reflected in production;
  - `develop`: development branch, where is everything that was validated;
  - `qa`: branch where the testers (QAs) can test everything from the develop branch before deploying to production (main);
  - `feat/*`: branch generated during the development of a feature, task or PBI must have the prefix "feat/" in the name. We name it with "feat/" followed by the number of the task and later by the name of the feature, like so: `feat/1234_pbi_name`;
  - `hotfix/*`: when we need to fix an urgent bug from production branch (main). When the fix is done in production, merge it with `develop` and `qa`;

    > **Pattern:**<br>`prefix: description of the commit`.<br> 
    > **Example:**<br>`feat: migration to chakra ui`.<br>
