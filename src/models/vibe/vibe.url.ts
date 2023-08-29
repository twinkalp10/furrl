import axios from "axios";
import { VibeData } from "@/models/vibe/vibe.interface"

export const getVibesData = async (pageNumber?: number): Promise<VibeData> => {
  try {
    const { data } = await axios.post<VibeData>(
      `https://api.furrl.in/api/v1/vibe/getVibeRelate?visitId=2e3fb8fe-5867-4725-bd1c-fd934e635e3b`,
      { vibe: "#NightFlea" },
      {
        params: {
          page: pageNumber || 1,
        },
      }
    );
    return data
  } catch (error) {
    // make a call to the logger service
    console.log("error fetching data: ", error)
    throw new Error('Error fetching data')
  }
};
