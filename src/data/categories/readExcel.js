import XLSX from "xlsx";
import axios from "axios";

const fetchData = async (url) => {
  const data = await axios({
    method: "get",
    url: url,
    responseType: "blob",
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));

  return data;
};

const restructureJSON = (data) => {
  const reconData = data.map((item) => ({
    Group: item.Group,
    Kumpulan: item.Kumpulan,
    Category: item.Category,
    Kategori: item.Kategori,
    Word: item.Word,
    Perkataan: item.Perkataan,
    Image: item.Image,
    Video: item.Video,
  }));

  return reconData;
};

const readExcel = async () => {
  const file = await fetchData("http://localhost:3001/assets/BIM_Test_1.xlsx");
  //Export def
  const promise = new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onload = (e) => {
      const arrayBuffer = e.target.result;
      const wb = XLSX.read(arrayBuffer, { type: "binary" });
      const ws = wb.Sheets[wb.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(ws);
      const reconData = restructureJSON(data);
      resolve(reconData);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
  return promise;
};

export default readExcel();