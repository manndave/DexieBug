# Dexie1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx).

<h2>Dexie Test Project</h2>

 - Clone repo locally
 - `Yarn`  or `npm` to get packages
 - `Yarn run electron` to build and launch Electron

From the HTML page:

To recreate the problem:
<ol>
    <li>Click the button below</li>
    <li>Go into the Application tab of the Chrome Dev Tools</li>
    <li>Refresh IndexedDB if "MyAppDatabase" DB isn't showing up</li>
    <li>Once it is visible, confirm that it has two indices: first and last.  Each should show one record</li>
    <li>Now click "MyAppDatabase" and then the "Refresh Database" button</li>
    <li>Check the indices again.  One of them is blank - no headers, no content, etc.</li>
    <li>Check the Console in VSCode (not the browser) - it will have an error similar to <b>Uncaught (in promise) TypeError: 
        Cannot read property 'keyPath' of undefined</b></li>
    <li>Once this happens, subsequent attempts to insert fail.</li>
    <li>To test again, you need to manually delete the database from within the devtools.</li>
</ol>
>>>> For the record, I'm reasonably sure this is something I'm doing wrong, 
but I can't for the life of me figure out what it is or where to look.
