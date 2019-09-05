
// fetch("http://localhost:3000/journalEntries") 
// .then(response => response.json())
// .then(entries => {
//     console.table(entries)
//     // printToDom(entries)
// })

const API = {
   //key one with a method//
    getJournalEntries: () => {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    },

//     postJournalEntries: (entries) => {
//         return fetch("http://localhost:3000/entries", {
//             method: "POST", 
//             headers: {
//                 "content-type": "application/json"
//             }, 
//             body: JSON.stringify(entries)
//         }).then(response => response.json());
//     },
//     deleteJournalEntries: (entries) => {
//         return fetch("http://localhost:3000/entries"), {
//             method: "DELETE", 
//             headers: {
//                 "content-type": "application/json"
//             },
//             body: JSON.stringify(entries)
//         }).then(response => response.json());
//     },
// }

