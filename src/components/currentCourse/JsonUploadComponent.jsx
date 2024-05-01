import React from "react";

const readJsonFile = (file) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onload = (event) => {
      if (event.target) {
        const jsonData = event.target.result;
        console.log("Raw JSON data:", jsonData);
        resolve(JSON.parse(jsonData.trim()));
      }
    };

    fileReader.onerror = (error) => reject(error);
    fileReader.readAsText(file);
  });

function JsonUploadComponent(props) {
  let { setdamapledata } = props;
  async function onChangeUpload(event) {
    if (event.target.files) {
      try {
        const parsedData = await readJsonFile(event.target.files[0]);
        console.log("Parsed JSON data:", parsedData);
        setdamapledata(parsedData.data);
        console.log("Sample Testcases are set in state");
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }

  return (
    <input
      class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
      id="file_input"
      type="file"
      accept=".json,application/json"
      onChange={onChangeUpload}
    />
  );
}

export default JsonUploadComponent;
