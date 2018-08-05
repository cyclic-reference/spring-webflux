import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PersonalInformation} from '../model/PersonalInformation';
import {TextPayload} from '../model/TextPayload';
import {PodMember} from '../model/PodMember.model';

@Component({
    selector: 'personal-information-editor',
    template: require('./PersonalInformationEditor.component.htm')
})
export class PersonalInformationEditorComponent {

    @Output()
    private personalInformationEmmiter = new EventEmitter<PersonalInformation>();

    constructor() {
    }

    private _podMember: PodMember;

    get personalInformation(): PersonalInformation {
        return this.podMember.personalInformation;
    }

    @Input()
    get podMember(): PodMember {
        return this._podMember;
    }

    set podMember(value: PodMember) {
        this._podMember = value;
    }

    get firstName(): string {
        return this.personalInformation.firstName;
    }

    set firstName(value: string) {
        this.personalInformation.firstName = value;
    }

    get lastName(): string {
        return this.personalInformation.lastName;
    }

    set lastName(value: string) {
        this.personalInformation.lastName = value;
    }

    get email(): string {
        return this.personalInformation.email;
    }

    set email(value: string) {
        this.personalInformation.email = value;
    }

    get phoneNumber(): string {
        return this.personalInformation.phoneNumber;
    }

    set phoneNumber(value: string) {
        this.personalInformation.phoneNumber = value;
    }

    addInterest(textPayload: TextPayload) {
        this.personalInformation.addInterest(textPayload)
    }
}