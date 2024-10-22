import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebSocketModule } from './socket.module';
import { SocketService } from './socket.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, WebSocketModule],
  providers: [SocketService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-websocket';
  message: string = "";

  constructor(private socketService: SocketService) {
    console.log('SocketService initialized');
  }

  ngOnInit() {
    try {
      this.socketService.getMessages('message').subscribe((wsMessage: string) => {
        this.message = wsMessage;
      });
    } catch (e) {
      console.log(e);
    }
  }
}
