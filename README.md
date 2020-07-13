  # **LoginPage**


  # **Get Started**
  To start BackEnd Server:<br/>
    Open MYSQLWorkbench create a new db named AIM.<br/>
    Then open BackEnd, common, then in app-config.ts configure the db connection.<br/>
    To run the project please open terminal window type ```cd BackEnd``` then ```tsc ```then ```cd dist``` then ```node app.js```.<br/>
    server should now be running on port 8000.<br/>
    To register a User: <br/>
    please make a POST request to: "localhost:8000/RegUser"<br/>
    Example of how the body should Look like:<br/>
{<br/>
    "userName": "anyName",<br/>
    "password": "111"<br/>
   
}<br/>

 To start FrontEnd Server:<br/>
    Open another terminal window type ```cd Frontend``` then ```npm start```.<br/>

