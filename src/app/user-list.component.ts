// src/app/user-list.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'; // ✅ Importando tabela do Angular Material
import { UserService } from './user.service';

@Component({
  selector: 'app-user-list',
  standalone: true, // ✅ Componente Standalone
  imports: [CommonModule, MatTableModule], // ✅ Importa Angular Material para tabelas
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  private userService = inject(UserService);

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}
