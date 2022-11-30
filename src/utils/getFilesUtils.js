import csv from "csvtojson";

export const filterFileResponses = (responses) =>
  responses
    .filter((response) => response.status === "fulfilled")
    .map((response) => csv().fromString(response.value.data));

export const formatRecords = (files) => {
  let formattedFiles = {};
  for (const file of files.flat(1)) {
    if (
      file.hasOwnProperty("file") &&
      file.hasOwnProperty("text") &&
      file.hasOwnProperty("number") &&
      file.hasOwnProperty("hex")
    ) {
      if (!formattedFiles[file["file"]]) {
        formattedFiles[file["file"]] = [];
      }

      formattedFiles[file["file"]].push({
        file: file["file"],
        text: file["text"],
        number: file["number"],
        hex: file["hex"],
      });
    }
  }

  formattedFiles = Object.keys(formattedFiles).map((key) => ({
    file: key,
    lines: formattedFiles[key],
  }));

  return formattedFiles;
};

export const filterFileByQuery = (files, fileNameQuery) =>
  files.filter((file) => file.file.includes(fileNameQuery));
