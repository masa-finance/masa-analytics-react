import { useCallback } from "react";

import { API_URL } from "../config";
import type { User } from "../interfaces/User";

export const useUser = () => {
  const createUser = useCallback(
    async (userAddress: string): Promise<User | undefined> => {
      try {
        const response = await fetch(`${API_URL}/users/${userAddress}`);

        if (response.ok) {
          return await response.json();
        } else if (response.status === 404) {
          const response = await fetch(`${API_URL}/users`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ address: userAddress }),
          });

          if (response.ok) {
            return await response.json();
          } else {
            console.error("API error: " + response.statusText);
          }
        } else {
          console.error("API error: " + response.statusText);
        }
      } catch (error) {
        console.error("Error creating user:", error);
        throw error;
      }
    },
    [],
  );

  return {
    createUser,
  };
};
