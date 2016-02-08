# A thinking social network.

## Approach

Use fullstack Javascript mobile first framework

One branch per function


## User Stories

 * Users can register/sign up
 * Users can record identity using same browser
 * Users can record identity in a cookie
 * Users must be signed in, record identity or cookie to create a new posts
 * Posts can be created by providing a title and attaching an image
 * Users can share image / images by generating a share url by tagging:
  - location of viewier
  - circle of viewer
  - duration of sharing
 * Users either receive sharing url or use buttons to share sharing url in social networks
 * The image should be processed to generate thumbnail-sized images
 * The homepage should list all the uploaded thumbnails that user has access to - users can click through to see full-sized images
 * Images are hosted on S3. Stub calls to S3 for your test environment
 * Ensure your S3 secret key is not stored on Github
 * AI sets access to shared posts based on user feedback
 * Viewer taken to preview page where posts comment and feedback prior to viewing
 * Sharer tags viewer and/or post with circle, location and duration based on user feedback
 * AI updates access algorithm


## Domain Model

### User Model (logged in)
 * Fingerprints
 * Tags
 * Circles

### PreUser (not logged in)
 * Fingerprints
 * Tags
 * Circles

### Fingerprint Model
 * https://github.com/ezzye/fingerprintjs2
 * Use time +/- 60 mins with geographic location based on day light time as part of fingerprint
 * Fuzzy fingerprint
 * Tag (use AI To tag and group into users)

### Post
 * Circles

### Circle
 * Users
 * Locations
 * Durations




## Functions

Sign up and sign in

Post image to share

Tag share on circle it is proposd to share with

Obtain share url

Post share url

Viewer user posts comments, email and/or image to share

Sharer user tags viewer user with circle and decides access depending on comment etc

AI sets allocates tags to users


## User stories

###1. As a user I want a site where I can post and share photos

Just a thought.  But I'd really like a cool online branded site where
I can put up old photos and date them and share them.  Not loads, just
the odd one from a great experience or with people I care about.

The thing is, I'm only just really understanding the value of putting
photos online in terms of how they help build your identity and how
they can be helpful when your memory starts to fade.

I don't want to use facebook as that sort of feels a bit showy, and I
find the whole situation with 'likes' a bit cringy.  I don't want to
feel that a pic I care about isn't great because no one commented or
liked it, I just want it safe, online and available for me and others
to look at it if we want to.  Also facebook won't let you back data
photos.

I thought of instagram - but the whole point of that is that its
instant which means I can't backdate it and I don't want to ruin
actual moments by thinking I have to immediately share my pic.


###2. As a user I want to control what, who and when I share.

I also don't want just to use a plain photo site as there is a part of
me that does want anyone snooping on me online to see what a great
life I have and how happy I am.  It frustrates me that the only
measures of this at the moment are things like facebook likes and
comments.

Is there anything out there that could help me feel better about, and
get more control back, of my online identity?

There is a lot of research about why facebook etc is bad for your
mental health.  Maybe we can look at why that is, take out those
factors and look at adding things in that improve wellbeing.  I would
pay at least £1 a month for that.  I am not alone in my struggles with
facebook - but its the only option in many ways.


###3. As a user I want to control how my information is displayed

Why "cool online branded site"?   I suppose it doesn't have to be, but
just so it looks like a viable alternative.

Why "old photos"? Because I have a lot of old photos that are just
lying around that represent a big part of who I am and what I've done.

Why "date them"? I guess they don't have to be dated.  I just think
old photos are sometimes looked down upon unless they look like they
were added at the time and was wondering if there was a way not to
make this a factor.

Why "share them"? Maybe they are not shared - just easy to find if
someone is looking for them.  Perhaps integrated with fb if someone
did want to share them.  People could have unique usernames for our
service they add to twitter, fb, instagram etc if they want to.

Why "just the odd one from a great experience"? I don't want to
bombard people - I just want to give a taster that I am in control of.
Too many pics and everyone looses interest.  If we limit the amount,
then it might be like twitter for photos.

Why "not loads"? Loads of photos is too much back to showing people
holiday photos in an album - dated, and you loose people with the
sheer numbers.

