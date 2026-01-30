import { Injectable } from '@angular/core';
import { model } from './gemini';

@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
  constructor() { }

  async predictResponse(input: string): Promise<string> {
    const normalizedInput = input.trim().toLowerCase();

    // Local fallbacks for basic greetings
    if (normalizedInput === 'how are you' || normalizedInput === 'how are u') {
      return "I'm doing great, thank you for asking! I'm Mohamed Shabeel Ashraf (sHabEel), ready to share my work and experience with you. How can I help you today?";
    }
    if (['hi', 'hello', 'hey'].includes(normalizedInput)) {
      return "Hello! I'm Mohamed Shabeel Ashraf (sHabEel). How can I help you today?";
    }
    if (normalizedInput.includes('who are you') || normalizedInput.includes('your name')) {
      return "I am Mohamed Shabeel Ashraf (sHabEel), a professional Full-Stack Developer. How can I help you today?";
    }
    if (normalizedInput.includes('what can you do') || normalizedInput.includes('how can you help')) {
      return "I can tell you about my experience in full-stack development, my current tech stack (Next.js & PostgreSQL), my personal projects, and how to contact me!";
    }
    if (normalizedInput.includes('where are you from') || normalizedInput.includes('where are you based') || normalizedInput.includes('your location')) {
      return "I am from Kerala, India. I currently work in a remote setting.";
    }
    if (normalizedInput.includes('which part of india')) {
      return "I am from Kerala, the southern part of India.";
    }
    if (normalizedInput.includes('which part of kerala')) {
      return "I am based in Kannur, Kerala.";
    }
    if (normalizedInput.includes('how many years') || normalizedInput.includes('year of experience')) {
      return "I have 1 year of professional experience as a Full-Stack Developer.";
    }
    if (normalizedInput.includes('experience') || normalizedInput.includes('skills') || normalizedInput.includes('tech stack')) {
      return "My primary stack is Next.js and PostgreSQL, but I'm also highly proficient in Angular, Node.js, Express.js, MongoDB, and NestJS.";
    }
    if (normalizedInput.includes('project')) {
      return "I have developed extensive full-stack solutions. Professionally, I have worked on e-commerce platforms (auth, carts, payments) and ERP systems (inventory, orders). I also have a strong portfolio of personal projects built with Angular and NestJS, focusing on scalability and maintainability.";
    }
    if (normalizedInput.includes('reach you') || normalizedInput.includes('contact you')) {
      return "You can contact me through LinkedIn or through my email which is mentioned on the contact section. I'm also available via the contact form on this page!";
    }
    if (normalizedInput.includes('job') || normalizedInput.includes('hire') || normalizedInput.includes('looking for')) {
      return "If you're interested in hiring me or discussing job opportunities, please contact me through LinkedIn or through my email which is mentioned on the contact section!";
    }
    if (normalizedInput.includes('notice period') || normalizedInput.includes('available')) {
      if (normalizedInput.includes('remote')) {
        return "Yes, I am currently working remotely and I am open to both remote and on-site opportunities!";
      }
      return "My notice period is 60 days.";
    }
    if (['bye', 'goodbye', 'see you', 'see u'].some(f => normalizedInput.includes(f))) {
      return "Goodbye! It was great chatting with you. Feel free to reach out to Shabeel via the contact form if you have more questions!";
    }

    try {
      // Temporarily disabled Gemini API as requested
      /*
      const result = await model.generateContent(input);
      const response = await result.response;
      return response.text();
      */
      return "I'm here to assist with inquiries related to Mohamed Shabeel Ashraf's professional background, including his job experience, technical skills, and projects. Please feel free to ask anything about his work!";
    } catch (error) {
      console.error('Error in local mode:', error);
      return "I'm sorry, I'm having a bit of trouble. Please contact Shabeel directly via the form!";
    }
  }

  getLocalQuestionPool(): string[] {
    return [
      "What are your top skills?",
      "Tell me about your projects",
      "Where are you based?",
      "How many years of experience?",
      "What is your notice period?",
      "Are you available for remote work?",
      "How can I reach you?",
      "What tech stack do you use?",
      "Tell me about your personal projects",
      "Are you looking for a job?"
    ];
  }

  async getSuggestions(lastInput: string, lastResponse: string): Promise<string[]> {
    // Static suggestions while Gemini is disabled
    const pool = this.getLocalQuestionPool();
    return pool.slice(0, 3);
    /*
    try {
      const prompt = `Based on the user's question: "${lastInput}" and your response: "${lastResponse}", generate 3 short (max 5 words each) follow-up questions that the user might want to ask next. Return them as a simple comma-separated list, no numbering. Example: "Tell me more, What's next?, How to contact?"`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      return text.split(',').map(s => s.trim().replace(/^"|"$/g, '')).slice(0, 3);
    } catch (error) {
      console.error('Error getting suggestions:', error);
      return [];
    }
    */
  }
}
