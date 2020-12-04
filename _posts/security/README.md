# Add security content

### 1 - Title

    * If a CVE issue has been open or is currently open, it must be the title of the subject.
    * If not, the title must be the type of vulnerability, ex : XSS, SQL, CSRF ect.follow by the number of the vulnerability target.
    ex : if it's the 2nd XSS vulnerability, the name must be : "XSS 2"

### 2 - Description

    It must have the following structure :

    * If it's an SQL injection :
    "A short description of the vulnerability" / "Located file where injection is made" / "Parameter of the SQL injection" / "Warning level : Critic / Medium / Low"

    * If it's a XSS vulnerability :
    "A short description of the vulnerability" / "Located file where XSS is present" / "Parameter of the XSS vulnerability" / "Warning level : Critic / Medium / Low"

    * If it's an other vulnerability :
    "A short description of the vulnerability" / "Location of the implicated file (if exist) " / "Potential parameter" /"Warning level : Critic / Medium / Low"

### 3 - The report

    It must follow this structure :

    * Presentation
    * Epxloit
    * Fix
    * Vulnerable versions
    * Fix versions
    * Sources

