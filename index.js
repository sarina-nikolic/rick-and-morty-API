fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(onData);

function onData(data) {
  const people = data.results;
  const list = document.createElement('ul');
  document.body.append(list);
  people.forEach(person => {
    const listItem = document.createElement('li');
    listItem.className = 'card';

    listItem.innerText = `${person.name} (${person.location})`;
  });
  console.log(people);
}
