
const webComponent = {
makeJournalEntryComponent = (journalEntry) => {
    let newJournalObject = 
                `<div>
                <p>Date:${journalEntry.journalDate}</p>
                <p>Concepts:${journalEntry.conceptsCovered}</p>
                <p>Entry:${journalEntry.Entry}</p>
                <p>Mood:${journalEntry.mood}</p>
                </div>`;
            return newJournalObject;
    }
};




