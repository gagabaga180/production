async function submitSurvey() {
  const data = { answer: "example" };

  const res = await fetch('/api/survey', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  alert('Saved: ' + JSON.stringify(result));
}

document.getElementById('app').innerHTML = `
  <button onclick="submitSurvey()">Submit Survey</button>
`;
