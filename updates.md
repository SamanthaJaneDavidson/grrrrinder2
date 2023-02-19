* Needed Updates/Instructions

** Note, this is not a change - just a handy reminder:

For a Pull/Push: 
git add -A
git commit -m "xxx"
git checkout main
git pull
git checkout "your branch"
git merge main
git push (if ready to push)

**Please initial when you have made necessary changes on your side & add any changes "you" need the rest of us to make

1.  In the server folder - create an .env file
In that file, please add:
   
db_password=Shell100
db_username=MicheleTornetta
secret=NSWWw53uLpnT9WdynyjTXF56kS4zGYcXuqXceUbYzPRfLJRrNY8DNAvwGH77

Initial when complete:  mt


2. Added coding to the client side for mutations.js and queries.js. Tried to test them but recieved several errors when starting the server. 

    a. One error was that in the Schema (typeDef) the line in mutations for "SavedDogInput" had to be changed to "SaveDogInput". I changed it. Wanted to mention so that Michele knows. I'll send a screengrab of the actual error when I get my tutoring session recording back. 

3. Commented out lines 4 & 32 in the server.js file because it was throwing an error when trying to run the server. We don't need it since we don't need the routes folder.
