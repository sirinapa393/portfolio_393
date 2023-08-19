const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Travel', 'Study', 'Cook', 'Play games'],
        datasets: [{
            label: 'Completion (%)',
            data: [25, 45, 50, 75],
            backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(255, 99, 132, 0.5)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)', 'rgba(255, 206, 86, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const mytitleElement = document.getElementById("mytitle");
    const nameElement = document.getElementById("name");
    const descriptionElement = document.getElementById("description");
    const introElement = document.getElementById("intro");
    
    
    const mytitle = "Portfolio";
    const name = "Sirinapa Maneerat";
    const description = "Study at Maejo University";
    const intro = "Faculty of Sceince Computer science field";
    
    mytitleElement.textContent = mytitle;
    nameElement.textContent = name;
    descriptionElement.textContent = description;
    introElement.textContent = intro;
  });
  
