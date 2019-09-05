const taco = {
  addToDom: entries => {
    entries.forEach(entry => {
      const renderJournalEntries = document.querySelector(".entryLog");
      renderJournalEntries.innerHTML += webComponent.makeJournalEntryComponent(entry);
    });
  }
};
