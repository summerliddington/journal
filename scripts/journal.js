





// const renderJournalEntries = document.querySelector(".entryLog")
//         renderJournalEntries.forEach( entries => {
//             renderJournalEntries.innerHTML +=makeJournalEntryComponent(entries);
//         });

// // // // Invoke the render function
// renderJournalEntries(journalEntries)
// console.log(renderJournalEntries)


/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
objectWithGetterMethod.methodToGetData().then(functionThatRendersData)
API.getJournalEntries().then(data => injectDOM.addToDom(data));