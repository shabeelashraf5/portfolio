import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
  constructor() {}

  // async predictResponse(input: string): Promise<string> {

  //   const normalizedInput = input.trim().toLowerCase();
  //   console.log('Normalized Input:', normalizedInput);
  //   if (normalizedInput.includes('hello') || normalizedInput.includes('hi')) {
  //     return 'Hi, how can I assist you today?';
  //   } else if (normalizedInput.includes('bye')) {
  //     return 'Goodbye! Have a great day!';
  //   } else {
  //     return 'I am not sure about that. Can you ask something else?';
  //   }
  // }

  async predictResponse(input: string): Promise<string> {
    const normalizedInput = input.trim().toLowerCase();
    console.log('Normalized Input:', normalizedInput);

    if (normalizedInput.includes('are you looking for a job')) {
      return 'Yes, I am currently looking for job opportunities!';
    } else if (
      normalizedInput.includes('what is your experience') ||
      normalizedInput.includes('how many years of experience')
    ) {
      return 'I have 1 year of experience as a Full-Stack Developer, specializing in Angular, Node.js, Express.js, MongoDB, and NestJS. I have worked on projects like e-commerce websites and ERP systems.';
    } else if (normalizedInput.includes('what is your notice period')) {
      return 'My notice period is immediate, I am available to join right away.';
    } else if (normalizedInput.includes('are you open to relocation')) {
      return 'I am open to relocation depending on the job requirements.';
    } else if (normalizedInput.includes('are you available for interviews')) {
      return 'Yes, I am available for interviews at your convenience.';
    } else if (normalizedInput.includes('do you prefer remote work')) {
      return 'Yes, I prefer remote work but am also open to working in the office if required.';
    } else if (
      normalizedInput.includes('are you interested in full-time job')
    ) {
      return 'Yes, I am interested in full-time job opportunities!';
    } else if (normalizedInput.includes('are you willing to work weekends')) {
      return 'Yes, I am willing to work on weekends if the project requires it.';
    } else if (normalizedInput.includes('are you interested in freelancing')) {
      return 'Yes, I am interested in freelancing opportunities!';
    } else if (
      normalizedInput.includes('do you have experience in freelance projects')
    ) {
      return 'I have worked on several independent projects which allowed me to develop and refine my skills. Although they were not freelance projects, they gave me valuable experience in managing tasks and meeting deadlines.';
    } else if (
      normalizedInput.includes('bye') ||
      normalizedInput.includes('goodbye') ||
      normalizedInput.includes('see you')
    ) {
      return 'Goodbye! Feel free to reach out if you have more questions. Have a great day!';
    } else {
      return 'I am not sure about that. Can you ask something else related to jobs?';
    }
  }
}
