# Vanilla-Chuck

## Todo


Create a login popup that will log you in for the current session. And only appear when the user hasn't.

logged in yet for the current session.
The login form should consist of a username and password which must comply to the following password
security requirements:


### Done
- add all pages with styling √
- add favorite button that can be toggled √
- add service workers and create cache for code √
- check lighthouse to see what needs to be done √
- add title and icons on each page √
- add labels correct on favorite jokes page √
- add labels correct on signup page √
- fix styling signup page √
- add manifest  √
- add assets for PWA √
- add offline mode √
- make 404 work √
- finish all basic service worker stuff√
- add client side DB in localstorage √
    - create favorites in DB √
    - show all favortis from DB √
    - store selected joke as favorite √
- remove console logs√
- fix bug when no there are no saved jokes√
- removed rendered saved jokes when clear button is pressed
- update service worker√
- create reusable joke card√
- remove single joke from list √
- show no jokes selected and add link that redirects to homepage √
- clean up file structure √

### Tuesday
- fix form styles
- add joke search feature 
- animate removing card
- Add modernizer 

## 
- create user in DB 
- store user from register page
- login with stored user
- Change order jokes
- logout
- basic validation
- scroll back to top button after x height
- form validation clientside
- form validation from db error returnen
- make PW salt with date.now
- Basic login with salt based on created at date
- Add base64 https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
- make route only visible when logged in
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
- Add tests
- Add Webworkers for invinite scroll



## Bonus

We can also turn on/off a timer via a button (every 5 seconds) who will add one random joke to the
favourites list http://api.icndb.com/jokes/random/1 until the list has 10 items.




