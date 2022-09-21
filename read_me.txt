STEPS

I

1. create a project in firebase website
2. go to console ->project->project settings -> SDK setup and configuration
3. copy code - firebase config object

II

4. create firebase.js outside components/ root folder
5. import firebase from "firebase/app";    --this is from node_modules folder
	(get node_modules with npm install)
   import "firebase/auth";
6. paste the config code - export it as the auth object
	export const auth = firebase.initializeApp({<paste code>}).auth();

III

7. firebase website -> authentication -> enable google sign in - > add email
8. select fb sign in
9. go to developers.facebook.com -> my apps -> create app -> Consumer permission for fb sign in
10. setup fb login -> web -> 
11. products-> settings ->fill Void oAuth redirect URI -> copy from firebse paste
12. settings -> basic-> copy id and secret - >paste in firebase

IV

13. in login.js -- in components folder
	import "firebase/app";
	import {auth} from "../firebase";
14. in div sections
	onClick = {()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}.auth();

	do FacebookAuthProvider for fb div
15. save and reload - you should get Sign in with Google and fb feature
