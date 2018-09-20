Steps to run:
(Assuming you have nodejs, express and mongodb set up)

1. Go to the project root folder and run the following command on terminal.
	"npm install"

2. After dependancies are installed open another terminal window and run following command
		"mongod"

3. open the first terminal window and run following command
		"npm start"

4. open the browser and go to localhost:3000

5. Enter username: aaa or bbb or ccc with password "123" and click submit

6. If you get unable to connect after this step please refresh the page (browser issue). You should be able to see the profile page. 

7. The click on "Go to stackoverflow" button.

8. On this page you can click on "Open visualization" button to see the visualization for already recorded interactions.

8. In the visualization page the first graph shows upvote, downvote, comment and stars logs for the logged in user.

9. The last three pie charts show upvote, downvote and comments comparision between AAA, BBB and CCC users respectively (If the last three pie charts doesnt update well please refresh the page once or twice) (It is a browser issue)

10. You can upvote, downvote, comment and star on any question on the stackoverflow page and click on "Update Database" button. This will increment the count of the pressed action and if you click on show visualization you will be able to see the updated visualization.

11. In the visualization page you can click on "Analysis and Findings" button to see detailed analysis of the visualization as given in assignments requirement page.

12. I have implemented all the features as asked in the assignment except the bonus exercise.
