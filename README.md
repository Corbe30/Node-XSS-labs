# Node-XSS-labs
Most of the XSS labs online are based on PHP backend. So I developed three simple labs to demonstrate XSS vulnerabilities (DOM-based, reflected and stored) on a Node.js server. The labs are tested with XSStrike for vulnerabilities. The labs are build on Javascript, ejs, Node.js and Express.

### DOM-based XSS
[https://corbe30.github.io/Node-XSS-labs/dom_based_xss/]([https://corbe30.github.io/Node-XSS-labs/dom_based_xss)

**Payload** : ```alert(1)```
![](https://raw.githubusercontent.com/Corbe30/Node-XSS-labs/main/images/dom-based-xss.png) 

<br />

### Reflected XSS
[https://reflected-xss.onrender.com/](https://reflected-xss.onrender.com/)

**XSStrike Query** : ```python .\xsstrike.py -u "http://localhost:3000/?txt1=a"``` \
**Generated Payload** : ```<HtmL%0aONpoiNtereNteR%0d=%0d[8].find(confirm)%0dx>```
![](https://raw.githubusercontent.com/Corbe30/Node-XSS-labs/main/images/reflected-xss.png)
![](https://raw.githubusercontent.com/Corbe30/Node-XSS-labs/main/images/reflected-xss-xsstrike.png)

<br />

### Stored XSS
[https://stored-xss.onrender.com/](https://stored-xss.onrender.com/)

**XSStrike Query** : ```python .\xsstrike.py -u "http://localhost:3000/?txt1=a&txt2=a" -f default``` \
**Generated Payload** : ```'"</Script><Html Onmouseover=(confirm)()//<imG/sRc=l oNerrOr=(prompt)() x>```
![](https://raw.githubusercontent.com/Corbe30/Node-XSS-labs/main/images/stored-xss.png)
![](https://raw.githubusercontent.com/Corbe30/Node-XSS-labs/main/images/stored-xss-xsstrike.png)

<br />

# How to Run
1. Install dependencies with ```npm install```
2. Run server with ```node script.js```
