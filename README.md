  # **LoginPage**


  # **Get Started**
  To start BackEnd Server:
    Open MYSQLWorkbench create a new db named AIM.
    Then open BackEnd, common, then in app-config.ts configure the db connection.
    To run the project please open terminal window type ```cd BackEnd``` then ```tsc ```then ```cd dist``` then ```node app.js```.
    server should now be running on port 8000.
    To register a User: 
    please make a POST request to: "localhost:8000/RegUser"
    Example of how the body should Look like:
{
    "userName": "anyName",
    "password": "111"
   
}

 To start FrontEnd Server:
    Open another terminal window type ```cd Frontend``` then ```npm start```.

