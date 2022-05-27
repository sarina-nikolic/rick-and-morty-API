fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(onData);

function onData(data) {
  const people = data.results;
  const list = document.createElement('ul');
  list.setAttribute('role', 'list');
  document.body.append(list);
  people.forEach(person => {
    const listItem = document.createElement('li');
    listItem.className = 'card';

    listItem.innerText = `${person.name} (${person.status})`;
    const personDetails = document.createElement('dl');
    personDetails.className = 'details';
    personDetails.innerHTML = `
    <dt>Last Known:</dt>
    <dd>${person.location}</dd>
    <dt>first seen:</dt>
    <dd>${person.origin}</dd>`;
    listItem.append(personDetails);
    personDetails.classList.add('hide');
    listItem.addEventListener('click', () => {
      personDetails.classList.toggle('hide');
    });
    list.append(listItem);
  });
  console.log(people);
}
