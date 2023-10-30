import { ref, get} from 'firebase/database';
import { db } from "../../fireBaseConfig";

export const fetchUserDates = async (userId) => {
    const userRef = ref(db, `users/${userId}/dates`);
    return userRef
    };

export const hasOngoinDates = async (userId) => {
    try {
        const userRef = ref(db, `users/${userId}/dates`);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          const dates = snapshot.val();
           return Object.values(dates).some((date) => date.status === "ongoing");
        }
        return false; 
        } catch (error) {
            console.error("Error fetching ongoing dates:", error);
            return false;
        }
};