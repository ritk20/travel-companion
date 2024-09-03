// /api/users.js

import { connectToDB } from "@/mongodb";
import User from "@/models/User";

export const GET = async (req, res) => {
  try {
    await connectToDB();

    // Extract the search query from the URL
    const { searchParams } = new URL(req.url, "http://localhost");
    const query = searchParams.get("query");

    // Build query for partial matches in either travelCity or travelCountry
    const searchQuery = {};
    if (query) {
      searchQuery.$or = [
        { travelCity: { $regex: query, $options: "i" } },
        { travelCountry: { $regex: query, $options: "i" } },
      ];
    }

    const users = await User.find(searchQuery);

    return new Response(JSON.stringify(users), { status: 200 });
  } catch (err) {
    console.log("Error fetching users:", err.message);
    return new Response(JSON.stringify({ message: "Failed to fetch users" }), {
      status: 500,
    });
  }
};
