import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonList
} from '@ionic/angular/standalone';

import { FormsModule } from '@angular/forms';
import { UsuarioCardComponent } from '../components/usuario-card/usuario-card.component';
import { FirebaseService } from '../services/firebase.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonItem,
    IonLabel,
    IonInput,
    IonList,
    FormsModule,
    UsuarioCardComponent
  ]
})
export class HomePage implements OnInit {

  nome = '';
  email = '';

  usuarios: any[] = [];

  constructor(
    private firebaseService: FirebaseService,
    private apiService: ApiService
  ) {}

  ngOnInit() {

    this.firebaseService
      .listarUsuarios()
      .subscribe((dados: any) => {
        this.usuarios = dados;
      });

    this.apiService
      .getUsuariosApi()
      .subscribe(res => {
        console.log('API REST:', res);
      });
  }

  async cadastrar() {

    if (!this.nome || !this.email) return;

    await this.firebaseService.adicionarUsuario(
      this.nome,
      this.email
    );

    this.nome = '';
    this.email = '';
  }

  editar(usuario: any) {

  const novoNome = prompt(
    'Novo nome',
    usuario.nome
  );

  const novoEmail = prompt(
    'Novo email',
    usuario.email
  );

  if (!novoNome || !novoEmail) return;

  this.firebaseService.editarUsuario(
    usuario.id,
    novoNome,
    novoEmail
  );
}

excluir(id: string) {

  const confirmar = confirm(
    'Deseja excluir?'
  );

  if (!confirmar) return;

  this.firebaseService.excluirUsuario(id);
}
}

