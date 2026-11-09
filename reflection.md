## 1. What is the difference between res.send() and res.sendFile()? When would you use one over the other?
- res.send() is used to send text, messages, or data directly to the browser. res.sendFile() is used to send an actual file, such as an HTML page, to the browser. I would use res.send() for simple responses and res.sendFile() when serving HTML files.

## 2. Why use the path module? 
- It creates reliable file paths across operating systems and prevents errors caused by incorrect relative paths.

## 3.How to add a menu page?
- Create menu.html in the public folder, add an app.get('/menu') route, and use res.sendFile() to display the page.