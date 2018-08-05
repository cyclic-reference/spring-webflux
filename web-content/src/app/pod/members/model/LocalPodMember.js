"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PersonalInformation_1 = require("./PersonalInformation");
var LocalPodMember = /** @class */ (function () {
    function LocalPodMember(id, avatar) {
        this.personalInformation = new PersonalInformation_1.PersonalInformation();
        this._identifier = id;
        this.avatar = avatar;
    }
    LocalPodMember.prototype.getIdentifier = function () {
        return this._identifier.id;
    };
    LocalPodMember.prototype.setAvatar = function (avatar) {
        console.warn(avatar);
        this.avatar = avatar;
    };
    return LocalPodMember;
}());
exports.LocalPodMember = LocalPodMember;
//# sourceMappingURL=LocalPodMember.js.map