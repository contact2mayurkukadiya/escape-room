import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as _ from 'lodash';
import { dataJson } from '../../shared/data';
import {
  instructions,
  wrong_ans,
  game_winner,
} from '../../shared/data/alert.const';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { QuestionDialogueComponent } from '../../shared/question-dialogue/question-dialogue.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  boxDims: any = new Array();
  spiderArray: any;
  tile_size: any = 40;
  selected_qsn_id: any = null;
  durationInSeconds = 5;

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.swlAlert(instructions, true);
  }

  initializeSpider() {
    var tilesize = this.tile_size /* size of image */
    var gRows = Math.floor(
      $('.container')[0].getBoundingClientRect().width / tilesize
    );
    var gCols = Math.floor(
      $('.container')[0].getBoundingClientRect().height / tilesize
    );
    this.spiderArray = _.shuffle(this.spiderArray); /* spider array */
    var xpos = _.shuffle(_.range(gRows));
    var ypos = _.shuffle(_.range(2, gCols - 2));
    _.each(this.spiderArray, function (spider: any, i: any) {
      var xIndex = Math.round(Math.random() * xpos.length);
      var yIndex = Math.round(Math.random() * ypos.length);
      (spider['left'] = xpos[xIndex] * tilesize + 'px'),
        (spider['top'] = ypos[yIndex] * tilesize + 'px');
    });
  }

  openModel(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      top: '0',
      left: '0',
    };
    this.dialog.open(QuestionDialogueComponent, dialogConfig);
  }

  openDialog(item: any) {
    this.selected_qsn_id = item.id;
    const dialogRef = this.dialog.open(QuestionDialogueComponent, {
      hasBackdrop: true,
      disableClose: true,
      width: '300px',
      data: {
        group_id: item.group_id,
        question: item.qsn_arr.question,
        answer_array: item.qsn_arr.ans_arr,
        correct_answer: item.qsn_arr.correct_ans,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.anc_correct) {
        this.spiderArray = this.spiderArray.filter((element) => {
          return element.group_id !== result.id;
        });
        if (this.spiderArray.length == 0) {
          this.swlAlert(game_winner, true);
        }
      } else {
        this.swlAlert(wrong_ans, true);
      }
    });
  }

  swlAlert(data, reinitialize: boolean = false) {
    Swal.fire({
      title: data.title,
      text: data.text,
      confirmButtonText: data.confirmButtonText,
      width: data.width,
      padding: data.padding,
      color: data.color,
      backdrop: data.backdrop,
      customClass: data.customClass,
      allowOutsideClick: data.allowOutsideClick,
    }).then((result) => {
      if (result) {
        if (reinitialize)
          this.spiderArray = JSON.parse(JSON.stringify(dataJson as any));
        this.initializeSpider();
      }
    });
  }
}
