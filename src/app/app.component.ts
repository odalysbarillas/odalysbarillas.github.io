import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  constructor() {
    
  }

  static loadScript(url: string) {
    const body = document.body as HTMLInputElement;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  static removeScript(filename: string, filetype: string = 'js') {
    var targetelement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none";
    var targetattr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none";
    var allsuspects: any = document.getElementsByTagName(targetelement);
    for (var i = allsuspects.length; i >= 0; i--) {
      if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1)
        allsuspects[i].parentNode.removeChild(allsuspects[i]);
    }
  }

  static animaciones() {
    AppComponent.removeScript('assets/js/plugins.min.js');
    AppComponent.loadScript('assets/js/plugins.min.js');
    AppComponent.removeScript('assets/js/common.js');
    AppComponent.loadScript('assets/js/common.js');
  }

}
