import { jwtDecode } from "jwt-decode";


interface DecodedToken {
  exp: number; 
 
}

export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    return decoded.exp < currentTime; // Token is expired if `exp` is less than `currentTime`
  } catch (error) {
    console.error("Error decoding token:", error);
    return true; // Treat as expired if decoding fails
  }
};

