
declare class A0AuthenticationAPI extends NSObject {

	static alloc(): A0AuthenticationAPI; // inherited from NSObject

	static new(): A0AuthenticationAPI; // inherited from NSObject

	static resumeAuthWithURLOptions(url: NSURL, options: NSDictionary<string, any>): boolean;

	constructor(o: { clientId: string; url: NSURL; });

	constructor(o: { clientId: string; url: NSURL; session: NSURLSession; });

	createUserWithEmailUsernamePasswordConnectionUserMetadataCallback(email: string, username: string, password: string, connection: string, userMetadata: NSDictionary<string, any>, callback: (p1: NSError, p2: NSDictionary<string, any>) => void): void;

	initWithClientIdUrl(clientId: string, url: NSURL): this;

	initWithClientIdUrlSession(clientId: string, url: NSURL, session: NSURLSession): this;

	loginSocialWithTokenConnectionScopeParametersCallback(token: string, connection: string, scope: string, parameters: NSDictionary<string, any>, callback: (p1: NSError, p2: A0Credentials) => void): void;

	loginWithUsernameOrEmailPasswordConnectionScopeParametersCallback(username: string, password: string, connection: string, scope: string, parameters: NSDictionary<string, any>, callback: (p1: NSError, p2: A0Credentials) => void): void;

	loginWithUsernameOrEmailPasswordRealmAudienceScopeParametersCallback(username: string, password: string, realm: string, audience: string, scope: string, parameters: NSDictionary<string, any>, callback: (p1: NSError, p2: A0Credentials) => void): void;

	renewWithRefreshTokenScopeCallback(refreshToken: string, scope: string, callback: (p1: NSError, p2: A0Credentials) => void): void;

	resetPasswordWithEmailConnectionCallback(email: string, connection: string, callback: (p1: NSError) => void): void;

	signUpWithEmailUsernamePasswordConnectionUserMetadataScopeParametersCallback(email: string, username: string, password: string, connection: string, userMetadata: NSDictionary<string, any>, scope: string, parameters: NSDictionary<string, any>, callback: (p1: NSError, p2: A0Credentials) => void): void;

	startPasswordlessWithCodeToEmailConnectionCallback(email: string, connection: string, callback: (p1: NSError) => void): void;

	startPasswordlessWithCodeToPhoneNumberConnectionCallback(phoneNumber: string, connection: string, callback: (p1: NSError) => void): void;

	startPasswordlessWithLinkToEmailConnectionCallback(email: string, connection: string, callback: (p1: NSError) => void): void;

	startPasswordlessWithLinkToPhoneNumberConnectionCallback(phoneNumber: string, connection: string, callback: (p1: NSError) => void): void;

	tokenInfoFromTokenCallback(token: string, callback: (p1: NSError, p2: A0Profile) => void): void;

	userInfoWithTokenCallback(token: string, callback: (p1: NSError, p2: A0Profile) => void): void;
}

declare class A0Credentials extends NSObject implements NSSecureCoding {

	static alloc(): A0Credentials; // inherited from NSObject

	static new(): A0Credentials; // inherited from NSObject

	static setSupportsSecureCoding(value: boolean): void;

	readonly accessToken: string;

	readonly expiresIn: Date;

	readonly idToken: string;

	readonly refreshToken: string;

	readonly scope: string;

	readonly tokenType: string;

	static supportsSecureCoding: boolean;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { accessToken: string; tokenType: string; idToken: string; refreshToken: string; expiresIn: Date; scope: string; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithAccessTokenTokenTypeIdTokenRefreshTokenExpiresInScope(accessToken: string, tokenType: string, idToken: string, refreshToken: string, expiresIn: Date, scope: string): this;

	initWithCoder(coder: NSCoder): this;
}

declare class A0Identity extends NSObject {

	static alloc(): A0Identity; // inherited from NSObject

	static new(): A0Identity; // inherited from NSObject

	readonly accessToken: string;

	readonly accessTokenSecret: string;

	readonly connection: string;

	readonly expiresIn: Date;

	readonly identifier: string;

	readonly profileData: NSDictionary<string, any>;

	readonly provider: string;

	readonly social: boolean;

	constructor(o: { identifier: string; provider: string; connection: string; social: boolean; profileData: NSDictionary<string, any>; accessToken: string; expiresIn: Date; accessTokenSecret: string; });

	constructor(o: { json: NSDictionary<string, any>; });

	initWithIdentifierProviderConnectionSocialProfileDataAccessTokenExpiresInAccessTokenSecret(identifier: string, provider: string, connection: string, social: boolean, profileData: NSDictionary<string, any>, accessToken: string, expiresIn: Date, accessTokenSecret: string): this;

	initWithJson(json: NSDictionary<string, any>): this;
}

declare class A0ManagementAPI extends NSObject {

	static alloc(): A0ManagementAPI; // inherited from NSObject

	static new(): A0ManagementAPI; // inherited from NSObject

	constructor(o: { token: string; });

