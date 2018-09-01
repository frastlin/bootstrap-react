# bootstrap-react
BETA release of AccDC 4X + React for building advanced accessible ARIA widgets within the React IDE

This project includes the BETA release of AccDC 4X, which specifically integrates scalable accessible ARIA widget design patterns within the React IDE.

Since this is a preliminary release for testing and collaborative development purposes, the documentation is sparse since I haven't had time to write all of it yet, and the feature set is rather extensive. As time goes on and we nail this down further, I'll be adding more design patterns and information to this project to reflect the range of capabilities that AccDC 4X provides.

As a brief explanation in the meantime, AccDC 4X is a total rewrite of the original AccDC API at WhatSock.com, and includes extensive feature enhancements, modern protocol updates and leveraging, and far more than I can explain in a brief summary at this moment. I'll be adding a comprehensive Change Log that details all of these changes in the near future, so subscribe to this repo if you want to find out when this becomes available.

To understand the background and purpose of this project, please read the GitHub discussion at
https://github.com/WhatSock/accdc/issues/10

AccDC 4X generates DC objects, which literally stands for Dynamic Content objects, and in all cases where "dc" or "DC" is referenced within the code, this is what these objects are. This is not a wrapper for React, but rather, integrates directly with React by creating double binding processes between the DC objects created by AccDC and the React component objects that are being rendered. As such, you can reference the bound DC object from within a React component by using this.props.DC to manage complex dynamic behaviors, as well as access the DC object directly to control how and where a React component will be rendered, or access that object directly through DC.React.component.

All functionality for AccDC 4X is routed through the $A object, which is the same as window.AccDC, and this object is only instantiated once within the lifecycle for any complex application no matter how many times it is explicitly loaded. Since all functionality is self-referencing within this object, it is possible to programmatically swap in new methods that tap directly into third party APIs and frameworks in order to leverage those rendering processes directly.

Eventually this project will include all of the accessible widgets that are part of the AccDC TSG at https://github.com/whatsock/tsg
however these will be smaller, faster, and represent the forerunners that will eventually replace all of the TSG modules as they presently exist. This will make them more scalable, easier to integrate within variable environments using modern processes, and provide dynamic processing features that don't exist anywhere else.

At present, this archive includes all of the following design pattern ARIA widget types: Accordions, Calendar/Date Pickers, Carousels, editable and readonly Comboboxes, dynamic Footnotes, horizontal and vertical Menus, infinitely nestable Modals, overlay Popups, and nestable Tabs.

In the near future, all of the following will be added as well: Grids, Listboxes, Radios, Sliders, Toggles, Tooltips, Trees, etc.

Since I'm blind and I've been spending all of my time making the functionality for this project, the CSS styling is a bit wiggy, so I'm going to need some help to get the visual styling looking better as expected, which is saved in the folder src/css.

If you would like to add enhancements to this project, visually or functionally, or to address bugs I haven't discovered yet, please do so! I'll be happy to pull them in and reference you as a contributor to the project.

Getting Started

If you are unfamiliar with React, none of what this project looks like will make much sense, so please read the following resource before trying to figure it out.
https://reactjs.org/tutorial/tutorial.html
Specifically, make sure you have Node.JS installed.
https://nodejs.org/en/

Next, simply download or clone this project, then do the following to run the code locally.

Within the root folder, you will notice some BAT files, just open these in Notepad to see what they contain.

First, double click the bat file InstallDependancies.bat to load the latest versions of the code dependencies that are used by AccDC 4X. You can also CD into the folder within a command prompt and execute this file directly by typing ".\InstallDependancies.bat", which will give you status messages about the installation progress.

Second, just activate the batch file "RunWebServer.bat" by clicking it, or by running the command "npm start" from within the command prompt for the project root directory.

That should do the trick. Now you should see the page open in your own development server, ready for testing and editing!

To close the development server, set focus to the NPM window, then press Ctrl+C.

To report a bug, file a feature request, or send a note about anything else such as getting help or whatever, please file an issue on this project. This will help for tracking and making sure I don't forget anything.

Distributed under the terms of the Open Source Initiative OSI - MIT License.

Developed and maintained by: Bryan Garaventa https://www.linkedin.com/in/bgaraventa
Or on Twitter at https://twitter.com/bryanegaraventa

Includes contributions by: Danny Allen (dannya.com) / Wonderscore Ltd (wonderscore.co.uk) https://www.linkedin.com/in/danny-allen-49690451/

Note: All visual design by Angela Ricci (web designer and web front-end developer). You can check her work at her personal site http://gericci.me/
Or you can follow her on Twitter at https://twitter.com/gericci

Related projects:
-----

* WhatSock Organization: https://github.com/whatsock
* Visual ARIA: https://github.com/accdc/visual-aria
