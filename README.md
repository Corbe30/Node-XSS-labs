# Node-XSS-labs
Most of the XSS labs online are based on PHP backend. So I developed three simple labs to demonstrate XSS vulnerabilities (DOM-based, reflected and stored) on a Node.js server. The labs are tested with XSStrike for vulnerabilities. The labs are build on Javascript, ejs, Node.js and Express.

### DOM-based XSS
**Payload** : ```alert(1)```
![]()

### Reflected XSS
**XSStrike Query** : python .\xsstrike.py -u "http://localhost:3000/?txt1=a"
**Generated Payload** : ```<HtmL%0aONpoiNtereNteR%0d=%0d[8].find(confirm)%0dx>```
![]()

### Stored XSS
**XSStrike Query** : python .\xsstrike.py -u "http://localhost:3000/?txt1=a&txt2=a" -f default
**Generated Payload** : ```'"</Script><Html Onmouseover=(confirm)()//<imG/sRc=l oNerrOr=(prompt)() x>```
![]()



# How to Run
1. Install dependencies with ```npm install```
2. Run server with ```node script.js```
