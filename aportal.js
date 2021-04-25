function currentYear(){
    const d = new Date();
    const year = d.getFullYear();
    document.querySelector('#twentyTwentyOne').textContent = year;
}

function lastModified(){
    const modified = document.lastModified;
  document.getElementById('date').textContent = modified;
}