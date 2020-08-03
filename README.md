
Lua Script Editor for the Materialise Control  Platform


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project uses the Redux and the Redux Toolkit for managing the redux state troughout the entire application:
https://redux-toolkit.js.org/introduction/quick-start

It uses the duck boilerplate and code pattern. The code is split into features ( not by functionality ). In the src/features folder you will find  all the features split up in parts. Every feature manages its own state in the form of a slice. Each slice will be in the appropriate folder. reusable compontents are stored outside the features folder ( i.e. the dialogs-folder )

The asynchronous behaviour of the application is handled by the thunks ( in the slices ).These are the api-calls.
The eventsource is manages in a react-compontent and incoming massages are being dispatches to the appropriate slice as well. 

######### Development Mode #############

In development mode the server will start up on localhost:xxxx/MCP/scripteditor. you have to remove "/MCP/Scripteditor" to be able to develop.



################# Deployment ###################"

The application will be served on .../MCP/scripteditor on the MCP master application. The app can be started by providing a scriptService GUID as a parameter on the calling URL. 
i.e. : http://localhost:8050/MCP/scripteditor/?GUID=2144D799-26DB-437D-AC47-41A5D5F29EBA

When no GUID is provided ( or a wrong one) the scripteditor will present a Form where the user can choose a scritp service to work on.

Korneel Van den Ecker