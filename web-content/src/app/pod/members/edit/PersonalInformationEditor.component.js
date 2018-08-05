"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PersonalInformationEditorComponent = /** @class */ (function () {
    function PersonalInformationEditorComponent() {
        this.personalInformationEmmiter = new core_1.EventEmitter();
        this.interests = [];
    }
    Object.defineProperty(PersonalInformationEditorComponent.prototype, "personalInformation", {
        get: function () {
            return this._personalInformation;
        },
        set: function (value) {
            this._personalInformation = value;
        },
        enumerable: true,
        configurable: true
    });
    PersonalInformationEditorComponent.prototype.addInterest = function (textPayload) {
        this.interests.push(textPayload);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PersonalInformationEditorComponent.prototype, "personalInformationEmmiter", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PersonalInformationEditorComponent.prototype, "personalInformation", null);
    PersonalInformationEditorComponent = __decorate([
        core_1.Component({
            selector: 'personal-information-editor',
            template: require('./PersonalInformationEditor.component.htm')
        }),
        __metadata("design:paramtypes", [])
    ], PersonalInformationEditorComponent);
    return PersonalInformationEditorComponent;
}());
exports.PersonalInformationEditorComponent = PersonalInformationEditorComponent;
//# sourceMappingURL=PersonalInformationEditor.component.js.map