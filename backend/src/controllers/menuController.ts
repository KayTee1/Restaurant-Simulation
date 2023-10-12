import jsonfile from "jsonfile";
import { Request, Response } from "express";

const DB_FILE_PATH = "./db.json";

const fetchMenuItemsFromDatabase = async (): Promise<any> => {
  try {
    const jsonData = await jsonfile.readFile(DB_FILE_PATH);
    return jsonData.restaurant[0].menu;
  } catch (error) {
    throw new Error("Error fetching menu items from the database");
  }
};

export const getMenu = async (req: Request, res: Response): Promise<void> => {
  try {
    const menuItems = await fetchMenuItemsFromDatabase();
    res.status(200).json(menuItems);
  } catch (error) {
    console.error("Error fetching menu items:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
