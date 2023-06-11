# DOCTOR TIME

## Credits:  
- Brayden Smith: Art, Lead Programmer

- Akash Basu: Testing Lead, Programmer

- Connor Green: Production Lead, Music & Sound fx

- Aly Cerutti: Tech Lead, Programmer

- Aaron Lee: Programmer

This project was created for our final project in CMPM120. We were given the theme Close in space but far in time. Our project meets this theme requirement as the lore states that Doctor Time is traversing different futures and realities, while you, the player, are controlling Doctor Time in a close space, although he himself is far in time. 
### Prototypes:

- https://github.com/bsmit104/core_gameplay_proto 

- https://github.com/bsmit104/sceneflowproto

- https://github.com/RedInJapanese/120fincinematic By Akash Basu

- https://anranlee99.github.io/CMPM120-core-gameplay-1/core-gameplay-1.html By Aaron Lee

We also made a switch from one repository to another due to the prototype being more complete, version control issues, and code confusions.
Previous repo:
https://github.com/bsmit104/cmpm120-final 


### Audio:
- continuously looping

- sound fx on die

### Visual:
- sprite sheets

- particle system

### Motion:
- player can move left, right, jump, and wall bounce

### Progression:
- 3 level progression

### Prefabs:
- collision object group, also ground is an object

- maps generated with separate file json files
Procedural sound featured in collision death sounds as well as varying level music
Procedural Graphics include: particles whenever Dr. Time enters the jumping animation in-game.
Advanced Assets can be seen in animations such as running

## Take Note
- full screen on ios is not supported
- if you are using a touch device and u find that the player runs off in one direction, that is because rather than picking your finger up of the button, u slid it off. Simply just retap the button and he will stop.
- pause will reset player to start of level
- could add a option to turn of visibility of LRJ keys
- If falling fast enough, you may glitch but unlikely, its a rare bug.


## Core Requirements
- [project archive] The team has submitted a self-contained archive of their design and deployment work (e.g. a repository on GitHub). This archive contains some documentation (e.g. a README.md file) that is immediately visible even to non-technical audiences. 
   - [main game] The documentation links to a deployed version of the main game compatible with mobile browsers. (This might be on GitHub pages, Itch.io, or other web hosting site.) - yes github pages
   - [prototypes] The documentation links to the deployed version of three playable prototypes (core gameplay, scene flow, and cinematics). (They don't need to be deployed on the same platform as the main game, but the audience needs to be able to play them by simply clicking a direct link to them.) - yes, see above
   - [theme] The documentation describes how the theme of "nearby in space, but distant in time" was addressed in the main game's design. (One sentence would be sufficient, but try to keep the description to a single paragraph even if you want to give more detail.) - yes, see above
   - [selectable requirements] The documentation describes which of the three selectable requirements your team is attempting to satisfy (see below). - yes, see below
   - [contributor credits] The documentation identifies all of the direct contributors to the code and their assigned roles (e.g. "testing lead") - on credit page
   - [asset credits] If the team has built there game using assets created by anyone else (even if those assets were modified before inclusion in the game), the upstream source of those assets should be credited in the documentation as well. - on credit page
- [source code] The project's textual source code is visible in the team's repository, and specific changes to it are attributable to specific contributors with useful messages summarizing each change.
  - The game was developed using a tool where most game rules are expressed in hand-typed textual program code (e.g. JavaScript or C#).- js
  - The team's repository directly shows contributions from several team members. - yes, but we switched repositories and combined code from prototypes. 
  - Most of the recorded changes to the repository are associated with meaningful commit messages describing the change. - yes
- [mobile] Smooth experience of full-screen play in a mobile browser.
  - The game is playable using only touch-screen controls. (The player might be allowed to use keyboard/mouse, but the game does not require this of them.) - yes
  - The game is playable full-screen in a mobile browser. (There is some way for the player to make the game display full-screen and for them to continue playing in that mode.) - yes, except for ios. Professor said this was ok in discord. 
  - The game is free of distracting technical or design problems that get in the way of completing the entire game in a mobile browser. (For example, the game should not load so slowly that the player thinks the game is broken at first. Any on-screen buttons should be appropriately sized to touch with typically sized human fingers. The animation frame rate should be sufficiently high that motions appear smooth, e.g. >24 fps at almost all times.) - yes, take note of the comment in notes that players must have a straight up and down press of buttons on touch screen, cannot lazily slide finger off or player will keep moving.
- [self-teaching] The player is capable of learning to play from within the game, without consulting outside instructions. (For example, the game's website might say "a touchscreen is recommended for playing this game" but it should not say "tap and drag on the left side of side of the screen to make your character walk". This message should instead be conveyed inside of the game so that the player can learn this without leaving the full-screen mode.)
  - Yes controls are self explanatory, L is left, R is right, J is jump, they are able to deduce controls as seen in play tests.
- [persistent music toggle] The player is capable of toggling background music from within the game, and this preference is saved across sessions.
  - The player can turn on and off the game's music independent of any other sound effects used by the game (i.e. we can turn off music but still hear other sounds). - yes
  - The setting of this configuration value persists across gameplay sessions even if the player closes the browser tab and returns later. - not yet
- [completability] Core gameplay can be reached within 1 minute, and an experienced player of similar games can complete the experience within 10 minutes of their first exposure to the game.
  - Core gameplay can be reached within 1 minute. - yes level progression, traversing levels, mechanics are clear.
  - The game's main progression can be followed to some satisfying ending point within 10 minutes by a player experienced with related videogames. - players can play through 3 levels. The levels also have a lot of replayability. 

### Selectable Requirements (choose 3)
- Data-driven experience progression (e.g. defined in a separate JSON/XML or other data file). You should be able to give us the name of one or more text files containing game design details in a format that isn't a programming language.
- Procedural audio (sound created with code, rather data files). You might use ToneJS to build a sound without any sound asset files or assemble several synchronized music layers to build a combinatorial space of sounds from a very small collections of sound asset files.
- Procedural graphics (graphics created with code, rather than data files). You might use Phaser's Graphics


Lore:
Doctor Time has to save the world by traversing different realities to save the world from robots that destroy it. 
