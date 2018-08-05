import {Component, Input} from '@angular/core';
import {PodMember} from '../model/PodMember.model';
import {PodMemberService} from '../service/PodMember.service';
import {PersonalInformation} from '../model/PersonalInformation';
import {Avatar} from '../model/Avatar.model';

@Component({
    selector: 'pod-member',
    template: require('./PodMember.component.htm')
})
export class PodMemberComponent {

    constructor(private projectFileService: PodMemberService) {
    }

    get personalInformation(): PersonalInformation {
        return this.podMember.personalInformation
    }

    private _podMember: PodMember;

    @Input()
    get podMember(): PodMember {
        return this._podMember;
    }

    set podMember(value: PodMember) {
        this._podMember = value;
    }

    private _editMode: boolean = true;

    get editMode(): boolean {
        return this._editMode;
    }

    get avatar(): Avatar {
        return this.podMember.avatar;
    }

    podMemberUpdated(projectFile: PodMember): void {
        this.podMember = projectFile;
    }

    hideEdit(): void {
        this._editMode = false
    }

    showEdit(): void {
        this._editMode = true;
    }

    delete(): void {
        this.projectFileService.removePodMember(this.podMember);
    }
}