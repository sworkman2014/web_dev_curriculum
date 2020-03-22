# Contributing to the Curriculum

:+1::tada: First off, thank you for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to the curriculum. These are just guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Table Of Contents

* [What Should I Know Before I Get Started?](#what-should-i-know-before-i-get-started)

  * [Code of Conduct](#code-of-conduct)

* [How Can I Contribute?](#how-can-i-contribute)

  * [Reporting Bugs](#reporting-bugs)

  * [Suggesting Enhancements](#suggesting-enhancements)

* [Your First Code Contribution](#your-first-code-contribution)

* [Pull Requests](#pull-requests)

* [Style Guide](#style-guide)

## What Should I Know Before I Get Started?

### Code of Conduct

This project adheres to the [Contributor Covenant](https://www.contributor-covenant.org/). By participating, you are expected to uphold this code.

Please report unacceptable behavior to `fsf-curriculum@trilogyed.com`.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined which repository your bug is related to, create an issue on that repository and provide the following information.

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.

* **Detailed Location** of the issue. Please include a markdown link to where the problem is. State where the issue is. E.G - Lesson, Activity, Homework, timetracker, or slideshow.

* **Describe the exact steps which reproduce the problem** in as many details as possible. Be sure to list steps you took to encounter the problem if applicable.

* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.

* **Explain which behavior you expected to see instead and why.**

* **Include screen-shots and animated GIFs** which show you following the described steps and clearly demonstrate the problem.

If relevant (e.g. when setting up software, or having inconsistencies across different setups) include details about your configuration and environment:

* **What's the name and version of the OS you're using?**

e.g.

```
#### There is a typo in Lesson Plan 2.1, section 5

* Title - Typo in Lesson Plan 2.1

* Body - `[Lesson Plan 2.1](www.somewhere.com)` I was in the Lesson Plan 2.1 and in section 5. It says `I am dancing on wolves`. It should be `I am dancing with wolves`.
```

* Keep in mind that GitHub allows users to drop images into the comment box

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for the curriculum, including completely new features, lesson plans, and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined which repository your enhancement suggestions is related to, create an issue on that repository and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.

* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.

* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.

* **Explain why this enhancement would be useful** to students, instructors, etc. - whoever the enhancement is for.

Also, if relevant:

* **Provide specific examples to demonstrate the steps**. Include copy/paste-able snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).

* **List some other resources, curriculum, and/or programs supporting the enhancement's relevancy.**

* **Include screen-shots and animated GIFs** which help you demonstrate the steps or point out the part of the curriculum the suggestion is related to.

## Your First Code Contribution

Unsure where to begin contributing? You can start by looking through these issues:

* Issues with the `beginner` tag - these should only require a few lines of code and are good targets if you're just starting contributing. E.g. [FullStack `beginner` issues](https://github.com/coding-boot-camp/FullStack-Lesson-Plans/issues?q=is:issue+is:open+label:%22beginner%22))

* Issues with the `help-wanted` tag - these range from simple to more complex, but are generally things we want but can't get to in a short time frame. E.g. [FullStack `help-wanted` issues](https://github.com/coding-boot-camp/FullStack-Lesson-Plans/issues?q=is:issue+is:open+label:%22help+wanted%22)

#### How to contribute

To contribute to the repo, you'll use the Fork and Pull model common in many open source repositories:

1. [Fork the repo on GitHub](https://help.github.com/articles/fork-a-repo/)

2. Clone your fork.

3. Make and commit the changes locally.

4. Run tests to ensure everything is working. Make necessary changes to ensure tests are passing.

5. Push the changes to your fork.

6. Make a pull request to the main repository.

There are a number of guides on how to do this online if you run into any problems.

* [GitHub Forking Repos](https://guides.github.com/activities/forking/)

* [GitHub Branching](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/)

* [About Pull Requests](https://help.github.com/articles/about-pull-requests/)

* See [GitHub Standard Fork & Pull Request Workflow](https://gist.github.com/Chaser324/ce0505fbed06b947d962)

## Pull Requests

* Include screenshots and animated GIFs in your pull request (PR) whenever possible.

* Follow the [Styleguides](#Styleguides).

* Associate your PR with a relevant issue (e.g. "fixes #45").

* Ensure your tests are passing before you make the PR. Run tests using `npm test`

## Style Guide

1. [Overall](#overall)
2. [Git Commit Messages](#git-commit-messages)
3. [Commenting Voice](#commenting-voice)
4. [Testing](#testing)
5. [General Rules](#general-rules)
6. [JavaScript](#javascript)
7. [HTML](#html)
8. [CSS](#css)
9. [Python](#python)

### Overall

When creating lesson plans and activities, the perennial goal is to create _clean, consistent, and well-commented code_. As lesson plan developers, it important to vigilantly remember: Our average student comes with _no programming experience whatsoever_. It is our responsibility to build and reinforce good coding practices through our own code and to make clear our rationale for our coding decisions.

### File Name Conventions

#### JavaScript Files

JavaScript file names should be camelCased.

bad

```js
Student-Controller.js
or
student_controller.js
```

good

```js
studentController.js
```

The only time a JavaScript file can optionally start with a capital letter is in the case of classes or constructor functions. This includes React Components.

#### HTML File Names

HTML files should be all lowercased and dash-cased.

bad

```html
MY Portfolio.html
or
MyPortfolio.html
or
my_portfolio.html
```

good

```html
my-portfolio.html
```

Why? Because separating the words in an HTML file is good for SEO. Search engines see underscores as letters. So prefer hyphens.

#### Image File names

Image file names should be lowercased and dash-cased

bad

```html
<img src="MyImage.jpg" alt="my image" />
```

good

```html
<img src="my-image.jpg" alt="my image" />
```

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally
* Consider starting the commit message with an applicable emoji:
  * :art: `:art:` when improving the format/structure of the code
  * :racehorse: `:racehorse:` when improving performance
  * :memo: `:memo:` when writing docs
  * :bug: `:bug:` when fixing a bug
  * :fire: `:fire:` when removing code or files
  * :green_heart: `:green_heart:` when fixing the CI build
  * :white_check_mark: `:white_check_mark:` when adding tests
  * :arrow_up: `:arrow_up:` when upgrading dependencies
  * :arrow_down: `:arrow_down:` when downgrading dependencies
  * :shirt: `:shirt:` when removing linter warnings

### Commenting Voice

Commenting is of critical importance to ensure student learning. In learning to code, students are encouraged repeatedly to reflect and repeat on the code activities completed in class. Comments in these activities should clearly highlight the key "learning" aspects without becoming encumbered by verbose or unnecessary details. Remember: Every line of code (and commentary) should appear to be written by a single person, no matter the number of contributors.

Use the below as general principles:

* Comments should be sprinkled liberally in each activity using short, singular streams of thought.

* Comments should maintain a professional tone that leans towards: "School-Teacher Formal".

* Comments should (ideally) be kept to line-comment syntax (`//`) to curb tendency of wordiness.

* Comments should be placed _above_ the code line of interest.

* Comments should be kept to cohesive fragments or light sentences.

* When building activities through iterations, be sure to prune out comments irrelevant to the most
  recent iteration.

* Avoid using second-person pronouns like "you" or "your". Instead use passive voice or "we" or "our".

* Avoid using JSDoc until the very end of the course to avoid confusing students early on.

A few good examples of commenting practices are shown below:

**_6.3.05-NYTSearch_**

```js
// Loop through and provide the correct number of articles
for (var i=0; i<numArticles; i++) {

  // Add to the article counter (to make sure we show the right number)
  articleCounter++;

  // Create the HTML Well (Section) and add the article content for each
  var well-section = $("<div>");
  well-section.addClass("well");
  well-section.attr("id", "article-well-" + article-counter)
  $("#well-section").append(well-section);

  // Confirm that the specific JSON for the article isn't missing any details
  // If the article has a headline, then include the headline in the HTML
  if(NYTData.response.docs[i].headline != "null")

  //...
}
```

**_10.3.04-GeocodeNPM_**

```js
// Include the geocoder NPM package (Remember to run "npm install geocoder"!)
var geocoder = require("geocoder");

// Take in the command line arguments
var nodeArgs = process.argv;

// Create an empty string for holding the address
var address = "";

// Capture all the words in the address (again ignoring the first two Node arguments)
for (var i=2; i<nodeArgs.length; i++){

  // Build a string with the address.
  address = address + " " + nodeArgs[i];
}
```

### Testing

No activity can be considered complete unless it has been tested rigorously. No matter the idealism or intention, broken code always lead to poor learning outcomes. Take the time necessary to confirm each activity works as stated and expected.

### General Rules

* All lesson plan developers should use the following IDE settings when creating lesson plans, activities, or homework solutions. These settings ensure that all code produced by lesson plan developers maintain a consistent look.

  * tab_size: 2
  * spell_check: true
  * translate_tabs_to_spaces: true
  * rulers: \[120]
  * line_numbers: true

* Please take note of the ruler setting. In order to ensure that code is easily viewable on all machines, no line of code should exceed 120 characters in length unless absolutely necessary.

* Lastly, as standard practice include a newline at the end of every code file.

### JavaScript

This guide is roughly based on the [AirBNB JavasScript Style Guide](https://github.com/airbnb/javascript/tree/es5-deprecated/es5).
We've begun using ESLint for JavaScript to enforce some of this style consistency, but that's in progress.

#### ES5 vs. ES6

As of today, our program teaches students using the ES5 standard with some exposure to ES6 towards the latter portion of the class. This is to ensure that students have the maximum resources (online and otherwise) available when debugging issues. This decision may be revisited at a future point.

#### ESLint

All developers making substantive changes to lesson plans or activities should install and utilize [ESLint](http://eslint.org/), making specific use of the `.eslintrc.json` file included at the root of the curriculum directory.

#### Variables

* Always use `var` to declare variables. Not doing so will result in global variables.

  ```js
  // bad
  superPower = "Jumps High!";

  // good
  var superPower = "Jumps High!";
  ```

* Use only one `var` declaration per variable.

  ```js
  // bad
  var items = getItems(),
      goSportsTeam() = true,
      dragonball = "z";

  // good
  var items = getItems();
  var goSportsteam = true;
  var dragonball = "z";
  ```

* Always declare variables at the top of their scope. This helps to avoid issues with variable
  declaration and assignment hoisting related issues.

  ```js
  // bad
  function() {
    test();
    console.log("doing stuff..");

    //..other stuff..

    var name = getName();

    if (name === "test") {
      return false;
    }

    return name;
  }

  // good
  function () {
    var name = getName();

    test();
    console.log("doing stuff..");

    //..other stuff..

    if (name === "test") {
      return false;
    }

    return name;
  }
  ```

#### Strings

* Use double quotes `""` for all strings. This is consistent with other programming languages
  (Java, C++, etc). Use single quotes for internal strings.

  ```js
  // bad
  var name = "Bob Parr";

  // good
  var name = "Bob Parr";

  // good
  var fridgeMagnet = $("<div class='letter fridge-color;>").($(this).attr("data-let"));
  ```

#### Semicolons

* Always include semicolons. Don't be lazy!

  ```js
  var name = "Ahmed";
  ```

#### Naming Conventions

* Use camelCase when naming variables, objects, functions, and instances.

  ```js
    // bad
    var MYObject = {};
    var this_is_my_object = {};
    var o = {};
    function c() {}

    // good
    var thisIsMyObject = {};
    function thisIsMyFunction() {}
  ```

* Use PascalCase when naming constructors or classes.

  ```js
  // bad
  function user(options) {
    this.name = options.name;
  }

  var bad = new user({
    name: "nope"
  });

  // good
  function User(options) {
    this.name = options.name;
  }

  var good = new User({
    name: "yup"
  });
  ```

#### Comparisons

* Use `===` and `!==` instead of `==` or `!=`. This will catch for type differences.

  ```js
  // bad
  var x = 1;
  var y = "1";

  if (x == y){
    console.log("TRUE");
  }
  else {
    console.log("FALSE")
  }

  // good
  var x = 1;
  var y = "1";

  if (x === y) {
    console.log("TRUE");
  }
  else {
    console.log("FALSE");
  }
  ```

* When possible use shortcuts as opposed to explicitly writing out equality checks.

  ```js
  // bad
  if (name != "") {
    console.log("Nothing!")
  }

  // good
  if (name) {
    console.log("Nothing")
  }

  // bad
  if (collection.length > 0) {
    console.log("Yep!");
  }

  // good
  if (collection.length) {
    console.log("Yep!");
  }
  ```

#### Properties

* Use dot notation when accessing properties.

  ```js
  var luke = {
    jedi: true,
    age: 28
  };

  // bad
  var isJedi = luke['jedi'];

  // good
  var isJedi = luke.jedi;
  ```

* Use subscript notation \[] when accessing properties with a variable.

  ```js
  var luke = {
    jedi: true,
    age: 28
  };

  // good
  function getProp(prop) {
    return luke[prop];
  }

  var isJedi = getProp('jedi');
  ```

#### Braces

* Use braces with all multi-line blocks. Otherwise keep such statements on the same line.

  ```js
  // bad
  if (test)
    return false;

  // good
  if (test) return false;

  // good
  if (test) {
    return false;
  }

  // bad
  function () { return false; }

  // good
  function () {
    return false;
  }
  ```

* If you're using multi-line blocks with if and else, put else on the line after the closing brace using [Stroustrup style](https://en.wikipedia.org/wiki/Indent_style#Variant:_Stroustrup).

  ```js
  // bad
  if (test) {
    thing1();
  } else {
    thing3();
  }

  // good
  if (test) {
    thing1();
  }
  else {
    thing3();
  }
  ```

#### Whitespace

* Use soft tabs set to 2 spaces.

  ```js
  // bad
  function happy() {
  ∙∙∙∙var name;
  }

  // bad
  function happy() {
  ∙var name;
  }

  // good
  function happy() {
  ∙∙var name;
  }
  ```

* Place 1 space before the leading brace.

  ```js
  // bad
  function test(){
    console.log("test");
  }

  // good
  function test() {
    console.log("test");
  }

  // bad
  dog.set("attr",{
    age: "1 year",
    breed: "Bernese Mountain Dog"
  });

  // good
  dog.set("attr", {
    age: "1 year",
    breed: "Bernese Mountain Dog"
  });
  ```

* Place no space between the argument list in function calls and declarations.

  ```js
  // bad
  if(isJedi) {
    fight ();
  }

  // good
  if (isJedi) {
    fight();
  }

  // bad
  function fight () {
    console.log ("Swoosh!");
  }

  // good
  function fight() {
    console.log("Swoosh!");
  }
  ```

* Set off operators with spaces.

  ```js
  // bad
  var x=y+5;

  // good
  var x = y + 5;
  ```

* Use indentation when making long method chains. Use a leading dot, which emphasizes that the line
  is a method call not a new statement.

  ```js
  // bad
  $("#items").find(".selected").highlight().end().find(".open").updateCount();

  // bad
  $("#items").
    find(".selected").
      highlight().
      end().
    find(".open").
      updateCount();

  // good
  $("#items")
    .find(".selected")
      .highlight()
      .end()
    .find(".open")
      .updateCount();

  // bad
  var tron = stage.selectAll(".led").data(data).enter().append("svg:svg").classed("led", true)
      .attr("width", (radius + margin) * 2).append("svg:g")
      .attr("transform", "translate(" + (radius + margin) + "," + (radius + margin) + ")")
      .call(tron.led);

  // good
  var tron = stage.selectAll(".led")
      .data(data)
    .enter().append("svg:svg")
      .classed("led", true)
      .attr("width", (radius + margin) * 2)
    .append("svg:g")
      .attr("transform", "translate(" + (radius + margin) + "," + (radius + margin) + ")")
      .call(tron.led);
  ```

* Leave a blank line after blocks and before the next statement.

  ```js
  // bad
  if (foo) {
    return bar;
  }
  return baz;

  // good
  if (foo) {
    return bar;
  }

  return baz;

  // bad
  var obj = {
    foo: function () {
    },
    bar: function () {
    }
  };
  return obj;

  // good
  var obj = {
    foo: function () {
    },

    bar: function () {
    }
  };

  return obj;
  ```

#### Type Conversion

* Strings:

  ```js
  // bad
  var totalScore = this.reviewScore + "";

  // good
  var totalScore = "" + this.reviewScore;

  // bad
  var totalScore = "" + this.reviewScore + " total score";

  // good
  var totalScore = this.reviewScore + " total score";
  ```

* Use `parseInt` or `parseFloat` for Numbers.

  ```js
  var inputValue = "3";

  //good
  var var = parseInt(inputValue);
  ```

#### Event Handling

* Prefer `event.preventDefault()` or `event.stopPropagation()` over `return false` to prevent default event behavior or to prevent an event from bubbling to parent elements.

  ```js
  // bad
  $("#signup-form").on("submit", function() {
    // code we want to execute here
    return false;
  });

  // good
  $("#signup-form").on("submit", function(event) {
    event.preventDefault();

    // code we want to execute here
  });
  ```

### HTML

This guide is roughly based on the [mdo standard guide for HTML and CSS](https://github.com/mdo/code-guide).

#### HTML Syntax

* Use soft tabs with two spaces (should be in editor settings).

* Nested elements should be intended once.

* Always use double quotes, never single quotes, on attributes.

* Don't omit optional closing tags (e.g. `</li>` or `</body>`).

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page title</title>
  </head>
  <body>
    <img src="images/company-logo.png" alt="Company">
    <h1 class="hello-world">Hello, world!</h1>
  </body>
</html>
```

#### HTML5 doctype

* Include the `<!DOCTYPE html>` line at the top of the page to ensure proper rendering on every browser possible.

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
</html>
```

#### Language attribute

* Include the language attribute at the top of the page. This aids speech synthesis tools to determine what pronunciations to use and to help translation tools know which rules to use.

```html
<html lang="en-us">
  <!-- ... -->
</html>
```

#### Character encoding

* Ensure proper rendering of content by declaring an explicit character encoding.

```html
<head>
  <meta charset="UTF-8">
</head>
```

#### Attribute Order

* HTML attributes should come in this particular order for easier reading of code. Classes make for great reusable components so they come first. IDs are more specific and should be used sparingly.

  * `class`
  * `id`, `name`
  * `data-*`,
  * `src`, `for`, `href`, `value`,
  * `title`, `alt`
  * `role`, `aria-*`

```html
<a class="..." id="..." data-toggle="modal" href="#">
  Example link
</a>

<input class="form-control" type="text">

<img src="..." alt="...">
```

#### Reduce Markup

* When possible, avoid superfluous parent elements when writing HTML. This may require iteration and refactoring but will produce less HTML.

```html
<!-- Not so great -->
<span class="avatar">
  <img src="...">
</span>

<!-- Better -->
<img class="avatar" src="...">
```

#### HTML ids and class names

CSS ids and classes should be lowercased and dash-cased

bad:

```html
<div id="MainContainer"></div>  
<div id="mainContainer"></div>
```

good:

```html
<div id="main-container"></div>
```

### CSS

#### CSS Syntax

* When grouping selectors, keep individual selectors to a single line.

* Include one space before the opening brace of declaration blocks for legibility.

* Place closing braces of declaration blocks on a new line.

* Include one space after `:` for each declaration.

* Each declaration should appear on its own line for more accurate error reporting.

* End all declarations with a semi-colon -- including the last line.

* Comma-separated property values should include a space after each comma.

* Don't include spaces after commas with `rgb()`, `rgba()`, `hsl()`, `hsla()`, or `rect()` values.

* Don't prefix property values or color parameters with a leading zero.

* Lowercase all hex values.

* Avoid specifying units for zero values.

```css
/* Good CSS */
.selector,
.selector-secondary,
.selector[type="text"] {
  padding: 15px;
  margin-bottom: 15px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
}
```

#### Declaration Order

* Related property declarations should be grouped together following the order:

  1. Positioning
  2. Box Model
  3. Typographic
  4. Visual

  Positioning comes first because it can remove an element from the normal flow of the document and override box model related styles. The box model comes next as it dictates a component's dimensions and placement.

  Everything else takes place inside the component without impacting the previous two sections, and thus they come last.

```css
.declaration-order {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* Box-model */
  display: block;
  float: right;
  width: 100px;
  height: 100px;

  /* Typography */
  font: normal 13px "Helvetica Neue", sans-serif;
  line-height: 1.5;
  color: #333;
  text-align: center;

  /* Visual */
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 3px;

  /* Misc */
  opacity: 1;
}
```

#### Single Declarations

* Always split CSS declarations to one per line. This helps CSS validators catch errors more quickly.

```css
/* Single declarations on one line */
.span1 { width: 60px; }
.span2 { width: 140px; }
.span3 { width: 220px; }

/* Multiple declarations, one per line */
.sprite {
  display: inline-block;
  width: 16px;
  height: 15px;
  background-image: url(../img/sprite.png);
}
.icon           { background-position: 0 0; }
.icon-home      { background-position: 0 -20px; }
.icon-account   { background-position: 0 -40px; }
```

#### Shorthand Notation

* Strive to limit use of shorthand declarations to instances where you must explicitly set all the available values. Common overused shorthand properties include

  * `padding`
  * `margin`
  * `font`
  * `background`
  * `border`
  * `border-radius`

  Excessive use of shorthand properties often leads to sloppier code with unnecessary overrides and unintended side effects.

```css
/* Bad example */
.element {
  margin: 0 0 10px;
  background: red;
  background: url("image.jpg");
  border-radius: 3px 3px 0 0;
}

/* Good example */
.element {
  margin-bottom: 10px;
  background-color: red;
  background-image: url("image.jpg");
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
```

#### Class Names

* Keep classes lowercase and use dashes (not underscores or camelCase). Dashes serve as natural breaks in related class (e.g. `.btn` and `.btn-danger`).

* Keep classes as short and succinct as possible.

* Keep class names meaningful.

* Prefix classes based on the closest parent or base class.

```css
/* Bad example */
.t { ... }
.red { ... }
.header { ... }

/* Good example */
.tweet { ... }
.important { ... }
.tweet-header { ... }
```

### Documentation Styleguide

* Use [Markdown](https://daringfireball.net/projects/markdown).
* We are currently using `Remark` as our markdown linting/style enforcement.
