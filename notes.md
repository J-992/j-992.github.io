# Functional Requirements

Light/Darkmode toggle
 - What HTML markup to use (accessible)
 - Switching between light/dark mode
https://codepen.io/renddrew/pen/bRomab
f

CSS variables (custom properties)
 - prefers-color-scheme
 - updating css variables with javascript: https://css-tricks.com/updating-a-css-variable-with-javascript/
 

Things to remember:
 - learn to use hoverstates
 - needs to be interactable with screenreaders (alt text??)

Basic navbar routing
 - Home (will be my logo icon)
 - About
 - Projects
 - Contact
 - Resume

Will also include 3js library for 3D elements:
Homepage:
The 3D interactive hobbithouse island
 - When the page initially loads, enduser will be greeted with a "Welcome!" sign
 for 2-4 second, then the camera pans down to the hobbit house
 - User can move around and click the house
 - when user clicks the door, camera will pan/zoom in and route to the
 "/projects" page inside the house

About:
The animated racetrack with cars drifting
 - Static camera, when user scrolls, they scroll down the page
 to see html content with buttons leading to github repos

Contact:
 - Just a contact page using EmailJS

Projects:
 - A list of projects displayed throughout the interior of the hobbithouse

Resume:
 - href leads out to my resume.pdf

Process:
 - Create header and footer
 - Render 3D models
 - Add camera animations
 - Prettify

