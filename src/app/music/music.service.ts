import {Injectable} from '@angular/core';
import{Imusic} from './music.model';
import{HttpClient} from '@angular/common/http'
import{Observable } from 'rxjs';

@Injectable()

export class MusicService
{
    private musicurl="https://ngmusicdb.herokuapp.com/api/getMusic";
    constructor(private _http:HttpClient){

    }
    getMusic():Observable<Imusic[]>
    {
        return this._http.get <Imusic[]> (this.musicurl);

        
    }
}