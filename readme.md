CareerBuilder Employer Templates
================================

This site is setup using the [Middleman](https://middlemanapp.com/) static site generation tool.

Stylsheets are using [SASS](http://sass-lang.com/) as the pre-processeing engine and utilize [Bourbon](http://bourbon.io/) as a common mixin library, as well as it's companion grid system [Neat](http://neat.bourbon.io/). 

It also utilizes the iternal CareerBuilder SASS libraries:
* Base Styles: [https://github.com/cb-talent-development/employer-style-base](https://github.com/cb-talent-development/employer-style-base)
* Grid System: [https://github.com/cb-talent-development/employer-style-grid](https://github.com/cb-talent-development/employer-style-grid)
* Widgets [https://github.com/cb-talent-development/employer-style-widgets](https://github.com/cb-talent-development/employer-style-widgets)
* Styleguide [https://github.com/cb-talent-development/employer-style-guide](https://github.com/cb-talent-development/employer-style-guide)

## Initial Setup

After you've cloned the repository locally, navigate to the directory and install the packages
``` shell
$ bundle install
$ bower install
```

## Local Development

1. Because the CareerBuilder SASS libraries are in flux, make a note to update your bower packages before starting
  ``` shell
  $ bower update employer-style-base 
  $ bower update employer-style-grid
  ```
  
2. Run the middleman server to start development
  ``` shell
  $ middleman server
  ```

3. At this point code should be live compiling from source and refreshing your browser window automattically as changes come in.
  ```
  http://localhost:4567
  ```

## Deployment

1. Publish the build to GitHub pages
  ``` shell
  $ rake publish
  ```
  
2. You can view the build here
  ```
  http://teampolymathic.github.io/careerbuilder-static/
  ```

---

That's it! [Team Polymathic](http://teampolymathic.com)
