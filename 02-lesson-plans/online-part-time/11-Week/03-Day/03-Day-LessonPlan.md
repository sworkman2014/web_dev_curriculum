# 11.3 Lesson Plan—Callbacks & Constructors in the Wild (10:00 AM) <!--links--> &nbsp; [⬅️](../02-Day/02-Day-LessonPlan.md)

### Overview

Today's lesson plan will consolidate students' understanding of constructors and formalize the concept of callbacks.

`Summary: Complete activities 11-16 in Unit 11`

##### Attention: If you’re teaching a part time section and this isn’t a Saturday, please use the “Weekday” tab inside of the "03-Day-TimeTracker.xlsx" for activity lengths instead of those printed on this lesson plan

#### Instructor Priorities

* Students should be able to sketch the architecture of small applications at a high level prior to writing code.
* Students should be able to implement applications with "clean" architectures.
* Students should be able to use objects to consolidate related information.
* Students should be able to use constructors to create those objects.
* Students should be able to articulate the relationship between callbacks and functions that receive them as arguments.
* Students should complete the Node Checkpoint.

#### Instructor Notes

* The purpose of today's class is to demonstrate the use of constructors in a multi-part application in preparation for the week's homework assignment.

  * Building the TV Show application is the focus of today's lesson. Feel free to cut the callback activity and closure sections if required.

* Have your TAs refer to the [Time Tracker](03-Day-TimeTracker.xlsx) to stay on track.

### Sample Class Video (Highly Recommended)
* To view an example class lecture visit (Note video may not reflect latest lesson plan): 
[Class Video 1](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=36c45a35-9dd9-4099-80df-819a318585d1)
[Class Video 2](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=48341f00-9d7f-4d69-892f-b1315ad93c4f)

---

### Class Objectives

After today's class, students will be able to:

* Sketch the design of their applications _before_ they start to code;

* Use constructors to create objects; and

* Explain callbacks and closures.

* Take Node Checkpoint.

---

### 1. Instructor Do: Demonstrate Application (5 mins)

