import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { ChatbotService } from '../../service/chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css',
})
export class ChatbotComponent {
  @Input() isLoading: boolean = false;
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  private chatbotservice = inject(ChatbotService);

  isChatboxVisible = false;
  message = '';
  chatMessages = [{ sender: "sHAbEel's Bot Assistant", message: 'Hello, how can I help you?' }];
  isTyping!: boolean;
  usedQuestions: Set<string> = new Set();

  displayedQuestions = this.chatbotservice.getLocalQuestionPool().slice(0, 3);

  toggleChatbox() {
    this.isChatboxVisible = !this.isChatboxVisible;
    if (this.isChatboxVisible) {
      setTimeout(() => this.scrollToBottom(), 100);
    }
  }

  closeChatbox() {
    this.isChatboxVisible = false;
  }

  private normalize(text: string): string {
    return text.toLowerCase().replace(/[?.,!]/g, '').trim();
  }

  sendMessage(message: string) {
    if (message.trim()) {
      const userMessage = message.trim();
      this.chatMessages.push({ sender: 'You', message: userMessage });
      this.message = '';
      this.isTyping = true;

      const pool = this.chatbotservice.getLocalQuestionPool();
      const normalizedUserMsg = this.normalize(userMessage);

      // Mark as used if it matches any pool question (case/punctuation agnostic)
      const matchedFromPool = pool.find(q => this.normalize(q) === normalizedUserMsg);
      if (matchedFromPool) {
        this.usedQuestions.add(matchedFromPool);
      }

      setTimeout(() => this.scrollToBottom(), 10);

      // Simulate a 2-second typing delay for a more natural feel
      setTimeout(() => {
        this.chatbotservice.predictResponse(userMessage).then((response) => {
          this.chatMessages.push({ sender: "sHAbEel's Bot Assistant", message: response });
          this.isTyping = false;
          setTimeout(() => this.scrollToBottom(), 10);

          // Fetch dynamic suggestions or cycle local ones
          this.chatbotservice.getSuggestions(userMessage, response).then((suggestions) => {
            if (suggestions.length > 0) {
              // When not using Gemini, we cycle the local pool
              this.updateSuggestions();
            }
          });
        });
      }, 2000);
    }
  }

  updateSuggestions() {
    const pool = this.chatbotservice.getLocalQuestionPool();
    let currentSuggestions = [...this.displayedQuestions];

    // Replace any question in currentSuggestions that is now in usedQuestions
    for (let i = 0; i < currentSuggestions.length; i++) {
      if (this.usedQuestions.has(currentSuggestions[i])) {
        // Find a question in pool not already in currentSuggestions AND not used
        const available = pool.filter(q =>
          !this.usedQuestions.has(q) &&
          !currentSuggestions.includes(q)
        );

        if (available.length > 0) {
          currentSuggestions[i] = available[0];
        } else {
          // If no more unused questions are available in the pool, 
          // stop showing this suggestion tile.
          currentSuggestions[i] = '';
        }
      }
    }

    this.displayedQuestions = currentSuggestions.filter(q => q !== ''); // Remove empty slots
    setTimeout(() => this.scrollToBottom(), 100);
  }

  private scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  // Dynamic updates handled in sendMessage now
  updateQuestions() { }

  refreshChatbox() {
    this.chatMessages = [{ sender: "sHAbEel's Bot Assistant", message: 'Hello, how can I help you?' }];
    this.isTyping = false;
    this.message = '';
    this.usedQuestions.clear();
    this.displayedQuestions = this.chatbotservice.getLocalQuestionPool().slice(0, 3);
    setTimeout(() => this.scrollToBottom(), 10);
  }
}
