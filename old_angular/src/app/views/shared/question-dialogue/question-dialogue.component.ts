import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-question-dialogue',
  templateUrl: './question-dialogue.component.html',
  styleUrls: ['./question-dialogue.component.scss'],
})
export class QuestionDialogueComponent implements OnInit {
  selected_answer: any;
  selectedAnswer: any;

  constructor(
    public dialogRef: MatDialogRef<QuestionDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close(this.selectedAnswer);
  }

  close() {
    this.dialogRef.close();
  }

  pickAnswer(answer: any) {
    this.selectedAnswer =
      answer == this.data['correct_answer']
        ? { anc_correct: true, id: this.data['group_id'] }
        : { anc_correct: false, id: null };
  }
}
