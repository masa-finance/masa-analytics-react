import axios from "axios";
import { ethers, Provider } from "ethers"; // Include the Signer and Provider imports

// Define the structure of the event data for message signing
export interface MessageSigningEventData {
  eventType: string;
  accountId: string;
  message: string;
  signature: string;
}

// A function to sign a message and track the event
export async function signMessageAndTrack(
  provider: Provider, // Use Provider instead of ethers.providers.Web3Provider
  signer: ethers.Signer, // The signer object representing the user's Ethereum wallet
  message: string, // The message to be signed
  apiUrl: string // The API URL where the event data will be sent
) {
  // Get the Ethereum account address of the signer
  const signerAddress = await signer.getAddress();
  // Sign the message using the signer's private key
  const signature = await signer.signMessage(message);

  console.log("User signed the message:", {
    message: message,
    signerAddress: signerAddress,
    signature: signature,
  });

  // Prepare the event data
  const eventData: MessageSigningEventData = {
    eventType: "messageSigned",
    accountId: signerAddress,
    message: message,
    signature: signature,
  };

  // Send the event data to the specified API
  try {
    const response = await axios.post(apiUrl, eventData);
    console.log("Event data sent to API:", response.data);
  } catch (error) {
    console.error("Error sending event data to API:", error);
  }
}