What do you mean, "safe, online and available for me and others to
look at it if we want to" - what is safe?  what is "if want to"?  Safe
as in, you know they are all somewhere they won't get lost - maybe you
can upload loads, but only ever have a key batch showing publicly.

What do you mean by backdate?  I can look back through my instagram,
it does keep a history.  What if you have a photo from a time period
that wasn't on your phone - can you put it in your timeline?

What is "thinking I have to immediately share my pic"?  Sometimes, you
don't want to share a pic till after the event.  You might not be
psychologically ready to share it then and there, you are too busy
enjoying yourself.  I don't use instagram though, so maybe its not
like this...

"only measures of this at the moment are things like facebook likes
and comments"...so you want show selectively what a great life you
have by a different measure?  If not that what measure?  Maybe
something based on intrinsic rather than extrinsic motivation - you
choose personal goals somehow and collect personal achievements.

Is the problem you're trying to solve is getting back in control of
your online identity so that you can feel better about it? Yes, so
that it is more inline with who I really am/want to be.  The closer
these are aligned the better someone feels.

Cool.  I guess that is the core functionality, so there is no visible
log of when something was shared, what matters is it is being shared
now, with these people.  The sharing is enough, no-one else cannot
publicly judge you - i.e. edit, amend of like/comment.

However, would be good to have option to share publicly and on other
social media sites if you wanted to - (I'd love to have a photo album
that was more meaningful to me - free from the pressure of likes,
comments and tagging -  linked to from my facebook profile page, maybe
you could have a developer portfolio link on linkedin.)

It would also be great if you could store all your stuff there and it
was easy to make different portfolios up to be shared with different
groups.  I guess ideally the app could interface between existing
places people put stuff all around the web e.g. flickr, youtube,
photobox, google cloud etc and search engines and social networks as
well as having its own online presence.

I would love if you made this - I'd def use it.


###4. As a user I want to remember who I've shared with so that I can easily share with them again.

Sorry, I am getting a bit carried away now, but just need to get this
out.... (I am trying going without my thyroid med for a bit - I hope
all this manic thinking isn't a sign I'm overactive again!;))

The option to join with other to make joint identities/portfolios
would be very useful too - I guess this is what you were thinking of
doing for businesses.  I know from speaking to Ben that media
companies could use this sort of thing to brief journalists.

Maybe there could be a philanthropic side too somehow as it can help
people adapt/create new identities/focus on different aspects of
themselves after grief, illness, redundancy, dare I say it - prison
etc.

I was thinking about what we were talking about the other day and what
it is I'd really like and I think its a cool way of myself and other
people viewing my photos that represent my life.  I'd like to be able
to select a picture from each year of my life and display it in a cool
way, so I and others could flick through it and get a taste of my
life.

My mum always says, you don't remember things unless you have photos
and I want to remember, but I also want to have complete control over
what I choose to remember.

So I suppose what I was really talking about was a shareable photo
album diary that I can choose the pictures for, the dates for and
share with who ever I wanted however I wanted.  So, for example, I
might have photos for every year of my life that I choose to share on
FB but lots of photos for one particular day I choose to share with
specific people, then a few on my favourites that I want to be
publicly available on the internet.

Its about filtering and sharing my life history in a way that
optimises my mental welbeing both now and in the future.

Just an idea.  Thanks for reading;)


# angular-seed — the seed for AngularJS apps

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app.
You can use it to quickly bootstrap your angular webapp projects and dev environment for these
projects.

The seed contains a sample AngularJS application and is preconfigured to install the Angular
framework and a bunch of development and testing tools for instant web development gratification.

The seed app doesn't do much, just shows how to wire two controllers and views together.


## Getting Started

To get you started you can simply clone the angular-seed repository and install the dependencies:

### Prerequisites

You need git to clone the angular-seed repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test angular-seed. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone angular-seed

Clone the angular-seed repository using [git][git]:

```
git clone https://github.com/angular/angular-seed.git
cd angular-seed
```

If you just want to start a new project without the angular-seed commit history then you can do:

