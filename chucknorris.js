async function chucknorris() {
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const jokes = await response.json();
console.log('😝', jokes?.value);
  }

chucknorris();
