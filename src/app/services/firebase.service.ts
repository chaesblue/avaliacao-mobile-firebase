import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
  updateDoc,
  deleteDoc
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firestore = inject(Firestore);

  listarUsuarios() {
    const usuariosRef = collection(this.firestore, 'usuarios');
    return collectionData(usuariosRef, { idField: 'id' });
  }

  adicionarUsuario(nome: string, email: string) {
    const usuariosRef = collection(this.firestore, 'usuarios');

    return addDoc(usuariosRef, {
      nome,
      email
    });
  }
  editarUsuario(id: string, nome: string, email: string) {
    const usuarioDoc = doc(this.firestore, `usuarios/${id}`);

    return updateDoc(usuarioDoc, {
      nome,
      email
    });
  }

  excluirUsuario(id: string) {
    const usuarioDoc = doc(this.firestore, `usuarios/${id}`);

    return deleteDoc(usuarioDoc);
  }
}