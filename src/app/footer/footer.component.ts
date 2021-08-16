import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmojiButton } from '@joeattardi/emoji-button';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})

export class FooterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    const chatBtn = document.querySelector('.chat-btn');
    const popup = document.querySelector ('.chat-popup');
    const submitBtn = document.querySelector('.submit');
    const chatArea = document.querySelector ('.chat-area');
    const inputElm = <HTMLInputElement>document.querySelector('.input');
    const emojiBtn =<HTMLImageElement> document.querySelector('#emoji-btn') ;
    const picker = new EmojiButton();
//emoji selection
    window.addEventListener('DOMContentLoaded', () => {

      picker.on('emoji', (emoji) => {
          inputElm.value += emoji;
        });


      emojiBtn.addEventListener('click', () => {
        picker.togglePicker(emojiBtn);
      });


    });
    //chat btn toggle
    chatBtn.addEventListener('click',()=>{
      popup.classList.toggle('show');
    })
    //send msg
    submitBtn.addEventListener('click', () => {
        let userInput = inputElm .value;
        console.log(userInput);


        let temp = `<div class="out-msg" style=" display: flex;justify-content: flex-end;align-items: center;">
      <span class="my-msg" style="background-color:lightgray; display:flex; justify-content:flex-end; margin: 0.80rem;
      padding: 0.5rem;  border-radius: 25px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.4);
      word-break: break-all;">${userInput}</span>
      <img class="avatar" src="assets/user.jfif" alt="" style=" width: 45px;height: 45px;border-radius: 50%;object-fit: cover;">
      </div>`;
        chatArea.insertAdjacentHTML("beforeend", temp);
        inputElm.value = '';
      })

































































































































































































   }

}
