document.addEventListener('DOMContentLoaded', () => {
    console.log("Mewah Dashboard Loaded");

    // Chart.js setup
    const ctx = document.getElementById('gradeChart').getContext('2d');

    const gradeChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Matematika', 'Algoritma', 'Basis Data', 'Pemrograman Web', 'Sistem Operasi'],
            datasets: [{
                label: 'Nilai Mata Kuliah',
                data: [85, 90, 80, 95, 88], // Example data for each subject
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 2
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
});
