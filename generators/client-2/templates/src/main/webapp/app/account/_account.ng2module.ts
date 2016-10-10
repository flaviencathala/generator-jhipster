import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UIRouterModule } from 'ui-router-ng2';

import { <%=angular2AppName%>SharedModule } from '../shared';

import {
    Register,
    Activate,
    Password,
    PasswordResetInit,
    PasswordResetFinish,
    <%_ if (authenticationType === 'session') { _%>
    SessionsService,
    SessionsComponent,
    sessionsState,
    <%_ } _%>
    PasswordStrengthBarComponent,
    RegisterComponent,
    ActivateComponent,
    PasswordComponent,
    PasswordResetInitComponent,
    PasswordResetFinishComponent,
    SettingsComponent,
    settingsState,
    activateState,
    passwordState,
    finishResetState,
    requestResetState,
    registerState,
    accountState,
<% if (enableSocialSignIn) { %>
    JhSocialComponent,
    SocialService,
    SocialRegisterComponent,
    socialRegisterState,
<% if (authenticationType == 'jwt') { %>
    SocialAuthComponent,
    socialAuthState,
<% } %>
<% } %>
} from './';

let ACCOUNT_STATES = [
    accountState,
    activateState,
    passwordState,
    finishResetState,
    requestResetState,
    registerState,
    <%_ if (authenticationType === 'session') { _%>
    sessionsState,
    <%_ } _%>
    settingsState,
<% if (enableSocialSignIn) { %>
<% if (authenticationType == 'jwt') { %>
    socialAuthState,
<% } %>
    socialRegisterState
<% } %>
];

@NgModule({
    imports: [
        <%=angular2AppName%>SharedModule,
        UIRouterModule.forChild({ states: ACCOUNT_STATES })
    ],
    declarations: [
<% if (enableSocialSignIn) { %>
        JhSocialComponent,
        SocialRegisterComponent,
<% if (authenticationType == 'jwt') { %>
        SocialAuthComponent,
<% } %>
<% } %>
        ActivateComponent,
        RegisterComponent,
        PasswordComponent,
        PasswordResetInitComponent,
        PasswordResetFinishComponent,
        <%_ if (authenticationType === 'session') { _%>
        SessionsComponent,
        <%_ } _%>
        SettingsComponent
    ],
    providers: [
        <%_ if (authenticationType === 'session') { _%>
        SessionsService,
        <%_ } _%>
<% if (enableSocialSignIn) { %>
        SocialService,
<% } %>
        Register,
        Activate,
        Password,
        PasswordResetInit,
        PasswordResetFinish
    ],
    exports: [
<% if (enableSocialSignIn) { %>
        JhSocialComponent
<% } %>
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%=angular2AppName%>AccountModule {}
