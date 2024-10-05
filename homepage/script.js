// Data for the pie chart
const attendancePercentage = 85; // Example percentage of attendance
const absentPercentage = 100 - attendancePercentage; // Remaining percentage

// Set up the pie chart
const ctx = document.getElementById('attendanceChart').getContext('2d');
const attendanceChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Present', 'Absent'],
        datasets: [{
            label: 'Attendance',
            data: [attendancePercentage, absentPercentage],
            backgroundColor: ['#4CAF50', '#FF5252'], // Green for present, red for absent
            borderColor: ['#ffffff', '#ffffff'],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top', // Position of the legend
            },
            title: {
                display: true,
                text: 'Attendance Percentage'
            }
        }
    }
});
