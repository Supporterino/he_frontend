import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SearchService } from '../services/search.service';
import { IonInput, ToastController } from '@ionic/angular';
import { Disease } from '../disease-item/disease.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  signs: Set<string> = new Set<string>();
  valueSign: string = '';
  valueName: string = '';
  vauleCauses: string = '';
  valueComps: string = '';
  valueTherapy: string = '';
  update: boolean = false;
  input: any;
  @ViewChild('inputRefSign') set playerRef(ref: ElementRef<IonInput>) {
    this.input = ref;
  }

  constructor(private searchService: SearchService, private toastController: ToastController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
  }

  setVarSign(inp) {
    this.valueSign = inp;
  }

  setVarName(inp) {
    this.valueName = inp;
  }

  setVarCauses(inp) {
    this.vauleCauses = inp;
  }

  setVarComps(inp) {
    this.valueComps = inp;
  }

  setVarTherapy(inp) {
    this.valueTherapy = inp;
  }

  add() {
    this.signs.add(this.valueSign);
  }

  remove(val) {
    this.signs.delete(val);
  }

  reset() {
    this.signs = new Set<string>();
    this.valueName = '';
    this.valueSign = '';
    this.update = false;
    this.vauleCauses = '';
    this.valueComps = '';
    this.valueTherapy = '';
  }

  sendEntry() {
    const data: Disease = {
      name: this.valueName,
      signs: Array.from(this.signs),
      causes: this.vauleCauses,
      complications: this.valueComps,
      therapy: this.valueTherapy
    }

    if (this.update) {
      this.searchService.updateDisease(data).subscribe(res => {
        if (res.msg.startsWith('Error')) this.presentToast('Failed to updating disease.');
        else this.presentToast(`${this.valueName} updated.`);
        this.reset();
      });
    } else {
      this.searchService.sendNewDisease(data).subscribe(res => {
        if (res.msg.startsWith('Error')) this.presentToast('Failed to create disease.');
        else this.presentToast(`${this.valueName} created.`);
        this.reset();
      });
    }
  }

  eventHandler(event) {
    if (event.keyCode === 13) {
      this.add();
      this.input.value = '';
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      buttons: [
        {
          text: 'Dismiss',
          role: 'cancel'
        }
      ]
    });
    toast.present();
  }
}
