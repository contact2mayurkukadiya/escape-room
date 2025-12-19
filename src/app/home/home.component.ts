import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dataJson } from '../data';

import {
    instructions,
    wrong_ans,
    game_winner,
} from '../data/alert.const';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    boxDims: any = new Array();
    spiderArray: any;
    tile_size: any = 40;
    selected_qsn_id: any = null;
    durationInSeconds = 5;

    constructor() { }

    ngOnInit(): void {
        this.swlAlert(instructions, true);
    }

    initializeSpider() {
        const tilesize = this.tile_size;
        const gRows = Math.floor(window.innerWidth / tilesize);
        const gCols = Math.floor(window.innerHeight / tilesize);
        this.spiderArray = this.spiderArray.sort(() => Math.random() - 0.5);
        const xpos = Array.from({ length: gRows }, (_, i) => i).sort(() => Math.random() - 0.5);
        const ypos = Array.from({ length: gCols - 4 }, (_, i) => i + 2).sort(() => Math.random() - 0.5);
        this.spiderArray.forEach((spider: any, i: any) => {
            const xIndex = Math.round(Math.random() * (xpos.length - 1));
            const yIndex = Math.round(Math.random() * (ypos.length - 1));
            spider['left'] = xpos[xIndex] * tilesize + 'px';
            spider['top'] = ypos[yIndex] * tilesize + 'px';
        });
    }

    openDialog(item: any) {
        this.selected_qsn_id = item.id;
        Swal.fire({
            title: item.qsn_arr.question,
            input: 'select',
            inputOptions: item.qsn_arr.ans_arr.reduce((result: any, option: any) => {
                result[option] = option; // {2: 2, 4: 4, 6: 6, 8: 8}
                return result;
            }, {}),
            inputPlaceholder: 'Select your answer',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            cancelButtonText: 'Cancel',
            allowOutsideClick: false,
            inputValidator: (value) => {
                if (!value) {
                    return 'Please select an answer!';
                }
                return undefined;
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const selectedAnswer = parseInt(result.value);
                const isCorrect = selectedAnswer === item.qsn_arr.correct_ans;

                if (isCorrect) {
                    this.spiderArray = this.spiderArray.filter((element: any) => {
                        return element.group_id !== item.group_id;
                    });
                    if (this.spiderArray.length == 0) {
                        this.swlAlert(game_winner, true);
                    }
                } else {
                    this.swlAlert(wrong_ans, false);
                }
            }
        });
    }

    swlAlert(data: any, reinitialize: boolean = false) {
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
            if (result.isConfirmed) {
                if (reinitialize) {
                    this.spiderArray = JSON.parse(JSON.stringify(dataJson as any));
                    console.log('reinitialize', this.spiderArray);
                    setTimeout(() => this.initializeSpider(), 100);
                }
            }
        });
    }
}