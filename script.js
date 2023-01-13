const idezet = document.querySelector('.idézet');
const btn = document.querySelector('#btn');
const txt = document.querySelector('.txt>p');
btn.addEventListener('click',getRandom);
getRandom();
async function getRandom()
{
  const bbRes = await fetch('https://api.breakingbadquotes.xyz/v1/quotes', 
  {
    headers: 
    {
      'Accept': 'application/json'
    }
  });
  const resJson = await bbRes.json();
  console.log(resJson)
  txt.innerHTML = resJson[0].quote+"<br> - "+resJson[0].author;
}