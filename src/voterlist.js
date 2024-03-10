import React from 'react';

const Voterlist = () => {
  const uploadFile = () => {
    const fileInput = document.getElementById('csvFile');
    const file = fileInput.files[0];

    if (!file) {
      alert('Please choose a CSV file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('csvFile', file);

    fetch('/upload', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        // Handle success, e.g., redirect to the display page
        window.location.href = '/display';
      })
      .catch(error => {
        // Handle error, e.g., display an error message
        console.error('Error:', error);
        alert('An error occurred during file upload.');
      });
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Voter List Upload</title>
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
              text-align: center;
              margin-top: 50px;
            }

            form {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            input[type="file"] {
              margin-bottom: 20px;
            }

            button {
              padding: 10px;
              background-color: #4caf50;
              color: white;
              border: none;
              border-radius: 5px;
              cursor: pointer;
            }

            button:hover {
              background-color: #45a049;
            }
          `}
        </style>
      </head>
      <body>
        <h1>Voter List Upload</h1>
        <form id="uploadForm" encType="multipart/form-data">
          <label htmlFor="csvFile">Choose a CSV file:</label>
          <input type="file" name="csvFile" id="csvFile" accept=".csv" required />
          <button type="button" onClick={uploadFile}>
            Upload
          </button>
        </form>

        <script>
          {`
            function uploadFile() {
              const fileInput = document.getElementById('csvFile');
              const file = fileInput.files[0];

              if (!file) {
                alert('Please choose a CSV file to upload.');
                return;
              }

              const formData = new FormData();
              formData.append('csvFile', file);

              fetch('/upload', {
                method: 'POST',
                body: formData
              })
                .then(response => response.json())
                .then(data => {
                  // Handle success, e.g., redirect to the display page
                  window.location.href = '/display';
                })
                .catch(error => {
                  // Handle error, e.g., display an error message
                  console.error('Error:', error);
                  alert('An error occurred during file upload.');
                });
            }
          `}
        </script>
      </body>
    </html>
  );
};

export default Voterlist;
