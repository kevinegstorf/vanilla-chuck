# Vanilla-Chuck

## Todo


Create a login popup that will log you in for the current session. And only appear when the user hasn't.

logged in yet for the current session.
The login form should consist of a username and password which must comply to the following password
security requirements:


### Done
- add all pages with styling √
- add favorite button that can be toggled √

### Today
- remove console logs
- add service workers and create cache for code √
- check lighthouse to see what needs to be done
- fix styles
- add title and icons on each page
- add labels correct on favorite jokes page
- add labels correct on signup page
- fix styling signup page
- add manifest  √
- add assets for PWA √
- add offline mode √
- make 404 work √
- finish all basic service worker stuff√
- add client side DB in localstorage √
    - create favorites in DB √
    - show all favortis from DB √
    - store selected joke as favorite √
    - add joke search feature 

## Later
- show no jokes selected and redirect to home
- Change order jokes
- form validation clientside
- form validation from db error returnen
- create user in DB 
- make PW salt with date.now
- Basic login with salt based on created at date
- Check if base64 comes out of the box
- logout
- make route only visible when logged in
- clean up file structure √
- login should have a session time
- password needs criterea
    Passwords must include one increasing straight of at least three letters, like abc , cde , fgh ,
    and so on, up to xyz . They cannot skip letters; acd doesn't count.
    Passwords may not contain the letters i, O, or l, as these letters can be mistaken for other characters
    and are therefore confusing.
    Passwords must contain at least two non-overlapping pairs of letters, like aa, bb, or cc.
    Passwords cannot be longer than 32 characters.
    Passwords can only contain lower case alphabetic characters.

- Create checklist for exam
- Add modernizer 
- Add tests
- Add Webworkers for invinite scroll
- scroll back to top button after x height



## Bonus

We can also turn on/off a timer via a button (every 5 seconds) who will add one random joke to the
favourites list http://api.icndb.com/jokes/random/1 until the list has 10 items.




