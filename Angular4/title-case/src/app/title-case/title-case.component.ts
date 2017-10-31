import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-case',
  templateUrl: './title-case.component.html',
  styleUrls: ['./title-case.component.css']
})
export class TitleCaseComponent implements OnInit {

  phrase: string;

  constructor() {
    this.phrase = "";
  }

  ngOnInit() {
  }

  changed(passedWord: string){
    let rawWordArray = passedWord.split(' ');
    let firstWord =  true;
    let prepositions = ["the","of"];
    let processedWordArray = [];
    for(let word of rawWordArray){
      console.log(prepositions.indexOf(word.toLowerCase()));
      if(word != ""){
        if(prepositions.indexOf(word.toLowerCase()) > -1){
          if(firstWord){
            processedWordArray.push(word[0].toUpperCase() + word.substring(1));
          }else{
            processedWordArray.push(word.toLowerCase());
          }
        }else{
          processedWordArray.push(word[0].toUpperCase() + word.substring(1));
        }
      }
      firstWord = false;
    }
    this.phrase = processedWordArray.join(' ');
  }

}
