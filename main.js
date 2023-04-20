function getResults(){
  const userInput = document.querySelector('#userInput').value

  fetch(`/api/${userInput}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    if (!data) {
      console.error('Empty or incomplete JSON data received');
      return;
    }

    console.log(data);
    document.querySelector('#name').textContent= data.name
    document.querySelector('#aroma').textContent= data.aroma
    document.querySelector('#flavor').textContent= data.flavor
    document.querySelector('#experience').textContent= data.experience
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

document.querySelector('#submit').addEventListener('click', getResults)
// alert('hi')