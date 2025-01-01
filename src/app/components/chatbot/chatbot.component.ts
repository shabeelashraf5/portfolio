import { Component, inject } from '@angular/core';
import { ChatbotService } from '../../service/chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css',
})
export class ChatbotComponent {
  private chatbotservice = inject(ChatbotService);

  isChatboxVisible = false;
  message = '';
  chatMessages = [{ sender: 'sHabEel', message: 'Hello, how can I help you?' }];
  isTyping!: boolean;

  predefinedQuestions = [
    'Are you looking for a job?',
    'What is your experience?',
    'What is your notice period?',
    'Are you available for interviews?',
    'Do you prefer remote work?',
    'Are you interested in full-time job?',
    'Are you willing to work weekends?',
    'Are you interested in freelancing?',
    'Do you have experience in freelance projects?',
    'Good Bye',
  ];

  displayedQuestions = this.predefinedQuestions.slice(0, 1);

  toggleChatbox() {
    this.isChatboxVisible = !this.isChatboxVisible;
  }

  closeChatbox() {
    this.isChatboxVisible = false;
  }

  sendMessage(message: string) {
    if (message.trim()) {
      console.log('User Input:', message);
      this.chatMessages.push({ sender: 'You', message: message });

      this.isTyping = true;

      this.chatbotservice.predictResponse(message).then((response) => {
        setTimeout(() => {
          console.log('Chatbot Response:', response);
          this.chatMessages.push({ sender: 'sHabEel', message: response });
          this.isTyping = false;
        }, 3000);
      });

      this.message = '';

      this.updateQuestions();
    }
  }

  updateQuestions() {
    this.predefinedQuestions.shift();

    if (this.predefinedQuestions.length) {
      this.displayedQuestions = this.predefinedQuestions.slice(0, 1);
    }
  }

  refreshChatbox() {
    this.chatMessages = [];
    this.isTyping = false;
    this.message = '';
    this.predefinedQuestions = [
      'Are you looking for a job?',
      'What is your notice period?',
      'Are you open to relocation?',
      'Are you available for interviews?',
      'Do you prefer remote work?',
      'Are you interested in full-time job?',
      'Are you willing to work weekends?',
      'Are you interested in freelancing?',
      'Do you have experience in freelance projects?',
      'Good Bye',
    ];
    this.chatMessages = [
      { sender: 'sHabEel', message: 'Hello, how can I help you?' },
    ];
    this.displayedQuestions = this.predefinedQuestions.slice(0, 1);
  }
}