	constructor(o: { token: string; url: NSURL; });

	constructor(o: { token: string; url: NSURL; session: NSURLSession; });

	initWithToken(token: string): this;

	initWithTokenUrl(token: string, url: NSURL): this;

	initWithTokenUrlSession(token: string, url: NSURL, session: NSURLSession): this;

	linkUserWithIdentifierWithUserUsingTokenCallback(identifier: string, token: string, callback: (p1: NSError, p2: NSArray<NSDictionary<string, any>>) => void): void;

	patchUserWithIdentifierUserMetadataCallback(identifier: string, userMetadata: NSDictionary<string, any>, callback: (p1: NSError, p2: NSDictionary<string, any>) => void): void;

	setTelemetryWithEnabled(enabled: boolean): void;

	unlinkUserWithIdentifierProviderFromUserIdCallback(identifier: string, provider: string, userId: string, callback: (p1: NSError, p2: NSArray<NSDictionary<string, any>>) => void): void;
}

declare class A0Profile extends NSObject {

	static alloc(): A0Profile; // inherited from NSObject

	static new(): A0Profile; // inherited from NSObject

	readonly additionalAttributes: NSDictionary<string, any>;

	readonly appMetadata: NSDictionary<string, any>;

	readonly createdAt: Date;

	readonly email: string;

	readonly emailVerified: boolean;

	readonly familyName: string;

	readonly givenName: string;

	readonly id: string;

	readonly identities: NSArray<A0Identity>;

	readonly name: string;

	readonly nickname: string;

	readonly pictureURL: NSURL;

	readonly userMetadata: NSDictionary<string, any>;

	constructor(o: { id: string; name: string; nickname: string; pictureURL: NSURL; createdAt: Date; email: string; emailVerified: boolean; givenName: string; familyName: string; attributes: NSDictionary<string, any>; identities: NSArray<A0Identity> | A0Identity[]; });

	constructor(o: { json: NSDictionary<string, any>; });

	initWithIdNameNicknamePictureURLCreatedAtEmailEmailVerifiedGivenNameFamilyNameAttributesIdentities(id: string, name: string, nickname: string, pictureURL: NSURL, createdAt: Date, email: string, emailVerified: boolean, givenName: string, familyName: string, attributes: NSDictionary<string, any>, identities: NSArray<A0Identity> | A0Identity[]): this;

	initWithJson(json: NSDictionary<string, any>): this;

	objectForKeyedSubscript(key: string): any;
}

declare class A0RSA extends NSObject {

	static alloc(): A0RSA; // inherited from NSObject

	static new(): A0RSA; // inherited from NSObject

	constructor(o: { key: any; });

	initWithKey(key: any): this;

	sign(data: NSData): NSData;

	verifySignature(data: NSData, signature: NSData): boolean;
}

declare class A0SHA extends NSObject {

	static alloc(): A0SHA; // inherited from NSObject

	static new(): A0SHA; // inherited from NSObject

	constructor(o: { algorithm: string; });

	hash(data: NSData): NSData;

	initWithAlgorithm(algorithm: string): this;
}

declare class A0UserInfo extends NSObject {

	static alloc(): A0UserInfo; // inherited from NSObject

	static new(): A0UserInfo; // inherited from NSObject

	readonly address: NSDictionary<string, string>;

	readonly birthdate: string;

	readonly customClaims: NSDictionary<string, any>;

	readonly email: string;

	readonly familyName: string;

	readonly gender: string;

	readonly givenName: string;

	readonly locale: NSLocale;

	readonly middleName: string;

	readonly name: string;

	readonly nickname: string;

	readonly phoneNumber: string;

	readonly picture: NSURL;

	readonly preferredUsername: string;

	readonly profile: NSURL;

	readonly sub: string;

	readonly updatedAt: Date;

	readonly website: NSURL;

	readonly zoneinfo: NSTimeZone;

	static readonly publicClaims: NSArray<string>;

	constructor(o: { json: NSDictionary<string, any>; });

	initWithJson(json: NSDictionary<string, any>): this;
}

declare class A0WebAuth extends NSObject {

	static alloc(): A0WebAuth; // inherited from NSObject

	static new(): A0WebAuth; // inherited from NSObject

	static resumeAuthWithURLOptions(url: NSURL, options: NSDictionary<string, any>): boolean;

	connection: string;

	ephemeralSession: boolean;

	scope: string;

	universalLink: boolean;

	constructor(o: { clientId: string; url: NSURL; });

	addParameters(parameters: NSDictionary<string, string>): void;

	initWithClientIdUrl(clientId: string, url: NSURL): this;

	setTelemetryEnabled(enabled: boolean): void;

	start(callback: (p1: NSError, p2: A0Credentials) => void): void;
}

declare var Auth0VersionNumber: number;

declare var Auth0VersionNumberVar: number;

declare var Auth0VersionString: interop.Reference<number>;

declare var Auth0VersionStringVar: interop.Reference<number>;
