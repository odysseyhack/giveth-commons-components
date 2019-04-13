# Maintaining the Commons Ecosystem Library

This file outlines directions for how to contribute to this repository.

We follow a Gitflow-like workflow. The default branch of this repository is `master` and it's protected so that we can only change it via pull request. If you want to add your contributions, just do so in a feature branch and start a pull request for a colleague to take a look before merging. Before merging, we should make sure that nothing breaks and that the version is bumped.

## Styling

At a minimum this library can be used to import common styles currently defined under src/assets/styles/main.scss. The idea being that we can have commonly style components across all our projects by just adding some classNames. See _button.scss_ for an example.

## Components

Development of shared components is something we should consider. My recommendation would be everyone develops components first in their own project and then generalises.

* Communicate with other teams, understand how the would use the component
* Code must follow DoD.
* Components MUST define propTypes
* Components MUST be exported from src/lib/index.js to be exposed as a library component


## State

This is a nice to have, or at least think about having. The library along with the [commons template project](https://github.com/wip-abramson/commons-template-project) has been set up to use the Context API and React Hooks so that it is possible to define state in the ecosystem and expose and manipulate this state from the template project. Think Redux.

WARNING: This could get messy. However, if done correctly it could save us a lot of time. IE we are all going to be interfacing with some state that stores the bonding curve properties, it would be cool if this interfacing took place in the ecosystem and other teams could simply call already defined methods.


You can view a deployed version of the template project [here](https://stoic-cray-69120a.netlify.com/)
