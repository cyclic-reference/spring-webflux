import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Action} from '../pod/members/model/Action.model';
import {PersonalInformation} from '../pod/members/model/PersonalInformation';

@Injectable()
export class BackendAPIService {
    constructor(private httpClient: HttpClient) {
    }


    postImage(podMemberId: string, formData: FormData): Observable<string> {
        return this.httpClient.post('./api/pod/member'+ podMemberId + '/avatar', formData, {
            responseType: 'text'
        });
    }

    fetchImage(podMemberId: string): Observable<ArrayBuffer> {
        return this.httpClient.get('./api/pod/member'+ podMemberId + '/avatar' , {
            responseType: 'arraybuffer'
        });
    }

    deleteImage(podMemberId: string): Observable<boolean> {
        return this.httpClient.delete('./api/pod/member'+ podMemberId + '/avatar' , {
            responseType: 'json'
        }).map(response => (<Boolean>response === true));
    }

    fetchAllPodMemberIdentifiers(): Observable<string> {
        return this.httpClient.get('./api/pod/members', {
            responseType: 'text'
        })
    }

    fetchPersonalInformation(podMemberId: string): Observable<PersonalInformation> {
        return this.httpClient.get('./api/pod/member/' + podMemberId + '/information', {
                responseType: 'json',
            }).map((response: PersonalInformation) => response)
    }

    postPodMemberEvent<T>(action: Action<T>, podMemberIdentifier: string): Observable<Action<T>> {
        return Observable.of(action);
    }

    postEvent<T>(action: Action<T>): Observable<Action<T>> {
        return Observable.of(action);
    }
}