"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers = require("../scripts/helpers");
var appSetttings = require("application-settings");
var nativescript_auth0_1 = require("nativescript-auth0");
describe('Auth0Lock', function () {
    var accessToken = "G47mNzshIVeFAivt";
    var idToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL25hdGl2ZXNjcmlwdC5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDU5MjQ4NDk5NDA1OTAyNjQwMjUiLCJhdWQiOiJxNWF0UXppNkRnbVdCcEhXUkpiZDdNQk5hNWVMQlBScCIsImV4cCI6MTQ4NzgyODkwMCwiaWF0IjoxNDg3NzkyOTAwfQ.fn9Ndgheo6DajCB_1KWDNmB6CR6bCmhh2rJA3kA8w1Q";
    var refreshToken = "";
    var lock = helpers.getAuthLock();
    before(function () {
        var creds = {
            accessToken: accessToken,
            idToken: idToken,
            refreshToken: refreshToken,
        };
        appSetttings.setString(nativescript_auth0_1.Auth0Core._tokenKey, JSON.stringify(creds));
    });
    it("Can validate expiry", function () {
        var isExpired = lock.isTokenExpired();
        console.log("Is expired: " + isExpired);
        assert.isFalse(isExpired);
    });
    it("Can get user profile", function () {
        var user = lock.getUserInfo();
        console.dump(user);
        assert.isTrue(user);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLDRDQUE4QztBQUM5QyxtREFBb0Q7QUFDcEQseURBQTREO0FBSzVELFFBQVEsQ0FBQyxXQUFXLEVBQUU7SUFFcEIsSUFBSSxXQUFXLEdBQVcsa0JBQWtCLENBQUM7SUFDN0MsSUFBSSxPQUFPLEdBQVcseVNBQXlTLENBQUM7SUFDaFUsSUFBSSxZQUFZLEdBQVcsRUFBRSxDQUFDO0lBQzlCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUVqQyxNQUFNLENBQUM7UUFDSCxJQUFJLEtBQUssR0FBZ0I7WUFDUCxXQUFXLEVBQUUsV0FBVztZQUN4QixPQUFPLEVBQUUsT0FBTztZQUNoQixZQUFZLEVBQUUsWUFBWTtTQUM3QixDQUFDO1FBRWhCLFlBQVksQ0FBQyxTQUFTLENBQUMsOEJBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHFCQUFxQixFQUFFO1FBQ3RCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLHNCQUFzQixFQUFFO1FBQ3ZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUE7QUFFSixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL21vY2hhL2luZGV4LmQudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvY2hhaS9pbmRleC5kLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2phc21pbmUvaW5kZXguZC50c1wiIC8+XG5cbmRlY2xhcmUgdmFyIGFzc2VydDogQ2hhaS5Bc3NlcnRTdGF0aWM7IFxuaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi4vc2NyaXB0cy9oZWxwZXJzXCI7XG5pbXBvcnQgKiBhcyBhcHBTZXR0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCJcbmltcG9ydCB7IEF1dGgwQ29yZSwgQ3JlZGVudGlhbHMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWF1dGgwXCI7XG5pbXBvcnQgKiBhcyBqIGZyb20gXCJqYXNtaW5lLWNvcmVcIjtcblxuZGVjbGFyZSB2YXIgSlNPTjtcblxuZGVzY3JpYmUoJ0F1dGgwTG9jaycsICgpID0+IHtcbiAgLy9Qb3B1bGF0ZSB0aGVzZSB3aXRoIHRoZSBsYXRlc3QgdmFsaWQgZW50cmllc1xuICBsZXQgYWNjZXNzVG9rZW46IHN0cmluZyA9IFwiRzQ3bU56c2hJVmVGQWl2dFwiO1xuICBsZXQgaWRUb2tlbjogc3RyaW5nID0gXCJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpJVXpJMU5pSjkuZXlKcGMzTWlPaUpvZEhSd2N6b3ZMMjVoZEdsMlpYTmpjbWx3ZEM1aGRYUm9NQzVqYjIwdklpd2ljM1ZpSWpvaVoyOXZaMnhsTFc5aGRYUm9Nbnd4TURVNU1qUTRORGs1TkRBMU9UQXlOalF3TWpVaUxDSmhkV1FpT2lKeE5XRjBVWHBwTmtSbmJWZENjRWhYVWtwaVpEZE5RazVoTldWTVFsQlNjQ0lzSW1WNGNDSTZNVFE0TnpneU9Ea3dNQ3dpYVdGMElqb3hORGczTnpreU9UQXdmUS5mbjlOZGdoZW82RGFqQ0JfMUtXRE5tQjZDUjZiQ21oaDJySkEza0E4dzFRXCI7XG4gIGxldCByZWZyZXNoVG9rZW46IHN0cmluZyA9IFwiXCI7XG4gIGxldCBsb2NrID0gaGVscGVycy5nZXRBdXRoTG9jaygpO1xuICBcbiAgYmVmb3JlKGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IGNyZWRzOiBDcmVkZW50aWFscyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkVG9rZW46IGlkVG9rZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoVG9rZW46IHJlZnJlc2hUb2tlbixcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgYXBwU2V0dHRpbmdzLnNldFN0cmluZyhBdXRoMENvcmUuX3Rva2VuS2V5LCBKU09OLnN0cmluZ2lmeShjcmVkcykpO1xuICB9KTtcbiAgXG4gIGl0KFwiQ2FuIHZhbGlkYXRlIGV4cGlyeVwiLCAoKSA9PntcbiAgICAgIHZhciBpc0V4cGlyZWQgPSBsb2NrLmlzVG9rZW5FeHBpcmVkKCk7XG4gICAgICBjb25zb2xlLmxvZyhcIklzIGV4cGlyZWQ6IFwiICsgaXNFeHBpcmVkKTtcbiAgICAgIGFzc2VydC5pc0ZhbHNlKGlzRXhwaXJlZCk7XG4gIH0pXG5cbiAgaXQoXCJDYW4gZ2V0IHVzZXIgcHJvZmlsZVwiLCAoKSA9PntcbiAgICAgIHZhciB1c2VyID0gbG9jay5nZXRVc2VySW5mbygpO1xuICAgICAgY29uc29sZS5kdW1wKHVzZXIpO1xuICAgICAgYXNzZXJ0LmlzVHJ1ZSh1c2VyKTtcbiAgfSlcblxufSk7Il19