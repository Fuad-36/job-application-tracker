import connectDB from "../db";
import { Board, Column } from "./index";

const DEFAULT_COLUMNS = [
  { name: "Wish List", order: 0 },
  { name: "Applied", order: 1 },
  { name: "Interviewing", order: 2 },
  { name: "Offer", order: 3 },
  { name: "Rejected", order: 4 },
];

export async function initializeUserBoard(userId: string) {
  try {
    await connectDB();

    //check if board already exists for the user
    const existingBoard = await Board.findOne({ userId, name: "Job Hunt" });
    if (existingBoard) {
      console.log("Board already exists for user:", userId);
      return existingBoard;
    }

    //create a new board for the user
    const board = await Board.create({ userId, name: "Job Hunt", columns: [] });

    // Create default columns
    const columns = await Promise.all(
      DEFAULT_COLUMNS.map((col) =>
        Column.create({
          name: col.name,
          order: col.order,
          boardId: board._id,
          jobApplication: [],
        })
      )
    );


    // Update the board with the new column IDs
    board.columns = columns.map((col) => col._id);
    await board.save();

    return board;

  } catch (err) {
    console.error("Error connecting to the database:", err);
    throw err;
  }
}
