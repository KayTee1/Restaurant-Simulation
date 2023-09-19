import fs from "fs";

const DB_FILE_PATH = "../db.json";

const readDataFromFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(DB_FILE_PATH, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
};

export const fetchMenuItemsFromDatabase = async () => {
  try {
    const jsonData = await readDataFromFile();
    return jsonData.restaurant[0].menu;
  } catch (error) {
    throw new Error("Error fetching menu items from the database");
  }
};

export const getMenu = async (req, res) => {
  try {
    const menuItems= await fetchMenuItemsFromDatabase();

    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
