import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Config {
  ZIP: number;
  abt_Campus: string;
  city: string;
  dat: string;
  e_Mail: string;
  first_name: string;
  id: number;
  last_name: string;
  recommendation: string;
  state: string;
  street_Addr: string;
  tel_NO: number;
  uni_Ist: string;
}

@Injectable()
export class DisplayService {

  // jsonUrl = 'http://ec2-3-90-139-158.compute-1.amazonaws.com/jersey-quickstart-webapp/webapi/myresource'

  reqUrl = 'http://ec2-3-90-139-158.compute-1.amazonaws.com/jersey-quickstart-webapp/webapi/myresource';
  configUrl = 'assets/testing.json';

  constructor(private httpClient: HttpClient) {

  }

  async getConfig() {
    let jsonobj;
    jsonobj = await (await fetch(this.reqUrl)).json();
    console.log(JSON.stringify(jsonobj));

    return this.httpClient.get(this.reqUrl);
  }

}
