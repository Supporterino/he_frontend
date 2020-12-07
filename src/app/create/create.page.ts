import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  signs: Set<string> = new Set<string>();
  valueSign: string = "";
  valueName: string = "";
  update: boolean = false;
  constructor(private searchService: SearchService, private toastController: ToastController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    //this.signs = new Set<string>();
    //this.value = "";
  }

  setVarSign(inp) {
    this.valueSign = inp;
  }

  setVarName(inp) {
    this.valueName = inp;
  }

  add() {
    this.signs.add(this.valueSign);
  }

  remove(val) {
    this.signs.delete(val);
  }

  sendEntry() {
    const data = {
      name: this.valueName,
      signs: Array.from(this.signs)
    }

    if (this.update) {
      this.searchService.updateDisease(data).subscribe(res => {
        //console.log(res);
        if (res.msg.startsWith('Error')) this.presentToast('Failed to updating disease.');
        else this.presentToast(`${this.valueName} updated.`)
        this.signs = new Set<string>();
        this.valueName = "";
        this.valueSign = "";
        this.update = false;
      })
    } else {
      this.searchService.sendNewDisease(data).subscribe(res => {
        //console.log(res);
        if (res.msg.startsWith('Error')) this.presentToast('Failed to create disease.');
        else this.presentToast(`${this.valueName} created.`)
        this.signs = new Set<string>();
        this.valueName = "";
        this.valueSign = "";
        this.update = false;
      })
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
