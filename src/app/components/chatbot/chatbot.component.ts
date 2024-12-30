import { Component, inject } from '@angular/core';
import { ChatbotService } from '../../service/chatbot.service';


@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {

  private chatbotMessage = inject(ChatbotService)

  isChatboxVisible = false;
  message = '';
  chatMessages = [{ sender: 'sHabEel', message: 'Hello, how can I help you?' }];

  toggleChatbox() {
    this.isChatboxVisible = !this.isChatboxVisible;
  }

  closeChatbox() {
    this.isChatboxVisible = false;
  }

  sendMessage() {
    if (this.message.trim()) {
      console.log('User Input:', this.message); // Check the input
      this.chatMessages.push({ sender: 'You', message: this.message });
  
      // Predict and display response
      this.chatbotMessage.predictResponse(this.message).then(response => {

        console.log('Chatbot Response:', response); // Check the response
        this.chatMessages.push({ sender: 'sHabEel', message: response });

      })
  
      this.message = ''; // Clear the message input after processing
    }
  }

 

}


