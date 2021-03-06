# Temple with Meteor

## Loading order

- collections
- routes
- fixtures
- main (empty)
- publications

## TODO / TOFIX

- Navigating from a list to a detail page : ability to navigate the items with previous & next arrows.
- Define data visible/accessible in the view.
- advanced search via minimal/reusable config options and/or components
  - first a search form with advanced controls (like text, date, listbox, 'smart drop down', etc..)
  - then make it dynamic
- translation, implement i18n with database. Check https://github.com/TAPevents/tap-i18n-db which seems pretty cool!
- multilangue label
- pagination
- setup guide (choose main data source, configure synchro, select modules, define views, generate basic app skeleton)
- generate heaps of random data to test the server with massive amount of object (try using anti:fake meteor package for random words, color, type, etc...)

## FIXED

- 22.10.2014 - main menu not updating selection on page change. A full page refresh does highlight the correct menu element.

## Libraries used

- mongo-collection-instances - to be able to retrieve used instances easily

## Dynamic render template steps

- the URL determine the template to use
- search for the specific template. Example /objects/detail will search for the object_detail template
- if there is no template, load the default template, for previous example, it would be default_detai

## Admin CRUD all collection

Source : https://github.com/gterrono/houston

Note bene : this auto discovers your collection :
https://github.com/gterrono/houston/blob/master/server/publications.coffee

## Access Meteor mongodb from other app

Host : localhost
Port : 3001

## Meteor cheatsheet

Source : https://gist.github.com/patrickleet/6312627

## Create collection on the fly

Source : http://stackoverflow.com/questions/15214667/creating-new-meteor-collections-on-the-fly

## Directory structure for large Meteor app

Source : http://fr.slideshare.net/AkbarAhmed3/directory-structure-for-large-meteor-apps

## Building large, modular apps in Meteor

Slides : http://tech.exponential.io/meteor/building-large-modular-apps-meteor/

## Where should I put my files?

The example apps in meteor are very simple, and don’t provide much insight.
Here’s my current thinking on the best way to do it: (any suggestions/improvements are very welcome!)

```
lib/                    # <- any common code for client/server.
lib/environment.js      # <- general configuration
lib/methods.js          # <- Meteor.method definitions
lib/external            # <- common code from someone else
## Note that js files in lib folders are loaded before other js files.

collections/                 # <- definitions of collections and methods on them (could be models/)

client/lib              # <- client specific libraries (also loaded first)
client/lib/environment.js   # <- configuration of any client side packages
client/lib/helpers      # <- any helpers (handlebars or otherwise) that are used often in view files

client/application.js   # <- subscriptions, basic Meteor.startup code.
client/index.html       # <- toplevel html
client/index.js         # <- and its JS
client/views/<page>.html  # <- the templates specific to a single page
client/views/<page>.js    # <- and the JS to hook it up
client/views/<type>/    # <- if you find you have a lot of views of the same object type

server/publications.js  # <- Meteor.publish definitions
server/lib/environment.js   # <- configuration of server side packages
```

Sources : https://hub.kadira.io/posts/hZBzfqvJ8ADQaKc7o
http://stackoverflow.com/questions/10122977/what-are-the-best-practices-for-structuring-a-large-meteor-app-with-many-html-te
