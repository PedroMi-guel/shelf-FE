import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile: any = {
    name: '',
    email: '',
    phone: '',
    password: '',
  };
  confirmPassword: string = '';

  constructor(
    private profileService: ProfileService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    const storedProfile = this.profileService.getProfile();
    if (storedProfile) {
      this.profile = storedProfile;
    }
  }

  async updateProfile() {
    if (this.profile.password !== this.confirmPassword) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    this.profileService.updateProfile(this.profile);
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Perfil actualizado correctamente.',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
