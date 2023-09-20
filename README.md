The main part of the project is implemented using create-react-app. The work I've done can be found in the src/components directory.

This project primarily focuses on implementing a frontend virtual list. To avoid rendering a large number of DOM nodes simultaneously, I've employed an approach that only renders DOM nodes for the currently visible portion. The specific implementation can be found in /src/components/virtualList.

Usage Instructions:

Run npm install.
Run npm start