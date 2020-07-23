await fetch("https://www.omdbapi.com/?s=life&apikey=b3d9013d").then((r) => {
  return r.json();
});
