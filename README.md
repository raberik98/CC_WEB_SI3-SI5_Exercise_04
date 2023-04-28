# CC_WEB_SI3-SI5_Exercise_04
In this task we will mainly work with React.js 18, Vite and we will practice the higher order functions and more.

We created an employee satisfaction survey so that we can create statistics about employees are treated in different companies. The NAV also asked as to analise the data
and search for any potential illegal activities.

1, Take a look at the starter code, especially in the main.jsx and the Navbar.jsx and discuss what react-router-dom does to our application.

2, On the main page let's try to fetch the available data from the survey by sending a GET HTTP request to the "http://localhost:3001/getData" endpoint.

3, Though to the low budget of this research the backend server is very unreliable, modify the fetch in a way where in case of an unsuccessfull request we will repeate the process again,
    but in order to not cause any issues we want to add a delay to the new request, the delay should increase exponentially, 
    meaning that after the first unsuccessfull fetch it will wait 0.2 second than 0.5 than 1 than 2 than 3 and than it will keep sending a request after every 3 second until we could successfully fetch what we wanted.