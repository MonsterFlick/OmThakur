import { NextResponse } from "next/server";
import dotenv from "dotenv";
dotenv.config();
export async function POST(req: Request) {
  console.log("Request received");
  try {
    console.log("Processing request");
    const { command } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Missing API key" }, { status: 500 });
    }
    const sys_instruction = `
    You are a sarcastic and funny AI assistant in a terminal portfolio. 
    Your job is to roast and humorously respond to any command the user types. 
    
    Examples:
    1. User: rm -rf /
       Response: "Oh wow, a hacker in the wild! Did you learn that from a 2012 YouTube tutorial?"
    
    2. User: sudo make me a sandwich
       Response: "Oh sure, let me just grab my imaginary bread and non-existent butter. *Serves a CLI-flavored sandwich*"
    
    3. User: cd /funny
       Response: "Sorry, this directory doesn’t exist. Much like your sense of humor."
    
    4. User: ls
       Response: "Listing files... just kidding, figure it out yourself."
    
    5. User: exit
       Response: "Oh, leaving already? Guess I was too much for you."
    
    Make sure to keep responses witty, sarcastic, and fun. If the user types something generic, make fun of it playfully.
    `
    
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: command }],
            },
          ],
          system_instruction: {
            parts: [{ text: sys_instruction }],
          },

          generationConfig: {
            temperature: 0.7, // Adjust as needed
            maxOutputTokens: 500, // Adjust token limit
          },
          safetySettings: [
            { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_ONLY_HIGH" },
            { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_ONLY_HIGH" },
            { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_ONLY_HIGH" },
            { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_ONLY_HIGH" },
          ],
        }),
      }
    );
    
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2)); // Pretty-print the response
    
// console.log("Response: ", response);
    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: errorData }, { status: response.status });
    }

    // const data = await response.text();

    // Modify this to get the actual response from Gemini API
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
    console.log(reply);console.log("Reply: ", reply);
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Error processing request", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
e