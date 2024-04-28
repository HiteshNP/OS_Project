function updateUsage() {
    fetch('/usage')
      .then((response) => response.json())
      .then((data) => {
        document.getElementById(
          'cpuUsage'
        ).textContent = `CPU Usage: ${data.cpuUsage.toFixed(2)}%`;
        document.getElementById('cpuProgress').style.width = `${data.cpuUsage}%`;
        document.getElementById(
          'memoryUsage'
        ).textContent = `Memory Usage: ${data.memoryUsage.toFixed(2)}%`;
        document.getElementById('memoryProgress').style.width = `${data.memoryUsage}%`;
        document.getElementById(
          'diskUsage'
        ).textContent = `Disk Usage: ${data.diskUsage.toFixed(2)}%`;
        document.getElementById('diskProgress').style.width = `${data.diskUsage}%`;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  setInterval(updateUsage, 1000);