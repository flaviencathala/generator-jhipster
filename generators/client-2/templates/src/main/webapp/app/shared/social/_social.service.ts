import { Injectable, Inject } from '@angular/core';

@Injectable()
export class SocialService {

    constructor () {}

    getProviderSetting (provider) {
        switch(provider) {
            case 'google': return 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
            case 'facebook': return 'public_profile,email';
            case 'twitter': return '';
            // jhipster-needle-add-social-button
            default: return 'Provider setting not defined';
        }
    }

    getProviderURL (provider) {
        return 'signin/' + provider;
    }

    /*getCSRF () {
        var name = 'CSRF-TOKEN=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) !== -1) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    }*/
}