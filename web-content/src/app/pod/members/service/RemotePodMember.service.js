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
var BackendAPI_service_1 = require("../../../services/BackendAPI.service");
var Observable_1 = require("rxjs/Observable");
var RemoteAvatar_service_1 = require("./RemoteAvatar.service");
var RemotePodMemberService = /** @class */ (function () {
    function RemotePodMemberService(backendAPISevice, remoteAvatarService) {
        this.backendAPISevice = backendAPISevice;
        this.remoteAvatarService = remoteAvatarService;
    }
    RemotePodMemberService.prototype.fetchPodMember = function (fileId) {
        // return this.backendAPISevice.fetchImage(fileId)
        return Observable_1.Observable.empty();
    };
    RemotePodMemberService.prototype.fetchAllRemotePodMembers = function () {
        var _this = this;
        return this.backendAPISevice.fetchAllPodMemberIdentifiers()
            .flatMap(function (id) { return _this.fetchPodMember(id); });
    };
    RemotePodMemberService.prototype.removeProject = function (projectToRemove) {
        return this.backendAPISevice.deleteImage(projectToRemove.getIdentifier());
    };
    RemotePodMemberService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [BackendAPI_service_1.BackendAPIService,
            RemoteAvatar_service_1.RemoteAvatarService])
    ], RemotePodMemberService);
    return RemotePodMemberService;
}());
exports.RemotePodMemberService = RemotePodMemberService;
//# sourceMappingURL=RemotePodMember.service.js.map