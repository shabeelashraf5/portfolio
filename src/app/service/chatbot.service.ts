import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  constructor() { }

  async predictResponse(input: string): Promise<string> {
    // Normalize the input (trim whitespace and convert to lowercase)
    const normalizedInput = input.trim().toLowerCase();
    console.log('Normalized Input:', normalizedInput); 
    // Check for specific keywords or phrases in the normalized input
    if (normalizedInput.includes('hello') || normalizedInput.includes('hi')) {
      return 'Hi, how can I assist you today?';
    } else if (normalizedInput.includes('bye')) {
      return 'Goodbye! Have a great day!';
    } else {
      return 'I am not sure about that. Can you ask something else?';
    }
  }


}