* Take a moment to demonstrate the solved version of the `14-Stu_FinalTVApp` application that students will be building.

  * This application makes use of the [TV Maze API](https://www.tvmaze.com/api) to as a data source.

  * Be sure to demonstrate how we can search for TV shows using command line arguments, e.g. `node cli show Westworld`.

  * Demonstrate how we can also search for actors/actresses as well using command line arguments, e.g. `node cli actor Talulah Riley`.

  * Finally point out how each search logs the same information to a `log.txt` file.

    ![TV-App-Example](Images/01-TV-App-Example.gif)

* Explain that we'll proceed step-by-step. Students will:

  * Write out a high-level application architecture;

  * Implement logic for parsing command-line arguments and running the appropriate functionality in a `cli.js` file.

  * Implement the logic for searching for actors or shows using an object generated by a constructor function in a `tv.js` file.

### 2. Groups Do: Sketch Architecture (15 mins)

---

**Objectives Met**

* Sketch the architecture of small applications at a high level prior to writing code;

---

* Remind students that the application:

  * Accepts command-line arguments indicating whether the user intends to search for tv shows or tv actors;

  * Makes an API request to one of two different API endpoints; and

  * Saves the results of the requests to a `log.txt` file and prints the data to the console.

* Slack out the following instructions to students.

  * **Instructions**:

    * As a best practice, sketch out the architecture of your application _before_ you start writing code.

    * For this exercise, start by describing what your application does. Do this in a bullet list.

    * Next, decide how you might divvy up these responsibilities. Would you write a single module that handles all of them? Would you write one module for each bullet list? Something else? Be sure to justify your decision.

    * Finally, draw a diagram describing the flow of your application. Don't worry about being _too_ precise here, but include enough detail where you can use it as a guide to explain it to someone else. You can do this either by using pencil and paper or flowchart generation software like [draw.io](https://www.draw.io/).

    * Take a moment to study the GIF below if stuck. Remember that this application also prints the logged data to a file named `log.txt`.

      ![TV App Example](Images/01-TV-App-Example.gif)

### 3. Instructor Do: Review Activity (5 mins)

* Ask a group to:

  * Share their bullet list;

  * Describe the components they would define; and

  * Explain why they would define their modules this way.

* Briefly discuss the pros and cons of their solution.

* Present the `README.md` file in `11-Stu_Architecture/Solved`, and explain that while there are many ways to write the same application, we've chosen this way to be consistent as we work through the activities as a class.

![A high-level, diagram view of our TV Show application.](Images/02-TV-Flowchart.png)

_A high-level, diagram view of our TV application._

### 4. Groups Do: Implement CLI (15 mins) (Critical)

---

**Objectives Met**

* Parse command line arguments to determine whether the user is searching for a show or actor, along with which one.

---

* Inform the class that we're going to start with the `CLI` module, since it's the starting point for our application.

* Slack out the following instructions.

  * **Instructions**:

    * When the completed `cli.js` file is run with node, it should be able to handle command line arguments similar to those below:

      ```
      // Search for The Andy Griffith Show

      node cli show The Andy Griffith Show
      ```

      and

      ```
      // Search for the actor Andy Griffith

      node cli actor Andy Griffith
      ```

    * In these examples the cli expects input in the following format:

      ```
      node cli <show-or-actor> <actor-or-show-name>
      ```

    * To begin, open `cli.js` and write code to store the `<show-or-actor>` command line argument in a variable named `search`.

    * Store the `<actor-or-show-name>` command line argument in a variable named `term`. Keep in mind that this argument may contain spaces so it may span multiple indexes of `process.argv`. Check out the [Array Slice Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) to achieve this.

    * Then write an if/else statement to print to the console whether a show or actor is being searched for.

    * We will add some functionality to actually perform the API calls in the next activity.
  
  * **Bonus**: 

    * Write logic to set up a default search type and default term if either are missing.

### 5. Instructor Do: Review Activity (10 mins)

* Open up the `cli.js` in `12-Stu_Cli/Solved`, and walk through the solution.

  ![CLI Code](Images/03-CLI-Code.png)

* Emphasize:

  * `process.argv` is an array containing the command line arguments.

  * The second index of `process.argv` is the search type argument.

  * All remaining indexes of `process.argv` will contain the actor or tv show search term, split into separate index by spaces. We're using the Array `slice` and `join` methods to collect and format this.

  * We're optionally setting default values for the `search` and `term` variables.

  * We have an if/else statement printing whether a show or actor is being searched for.

* Explain that for now we just have the `console.log` statements, but often times when building applications we need to stub out certain functionality before we have a chance to implement it.

### 6. Groups Do: Implement Find Show (30 mins) (Critical)

---

**Objectives Met**

* Use objects to perform HTTP requests, and save data to local files;

* Use constructors to create those objects;

---


* Slack out the following instructions.

  * **Instructions**:

    * Open the `tv.js` file. This file contains a constructor function that will be used to create a TV object capable of searching the TV Maze API for shows and actors. 

    * Install the `axios` package by running `npm install axios` in your terminal. We will use the `axios` module to make HTTP requests to the TV Maze API. Require the `axios` package and the built-in `fs` package at the top of the `tv.js` file.

    * Inside of the `TV` constructor function's `findShow` method, use the `axios` package to hit the TV Maze API for the `URL` string. 

    * Once you have the response body of the HTTP request, use `JSON.parse` to convert it to JSON (it comes back as a string).

    * After getting the JSON response from the HTTP request, create a string containing the following information from the returned show data:

      * The name of the show
      * The show's genre(s)
      * The show's average rating
      * The show's network name
      * The show's summary

    * Save this string to the `log.txt` file using the `fs.appendFile` method. If the file does not already exist, `fs.appendFile` will create it.

    * After saving the data to the `log.txt` file, print this information to the console.

    * Verify your code works by running the cli file and passing in the name of a TV show, e.g. `node cli show Scrubs`. This should print the specified information to the console and save it to the `log.txt` file.

  * **Hints**:

    * Check out some sample output from the TV Maze single show search API: <http://api.tvmaze.com/singlesearch/shows?q=scrubs>.

    * You would have used the `axios` package for the Liri HW assignment. Refer back to this if you need a refresher on how to use the package.

    * Check out the selected answer for the question: [how to append a file in node?](https://stackoverflow.com/questions/3459476/how-to-append-to-a-file-in-node)

### 7. Instructor Do: Review Activity (10 mins) (Critical)

* Open up the `tv.js` in `13-Stu_FindShow/Solved`, and walk through the solution.

  ![Find Show](Images/04-Find-Show-Code.png)

* Emphasize:

  * We use the `axios` package to search the TV Maze API, and parse the body as JSON.

  * `showData` is just a big multi-line string containing the data we we'll be using. Using an array of strings we join together can be a more human readable way to achieve this than concatenation.

  * We use the `fs.appendFile` method to save this information along with a divider &mdash; just a series of dashes &mdash; to the `log.txt` file.

  * When complete we log the data to the console.

  * Point out how we call the `tv.findShow` method in the `cli.js` file.

* Slack out the solution so students can use it as as starting point as they move forward.

### 8. Groups Do: Implement Find Actor (25 mins) (Critical)

---

**Objectives Met**

* Use objects to perform HTTP requests, and save data to local files;

* Use constructors to create those objects;

---

* Slack out the following instructions.

  * **Instructions**:

    * Open `tv.js` and update the constructor function's `findActor` method. It should use the `axios` package to search the TV Maze API using the provided URL.

    * Once the data has been retrieved from the API, parse it as JSON (it should be a string initially) and grab only the first result (it should be an array of JSON objects).

    * Save the following information to the `log.txt` file using the `fs.appendFile` method:

      * The actor's name
      * The actor's birthday
      * The actor's gender
      * The actor's country
      * The actor's TV Maze URL

    * Once the data has been saved to the `log.txt` file, print it to the console.

    * Test that your code works properly by running the `cli.js` file with arguments. e.g. `node cli actor Jennifer Aniston`.

  * **Bonus**:

    * Once you've finished the basic activity, update the `cli.js` file to use the `inquirer` npm package to prompt the user for their search and term rather than `process.argv`.

  * **Hints**:

    * Implementing the `findActor` method should be very similar to the `findShow` method, refer to this if stuck.

    * Check out this sample output from the TV Maze Actors API: <http://api.tvmaze.com/search/people?q=jennifer%20aniston>

### 9. Instructor Do: Review Activity (15 mins) (Critical)

* Open up the `tv.js` inside `14-Stu_FinalTVApp/Basic/Solved` file, and walk through the solution.

  ![Find Actor](Images/05-Find-Actor-Code.png)

  * Point out how the code here is very similar to the findShow method.

  * This API endpoint returns an array of actor objects, for our purposes we only want the first result, so we grab the 0th index.

* Time permitting, go over the bonus solution as well.

* Answer any remaining questions and slack out the solutions.

### 10. Everyone Do: Application Review (10 mins)

* Demonstrate the completed application, and have students follow along.

* Foster discussion around the benefits of planning an architecture before writing any code.

  * Also discuss any possible improvements. What else could we add to this application? 
  
  * Check out the [TV Maze API Documentation Site](https://www.tvmaze.com/api). Point out that we can also search for TV crew or seasons.

  * Highlight the fact that we're very close to creating what could be a useful NPM package someone else may want to use.

* Take this time to address any outstanding questions students may have.

---

### 11. BREAK (45 mins)

---

### 12. Instructor Do: Callbacks (15 mins) (High)

**Objectives Met**

* Articulate the relationship between callbacks and functions that receive them as arguments.

---

* Remind students that we can assign functions as values to variables.

* Explain that, since functions are values, we can pass them as arguments to functions.

  * Point out that we've used callbacks extensively with jQuery &mdash; every time we use event listeners, as well as with the fs package &mdash; when we write a function to handle what happens after data is read, written, appended, etc.

* Explain that functions passed as arguments to other functions are called **callbacks**.

  * Explain that this is because we typically intend for the function _receiving_ the callback to do some work, and then **call back** the function we pass with its results.

  * Explain what happens when we call `fs.appendFile`:

    * First, `fs.appendFile` adds the text we pass in to the file that we specify.

    * Then, one of two things happens. Either:

      * `fs.appendFile` hits an error writing to the file. In this case, _it calls the function we've given it with an **error** argument_.

      * `fs.appendFile` writes the data we want. In this case, _it calls the function we've given it and does not pass it an error.

    * In either case, the `fs.appendFile` function does some work, and then **calls us back** when complete so we can do something afterwards.

  * Explain that callbacks are one way for us to handle what happens right after some asynchronous code completes.

### 13. Students Do: Callbacks Activity (15 mins) (High)

* Slack out the following instructions.

  * **Instructions**:

    * Write a function that accepts a string and a function as arguments. It should log the string, and then run the function.

    * Write a function that accepts a boolean value and a function as arguments. It should run the function if and only if the boolean argument is true.

    * Write a function that accepts a function(F) and a value (V), and returns a function that returns the result of running F on V. This sounds tricky, but it's easier than it sounds—just take it step by step!

    * Finally, write a short message to a file using `fs.writeFile`. Does this function use callbacks? If so, identify them.

### 14. Instructor Do: Review Activity (10 mins)

* Open up `callbacks.js` in `15-Callbacks/Solved`, and step through the solution.

  * Pay special attention to:

    * Explaining that, in each example, `func` is a value that contains a **function**. This is why we can put parentheses after it—this _calls_ the function.

    * Explaining that, when we pass a function a callback, we can do other work _before_ we call the callback. This allows us to reuse functions we already have, but **decorate** them but doing "extra stuff".

      * Briefly explain the notion of function decoration.

* Emphasize that students have been using callbacks from the beginning of their JavaScript studies. Today's lesson simply associates the concept with a name.

* Slack out the solutions and take a few moments to answer outstanding questions.

### 15. Instructor Do: Introduce Checkpoint - Node (5 mins) (Critical) 

* Let your class know that they will now be taking a short multiple choice assessment to check their understanding of Node

* DO NOT SKIP THIS INTRODUCTION. DO NOT JUST SEND OUT THE LINK WITHOUT CONTEXT

* Reassure the students that they need not be nervous about the Checkpoint:

  * "This will not affect your grade or graduation requirements."

  * "This is not like the tests and quizzes you might be used to from school or college. The purpose of these tests is not to motivate you to study or punish you for struggling."

  * "This is as much a test of me as an instructor and of the course content as it is of you. We are here to ensure your success, and this is one of the tools we use to make sure we are doing that effectively. This class moves _fast_, so if some or all of you misunderstand something important we as an instructional team need to find out as fast as possible so we can help."

  * "Long story short, this quiz can not hurt you. Only help you."

* Let students know that they should read carefully and focus on thinking about the right answer rather than using any test-taking skills they may have learned:

  * "There are no silly answers or obvious throwaway responses on this quiz, because those kinds of answers reduce the likelihood that we'll be able to figure out whether we've taught something effectively."

  * "Test taking strategies you may have learned for standardized tests _will not work_, so instead of focusing on eliminating wrong answers or looking for sneaky context cues, read the question and each of the possible choices carefully."

* Reassure students once again that the purpose of this is to help them, and remind them that the outcome does not impact their grade or graduation requirements. You should do this _every single time_ you give an Checkpoint.

* You or your TAs should now get the link specific to your class:

  * Navigate in your browser to: `https://www.switchboard.tech/`

  * Select your class code (if it doesn't show up on its own)

    * For parallel cohorts (two classes combined on a Saturday) and doing a Checkpoint: You will **need** to select the classes in your cohort. You can multi select the cards by clicking the class that you need.

    * The class roster will be in the **one** link. 

  * Select the Checkpoint and copy the resulting link

### 16. Students Do: Take Checkpoint - Node (10 mins) (Critical)

* Slack out the link to the Checkpoint

* Let your students know that once they select their name, it will take them to the Checkpoint

* Checkpoints must be completed during class time to ensure you will be able to effectively find and help struggling students 

* TAs should flip through shared screens to ensure students aren't looking up answers

* Keep in mind we do not use grades from assessments toward graduation requirements. However, students will be tempted to avoid feeling like they don't understand something

* It's important for instructional teams to create an environment where it is safe to fail, but also where such failure is visible. You should not be worried about "cheating" on checkpoints, only making sure that students who need help aren't remaining invisible

* Your SSM will have the results of the Checkpoint within an hour of its completion

### 17. End (0 mins)

### 18. TAs Do: Structured Office Hours - Review Bash (30 min)

* Navigate in your browser to: `https://github.com/coding-boot-camp/checkpoint-bank/blob/master/checkpoints/multiple-choice/06-Node-MC/07-Node-MC.md`

* There you will find the questions and answers to the Checkpoint given.

* Please take the entire office hours time to review the questions with the students.

* Suggestion Format:

  * TAs ask a question at a time to the class.

  * Let the students try to answer it.

    * If you see that a majority of the class has a misunderstanding with a question:

      * Take your time on this question!

    * If you see that a small number of students has a misunderstanding with a question:

      * Do your best to reinforce the misunderstanding but be cautious of your time.

      * Make note of the students that are still struggling with the question and schedule a 1:1 with the students.

  * If applicable, demo the answer.

* Take your time on these questions!

* This is a great time to reinforce concepts and misunderstandings!

### MySQL Install

* We will be coming up on MySQL next class. Let student's know to install MySQL Server and Workbench. Guides have been provided so slack these out to students:

  * [MySQL Install Mac](../../12-Week/01-Day/Install_Guides/mysql-mac-guide.md)
  * [MySQL Install Mac](../../12-Week/01-Day/Install_Guides/mysql-windows-guide.md)

* If your class runs into trouble with this install process, feel free to use MAMP or any other installation solution that you would prefer to get the class ready.

# Instructor Do: Private Self-Reflection (0 min)

Take some time on your own after class to think about the following questions. If there's anything that you're not sure how to answer, feel free to reach out to the curriculum team!

1. How did today's class go?
2. How did you teach it?
3. How well do you feel you did teaching it?
4. Why are you teaching it?
5. Why did you teach it that way?
6. What evidence can I collect to show my students are understanding?
7. How will my students know they are getting it?

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=lo&sentiment=positive&lesson=11.03)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=lo&sentiment=negative&lesson=11.03)