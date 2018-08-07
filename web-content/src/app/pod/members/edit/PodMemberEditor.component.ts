import {Component, Input} from '@angular/core';
import {Avatar} from '../model/Avatar.model';
import {PodMemberService} from '../service/PodMember.service';
import {PersonalInformation} from '../model/PersonalInformation';
import {PodMember} from '../model/PodMember.model';
import {Action} from '../model/Action.model';
import {LocalAvatar} from '../model/LocalAvatar';
import {ImageUploadService} from '../service/ImageUpload.service';
import {EventDispatchService} from '../service/EventDispatch.service';
import {PodMemberPersonal} from './PersonalInformationEditor.component';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
    selector: 'pod-member-editor',
    template: require('./PodMemberEditor.component.htm')
})
export class PodMemberEditorComponent {

    constructor(private projectFileService: PodMemberService,
                private eventDispatchService: EventDispatchService,
                private imageUploadService: ImageUploadService) {
    }


    get personalInformation(): Observable<PersonalInformation> {
        return this.podMember.personalInformation;
    }

    private _podMember: PodMember;

    @Input()
    get podMember(): PodMember {
        return this._podMember;
    }

    set podMember(value: PodMember) {
        this._podMember = value;
    }

    get avatar(): Observable<Avatar> {
        return this.podMember.avatar;
    }

    updateAvatar(avatar: LocalAvatar): void {
        this.podMember.setAvatar(new BehaviorSubject(avatar));
        this.imageUploadService.uploadImage(avatar.selectedFile)
            .subscribe(remoteIdentifier => {
                const uploadedAvatarAction: Action<AvatarPayload> = {
                    type: "AVATAR_UPLOADED",
                    payload: {
                        podMemberIdentifier: this.podMember.getIdentifier(),
                        identifier: remoteIdentifier
                    },
                    error: false
                }
                this.postEvent(uploadedAvatarAction)
            }, error =>{
                // should probably try again
                console.warn(error)
            } );
    }

    postEvent<T>(action: Action<T>): void{
        this.eventDispatchService.dispatchAction(action)
            .subscribe((it)=>{}, (err)=>{})
    }
}

interface AvatarPayload extends PodMemberPersonal {
    identifier: string;
}