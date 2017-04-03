import { Action } from '@ngrx/store';
import { type } from './../util';

import { Account, Ticket } from './../models';
import { AsyncStatus } from './../viewModels';

export const ActionTypes = {
    LOGIN: type("[Account] Login"),
    LOGIN_SUCCESS: type("[Account] Login Success"),
    LOGIN_FAIL: type("[Account] Login Fail"),
    LOGOUT: type("[Account] Logout"),
    LOGOUT_SUCCESS: type("[Account] Logout Success"),

    VERIFY_AUTH: type("[Account] Verify Auth"),
    VERIFY_AUTH_LOGIN_SUCCESS: type("[Account] Verify Auth Login Success"),
    VERIFY_AUTH_UPDATE_SUCCESS: type("[Account] Verify Auth Update Success"),
    VERIFY_AUTH_FINISH: type("[Account] Verify Auth Finish"),

    UPDATE: type("[Account] Update"),
    UPDATE_SUCCESS: type("[Account] Update Success"),
    UPDATE_FAIL: type("[Account] Update Fail"),

    CHANGE_NOTIFICATIONS: type("[Account] Change Notifications"),
};

export enum LoginMethod {
    None,
    Facebook,
    Email,
}

export class LoginAction implements Action {
    readonly type = ActionTypes.LOGIN;

    constructor(public payload: {
        loginMethod: LoginMethod,
        email?: string,
        password?: string,
    }) {
    }
}

export class LoginSuccessAction implements Action {
    readonly type = ActionTypes.LOGIN_SUCCESS;

    constructor(public payload: { authToken: string }) { }
}

export class LoginFailAction implements Action {
    readonly type = ActionTypes.LOGIN_FAIL;

    constructor(public payload: {
        errorMessage: string,
    }) { }
}

export class LogoutAction implements Action {
    readonly type = ActionTypes.LOGOUT;

    constructor() { }
}

export class LogoutSuccess implements Action {
    readonly type = ActionTypes.LOGOUT_SUCCESS;

    constructor() { }
}

export class VerifyAuthAction implements Action {
    readonly type = ActionTypes.VERIFY_AUTH;

    constructor() { }
}

export class VerifyAuthLoginSuccessAction implements Action {
    readonly type = ActionTypes.VERIFY_AUTH_LOGIN_SUCCESS;

    constructor(public payload: LoginSuccessAction) { }
}

export class VerifyAuthUpdateSuccessAction implements Action {
    readonly type = ActionTypes.VERIFY_AUTH_UPDATE_SUCCESS;

    constructor(public payload: UpdateSuccessAction) { }
}

export class VerifyAuthFinishAction implements Action {
    readonly type = ActionTypes.VERIFY_AUTH_FINISH;

    constructor(public payload: { status: AsyncStatus, message?: string }) { }
}

export class UpdateAction implements Action {
    readonly type = ActionTypes.UPDATE;

    constructor() { }
}

export class UpdateSuccessAction implements Action {
    readonly type = ActionTypes.UPDATE_SUCCESS;

    constructor(public payload: { account: Account, tickets: Ticket[] }) { }
}

export class UpdateFailAction implements Action {
    readonly type = ActionTypes.UPDATE_FAIL;

    constructor(public payload: {
        requireLogin: boolean,
        errorMessage: string,
    }) { }
}

export class ChangeNotificationsAction implements Action {
    readonly type = ActionTypes.CHANGE_NOTIFICATIONS;

    constructor(public payload: {
        tickets?: boolean,
        updates?: boolean,
    }) { }
}

export type Actions
    = LoginAction
    | LoginSuccessAction
    | LoginFailAction
    | LogoutAction
    | LogoutSuccess
    | UpdateAction
    | UpdateSuccessAction
    | UpdateFailAction
    | ChangeNotificationsAction
    | VerifyAuthAction
    | VerifyAuthLoginSuccessAction
    | VerifyAuthUpdateSuccessAction
    | VerifyAuthFinishAction;



