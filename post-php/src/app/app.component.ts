import { Component } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'post-php';

  constructor(public http:Http){

  }

  sendPostRequest(name, email,phone) {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Headers' , 'Content-Type, Content-Length, Accept-Encoding');
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
    const requestOptions = new RequestOptions({ headers: headers });

    let postData = {
            "name": name,
            "email": email,
            "phone_number": phone
    }

    this.http.post("http://paunimal.com/postdata.php", postData, requestOptions)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }
}
