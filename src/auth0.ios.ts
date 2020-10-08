import {
    Auth0Common,
    ResponseType,
    // WebAuthException,
    WebAuthOptions
} from './auth0-common';
// import { Auth0Authentication } from './ios/auth0Authentication';
// import { SafariWebAuth } from './ios/safariWebAuth';
// import { ResponseType as iOSResponseType } from './ios/responseType';
// import { a0_url } from './ios/utils';
// import { Credentials } from './common/credentials';
// import { UserInfo } from './common/userInfo';

export {
    // Credentials,
    // UserInfo,
    ResponseType,
    // WebAuthException,
    WebAuthOptions
};

// export { resumeAuth } from './ios/webAuth';

export class Auth0 extends Auth0Common {
    // private authenticationApi: Auth0Authentication;

    constructor(clientId: string, domain: string) {
        super(clientId, domain);

        // this.authenticationApi = new Auth0Authentication(this.clientId, a0_url(this.domain));
    }

    public login(options: WebAuthOptions): Promise<any> {
        // @ts-ignore
        const auth = Auth0.webAuth();
        // const auth = SafariWebAuth.init(this.clientId, a0_url(this.domain));

        if (options.audience != null) {
            auth.audience(options.audience);
        }
        /*
        if (options.connection != null) {
            auth.setConnection(options.connection);
        }
        if (options.nonce != null) {
            auth.setNonce(options.nonce);
        }
        if (options.responseType != null) {
            switch (options.responseType) {
                case ResponseType.CODE:
                    auth.setResponseType([iOSResponseType.code]);
                    break;
                case ResponseType.TOKEN:
                    auth.setResponseType([iOSResponseType.token]);
                    break;
                case ResponseType.ID_TOKEN:
                    auth.setResponseType([iOSResponseType.idToken]);
                    break;
            }
        }
        */
        /**
         * Not supported by iOS at this time
         */
        /*if (options.scheme != null) {
            auth.setScheme(options.scheme);
        }*/
        /*
        if (options.scope != null) {
            auth.setScope(options.scope);
        }
        if (options.state != null) {
            auth.setState(options.state);
        }
        if (options.parameters != null) {
            auth.setParameters(options.parameters);
        }
        */

        return new Promise((resolve, reject) => {
            try {
                auth.start((result) => {
                    if (result.failure != null) {
                        console.log(result.failure.message);
                        // reject(new WebAuthException(result.failure.message));
                    } else {
                        const credentials = result.success;
                        resolve(credentials);
                    }
                });
            } catch (e) {
                reject(e);
            }
        });
    }

    public logout(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                resolve(true);
                /*
                this.authenticationApi
                    .logout((result) => {
                        if (result.failure != null) {
                            reject(result.failure);
                        } else {
                            resolve(result.success);
                        }
                    });
                */
            } catch (e) {
                reject(e);
            }
        });
    }


    // public renewCredentials(refreshToken: string): Promise<Credentials> {
    //     return new Promise((resolve, reject) => {
    //         try {
    //             this.authenticationApi
    //                 .renew(refreshToken)
    //                 .start((result) => {
    //                     if (result.failure != null) {
    //                         reject(result.failure);
    //                     } else {
    //                         resolve(result.success);
    //                     }
    //                 });
    //         } catch (e) {
    //             reject(e);
    //         }
    //     });
    // }

    // public revokeRefreshToken(refreshToken: string): Promise<void> {
    //     return new Promise((resolve, reject) => {
    //         try {
    //             this.authenticationApi
    //                 .revoke(refreshToken)
    //                 .start((result) => {
    //                     if (result.failure != null) {
    //                         reject(result.failure);
    //                     } else {
    //                         resolve();
    //                     }
    //                 });
    //         } catch (e) {
    //             reject(e);
    //         }
    //     });
    // }

    // public getUserInfo(accessToken: string): Promise<UserInfo> {
    //     return new Promise((resolve, reject) => {
    //         try {
    //             this.authenticationApi
    //                 .userInfo(accessToken)
    //                 .start((result) => {
    //                     if (result.failure != null) {
    //                         reject(result.failure);
    //                     } else {
    //                         resolve(result.success);
    //                     }
    //                 });
    //         } catch (e) {
    //             reject(e);
    //         }
    //     });
    // }
}
