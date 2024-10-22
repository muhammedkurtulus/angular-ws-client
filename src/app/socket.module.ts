import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = {
  url: 'http://localhost:8080',
  options: { transports: ['websocket'] },
};

@NgModule({
  imports: [SocketIoModule.forRoot(config)],
  exports: [SocketIoModule],
})
export class WebSocketModule {}
