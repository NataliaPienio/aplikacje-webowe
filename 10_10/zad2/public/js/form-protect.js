const urlParams = new URLSearchParams(window.location.search)
if (urlParams.has('fail')) window.alert("Nie można wysłać wiadomości")

