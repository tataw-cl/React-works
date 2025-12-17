import { supabase } from "../lib/supabaseClient";

export const tradeServices = {
  // Function to read all trades
  getAllTrades: async () => {
    const { data, error } = await supabase
      .from("trades")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching trades:", error);
      throw error;
    }
    return data;
  },

  // Function to read a trade by ID
  getTradeById: async (id) => {
    const { data, error } = await supabase
      .from("trades")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching trade by ID:", error);
      throw error;
    }

    return data;
  },

  // Function to get trades for a specific user
  getTradesByUser: async (userId) => {
    const { data, error } = await supabase
      .from("trades")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching trades by user:", error);
      throw error;
    }
    return data;
  },

  // Function to delete a trade by ID
  deleteTradeById: async (id) => {
    const { data, error } = await supabase.from("trades").delete().eq("id", id);

    if (error) {
      console.error("Error deleting trade by ID:", error);
      throw error;
    }

    return data;
  },

  // Function to update a trade by ID
  updateTradeById: async (id, updatedFields) => {
    const { data, error } = await supabase
      .from("trades")
      .update(updatedFields)
      .eq("id", id);

    if (error) {
      console.error("Error updating trade by ID:", error);
      throw error;
    }
    return data;
  },

  // Function to create a new trade

  createTrade: async (tradeData) => {
    const { data, error } = await supabase.from("trades").insert([tradeData]);

    if (error) {
      console.error("Error creating new trade:", error);
      throw error;
    }

    return data;
  },

  //Fuction to save trades with profile check

  saveTradeWithProfileCheck: async (userId, tradePayload) => {
    // 1. Check if profile exists
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("id")
      .eq("id", userId)
      .single();

    // 2. If profile is missing, create it on the fly
    if (profileError && profileError.code === "PGRST116") {
      // PGRST116 is "No rows found"
      console.log("Profile missing. Creating one now...");
      const { error: createError } = await supabase
        .from("profiles")
        .insert([{ id: userId, username: `user_${userId.slice(0, 5)}` }]); // Default username

      if (createError)
        throw new Error("Could not create profile: " + createError.message);
    }

    // 3. Now save the trade
    const { data, error: tradeError } = await supabase
      .from("trades")
      .insert([{ ...tradePayload, user_id: userId }]);

    if (tradeError) throw tradeError;
    return data;
  },
};
