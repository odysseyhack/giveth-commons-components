# Git Branching Strategy - Git Flow

I propose we have a master branch which is always stable, a develop branch and then take feauture branches off the develop branch.

Each feature is the rebased to develop and tested in the feature branch before being committed to develop.

We follow SevVer and propose merging to master every time we want to release a new minor version and publish to npm.

The FIRST thing to do when creating a feature branch off develop is to bump the minor version. This means we can publish the feature to npm without messing other teams up.


Merge to develop must be reviewed by one other person.