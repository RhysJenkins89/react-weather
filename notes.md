# Notes 

This markdown files contains general notes on the project.

## Potential bugs

* With months containing more than three or four letters, the card layout will probably break.
* Typing Hong Kong into the search doesn't yeild a country. Other city states -- Monaco and Singapore, for example -- function correctly. 

## General notes

In terms of state management, the app is small enough to rely only on app-level state. Props are only passed down one level, which is relatively simple to handle. However, if further functionality dictated that must be be passed down yet another level, I would use the useContext hook. I find that dealing with state gets overly confusing if data has to be passed down to more than one child component. 

The photo credit text appears only on desktop. On tablet and mobile, the element is positioned over the weather cards, so I've hidden it. While this isn't necessarily a difficult problem to solve, it might take a little bit of time. Since I added the text at the end of the project when time was scarce, I've not fixed it yet. If I have time later today, I'll fix it. 

I found a peculiar bug on the search input element. When the user typed into the input box, which rendered location suggestions to the UI, the height of the input changed. I don't know what caused it, but adding a min-height property to the element solved the problem. 

I've added a pseudo element on the cards-container div in order to maintain the layout of the weather cards on smaller desktop devices and tablets. Setting the justify-content flex property to space-between spaces the card elements on the row, but if a row takes only two cards, the space-between property will place the cards on either side of the container, leaving space in the middle. Adding a pseudo element to the solves this problem. 

A couple of the components contain an unused loading state. While it is certainly best practice to include a loading state even on a app that loads data quickly, I found that I had to deal with more important issues throughout building this app over the past few days, and implementing a loading state was pushed down the priority list.  

In the Card.jsx component, I set the weather icon based on the WMO weather code that I get back from the API. While the icons present in the app do a reasonable job of conveying the weather in the chosen location, it would be prudent to go back and include more icons to better illustrate to the users what is going on. Again, this is a trade-off based on the time I had to complete the app. 

The dailyWeatherData variable in the App.jsx component should really be a state variable. At the moment, I add the weather data for each day into an array, and I render weather cards based on the data in that array. Doing it this way, however, means that I'm not able to update the UI when the user types something else into the search after having already searched. If I was rendering the cards with state data, I could set the state to a falsey value in App.jsx, which would cause a re-render and clear the data from the UI. At the moment, I have to show/hide the div element based on another piece of state that I pass down to the search component.      

