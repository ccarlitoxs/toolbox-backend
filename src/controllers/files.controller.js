import getFileByName from "../services/getFileByName.promise.service.js";
import getFiles from "../services/getFiles.service.js";
import { filterFileResponses, formatRecords, filterFileByQuery } from "../utils/getFilesUtils.js";

export const getFilesData = async (req, res, next) => {
  const fileNameQuery = req.query.fileName;
  try {
    const { files } = await getFiles(req);

    const filesPromises = files.map((file) => getFileByName(req, file));

    const filesData = await Promise.allSettled(filesPromises);

    const filteredResponses = filterFileResponses(filesData);

    const parsedFiles = await Promise.all(filteredResponses);

    let formattedFiles = formatRecords(parsedFiles);

    if (fileNameQuery) {
      formattedFiles = filterFileByQuery(formattedFiles, fileNameQuery);
    }

    res.json(formattedFiles);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getFilesList = async (req, res, next) => {
  try {
    const response = await getFiles(req);

    res.json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