```bash
git clone --depth=1 https://github.com/angular/angular-seed.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.



## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
    version/              --> version related components
      version.js                 --> version module declaration and basic "version" value service
      version_test.js            --> "version" value service tests
      version-directive.js       --> custom directive that returns the current app version
      version-directive_test.js  --> version directive tests
      interpolate-filter.js      --> custom interpolation filter
      interpolate-filter_test.js --> interpolate filter tests
  view1/                --> the view1 view template and logic
    view1.html            --> the partial template
    view1.js              --> the controller logic
    view1_test.js         --> tests of the controller
  view2/                --> the view2 view template and logic
    view2.html            --> the partial template
    view2.js              --> the controller logic
    view2_test.js         --> tests of the controller
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```

## Testing

There are two kinds of tests in the angular-seed application: Unit tests and End to End tests.

### Running Unit Tests

The angular-seed app comes preconfigured with unit tests. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma
configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `..._test.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit.  This is useful if you want to
check that a particular version of the code is operating as expected.  The project contains a
predefined script to do this:

```
npm run test-single-run
```


### End to end testing

The angular-seed app comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner.  It uses native events and has
special features for Angular applications.

* the configuration is found at `e2e-tests/protractor-conf.js`
* the end-to-end tests are found in `e2e-tests/scenarios.js`

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor
can interact with it.

```
npm start
```

In addition, since Protractor is built upon WebDriver we need to install this.  The angular-seed
project comes with a predefined script to do this:

```
npm run update-webdriver
```

This will download and install the latest version of the stand-alone WebDriver tool.

Once you have ensured that the development web server hosting our application is up and running
and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the
development server.


## Updating Angular

Previously we recommended that you merge in changes to angular-seed into your own fork of the project.
Now that the angular framework library code and tools are acquired through package managers (npm and
bower) you can use these tools instead to update the dependencies.

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.


## Loading Angular Asynchronously

The angular-seed project supports loading the framework and application scripts asynchronously.  The
special `index-async.html` is designed to support this style of loading.  For it to work you must
inject a piece of Angular JavaScript into the HTML page.  The project has a predefined script to help
do this.

```
npm run update-index-async
```

This will copy the contents of the `angular-loader.js` library file into the `index-async.html` page.
You can run this every time you update the version of Angular that you are using.


## Serving the Application Files

While angular is client-side-only technology and it's possible to create angular webapps that
don't require a backend server at all, we recommend serving the project files using a local
webserver during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr,
etc to function properly when an html page is opened via `file://` scheme instead of `http://`.


### Running the App during Development

The angular-seed project comes preconfigured with a local development webserver.  It is a node.js
tool called [http-server][http-server].  You can start this webserver with `npm start` but you may choose to
install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by
running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.


### Running the App in Production

This really depends on how complex your app is and the overall infrastructure of your system, but
the general rule is that all you need in production are all the files under the `app/` directory.
Everything else should be omitted.

Angular apps are really just a bunch of static html, css and js files that just need to be hosted
somewhere they can be accessed by browsers.

If your Angular app is talking to the backend server via xhr or other means, you need to figure
out what is the best way to host the static files to comply with the same origin policy if
applicable. Usually this is done by hosting the files by the backend server or through
reverse-proxying the backend server(s) and webserver(s).


## Continuous Integration

### Travis CI

[Travis CI][travis] is a continuous integration service, which can monitor GitHub for new commits
to your repository and execute scripts such as building the app or running tests. The angular-seed
project contains a Travis configuration file, `.travis.yml`, which will cause Travis to run your
tests when you push to GitHub.

You will need to enable the integration between Travis and GitHub. See the Travis website for more
instruction on how to do this.

### CloudBees

CloudBees have provided a CI/deployment setup:

<a href="https://grandcentral.cloudbees.com/?CB_clickstart=https://raw.github.com/CloudBees-community/angular-js-clickstart/master/clickstart.json">
<img src="https://d3ko533tu1ozfq.cloudfront.net/clickstart/deployInstantly.png"/></a>

If you run this, you will get a cloned version of this repo to start working on in a private git repo,
along with a CI service (in Jenkins) hosted that will run unit and end to end tests in both Firefox and Chrome.


## Contact

For more information on AngularJS please check out http://angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
