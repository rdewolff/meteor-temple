# Temple with Meteor

## Admin CRUD all collection

Source : https://github.com/gterrono/houston

Note bene : this auto discovers your collection :
https://github.com/gterrono/houston/blob/master/server/publications.coffee

## Access Meteor mongodb from other app

Host : localhost
Port : _3001_

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
