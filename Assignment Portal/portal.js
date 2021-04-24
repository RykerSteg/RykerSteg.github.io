try{
    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById("date").textContent = newDate().toLocalDateString('en-us', options);
} catch (e) {
    alert('Error with code or your browser does not support Locale');
}