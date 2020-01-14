# Vanilla-Chuck

## Todo


Create a login popup that will log you in for the current session. And only appear when the user hasn't.

logged in yet for the current session.
The login form should consist of a username and password which must comply to the following password
security requirements:


### Today
- add all pages with styling √
- add favorite button that can be toggled √
- on click focus on the first joke
  scroll back to top button after x height;

### Tomorrow
- add manifest 
- add assets for PWA
- add offline mode
- make 404 work
- finish all service worker stuff

## Later
- add client side DB in localstorage
    - create favorites in DB
    - store selected joke as favorite
    - create user in DB 
    - make PW salt with date.now
    - Basic login with salt based on created at date
    - Check if base64 comes out of the box
- add joke search feature
- logout
- make route only visible when logged in
- check lighthouse to see what needs to be done
- clean up file structure
- form validation
- login should have a session time
- password needs criterea
    Passwords must include one increasing straight of at least three letters, like abc , cde , fgh ,
    and so on, up to xyz . They cannot skip letters; acd doesn't count.
    Passwords may not contain the letters i, O, or l, as these letters can be mistaken for other characters
    and are therefore confusing.
    Passwords must contain at least two non-overlapping pairs of letters, like aa, bb, or cc.
    Passwords cannot be longer than 32 characters.
    Passwords can only contain lower case alphabetic characters.
- Change order jokes
- Create checklist for exam
- Add modernizer 
- Add tests
- Add Webworkers for invinite scroll


## Bonus

We can also turn on/off a timer via a button (every 5 seconds) who will add one random joke to the
favourites list http://api.icndb.com/jokes/random/1 until the list has 10 items.


