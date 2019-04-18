# MIDI-Chat

MIDI-Chat is a full-stack web app (PostgreSQL, Express.js, Node.js, Tone.js, React.js) I built during my batch at The Recurse Center (recurse.com) to learn more about web development and app architecture. It's a simple messaging app where users can send/receive musical messages, and set a playable signature tune for their profile (a sort of "musical away message").

![midi-chat screenshot](http://portfolio.isaacpearl.com/img/Screen%20Shot%202019-04-18%20at%203.10.14%20PM.png)

## Frontend

The top-level React component [App.js](https://github.com/isaacpearl/midi-chat/blob/master/frontend/src/App/App.js) renders a UserContainer component for each user in the database, and then renders a TuneList component, which is currently used to render TunePlayer components for every tune in the database's "tunes" table. 

UserContainer components contain a UserSmall component (this is responsible for retrieving and displaying a user's username, avatar image, and signature tune), and two TuneForm components that allow a given user to update their signature tune or send a tune message to another user, respectively. 

TunePlayer components display playback status, tune id, and use a vanilla JavaScript class [TuneController](https://github.com/isaacpearl/midi-chat/blob/master/frontend/src/TuneController/TuneController.js) which initializes a simple Tone.js synthesizer, creates a musical sequence from its input (array of notes), and handles playback commands.

My original intention (reflected in the app name) was to use the Tone.js MIDI library to handle tune creation and playback, but I decided to use the shortcut of representing tunes with arrays of note names (["A4", "B4", "C4", ...]) in order to focus more on the overall application infrastructure, rather than the specific details of working with the MIDI protocol.

## Backend
The Node server's main logic is handled in [index.js](https://github.com/isaacpearl/midi-chat/blob/master/backend/index.js). Express.js is used to listen for HTTP requests on all endpoints, parse them, and execute the appropriate database queries. Queries are organized into [individual files based on table](https://github.com/isaacpearl/midi-chat/tree/master/backend/app/queries), and use the node-postgres Pool API to run queries against the database.

The PostgreSQL database consists of three tables: 

### users
id (unique)| name | avatar | signature_tune (id of tune)
------------ | ------------- | ------------- | -------------
3 | yoshi | yoshi_avatar.jpg | 1 
4 | waluigi | waluigi_avatar.jpg | 2 

### tunes
id (unique) | note_array | owner_id (currently unused) | title (currently unused)
------------ | ------------- | ------------ | -------------
1 | {G4,B4,C5,D5,E5,G5} | 3 | Yoshi Signature

### tune_messages
id (unique) | sender_id (id of sender) | recipient_id (id of recipient) | tune_id (id of sent tune)
------------ | ------------- | ------------- | -------------
1 | 3 | 4 | 3

## TODO
So far, this project has been a great learning experience, but there are some obvious TODOs:
* User "inboxes"
  * Currently, all tunes are simply displayed in a single list. The final step in implementing the app's core functionality is to render a TuneList within each UserContainer that retrieves all the tunes where there exists a corresponding tune_message with the current user's id as recipient_id
* Re-render components after submitting forms
  * Right now, the page has to be manually refreshed to see changes. To have components automatically update after data is pushed to the backend, the App component needs to pass a rerender() function for its children to call after submitting data 
* User registration/switching
  * First, I'd like to create more than two dummy users, and then add dropdown user selection menus on both sides of the screen so that user logins can be approximated. In the future, I will implement actual user registration/login pages.
* Fully fleshed out CSS
  * The look & feel of this demo is very rough, and I want to spend more time making this app actually look good.
* Intuitive note input
  * The current method of inputting notes (manually typing individual space-separated note names) was good for making sure my backend was working, but it's musically unintuitive. I want to experiment with [slider-based](https://animalcrossing.fandom.com/wiki/Town_Tune) and performance-based interfaces for recording tunes.
* MIDI functionality
  * In the future, I would really like to follow through on my original idea and have this app represent tunes as MIDI files.
* Deploy!
  * Once a satisfying amount of the features listed above are implemented, I'll deploy an interactive demo of MIDI-Chat :)
