// script.js
document.addEventListener("DOMContentLoaded", function() {
    const chesscomUsername = "Amfern"; //Chess.com username
    const lichessUsername = "Rofhiwa27";   //Lichess username
  
    // Fetch Chess.com Profile Data
    fetch(`https://api.chess.com/pub/player/${chesscomUsername}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById("chesscom-username").innerText = data.username;
        document.getElementById("chesscom-status").innerText = data.status === "online" ? "Online" : "Offline";
      });
  
    // Fetch Chess.com Stats Data
    fetch(`https://api.chess.com/pub/player/${chesscomUsername}/stats`)
      .then(response => response.json())
      .then(data => {
        const rating = data.chess_rapid ? data.chess_rapid.last.rating : "N/A";
        document.getElementById("chesscom-rating").innerText = rating;
        const games = data.chess_rapid ? data.chess_rapid.record.win + data.chess_rapid.record.loss + data.chess_rapid.record.draw : "N/A";
        document.getElementById("chesscom-games").innerText = games;
      });
  
    // Fetch Lichess Profile Data
    fetch(`https://lichess.org/api/user/${lichessUsername}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById("lichess-username").innerText = data.username;
        document.getElementById("lichess-status").innerText = data.online ? "Online" : "Offline";
        document.getElementById("lichess-rating").innerText = data.perfs.rapid.rating || "N/A";
        document.getElementById("lichess-games").innerText = data.count.all || "N/A";
      });
  });
