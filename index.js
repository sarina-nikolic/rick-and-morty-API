fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(createList)
  .catch(onError);

function createList(data) {
  const people = data.results;
  const list = document.createElement('ul');
  list.setAttribute('role', 'list');
  document.body.append(list);
  people.forEach(person => {
    const listItem = document.createElement('li');
    listItem.className = 'card';
    listItem.innerHTML = `${person.name} (${person.status}) <img src="${person.image}" alt="character-image">`;
    const personDetails = document.createElement('dl');
    personDetails.className = 'details';
    personDetails.innerHTML = `
    <dt>Species:</dt>
    <dd>${person.species}</dd>
    <dt>Last Known:</dt>
    <dd>${person.location.name}</dd>
    <dt>First Seen:</dt>
    <dd>${person.origin.name}</dd>`;
    listItem.addEventListener('click', () => {
      personDetails.classList.toggle('hide');
      listItem.append(personDetails);
    });
    list.append(listItem);
  });
}

function onError(error) {
  document.body.innerText =
    'Oh no! This Character-List is not available – ' + error.message;
}
